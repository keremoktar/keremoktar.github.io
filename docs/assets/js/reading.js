/* Reading-page behaviour: section rail, scrollspy, and progress bar.
   Everything here is progressive enhancement — the page reads fine without it. */
(function () {
  'use strict';

  var article = document.getElementById('content');
  var toc = document.querySelector('.toc');
  var progress = document.querySelector('.read-progress__bar');
  if (!article) return;

  /* --- table of contents ------------------------------------------------- */

  var links = [];
  var targets = [];

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-') || 'section';
  }

  function buildToc() {
    if (!toc) return;

    var headings = [].slice.call(article.querySelectorAll('h2, h3'));
    if (headings.length < 2) return;

    // Indent relative to the shallowest heading on the page, so a post built
    // entirely out of h3s still reads as a flat list.
    var base = Math.min.apply(null, headings.map(function (h) {
      return parseInt(h.tagName.charAt(1), 10);
    }));

    var list = toc.querySelector('.toc__list');
    var seen = {};

    headings.forEach(function (heading) {
      var text = (heading.textContent || '').trim();
      if (!text) return;

      if (!heading.id) {
        var slug = slugify(text);
        seen[slug] = (seen[slug] || 0) + 1;
        heading.id = seen[slug] > 1 ? slug + '-' + seen[slug] : slug;
      }

      // "Section 0: Should you..." / "Part 2: ..." -> a numeral plus a label.
      var num = '';
      var label = text;
      var match = text.match(/^(?:section|part|chapter)\s+([\dIVXivx]+)\s*[:.–—-]?\s*(.*)$/i);
      if (match && match[2]) {
        num = match[1];
        label = match[2];
      }

      var item = document.createElement('li');
      item.className = 'toc__item';
      if (parseInt(heading.tagName.charAt(1), 10) > base) {
        item.className += ' toc__item--sub';
      }

      var link = document.createElement('a');
      link.className = 'toc__link';
      link.href = '#' + heading.id;

      if (num) {
        var numEl = document.createElement('span');
        numEl.className = 'toc__num';
        numEl.textContent = num;
        link.appendChild(numEl);
      }

      var labelEl = document.createElement('span');
      labelEl.textContent = label;
      link.appendChild(labelEl);

      item.appendChild(link);
      list.appendChild(item);

      links.push(link);
      targets.push(heading);
    });

    if (!links.length) return;

    toc.hidden = false;

    var toggle = toc.querySelector('.toc__toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = toc.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // On narrow screens the rail is a disclosure; picking an entry closes it.
    list.addEventListener('click', function (event) {
      if (!event.target.closest('.toc__link')) return;
      toc.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* --- opening initial ---------------------------------------------------- */

  // Artwork geometry per initial, read from each SVG's viewBox: the aspect
  // ratio, where the glyph's own baseline sits as a fraction of the artwork
  // height, and its left sidebearing as a fraction of the width. The letters
  // are not uniform -- K is 0.92 wide where W is 1.11 -- so a square box would
  // misalign the extremes by nearly a fifth of the cap's height.
  var INITIALS = {
    A: [1.0037, 0.9655, 0.0239], B: [1.0189, 0.9768, 0.064],
    C: [0.9788, 0.9852, 0.0124], D: [1.0022, 0.9868, 0.0203],
    E: [0.9447, 0.9868, 0.0142], F: [0.9837, 0.9873, 0.0134],
    G: [0.9781, 0.9873, 0.0123], H: [0.9912, 0.9873, 0.0123],
    I: [1.0219, 0.9871, 0.0446], J: [1.0219, 0.9871, 0.0446],
    K: [0.9247, 0.986, -0.0081], L: [1.0086, 0.987, 0.0124],
    M: [1.1039, 0.9661, 0.0595], N: [1.0132, 0.982, 0.0332],
    O: [1.0079, 0.9808, 0.0357], P: [0.9612, 0.9718, 0.019],
    Q: [1.0418, 0.9768, 0.0344], R: [0.9691, 0.9667, 0.0124],
    S: [0.9859, 0.9874, 0.0232], T: [0.964, 0.9826, 0.0133],
    U: [0.9659, 0.9789, -0.019], V: [0.9903, 0.9869, -0.0034],
    W: [1.1056, 0.985, 0.0125], X: [0.9626, 0.9876, 0.0126],
    Y: [0.9569, 0.9774, 0.0245], Z: [0.9432, 0.9792, 0.0166]
  };


  function applyDropCap() {
    // Masking is how the initials pick up a theme colour; without it the
    // letter would go missing from the text, so bail before touching the DOM.
    var maskable = window.CSS && CSS.supports &&
      (CSS.supports('mask-image', 'url("a.svg")') ||
       CSS.supports('-webkit-mask-image', 'url("a.svg")'));
    if (!maskable) return;

    var base = article.getAttribute('data-dropcaps');
    if (!base) return;

    var para = null;
    for (var i = 0; i < article.children.length; i++) {
      var el = article.children[i];
      if (el.tagName === 'P' && !el.classList.contains('post-meta')) {
        para = el;
        break;
      }
    }
    if (!para || para.classList.contains('has-dropcap')) return;

    var letter = '';
    var walker = document.createTreeWalker(para, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      var found = node.nodeValue.match(/\S/);
      if (!found) continue;
      letter = found[0];
      node.nodeValue = node.nodeValue.slice(0, found.index) +
                       node.nodeValue.slice(found.index + 1);
      break;
    }

    if (!/^[A-Za-z]$/.test(letter)) return;
    letter = letter.toUpperCase();

    var art = INITIALS[letter];
    if (!art) return;

    var glyph = document.createElement('span');
    glyph.className = 'dropcap';
    glyph.setAttribute('aria-hidden', 'true');
    glyph.style.setProperty('--dropcap-glyph', 'url("' + base + 'yinit-' + letter + '.svg")');
    glyph.style.setProperty('--dropcap-aspect', art[0]);
    glyph.style.setProperty('--dropcap-baseline', art[1]);
    glyph.style.setProperty('--dropcap-lsb', art[2]);

    // The glyph is decorative; keep the letter itself in the text for readers.
    var spoken = document.createElement('span');
    spoken.className = 'sr-only';
    spoken.textContent = letter;

    para.insertBefore(spoken, para.firstChild);
    para.insertBefore(glyph, para.firstChild);
    para.classList.add('has-dropcap');

    fitInitial(para, glyph);
    // Line breaks move once the webfont arrives, so decide again then.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { fitInitial(para, glyph); });
    }
  }

  // A dropped initial only works if the paragraph fills the lines it spans.
  // Where the opening is shorter than that -- a salutation, a one-line
  // epigraph -- typography raises the initial onto the first baseline instead,
  // with no text wrapping beside it.
  //
  // The paragraph contains its own float (flex items establish an independent
  // formatting context), so its height is the greater of the text and the
  // initial. If the text does not outrun the initial, it has not filled it.
  function fitInitial(para, glyph) {
    glyph.classList.remove('dropcap--raised');
    var box = para.getBoundingClientRect();
    var cap = glyph.getBoundingClientRect();
    if (box.height - (cap.bottom - box.top) <= 1) {
      glyph.classList.add('dropcap--raised');
    }
  }

  /* --- image credits ------------------------------------------------------ */

  // Sources live in _data/image_credits.yml, keyed by file name, so the essays
  // stay free of attribution markup. The credit is attached both as a caption
  // and as the image's title, and the caption stays in the DOM even while it
  // is invisible, so screen readers and crawlers always see the attribution.
  function addCredits() {
    var store = document.getElementById('image-credits');
    if (!store) return;

    var credits;
    try { credits = JSON.parse(store.textContent); } catch (e) { return; }

    var images = article.querySelectorAll('img[src]');
    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      var name = img.getAttribute('data-credit') ||
                 img.getAttribute('src').split('?')[0].split('/').pop();
      var credit = credits[name];
      if (!credit || !credit.source) continue;

      img.setAttribute('title', 'Source: ' + credit.source);

      var figure = document.createElement('figure');
      figure.className = 'figure';

      // Kramdown wraps a lone image in a paragraph; replace it rather than
      // nesting a figure inside a <p>, which is not valid HTML.
      var host = img.parentNode;
      if (host.tagName === 'P' && host.children.length === 1 &&
          host.textContent.trim() === '') {
        host.parentNode.replaceChild(figure, host);
      } else {
        host.insertBefore(figure, img);
      }
      figure.appendChild(img);

      var caption = document.createElement('figcaption');
      caption.className = 'figure__credit';
      caption.appendChild(document.createTextNode('Source: '));
      if (credit.url) {
        var link = document.createElement('a');
        link.href = credit.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = credit.source;
        caption.appendChild(link);
      } else {
        caption.appendChild(document.createTextNode(credit.source));
      }
      figure.appendChild(caption);
    }
  }

  /* --- scrollspy + progress ---------------------------------------------- */

  var current = -1;

  function update() {
    if (progress) {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform = 'scaleX(' + Math.min(Math.max(ratio, 0), 1) + ')';
    }

    if (!targets.length) return;

    // The active section is the last heading whose top has passed the trigger
    // line; at the very bottom of the page, always show the final one.
    var active = 0;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      active = targets.length - 1;
    } else {
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].getBoundingClientRect().top <= 120) active = i;
        else break;
      }
    }

    if (active === current) return;
    if (current > -1) links[current].removeAttribute('aria-current');
    links[active].setAttribute('aria-current', 'true');
    current = active;
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }

  buildToc();
  applyDropCap();
  addCredits();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
})();

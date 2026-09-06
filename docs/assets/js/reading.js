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

    // An essay may already open with a hand-placed initial; reuse it so every
    // post gets the same treatment rather than two competing ones.
    var manual = para.querySelector('img[src*="yinit-"]');
    if (manual && manual === para.firstElementChild) {
      letter = (manual.getAttribute('alt') || '').charAt(0);
      manual.parentNode.removeChild(manual);
    } else {
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
    }

    if (!/^[A-Za-z]$/.test(letter)) return;
    letter = letter.toUpperCase();

    var glyph = document.createElement('span');
    glyph.className = 'dropcap';
    glyph.setAttribute('aria-hidden', 'true');
    glyph.style.setProperty('--dropcap-glyph', 'url("' + base + 'yinit-' + letter + '.svg")');

    // The glyph is decorative; keep the letter itself in the text for readers.
    var spoken = document.createElement('span');
    spoken.className = 'sr-only';
    spoken.textContent = letter;

    para.insertBefore(spoken, para.firstChild);
    para.insertBefore(glyph, para.firstChild);
    para.classList.add('has-dropcap');
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
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
})();

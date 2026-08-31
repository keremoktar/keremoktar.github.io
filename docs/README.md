---
layout: default
title: Kerem Oktar — Social Intelligence in Minds and Machines
description: Postdoctoral researcher at Meta FAIR. Computational models of social intelligence, turned into evaluations and post-training methods for language models. PhD, Princeton.
permalink: /
redirect_from:
  - /publications.html
  - /collaborators.html
---

# Social Intelligence in Minds and Machines

<p class="research-intro">I build computational models of how intelligent systems form beliefs, make decisions, and navigate social interactions, then use those insights to evaluate and improve AI.</p>

<p class="research-direction">At Meta FAIR, I am extending this work from evaluation toward post-training and multi-agent systems.</p>

## Selected Work {#selected-work}

<article class="selected-work">
  <div class="selected-work__copy">
    <strong><a href="https://ai.meta.com/static-resource/muse-spark-safety-and-preparedness-report/">Muse Spark Safety &amp; Preparedness Report</a></strong>
    <span class="work-meta">Meta · 2026 · Sycophancy evaluation contributor</span>
    <p>The report evaluates Muse Spark across catastrophic-risk and broader behavioral dimensions; I contributed the sycophancy benchmark, which measures both inappropriate agreement and inappropriate pushback.</p>
    <a class="work-link" href="https://ai.meta.com/static-resource/muse-spark-safety-and-preparedness-report/">Report</a> · <a class="work-link" href="https://arxiv.org/abs/2606.12429">arXiv</a>
  </div>
  <a class="selected-work__figure selected-work__figure--bounded" href="https://ai.meta.com/static-resource/muse-spark-safety-and-preparedness-report/" aria-label="Open the Muse Spark Safety and Preparedness Report">
    <img class="selected-work__image" src="/assets/images/figures/muse-spark-sycophancy.png" width="1120" height="1170" loading="lazy" alt="Sycophancy rate plotted against excessive anti-sycophancy rate for Muse Spark and other frontier models.">
  </a>
</article>

<article class="selected-work">
  <div class="selected-work__copy">
    <strong><a href="/assets/papers/Oktar_LLM_Vigilance.pdf">Are Large Language Models Sensitive to the Motives Behind Communication?</a></strong>
    <span class="work-meta">NeurIPS 2025 · Equal contribution · Wu, Liu, Oktar, Sumers &amp; Griffiths</span>
    <p>We use a Bayesian model of social learning as a normative benchmark for LLM vigilance: model behavior tracks it in controlled tasks, while intention-and-incentive steering improves the match in realistic sponsored content.</p>
    <a class="work-link" href="/assets/papers/Oktar_LLM_Vigilance.pdf">Paper</a>
  </div>
  <a class="selected-work__figure" href="/assets/papers/Oktar_LLM_Vigilance.pdf" aria-label="Open the NeurIPS vigilance paper">
    <img class="selected-work__image" src="/assets/images/figures/neurips-vigilance.png" width="1120" height="715" loading="lazy" alt="Figure 1 from the vigilance paper: three experimental paradigms testing how language models respond to communicators' motives and incentives.">
  </a>
</article>

<article class="selected-work">
  <div class="selected-work__copy">
    <strong><a href="/assets/papers/Oktar_Beliefs_Persist.pdf">How Beliefs Persist Amid Controversy: The Paths to Persistence Model</a></strong>
    <span class="work-meta">Psychological Review · 2025 · Oktar &amp; Lombrozo</span>
    <p>We unite theories across the social sciences into four concrete reasons people resist disagreement—distrusting dissenters, treating issues as subjective, anticipating costs of changing, or lacking the cognitive resources to update—and test them across five preregistered studies.</p>
    <a class="work-link" href="/assets/papers/Oktar_Beliefs_Persist.pdf">Paper</a>
  </div>
  <a class="selected-work__figure" href="/assets/papers/Oktar_Beliefs_Persist.pdf" aria-label="Open the Paths to Persistence paper">
    <img class="selected-work__image" src="/assets/images/figures/paths-to-persistence.png" width="1110" height="760" loading="lazy" alt="Figure 10 from Paths to Persistence: nested model comparisons showing the predictive value of the model's paths and interactions.">
  </a>
</article>

Full list: [CV](/assets/Academic_CV.pdf) · [Google Scholar](https://scholar.google.com/citations?user=wBVlDlYAAAAJ&hl=en).

## Recent Research {#recent-research}

<div class="recent-research-list">
<details class="recent-item">
<summary>
  <span class="recent-item__title">HorizonBench</span>
  <span class="recent-item__question">Can models track a user as their preferences change over months?</span>
  <span class="recent-item__action"><span class="recent-item__open-label">Details</span><span class="recent-item__close-label">Close</span></span>
</summary>
<div class="benchmark-work recent-item__body">
  <div class="benchmark-work__copy">
    <span class="work-meta">Preprint · 2026 · Li, Paranjape, Oktar et al.</span>
    <p>HorizonBench generates six-month conversations from structured mental-state graphs, with ground-truth provenance for every preference change; across 25 frontier models, most score at or below chance, with updated-state tracking the central bottleneck. <a class="work-link" href="https://arxiv.org/abs/2604.17283">Paper</a> · <a class="work-link" href="https://github.com/stellalisy/HorizonBench">Code</a> · <a class="work-link" href="https://huggingface.co/datasets/stellalisy/HorizonBench">Data</a></p>
  </div>
  <a class="benchmark-work__figure" href="https://arxiv.org/abs/2604.17283" aria-label="Open the HorizonBench paper">
    <img class="benchmark-work__image" src="/assets/images/figures/horizonbench.png" width="1310" height="440" loading="lazy" alt="Figure 1 from HorizonBench: the pipeline for constructing conversations with evolving user preferences and counterfactual responses.">
  </a>
</div>
</details>

<details class="recent-item">
<summary>
  <span class="recent-item__title">Brittlebench</span>
  <span class="recent-item__question">Do benchmark conclusions survive harmless changes in wording?</span>
  <span class="recent-item__action"><span class="recent-item__open-label">Details</span><span class="recent-item__close-label">Close</span></span>
</summary>
<div class="benchmark-work recent-item__body">
  <div class="benchmark-work__copy">
    <span class="work-meta">Preprint · 2026 · Romanou, Ibrahim, Ross, Oktar et al.</span>
    <p>Brittlebench introduces a variance-decomposition framework that separates task difficulty from prompt sensitivity; semantics-preserving perturbations change model rankings in 63% of cases and can explain up to half of performance variance. <a class="work-link" href="https://arxiv.org/abs/2603.13285">Paper</a></p>
  </div>
  <a class="benchmark-work__figure" href="https://arxiv.org/abs/2603.13285" aria-label="Open the Brittlebench paper">
    <img class="benchmark-work__image" src="/assets/images/figures/brittlebench.png" width="1500" height="760" loading="lazy" alt="Figure 1 from Brittlebench: the meta-evaluation framework and performance variability under prompt perturbations.">
  </a>
</div>
</details>

<details class="recent-item">
<summary>
  <span class="recent-item__title">Intuitive Theories of Truth</span>
  <span class="recent-item__question">How do people decide what can be true, is true, and should be asserted?</span>
  <span class="recent-item__action"><span class="recent-item__open-label">Details</span><span class="recent-item__close-label">Close</span></span>
</summary>
<div class="benchmark-work recent-item__body">
  <div class="benchmark-work__copy">
    <span class="work-meta">Trends in Cognitive Sciences · In press · Equal contribution · Oktar, Handley-Miner et al.</span>
    <p>Intuitive Theories of Truth organizes everyday truth judgments around aptness, judgment, and assertion, explaining how people can disagree about truth even when they share the same evidence. <a class="work-link" href="/assets/papers/Oktar_Intuitive_Truth.pdf">Paper</a></p>
  </div>
  <a class="benchmark-work__figure" href="/assets/papers/Oktar_Intuitive_Truth.pdf" aria-label="Open the Intuitive Theories of Truth paper">
    <img class="benchmark-work__image" src="/assets/images/figures/intuitive-theories-truth.png" width="1430" height="1000" loading="lazy" alt="Figure 1 from Intuitive Theories of Truth: two people apply different standards of aptness, judgment, and assertion to the same statement.">
  </a>
</div>
</details>
</div>

## About {#about}

I was born and raised in Istanbul (🧿); studied economics and cognitive science at Pomona College, CA (☀️); completed my PhD in Psychology at Princeton, NJ (❄️); and now research social cognition in AI systems at Meta FAIR in Seattle, WA (☔).

My research won CogSci's Marr Prize and SPP's Best Poster Prize, and Princeton's Center for Human Values supported my PhD through a Rockefeller Graduate Prize Fellowship. Beyond research, I co-designed and co-taught *Psychology of Justice* at Edna Mahan, a women's prison in New Jersey, in 2024. I have also found and tamed the [Oscar Mayer Wienermobile](/assets/images/wienermobile.jpeg).

## Contact {#contact}

Feel free to contact me at oktar[dot]research[at]gmail.com with regards to research / collaboration / mentorship /... - I love talking about science.

Here is an [anonymous feedback form](https://docs.google.com/forms/d/1t2G5ZI214eO0Qs7lT00XGp47SAOlQRsedRkwc87SUnY).

## Writing {#writing}

<div class="writing-list">
  <p><a href="/blog_posts.html">On the Reasonable Effectiveness of Judgment</a>: Why human judgment matters to mathematics and model training.</p>
  <p><a href="/intuition.html">Why False Premises Make Conditionals True</a>: An intuition for material implication.</p>
  <p class="writing-list__more">More writing: <a href="/stats.html">Power analysis</a> · <a href="/advice.html">Grad school application guide</a></p>
</div>

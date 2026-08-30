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

Social intelligence — our ability to understand, learn from, and collaborate with one another — is a secret to our success as a species. I build computational models of social cognition and use them to evaluate language models.

**Understanding Human Social Intelligence.** The Paths to Persistence Model explains how four interacting mechanisms sustain beliefs amid controversy ([Psychological Review, 2025](/assets/papers/Oktar_Beliefs_Persist.pdf)).

**Engineering Artificial Social Intelligence.** I translate models of social inference into LLM evaluations and interventions; making intentions and incentives salient improves vigilance in sponsored-content settings ([NeurIPS, 2025](/assets/papers/Oktar_LLM_Vigilance.pdf)).

<p class="current-focus"><strong>Current focus.</strong> Evaluations of vigilance, sycophancy, prompt robustness, and long-horizon preference tracking, with extensions into post-training and multi-agent systems.</p>

## Selected Work

<article class="selected-work">
  <div class="selected-work__copy">
    <span class="work-label">LLM EVALUATION · NEURIPS 2025 · EQUAL CONTRIBUTION</span>
    <strong><a href="/assets/papers/Oktar_LLM_Vigilance.pdf">Are Large Language Models Sensitive to the Motives Behind Communication?</a></strong>
    <span class="work-meta">Wu, Liu, Oktar, Sumers &amp; Griffiths</span>
    <p><strong>Contribution:</strong> Equal contribution to the study.</p>
    <p><strong>Result:</strong> In controlled settings, LLMs discount motivated testimony in human-like ways; in sponsored content, making intentions and incentives salient substantially improves their vigilance.</p>
    <a class="work-link" href="/assets/papers/Oktar_LLM_Vigilance.pdf">Paper</a>
  </div>
  <a class="selected-work__figure" href="/assets/papers/Oktar_LLM_Vigilance.pdf" aria-label="Open the NeurIPS vigilance paper">
    <img class="selected-work__image selected-work__image--crop-left" src="/assets/images/figures/neurips-vigilance.png" width="900" height="253" loading="lazy" alt="Bar chart comparing model belief shifts after advice versus spied information.">
  </a>
</article>

<article class="selected-work">
  <div class="selected-work__copy">
    <span class="work-label">COMPUTATIONAL THEORY · PSYCHOLOGICAL REVIEW 2025</span>
    <strong><a href="/assets/papers/Oktar_Beliefs_Persist.pdf">How Beliefs Persist Amid Controversy: The Paths to Persistence Model</a></strong>
    <span class="work-meta">Oktar &amp; Lombrozo</span>
    <p><strong>Contribution:</strong> Co-author of the Paths to Persistence Model.</p>
    <p><strong>Result:</strong> The model explains belief persistence through four interacting paths—informational, ontological, functional, and computational—and predicts when beliefs should change.</p>
    <a class="work-link" href="/assets/papers/Oktar_Beliefs_Persist.pdf">Paper</a>
  </div>
  <a class="selected-work__figure" href="/assets/papers/Oktar_Beliefs_Persist.pdf" aria-label="Open the Paths to Persistence paper">
    <img class="selected-work__image" src="/assets/images/figures/paths-to-persistence.png" width="900" height="534" loading="lazy" alt="Diagram of four responses to disagreement: conciliation, suspension, persistence, and polarization.">
  </a>
</article>

<article class="selected-work">
  <div class="selected-work__copy">
    <span class="work-label">BEHAVIORAL EVALUATION · PREPRINT 2025</span>
    <strong><a href="https://arxiv.org/abs/2505.09662">When Large Language Models Are More Persuasive Than Incentivized Humans, and Why</a></strong>
    <span class="work-meta">Liu, Salvi, Schoenegger et al. (with Oktar)</span>
    <p><strong>Contribution:</strong> Co-author of the behavioral comparison between LLM and incentivized-human persuasion.</p>
    <p><strong>Result:</strong> Claude 3.5 Sonnet was more persuasive than incentivized humans in truthful and deceptive contexts; DeepSeek v3 exceeded humans only in the deceptive condition.</p>
    <a class="work-link" href="https://arxiv.org/abs/2505.09662">Paper</a>
  </div>
  <a class="selected-work__figure" href="https://arxiv.org/abs/2505.09662" aria-label="Open the LLM persuasion paper">
    <img class="selected-work__image" src="/assets/images/figures/llm-persuasion.png" width="1020" height="540" loading="lazy" alt="Bar chart showing higher compliance with Claude 3.5 Sonnet than human persuaders overall and in truthful and deceptive conditions.">
  </a>
</article>

Full list: [CV](/assets/Academic_CV.pdf) · [Google Scholar](https://scholar.google.com/citations?user=wBVlDlYAAAAJ&hl=en).

## Evaluations & Benchmarks

<article class="benchmark-work">
  <span class="work-label">SAFETY EVALUATION · META 2026</span>
  <strong><a href="https://ai.meta.com/static-resource/muse-spark-safety-and-preparedness-report/">Muse Spark Safety &amp; Preparedness Report</a></strong>
  <span class="work-meta">Oktar: sycophancy evaluation contributor</span>
  <p><strong>Contribution:</strong> Contributed to an internal benchmark evaluating whether models inappropriately agree with users or fail to correct them.</p>
  <a class="work-link" href="https://ai.meta.com/static-resource/muse-spark-safety-and-preparedness-report/">Report</a> · <a class="work-link" href="https://arxiv.org/abs/2606.12429">arXiv</a>
</article>

<article class="benchmark-work">
  <span class="work-label">BENCHMARK · LONG-HORIZON PERSONALIZATION · 2026</span>
  <strong><a href="https://arxiv.org/abs/2604.17283">HorizonBench: Long-Horizon Personalization with Evolving Preferences</a></strong>
  <span class="work-meta">Li, Paranjape, Oktar et al.</span>
  <p><strong>Result:</strong> Across 25 frontier models, most scored at or below the 20% chance baseline when tracking evolving preferences across six-month conversations averaging about 163,000 tokens.</p>
  <a class="work-link" href="https://arxiv.org/abs/2604.17283">Paper</a> · <a class="work-link" href="https://github.com/stellalisy/HorizonBench">Code</a> · <a class="work-link" href="https://huggingface.co/datasets/stellalisy/HorizonBench">Data</a>
</article>

<article class="benchmark-work">
  <span class="work-label">MODEL AUDIT · PROMPT ROBUSTNESS · 2026</span>
  <strong><a href="https://arxiv.org/abs/2603.13285">Brittlebench: Quantifying LLM Robustness via Prompt Sensitivity</a></strong>
  <span class="work-meta">Romanou, Ibrahim, Ross, Oktar et al.</span>
  <p><strong>Result:</strong> A single semantics-preserving prompt perturbation changed model rankings in 63% of cases, showing that benchmark conclusions can hinge on wording.</p>
  <a class="work-link" href="https://arxiv.org/abs/2603.13285">Paper</a>
</article>

## About

I was born and raised in Istanbul (🧿); studied economics and cognitive science at Pomona College, CA (☀️); completed my PhD in Psychology at Princeton, NJ (❄️); and now research social cognition in AI systems at Meta FAIR in Seattle, WA (☔).

In 2024, I co-designed and co-taught Psychology of Justice at Edna Mahan, a women's prison in New Jersey, and I mentor prospective PhD applicants through [Project SHORT](https://www.project-short.com/).

Invited talks: Harvard, Stanford, Berkeley, Max Planck Institute, MIT Sloan, UW CSE.

## Contact

Feel free to contact me at oktar[dot]research[at]gmail.com with regards to research / collaboration / mentorship /... - I love talking about science.

<small>[Anonymous feedback form](https://docs.google.com/forms/d/1t2G5ZI214eO0Qs7lT00XGp47SAOlQRsedRkwc87SUnY).</small>

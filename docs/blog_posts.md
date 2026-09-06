---
layout: post
title: Kerem Oktar — On the Reasonable Effectiveness of Judgment
description: An essay on how subjective judgment helps explain the practical effectiveness of mathematics and language models.
updated: August 2026
---

# On the Reasonable Effectiveness of Judgment

Dear reader captivated by specks of dust, shimmering in a sunbeam -

Listen, I know you’ve got a lot on your plate. But Eugene Wigner is here, and he has a story he is just *dying* to tell you:

> THERE IS A story about two friends, who were classmates in high school, talking about their jobs. One of them became a statistician and was working on population trends. He showed a reprint to his former classmate. The reprint started, as usual, with the Gaussian distribution and the statistician explained to his former classmate the meaning of the symbols for the actual population, for the average population, and so on. His classmate was a bit incredulous and was not quite sure whether the statistician was pulling his leg. "How can you know that?" was his query. "And what is this symbol here?" "Oh," said the statistician, "this is pi." "What is that?" "The ratio of the circumference of the circle to its diameter." "Well, now you are pushing your joke too far," said the classmate, "surely the population has nothing to do with the circumference of the circle!" (1960)

If that piqued your interest, he's got a few examples from physics he'd love for you to [hear](https://web.archive.org/web/20210212111540/http://www.dartmouth.edu/~matc/MathDrama/reading/Wigner.html). In a nutshell, properties and objects from pure math that no one intended nor expected to be useful cropped up in a bunch of sophisticated physics, and this has gotten Mr. Wigner very excited. He wants to conclude, in hushed tones, with this:

> The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift which we neither understand nor deserve.

I think you certainly deserve some sweet cosmological isomorphism! But don't blame Eugene; he is just very puzzled about why fancy math ends up doing anything useful. I happen to be puzzled by an intimately related question. Why do language models (GPT etc.) end up doing anything useful?

Eugene's puzzle and mine secretly have a lot in common: we both have two processes (pure mathematics, language modeling) pursuing *non-practical ends* (exploring abstract objects, predicting word sequences) through *non-practical means* (manipulating arbitrary symbols, computing massive matrices) with *extremely practical* results (undergirding modern science, taking [your job](https://www.cnbc.com/2019/02/26/sam-altman-on-ai-jobs-may-go-away-but-massive-abundance-likely.html)). How can this be?

The answer I want to explore with you is *judgment*.

## Part 1: Math and Intersubjectivity

As I'm writing these words, and as you are reading them, an intricate social calculation is taking place in our minds. Conversations, Grice noted, are "cooperative efforts; and each participant recognizes in them, to some extent, a *common purpose* or set of purposes." A good speaker respects this [cooperative principle](https://en.wikipedia.org/wiki/Cooperative_principle) by crafting their message to advance these shared purposes. I try to be good, so I am imagining you, dear reader; I want to advance my purpose here, to entertain you, and I want you to know that I have pained over whether to say *intersubjectivity* at all, because it is big-and-boring, but oh-so-perfect for describing how this all works. To communicate, we have to imagine how others perceive our world, our shared context, and our common purpose, then we choose useful messages. For instance, I have to recognize that this self-referential description of intersubjectivity has gone on too long.

Eugene's puzzle partly arises from an illusion of objectivity that obscures the fact that mathematics is an exercise in intersubjective judgment.

It is easy to understand the origins of this illusion. Math, we are told, is derivation. You could start with the axioms, and grind the gears of logic until you reach every proof ever. As objective as it gets---so much so that they called it *Pure Mathematics* (pure of human or worldly relevance, presumably). Even a computer could do it. In fact, arguably the first AI program, the *Logic Theorist*, was all about generating arbitrary proofs from starting axioms, and formulated math as just this kind of mechanical search problem:

<img src="/assets/images/posts/logic-theorist.png" alt="logic theorist image" width="300">

And this is all correct; the machinery of mathematics is indeed objective. Cast as an arbitrary exploration of symbolic systems, it is puzzling that it does anything useful at all.

But wait, here is Bertrand Russell, who is ready to dispel our illusions of objectivity with some honey-soaked erotica:

> Mathematics, rightly viewed, possesses not only truth, but supreme beauty: a beauty cold and austere, like that of sculpture, without appeal to any part of our weaker nature, without the gorgeous trappings of painting or music, yet sublimely pure, and capable of a stern perfection such as only the greatest art can show. The true spirit of delight, the exaltation, the sense of being more than Man, which is the touchstone of the highest excellence, is to be found in mathematics as surely as in poetry.

So much for the objective machine! Math, Russell reminds us, is a communicative act, pursued with the shared purpose of answering intersubjectively interesting questions, which turn out to have intersubjectively beautiful answers. Pure math, then, is not pure at all, but heavily grounded in intersubjective understanding. As Polanyi wrote:

> "All these difficulties are but consequences of our refusal to see that mathematics cannot be defined without acknowledging its most obvious feature: namely, that it is interesting."

This subjectivity is paradoxically what makes math useful: there are infinite arbitrary formal systems we could write that aren't very interesting, and they would be useless for precisely the same reasons that they would fail to rouse interest. Perhaps they are not productive, because they do not have enough expressive capacity. Consider the formal system containing only 1 and 2, and the concatenation operation. I can write 1221212122112 all day long and get absolutely nowhere. Or they have too much expressive capacity, and they let all sorts of nonsense pervade. Consider the 'mega-fuzzy' operator, :P, which just means that there are two objects on the sides of an equation (compare this to the equality operator, =, which checks whether the two objects evaluate to the same value). So 3 :P 5 is totally kosher. As is 4324 :P 0, and even, "Kerem" :P "Kebab". Mega-fuzzy is sadly uninteresting, because it lets everything through. Mathematicians' sense of beauty and interestingness capture many properties beyond expressive capacity, and the point is that these properties are what allow Pure Math to transcend arbitrariness.

More accurately, it is the combination of **objective machinery with subjective judgment** that makes math practically useful (which is reminiscent of a compelling account of what makes life [meaningful](https://www.amazon.com/dp/0691154503?lv=shuf&channelId=500&plpRedirect=mhFallback)).

We will get to some important questions around what this argument does and does not do in answering Mr. Wigner's puzzle, later. Now, let's remember my puzzle.

## Part 2: GPT and The Shoggoth

How can large language models be useful?

Listen. I know that in 2026, this question seems off. The entire stock market is on an over-leveraged frenzy drooling over any company willing to say AI and have their stock go to the moon (my favorite example: Allbirds, the sustainable sneaker company, pivoting entirely to become an AI [infrastructure provider](https://www.nytimes.com/2026/04/15/us/allbirds-shoes-ai-pivot.html) -- yes, seriously). But this didn't use to be the case.

Many smart people didn't expect these models to be useful at all: LLMs were (/are?) downplayed as stochastic parrots, blurry jpegs, silicon crowds, and other creatively [denigrating metaphors](https://seantrott.substack.com/p/what-we-talk-about-when-we-talk-about). Beyond playground insults, many scholars genuinely believed that LLMs would not amount to much beyond being quirky D&D GM-simulators.

Consider this. In 2022, a prominent NY prof claimed that AI will not be able to do the following by 2029:

- watch a movie and tell you accurately what is going on,
- read a novel and reliably answer questions about plot, character, etc.,
- work as a competent cook in an arbitrary kitchen,
- reliably construct code (> 10,000 lines) from natural language specification,
- take proofs in language and convert them into a verifiable symbolic form.

It's easy to make arbitrary predictions, but Gary Marcus tried to put his money where his mouth is, and bet $100,000 in an (unreciprocated) wager against Elon. At Princeton, I would regularly discuss AI progress with other postdocs and profs, with milquetoast skepticism as the median response, and many talks from famous scholars roughly went:

a screenshot of a stupid GPT mistake; a psychological claim about why humans can solve the task; a claim about why GPT cannot have this capacity; and a proposal for the kind of architecture that could

And these screenshots of stupid mistakes were pretty compelling; it is easy to forget how bad the earliest models were. You can chat with GPT-1 [[here]](https://huggingface.co/spaces/mkmenta/try-gpt-1-and-gpt-2) to remember. As an example, I gave it the prompt:

*"Hi. I am GPT-1. This is an essay exploring why people did not expect me to amount to much. All I do is predict the next token --"*

<img src = "/assets/images/posts/gpt1-essay.png" width = 300>

It starts off strong, yet it doesn't look like it's going to be useful enough to replace you, dear white collar. But academics had a more subtle reason for thinking that LLMs wouldn't amount to much, a reason that led to them being puzzled by the remarkable success of language models.

This was an illusion of objectivity that obscures the fact that language modeling is an exercise in intersubjective judgment.

It is easy to understand the origins of this illusion. Language modeling, we are told, is prediction. You start with a massive bag of words, and grind the gears of correlation until you extract every last drop of semantic association. As objective as it gets---so much so that they called it *Language Modeling* (modeling all of Language, presumably). Even a computer could do it... In fact, the first work on modeling word sequences by Shannon in [1948](http://medientheorie.com/doc/shannon_redundancy.pdf) used exactly this method:

<img src = "/assets/images/posts/gpt-next-token.png" width = 400>

Where the rows above bake increasing levels of dependency into the modeling: the first is a random sample of letters; in the second, you sample letters based on the probability with which they follow each other in English (what's called a bigram model); in the third, you start modeling the likelihood of letters given two preceding letters (a trigram); in the fourth, you introduce the likelihood of words following one another; and so on. LLMs are trained on more language --- sometimes we are even told, "on all of the internet."

*All of the internet.* Objectivity at scale; peace in our time. In case you forgot what a cesspool the internet is, I urge you to browse the [Common Crawl](https://huggingface.co/datasets/agentlans/common-crawl-sample), the mirror-of-the-internet dataset used in the early stages of LLM training. Here are a few random samples of text:

A delectable sample from `https://goodenglishessaywriting.com/good-essay-writing-service.html`, captured in 2021:
> Today, saws who buy good Essay Writing Service essays from us can relax, knowing that the interests are safe. Follow actions to get a paper: regardless of whether you possess a ready essay but want it to constitute high quality, there usually be proofreaders and editors for you to fix all of the mistakes. All of one's requirements tend to be carefully followed,

Another beautiful piece from `http://www.ladylib.net/fb/php/dyevis_myeggi_bezumnaya_polnoch/dyevis_myeggi_bezumnaya_polnoch_GG_23.php`, crawled in 2017:
> Гости, жившие не в Чарлстоне, покинули изысканный свадебный прием в доме Батлеров довольно рано, стремясь благополучно добраться до дома в такую непогоду. Немногие успели вовремя вылететь в Сан-Франциско, Атланту и Новый Орлеан. А те, кто остался – друзья и родственники, жившие на Айл-оф-

And finally, won't you try on this gorgeous specimen from `http://sirends2-wiki.memo-memo.com/?cmd=backup&action= nowdiff&page=%A5%B3 %A5%E1%A 5%F3%A5%C8%2F%C9%F7%CD%E8%B5%D F%BD%F5&age=96`, dated 2021 (a fantastic year for sirends2-wiki, of course):
> -Similarly http://www.garciniacambogia9.com/garcinia-cambogia-and-colon-cleanse-reviews top garcinia cambogia and colon cleanse reviews It is used in cosmetics industryMajorly it it is easy on the internet http://www.garciniacambogia9.com/truth-about-garcinia-cambogia best truth about garcinia cambogia Vitamin C - Known to http://www.garciniacambogia9.com/labrada-garcinia-cambogia best labrada garcinia cambogia

And what we were told about language models is all correct; the machinery of language modeling is indeed objective. Cast as an arbitrary prediction of words on the internet, it is puzzling that it does anything useful at all. Human judgment enters model training at two especially important stages: pre-training and post-training.

**Pre-training** supplies the apparently objective part of the pipeline: predicting the next token. But a model does not predict tokens from nowhere, or even from an undifferentiated internet. It learns from a data mixture selected, filtered, weighted, and cleaned through human-designed pipelines. Those decisions encode judgments about quality, relevance, risk, and usefulness.

This point is related to, but distinct from, Sutton's [Bitter Lesson](https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf). Sutton's claim is that general methods that scale with computation have repeatedly outperformed attempts to encode domain knowledge by hand. My claim is that even scalable methods depend on choices about their data, objectives, and evaluation.

**Post-training** makes the role of judgment more explicit. Instead of merely learning what text is likely, the model is optimized to produce responses that people judge to be helpful, correct, safe, or otherwise desirable. Fine-tuning and reinforcement learning convert those judgments into training signals.

Post-training was once a comparatively small part of the training budget, but its role is growing. For at least some recent models, it is no longer a small tail: Cursor reports that [Composer 1.5](https://cursor.com/blog/composer-1-5) used more compute in post-training than in pre-training. That is one model, not an industry-wide estimate, but it illustrates the direction of travel.

Some post-training methods directly optimize against human judgments. In RLHF, human raters or annotators compare possible responses, and a model learns to predict and optimize those preferences. The resulting assistant is therefore shaped not only by the text people have produced, but by explicit judgments about what it should produce.

<img src= "/assets/images/posts/shoggoth-rlhf.jpg" width = "400">

This is how you get language models to stop repeating the toxic, hateful, over-sexualized morass of the internet and get it to act like a helpful assistant. Someone, of course, has to read through this [toxic morass](https://time.com/6247678/openai-chatgpt-kenya-workers/).

AI companies, then, curate data specifically to make their models useful, and literally pay for subjective judgment, through million-dollar pay packages for expert judgment about what is 'good data' for pre-training, and billions spent on acquiring lay judgment of what are 'good responses' for post-training.

## Part 3: Of Free Lunch and Scissor Blades

Dear reader, I am proud of you. You have such fine taste, on matters both big and small, familiar and alien. I'm talking textures, sounds, smells, words, the whole nine yards; in fact, your taste even goes beyond categories and dimensions (for example, which is better, jazz, or honeybees? purple, or justice?) How you do this is a mystery to me.

Yet subjective judgment, despite its wondrous flexibility, gets a bad rap. The canonical Hollywood reference, I think, is Moneyball. Brad Pitt (Beane) is running a team, and the experienced, expert scouts' judgment is out of touch:

> **Scout 1:** He can't hit a curve ball.<br>
> **Scout 2:** Yeah, there's some work to be done, I'll admit that.<br>
> **Scout 1:** Yeah, there is.<br>
> **Scout 2:** But he is noticeable.<br>
> **Scout 3:** And an ugly girlfriend.<br>
> **Scout 1:** What does that mean?<br>
> **Scout 3:** Ugly girlfriend means no confidence.<br>
> **Scout 1:** OK.<br>
> *[Beane buries his head in his hands out of frustration]*

But here comes this young economist, and he's got the numbers. He doesn't have years of experience, intuition, and craft. He's just got simple algorithms for predicting value.

> **Peter Brand:** Baseball thinking is medieval… They are asking all the wrong questions. And if I say it to anybody, I'm-I'm ostracized. I'm-I'm-I'm a leper. (...) It's about getting things down to one number.

<img src = '/assets/images/posts/moneyball-analytics.jpg' width = 400>

*Jonah Hill, pointing at numbers*

And his numbers work. Unfortunately, it's not just baseball --- in an extremely productive and influential line of work, Paul Meehl spent decades studying the efficacy of subjective expert intuition vs. simple, objective algorithms, and [found](https://psycnet.apa.org/record/2006-21565-000) that the latter wins across a shocking gamut of domains and cases, from predicting student success to predicting recidivism in legal cases, with later meta-analyses of >100 studies showing that simple algorithms (like, very simple algorithms considering only a few numbers) were on average 10% more accurate than domain experts [(see here)](https://psycnet.apa.org/doiLanding?doi=10.1037%2F1040-3590.12.1.19).

The message, in a nutshell, is this: Subjectivity is overrated.

Yet you and I have seen that subjective judgment is not just flexible, but necessary for our most practical inventions to work. Purely objective machinery can generate infinite mathematical theorems and word sequences, but it is precisely that lack of subjective directionality that makes them useless. Moreover, we know that a purely objective, perfect learner cannot exist; the wonderfully-named [*no free lunch theorem*](https://en.wikipedia.org/wiki/No_free_lunch_theorem) shows that across all possible problems, i.e., with no subjective standpoint that allows you to specify what is an interesting problem, there is no 'best' solution.

The message, in a nutshell, is this: Objectivity is overrated.

The way out of this confusion (with respect to the value of subjectivity vs. objectivity) is to realize that we live in a particular world, with particular regularities, and that if you can specify a given world, you can specify an optimal reasoner best fit for that world. This, Herb Simon [argued](https://ideas.repec.org/h/elg/eechap/19952_7.html), is the only way to really understand how cognition works: there has to be a fit between the informational regularities that the world presents to us, and the regularities in how our mind processes information, that allows us to be effective reasoners (much as a scissor needs its two blades to fit). We can see, because our visual system expects a certain kind of pattern, and because those patterns are in fact out there. We can solve problems, because our reasoning expects certain kinds of problems, and those problems are in fact out there.

That is, there is a close fit between the notches of subjectivity and the grooves of reality that allows human minds to be useful.

This insight brings us a step closer to understanding our starting puzzles. Our subjective judgments --- of what's beautiful and interesting, right and wrong, true and false --- reflect aspects of our reality, in ways both obvious and subtle. Mathematical derivation and language prediction are thus *surprisingly* useful, because the inherent subjectivity of their means and ends is hidden by illusions of objectivity, and without subjectivity, there is nothing to tether these to reality. So reality seeps into subjective judgment, which seeps into objective derivation and prediction, and imbues them with usefulness.

This of course does not answer all of the metaphysical questions raised by Wigner's puzzle (e.g., what about a lot of math that does not seem to be particularly useful?), and raises a lot of questions: from the biological (e.g., what kind of selection would cause reality to seep into subjectivity in these extremely subtle ways?) to the psychological (e.g., why does math seem more subjective than other domains?) and the philosophical (e.g., if reality is seeping into judgment in these subtle ways, then how can there be so much disagreement in different domains over much more obviously grounded issues). It is worth reading up on others' reflections on both Wigner's [puzzle](https://scholarshipweekend.oglethorpe.edu/wp-content/uploads/sites/21/2023/02/The-Reasonable_Unreasonable-Effectiveness_Ineffectiveness-of-Mathematics-Counterpoint-Abbott-and-Hamming-L-deCamp.pdf) as well as the LLM [puzzle](https://www.lesswrong.com/posts/AzRRPDNmeEoJdSiib/implications-of-predicting-the-next-token). But the central lesson, that these things are much more subjective than they appear to be, and moreover, that this subjectivity is absolutely necessary, should hold.

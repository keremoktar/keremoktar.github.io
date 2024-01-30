# Reading Summaries
Wouldn't it be nice to have sparknotes critiques of various papers? I think so (started 01/27/2024).

## Psychology

Haidt, J. (2001). The emotional dog and its rational tail: a social intuitionist approach to moral judgment. Psychological Review, 108(4), 814-850.
### Summary:
Moral dumbfounding example (sibling love). Moral psychology was mostly rationalist (Kohlberg, 1969), giving reason causal power. Intuitionism frames morality as more of a process of perception. Reasons arise due to the need for social justification, a la Mercier & Sperber. Four reasons to doubt primacy of reason: 1- we know reasoning is a dual process, 2- reasoning is motivated, 3- reasoning constructs post-hoc (naive realism), 4- moral action tracks intuition. Philosophers valued reason (except Hume); psychologists valued intuition (until Kohlberg). Turiel's social-interactionist model, people think about consequences, and if they are negative and to people, they are moral acts. But think about taboo (e.g., having sex with chicken carcass) -- people can't identify bad consequences, but they think of them as moral transgressions. Moral reasoning is "conscious mental activity that consists of transforming given information about people in order to reach a moral judgment" and is intentional, intentional, effortful, controllable, and accessible. Moral intuition: "he sudden appearance in consciousness of a moral judgment, including an affective valence (good-bad, like- dislike), without any conscious awareness of having gone through steps of search, weighing evidence, or inferring a conclusion. " 

### Thoughts:

### Quotes:
"what model of moral judgment allows a person to know that something was wrong, without knowing why?"
"The correlation between judgment and supporting belief does not show that  the belief caused the judgment. An intuitionist interpretation is just as plausible: the anti-abortion judgment (a gut feeling that abortion is bad) caused the belief that life begins at conception (an ex post facto rationalization of the gut feeling)."
“moral reasoning is the conscious process of using ordinary moral language” (Kohlberg, Levine, & Hewer, 1983 p. 69).
"Since moral positions always have an affective component to them, it is hypothesized that reasoned persuasion works not by providing logically compelling arguments, but by  triggering new affectively valenced intuitions in the listener."
"However such reasoning is hypothesized to be rare, occurring primarily in cases in which the initial intuition is weak and processing capacity is high."
"People form first impressions at first sight (Albright, Kenny, & Malloy, 1988), and the impressions that they form  from observing a “thin slice” of behavior (as little as 5 seconds) are almost identical to the impressions they form from much longer and more leisurely observation and deliberation (Ambady & Rosenthal, 1992). 
"Chaiken’s (1987) heuristic-systematic model of persuasion, people are guided in part by the "principle of least effort." Since people have limited cognitive resources, and since  heuristic processing is easy and adequate for  most tasks, heuristic processing (the intuitive process) is generally used unless there is a special  need to engage in systematic   rocessing (see also  Simon, 1967). A particularly important heuristic for  the study of moral judgment is the "I agree with people I like" heuristic (Chaiken, 1980)."
### Questions:

### Related:


## AI

Gigerenzer, G. (2023). Psychological AI: Designing Algorithms Informed by Human Psychology. Perspectives on Psychological Science, 0(0). https://doi.org/10.1177/17456916231180597
### Summary:
AI (GPT/DNN/AlphaZero/etc.) does not use psychological research---doing psychological AI is to look for what makes humans good and try to replicate it (e.g., Simon & Newell, 1958). But Simon's prediction (in 10 years chess algs will beat human experts) was off in both time (> 10) and method (deep blue does not use human heuristics); this is because he focused on the wrong domain. Risk (small world, Knightian; probabilistic outcomes but certain structure) and uncertainty (large world, unknown unknowns; probabilistic structure; Savage 1954). Complex algorithms outperform humans in situations of risk, not uncertainty; in out-of-sample, but not out-of-population scenarios. E.g., when there is uncertainty, recency bias can be productive, because the environment may have drifted; it is more rational to simplify rather than complicate; lots of examples where throwing information away (e.g., equal weight models where you set all betas to +1 or -1) results in better predictions.  

### Thoughts:
The evidence that AI are better in small worlds  is a lot more compelling than the evidence that humans are better in big uncertainty (e.g., Gigerenzer claims recognition heuristic outperforms S&P --- why not immediately become a billionaire then, and why are all trading firms using algs?). In general, simpler methods might be better - but if that's just the idea, then calling it 'psychological AI' is a little misleading --- we could just as well call it 'simple inductive bias AI'. No free lunch theorems already tell us that with enough uncertainty, there is no reason to favor _any_ model; the point is to find the set of priors that best represent the informational characteristics of our world. It is reasonable that simplicity and various human priors would be good guides to this (that's what the whole Tenenbaum 'let's find the priors' research program was about anyway); but the bitter lesson (Domingos) basically tells us that it is cheaper to just get data to change the problem from out-of-population to out-of-sample than it is to try to engineer an efficient set of priors that gets you there. And also, what is the right amount of simplicity? 

### Quotes:
None.

### Questions:
- Can we derive, based on theory, some well-specified and formally-grounded set of inductive biases that are generally useful across the kinds of problems that we encounter; or is the variance across problem domains so high that the additional boost in performance you get from having domain-general-abstract priors too little to justify the cost?  

### Related:
Simon, H. A., & Newell, A. (1958). Heuristic problem solving: The next advance in operations research. Operations Research, 6, 1–10.
Gigerenzer, G. (1991). From tools to theories: A heuristic of discovery in cognitive psychology. Psychological Review, 98(2), 254.
Daston, L. J. (1994). Enlightenment calculations. Critical Inquiry, 21, 182–202.

---

## Structure:
### Summary:

### Thoughts:

### Quotes:

### Questions:

### Related:

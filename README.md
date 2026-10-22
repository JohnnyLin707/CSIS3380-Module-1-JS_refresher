English | [简体中文](README.zh-CN.md)

# JS Refresher: Mastery Challenge

🔗 **Live site:** https://johnnylin707.github.io/CSIS3380-Module-1-JS_refresher/

An interactive quiz app for reviewing modern JavaScript fundamentals. Built as a classroom review exercise (CSIS 3380 – Full Stack Development with JavaScript), it works as a self-study drill as well.

All questions, answers, and explanations are shown in **English with a Chinese translation** side by side, so learners can study in both languages at once.

## Features

- **5 topics** — Statements vs Expressions, Immutability, Arrow Functions &amp; Callbacks, Spread &amp; Destructuring, Array Methods
- **5 questions per topic** (25 total), shuffled each round
- **Extra practice** — 8 additional questions per topic (40 extra) in their own pages, opened from the sidebar
- **Scoring rule** — +1 for a correct answer, −1 for an incorrect one, with a running total score
- **Theory card** — each topic opens with a one-line summary of the key concept
- **Bilingual display** — every question, answer, and explanation appears in English with its Chinese translation underneath
- **Instant feedback** — after submitting, the correct answer and a short explanation are revealed

## Getting Started

No build step and no dependencies — it is plain HTML/CSS/JavaScript.

**Option 1: open directly**

Open `index.html` in any modern browser.

**Option 2: serve locally** (recommended)

```bash
# Python
python -m http.server 8080

# or Node.js
npx serve .
```

Then visit <http://localhost:8080>.

## How to Play

1. Pick a topic from the left sidebar.
2. Read the theory card shown with the first question.
3. Type your answer and click **Submit Answer** (matching is case-insensitive).
4. Review the correct answer and explanation (English + Chinese), then click **Next Question**.
5. After 5 questions you will see the completion message; your total score is shown at the top.

> Tip: answers are checked with a case-insensitive "contains" match, so typing `Statement` for `statement` counts as correct.

## Extra Practice

The **Extra Practice** section in the sidebar links to a dedicated page per topic, each with **8 more questions** (40 extra questions total). They use the same layout, the same scoring rule and the same bilingual English + Chinese display as the main page, and each round ends with a **Restart Round** button that reshuffles the questions.

## Project Structure

```
JS_refresher/
├── index.html   # Page layout: sidebar (core topics + extra practice links), theory card, exercise card
├── script.js    # Question bank (bilingual data) + quiz logic for the main page
├── style.css    # Styling, including the Chinese translation lines
├── extras/                      # Extra practice pages (one folder per topic)
│   ├── quiz-engine.js           # Shared quiz logic used by every extra page
│   ├── statements/              # index.html + questions.js
│   ├── immutability/
│   ├── functions/
│   ├── data/
│   └── arrays/
├── README.md        # This file (English)
└── README.zh-CN.md  # Chinese version of the README
```

The main question bank lives at the top of `script.js` in the `topicBank` object. Each extra topic keeps its own bank in `extras/<topic>/questions.js`. Every question has:

| Field | Content |
| --- | --- |
| `q` / `qcn` | Question in English / Chinese |
| `a` / `acn` | Accepted answer in English / Chinese |
| `e` / `ecn` | Explanation in English / Chinese |

To add questions to the main page, edit `topicBank` — no other code changes are needed.
To add extra-practice questions, edit the `extraQuestions` array in the matching `extras/<topic>/questions.js`.

## Tech Stack

Vanilla HTML5 + CSS3 + JavaScript (ES6+). No frameworks, no external libraries.

# A11Y Standards Trainer

This project is an educational web application for learning and practicing web accessibility standards.

The goal of the A11Y Standards Trainer is to help developers, designers, and accessibility practitioners strengthen their understanding of accessibility requirements through interactive study and self-assessment. The content focuses on practical interpretation of accessibility standards and how they apply in real-world digital products.

## What is included

- A WCAG 2.2 study dashboard.
- A standards-first study roadmap for accessibility and conformance work.
- An expanded reference library covering fundamentals, UX, semantics, visual design, forms, media, SPAs, ARIA components, testing, screen readers, usability, frameworks, regulations, and conformance evidence.
- Mini tutorials designed with cognitive accessibility principles: small chunks, plain language, worked examples, repeated patterns, memory checks, and active recall.
- A guided learning mode that shows one card at a time with "I understand", "show another example", and "quiz me" actions.
- Plain-language lessons for every WCAG 2.2 success criterion.
- Real-life examples, common exam traps, and testing steps.
- A searchable knowledge bank.
- Difficult close-distractor quizzes and a 25-question exam simulator.
- A glossary for technical accessibility terms.

Lesson explanations are original and are grounded in public W3C/WAI references, including WCAG 2.2, Understanding WCAG, WAI cognitive accessibility guidance, and WAI-ARIA/APG resources.

## Run locally

From this folder:

```bash
python3 -m http.server 4175
```

Then open:

```text
http://localhost:4175/
```

## Accessibility QA

Install dev dependencies once:

```bash
npm install
```

Run the automated axe checks while the local server is running:

```bash
npm run a11y
```

The QA script checks the main learning routes for serious and critical WCAG-related issues.

You can try the live application here:

👉 https://carlashub.github.io/A11Y-Standards-Trainer/

## Issues and feedback

If you encounter any problems, bugs, or have suggestions for improvement, please open an issue in this repository. All feedback and reports are welcome and appreciated.

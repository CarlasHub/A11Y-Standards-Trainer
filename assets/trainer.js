import { successCriteria } from "./questionbank-DZXLgNQi.js";

const app = document.querySelector("#app");
const announcer = document.querySelector("#announcer");

const COURSE_METHODS = [
  "Getting started, test platforms, required tools, normative WCAG language, conforming alternate versions, and third-party content.",
  "Text alternatives: active images, informative images, complex images, decorative images, CAPTCHA, and audio/video alternatives.",
  "Time-based media: audio-only, video-only, prerecorded captions, live captions, media alternatives, and audio description.",
  "Adaptable content: semantics, data tables, related form groups, headings, lists, reading order, and visual or sound cues.",
  "Distinguishable content: color-only meaning, link color contrast, audio control, text contrast, non-text contrast, resize, reflow, text spacing, and hover/focus content.",
  "Keyboard access: keyboard navigation, no keyboard trap, character-key shortcuts, custom gestures, pointer gestures, pointer cancellation, dragging, and motion actuation.",
  "Timing and seizures: timing adjustable, pause/stop/hide, automatically updating content, flashing thresholds, animation from interactions.",
  "Navigation: bypass blocks, page titles, focus order, link purpose, multiple ways, headings and labels, focus visible, focus not obscured, section headings.",
  "Input assistance: errors, visible labels, missing instructions, required fields, error suggestion, legal/financial/data error prevention, redundant entry, and accessible authentication.",
  "Compatibility: parsing history, name/role/value, custom controls, compatibility expectations, and status messages.",
  "People-first context: personas for color perception, low vision, blindness, deafness, limited manipulation, limited reach/strength, ADHD, dyslexia, and learning difficulties.",
  "Practice resources: developer minimum checklist, user stories, reporting accessibility bugs, and exam-style review."
];

const COURSE_LIBRARY = [
  {
    title: "Accessibility fundamentals",
    source: "W3C/WAI accessibility foundations and disability context",
    topics: ["disability concepts", "models of disability", "guidelines", "laws", "myths", "inclusive language"],
    takeaway: "Accessibility is not a feature. It is the practice of removing barriers between people and the task they came to complete."
  },
  {
    title: "Accessible UX and inclusive design",
    source: "Designing an Accessible User Experience",
    topics: ["inclusive patterns", "personas", "plain journeys", "error recovery", "cognitive load", "usable help"],
    takeaway: "Accessible UX means the path still makes sense when the user is stressed, zoomed in, using assistive technology, or learning slowly."
  },
  {
    title: "Semantic structure and navigation",
    source: "Semantic Structure and Navigation",
    topics: ["headings", "landmarks", "lists", "tables", "reading order", "links", "page titles"],
    takeaway: "Semantic HTML is the page's map. If the map is wrong, screen reader and keyboard users get lost."
  },
  {
    title: "Visual design, color, contrast, and spacing",
    source: "Visual Design and Colors",
    topics: ["color-only meaning", "text contrast", "non-text contrast", "focus visibility", "text spacing", "images of text"],
    takeaway: "Good visual accessibility is not ugly. It is visual information that survives low vision, glare, zoom, fatigue, and color differences."
  },
  {
    title: "Device-independent input",
    source: "Device-Independent Input Methods",
    topics: ["keyboard", "focus order", "pointer gestures", "target size", "dragging", "motion actuation", "shortcuts"],
    takeaway: "Do not design one perfect way to use a feature. Give users more than one reliable input path."
  },
  {
    title: "Forms, validation, and authentication",
    source: "Form Labels, Instructions, and Validation",
    topics: ["labels", "instructions", "required fields", "error identification", "suggestions", "redundant entry", "accessible authentication"],
    takeaway: "A form should behave like a patient helper: say what is needed, explain what went wrong, and preserve the user's work."
  },
  {
    title: "Images, SVG, canvas, and text alternatives",
    source: "Images, SVG, and Canvas",
    topics: ["active images", "informative images", "complex images", "decorative images", "SVG names", "canvas fallback"],
    takeaway: "The right text alternative depends on purpose. Describe the job the image does, not just what it looks like."
  },
  {
    title: "Responsive design, zoom, and reflow",
    source: "Responsive Design and Zoom",
    topics: ["400% zoom", "single-column reflow", "orientation", "text resize", "mobile states", "horizontal scrolling"],
    takeaway: "Zoom is not a special case. For many people, zoom is the normal way to read."
  },
  {
    title: "Multimedia, animation, and motion",
    source: "Multimedia, Animations, and Motion",
    topics: ["captions", "transcripts", "audio description", "flashing", "pause/stop/hide", "motion sensitivity"],
    takeaway: "Media must communicate through more than one channel, and movement must not steal control from the user."
  },
  {
    title: "Dynamic updates, AJAX, and single-page apps",
    source: "Dynamic Updates, AJAX, and Single-Page Apps",
    topics: ["status messages", "route changes", "focus after updates", "live regions", "loading states", "announcements"],
    takeaway: "If the screen changes but assistive technology is not told, part of the interface becomes invisible."
  },
  {
    title: "Custom ARIA and JavaScript components",
    source: "Custom ARIA/JavaScript Components",
    topics: ["name role value", "native-first design", "menus", "tabs", "dialogs", "comboboxes", "keyboard patterns"],
    takeaway: "ARIA does not make broken widgets accessible by magic. It only helps when behavior, focus, state, and naming are all correct."
  },
  {
    title: "Testing methods and tools",
    source: "WAI testing guidance, WCAG techniques, and practical manual testing",
    topics: ["automated checks", "manual inspection", "keyboard testing", "browser tools", "rule explanations", "evidence writing"],
    takeaway: "Automated tools find some issues quickly. Manual testing proves whether people can actually complete the task."
  },
  {
    title: "Screen reader testing",
    source: "Web Accessibility Testing: Screen Readers",
    topics: ["browse mode", "focus mode", "names", "headings", "forms", "dynamic messages", "reading order"],
    takeaway: "Screen reader testing is not about memorising every command. It is about checking what information reaches the user."
  },
  {
    title: "Usability testing for accessibility",
    source: "Usability Testing for Accessibility",
    topics: ["participant tasks", "observation", "barrier notes", "assistive technology setup", "severity", "respectful facilitation"],
    takeaway: "Real users reveal barriers that checklists miss, especially confusion, fatigue, workarounds, and trust problems."
  },
  {
    title: "Framework and product accessibility",
    source: "Angular Accessibility, developer fast tracks",
    topics: ["component contracts", "routing", "template semantics", "state", "testing in CI", "design system rules"],
    takeaway: "Accessibility scales when components make the accessible path the easy path for every developer."
  },
  {
    title: "Conformance and regulations",
    source: "WCAG 2.2, EN 301 549, Section 508, and conformance reporting",
    topics: ["WCAG levels", "EN 301-549", "Section 508", "scope", "alternate versions", "third-party content", "reporting"],
    takeaway: "Conformance is evidence-based. You need scope, criteria, test results, exceptions, and reproducible findings."
  }
];

const MINI_TUTORIALS = [
  {
    id: "alt-text-purpose",
    title: "Alt text: describe the purpose, not the pixels",
    level: "Beginner",
    related: ["1.1.1", "4.1.2"],
    teach: [
      "Look at the thing that is not text.",
      "Ask what job it does on this page.",
      "If it gives information, write the same information in words.",
      "If it is a button or link, name the action or destination.",
      "If it is decoration only, hide it from assistive technology."
    ],
    example: "A magnifying glass button should be named 'Search', not 'magnifying glass'. A chart needs the important trend, not 'bar chart image'.",
    practice: "Find three images on a page. Label each one as decorative, informative, complex, or action/control.",
    check: "If the image disappeared, what would the user need to know or do?"
  },
  {
    id: "keyboard-map",
    title: "Keyboard testing: make a simple map",
    level: "Beginner to practical",
    related: ["2.1.1", "2.1.2", "2.4.3", "2.4.7", "2.4.11"],
    teach: [
      "Put the mouse away.",
      "Press Tab and write down each stop.",
      "Use Enter, Space, Escape, and arrow keys where they make sense.",
      "Check that focus is visible and not covered.",
      "Make sure you can leave every component."
    ],
    example: "A modal opens, focus moves into it, Escape closes it, and focus returns to the button that opened it.",
    practice: "Test a menu, dialog, form, and carousel using only the keyboard.",
    check: "Can a tired user predict where focus goes next?"
  },
  {
    id: "forms-helper",
    title: "Forms: behave like a patient helper",
    level: "Beginner to exam",
    related: ["1.3.1", "1.3.5", "3.3.1", "3.3.2", "3.3.3", "3.3.7", "3.3.8"],
    teach: [
      "Every field needs a real label.",
      "Instructions should appear before the user makes the mistake.",
      "Required fields must be clear.",
      "Errors must identify the field and the problem.",
      "The user should not retype information the system already knows unless there is a good reason."
    ],
    example: "Bad: 'Invalid input'. Better: 'Password must be at least 12 characters and include a number.'",
    practice: "Submit a form empty, with wrong formats, and after zooming. Record what the user hears and sees.",
    check: "Would the user know exactly what to fix without guessing?"
  },
  {
    id: "contrast-real-world",
    title: "Contrast: test the quiet parts too",
    level: "Practical",
    related: ["1.4.1", "1.4.3", "1.4.11", "1.4.13", "2.4.7"],
    teach: [
      "Check normal text.",
      "Check large text.",
      "Check icons, borders, focus indicators, and selected states.",
      "Check hover and focus popups.",
      "Check the design in disabled-looking but active states."
    ],
    example: "A pale purple focus ring may look stylish but fail if it is hard to see against a dark card.",
    practice: "Pick five UI states: default, hover, focus, selected, error. Test contrast for each.",
    check: "Can the user tell what is interactive and what changed?"
  },
  {
    id: "spa-announcements",
    title: "Single-page apps: tell the user what changed",
    level: "Intermediate",
    related: ["2.4.2", "2.4.3", "3.2.2", "4.1.2", "4.1.3"],
    teach: [
      "When route content changes, update the page title.",
      "Move focus to a useful heading or region.",
      "Announce save, error, loading, and completion messages.",
      "Do not move focus for every tiny update.",
      "Use native elements first, then ARIA only when needed."
    ],
    example: "After filtering results, a live message says '12 results found' while focus stays in the filter control.",
    practice: "Test search results, add-to-cart, save, route change, and validation updates with a screen reader.",
    check: "If the user cannot see the screen, how do they know the action worked?"
  },
  {
    id: "cognitive-load",
    title: "Cognitive accessibility: reduce memory work",
    level: "Core",
    related: ["2.2.1", "2.2.6", "3.2.6", "3.3.2", "3.3.7", "3.3.8"],
    teach: [
      "Use familiar words before technical words.",
      "Give one clear next step at a time.",
      "Keep help in the same place.",
      "Do not make users memorize codes, passwords, or information from another screen.",
      "Let people review, correct, pause, and recover."
    ],
    example: "A checkout repeats the shipping address automatically instead of forcing the user to retype it for billing.",
    practice: "Rewrite one confusing error, one instruction, and one help page in plain language.",
    check: "Could someone with fatigue, memory difficulty, dyslexia, or anxiety still finish the task?"
  }
];

const TUTORIAL_METADATA = {
  "alt-text-purpose": {
    category: "Text alternatives",
    topic: "Images and controls",
    difficulty: "Foundation",
    description: "Choose the right text alternative by identifying the purpose of an image, icon, chart, or control.",
    tags: ["alt text", "images", "icons", "controls", "non-text content"]
  },
  "keyboard-map": {
    category: "Keyboard and focus",
    topic: "Manual testing",
    difficulty: "Foundation to practice",
    description: "Build a keyboard testing path that checks focus order, operation, escape routes, and visible focus.",
    tags: ["keyboard", "focus", "manual testing", "dialogs", "menus"]
  },
  "forms-helper": {
    category: "Forms",
    topic: "Labels and errors",
    difficulty: "Foundation to exam",
    description: "Review how labels, instructions, required fields, validation, and recovery work together.",
    tags: ["forms", "labels", "errors", "instructions", "authentication"]
  },
  "contrast-real-world": {
    category: "Visual design",
    topic: "Contrast and states",
    difficulty: "Practice",
    description: "Test text, icons, borders, focus indicators, selected states, and hover/focus content.",
    tags: ["contrast", "color", "focus visible", "states", "visual design"]
  },
  "spa-announcements": {
    category: "Dynamic interfaces",
    topic: "Status and route updates",
    difficulty: "Intermediate",
    description: "Make route changes, loading states, save messages, and filtered results understandable to assistive technology.",
    tags: ["spa", "status messages", "live regions", "focus management", "dynamic updates"]
  },
  "cognitive-load": {
    category: "Cognitive accessibility",
    topic: "Memory and task support",
    difficulty: "Core",
    description: "Reduce memory work, keep help consistent, and support review, correction, and recovery.",
    tags: ["cognitive accessibility", "memory", "help", "redundant entry", "authentication"]
  }
};

const TUTORIAL_PAGE_SIZE = 3;
const STANDARD_PAGE_SIZE = 12;

const TUTORIAL_RECORDS = MINI_TUTORIALS.map((tutorial) => {
  const meta = TUTORIAL_METADATA[tutorial.id] || {};
  return {
    ...tutorial,
    category: meta.category || "General",
    topic: meta.topic || tutorial.title,
    difficulty: meta.difficulty || tutorial.level,
    description: meta.description || tutorial.example,
    tags: meta.tags || [],
    wcagRefs: tutorial.related
  };
});

const PRINCIPLE_SUMMARIES = {
  Perceivable: "People must be able to notice the information. If they cannot see it, hear it, or interpret it in their assistive technology, it may as well not exist.",
  Operable: "People must be able to use the interface. Keyboard, touch, mouse, switch devices, voice control, and time limits all count.",
  Understandable: "People must be able to understand what is happening and what to do next. This covers language, consistency, labels, help, and errors.",
  Robust: "The code must expose reliable meaning to browsers and assistive technologies, especially names, roles, values, and status changes."
};

const GLOSSARY = [
  ["Accessible name", "The name assistive technology announces for a control, link, image button, or widget."],
  ["Assistive technology", "Tools people use to access digital content, such as screen readers, magnifiers, switch control, voice input, captions, and braille displays."],
  ["Conformance", "A claim that a page or product meets a specific WCAG version and level, such as WCAG 2.2 AA."],
  ["Decorative content", "Content that adds visual style but no meaning. It should usually be hidden from assistive technology."],
  ["Focus", "The current interactive place on the page, often shown by a visible outline when using a keyboard."],
  ["Normative", "The official requirement text. In an exam, normative wording matters more than opinions or habits."],
  ["Programmatically determined", "Information is available in code so software can read it, not only visible to the eye."],
  ["Status message", "A message about the result of an action, such as saved, loaded, error, or added to cart, that should be announced without moving focus."]
];

const OFFICIAL_DOCS = [
  {
    title: "WCAG 2.2 Recommendation",
    url: "https://www.w3.org/TR/WCAG22/",
    use: "Exact normative success criterion wording and conformance requirements."
  },
  {
    title: "Understanding WCAG 2.2",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/",
    use: "Intent, benefits, examples, and techniques for each success criterion."
  },
  {
    title: "How to Meet WCAG 2.2 Quick Reference",
    url: "https://www.w3.org/WAI/WCAG22/quickref/",
    use: "Filtered lookup by level, technology, and topic."
  },
  {
    title: "What’s New in WCAG 2.2",
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/",
    use: "The new WCAG 2.2 criteria and who they help."
  },
  {
    title: "Cognitive Accessibility at W3C",
    url: "https://www.w3.org/WAI/cognitive/",
    use: "W3C/WAI work on cognitive and learning disability accessibility."
  },
  {
    title: "Making Content Usable for People with Cognitive and Learning Disabilities",
    url: "https://www.w3.org/TR/coga-usable/",
    use: "Patterns for clear purpose, help, memory support, attention, and error prevention."
  },
  {
    title: "WAI-ARIA Overview",
    url: "https://www.w3.org/WAI/standards-guidelines/aria/",
    use: "When ARIA is appropriate and how it fits with accessible web components."
  },
  {
    title: "ARIA Authoring Practices Guide",
    url: "https://www.w3.org/WAI/ARIA/apg/",
    use: "Keyboard interaction and semantic patterns for custom widgets."
  }
];

const FOOTER_LINKS = [
  {
    label: "Carla's Hub",
    href: "https://carlashub.com/",
    icon: "site"
  },
  {
    label: "GitHub",
    href: "https://github.com/CarlasHub",
    icon: "github"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carla-goncalves/",
    icon: "linkedin"
  }
];

const GUIDED_STEPS = MINI_TUTORIALS.flatMap((tutorial) => [
  {
    id: `${tutorial.id}-idea`,
    tutorialId: tutorial.id,
    title: tutorial.title,
    kind: "idea",
    prompt: "First, learn the idea.",
    body: tutorial.teach[0],
    example: tutorial.example,
    practice: tutorial.practice,
    check: tutorial.check,
    related: tutorial.related
  },
  {
    id: `${tutorial.id}-steps`,
    tutorialId: tutorial.id,
    title: tutorial.title,
    kind: "steps",
    prompt: "Now follow the steps.",
    body: tutorial.teach.join(" "),
    example: tutorial.example,
    practice: tutorial.practice,
    check: tutorial.check,
    related: tutorial.related
  },
  {
    id: `${tutorial.id}-practice`,
    tutorialId: tutorial.id,
    title: tutorial.title,
    kind: "practice",
    prompt: "Now practise with one real thing.",
    body: tutorial.practice,
    example: tutorial.example,
    practice: tutorial.practice,
    check: tutorial.check,
    related: tutorial.related
  }
]);

const state = {
  route: "home",
  query: "",
  level: "all",
  principle: "all",
  tutorialQuery: "",
  tutorialCategory: "all",
  tutorialPage: 1,
  standardPage: 1,
  quiz: null,
  selected: null,
  guidedIndex: Number(localStorage.getItem("a11yGuidedIndex") || "0"),
  guidedExampleOpen: false
};

const progress = JSON.parse(localStorage.getItem("a11yTrainerProgress") || "{}");

const routes = [
  ["home", "Home"],
  ["course", "Course Map"],
  ["library", "Reference Library"],
  ["tutorials", "Mini Tutorials"],
  ["guided", "Guided Mode"],
  ["lessons", "Lessons"],
  ["bank", "Standards"],
  ["quiz", "Difficult Quiz"],
  ["exam", "Exam Practice"],
  ["glossary", "Glossary"],
  ["docs", "Docs"]
];

const navRoutes = [
  ["home", "Home"],
  ["tutorials", "Tutorials"],
  ["guided", "Guided"],
  ["lessons", "Lessons"],
  ["bank", "Standards"],
  ["quiz", "Quiz"],
  ["exam", "Exam"],
  ["glossary", "Glossary"],
  ["docs", "Docs"]
];

function saveProgress() {
  localStorage.setItem("a11yTrainerProgress", JSON.stringify(progress));
}

function saveGuidedIndex() {
  localStorage.setItem("a11yGuidedIndex", String(state.guidedIndex));
}

function markStudied(id) {
  progress[id] = { ...(progress[id] || {}), studied: true, updatedAt: new Date().toISOString() };
  saveProgress();
  announce("Marked as studied.");
  render();
}

function announce(message) {
  announcer.textContent = message;
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [rawRoute = "home"] = hash.split(/[/?]/);
  const route = rawRoute === "lesson" ? "lessons" : rawRoute;
  return routes.some(([id]) => id === route) ? route : "home";
}

function criteria() {
  return successCriteria
    .filter((sc) => state.level === "all" || sc.level === state.level)
    .filter((sc) => state.principle === "all" || sc.principle === state.principle)
    .filter((sc) => {
      if (!state.query.trim()) return true;
      const haystack = `${sc.num} ${sc.title} ${sc.level} ${sc.principle} ${sc.guidelineTitle} ${sc.contentText}`.toLowerCase();
      return haystack.includes(state.query.trim().toLowerCase());
    });
}

function paginate(total, currentPage, pageSize) {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, currentPage), pageCount);
  const start = (safePage - 1) * pageSize;
  return {
    pageCount,
    currentPage: safePage,
    start,
    end: Math.min(start + pageSize, total)
  };
}

function groupedByPrinciple() {
  return successCriteria.reduce((acc, sc) => {
    acc[sc.principle] ||= [];
    acc[sc.principle].push(sc);
    return acc;
  }, {});
}

function getCriterion(idOrNum) {
  return successCriteria.find((sc) => sc.id === idOrNum || sc.num === idOrNum) || successCriteria[0];
}

function plainExplanation(sc) {
  const title = sc.title.toLowerCase();
  if (title.includes("non-text")) {
    return "If something is not text, the user still needs the same meaning somehow. A product image, icon button, chart, CAPTCHA, audio clip, and video all need the right kind of alternative. The trick is choosing the correct alternative, not just adding any alt text.";
  }
  if (title.includes("caption")) {
    return "Captions are not only subtitles for speech. They also include important sounds, speaker changes, and information needed to understand the media when the audio is not available.";
  }
  if (title.includes("contrast")) {
    return "Contrast is about whether people can separate foreground from background. Text, icons, borders, focus indicators, and states can all fail if they look pretty but are too faint.";
  }
  if (title.includes("keyboard") || title.includes("focus")) {
    return "A user must be able to move through the page, operate controls, and understand where they are without using a mouse. If focus gets lost, hidden, trapped, or jumps strangely, the experience breaks.";
  }
  if (title.includes("error") || title.includes("label") || title.includes("input") || title.includes("authentication")) {
    return "Forms must explain what they need, identify what went wrong, and help users recover. A technically valid form can still fail if people cannot understand the label, requirement, or correction.";
  }
  if (title.includes("name") || title.includes("role") || title.includes("status")) {
    return "Custom interface code must expose the same meaning that a native HTML control would expose. Screen readers need to know what the thing is, what it is called, what state it is in, and when important changes happen.";
  }
  if (title.includes("language")) {
    return "Language settings help assistive technology pronounce and interpret text correctly. The page language and any meaningful language changes need to be identified in code.";
  }
  if (title.includes("target") || title.includes("pointer") || title.includes("dragging")) {
    return "Pointer accessibility protects people who have shaky hands, use touch, zoom, stylus, head pointers, or other non-mouse input. The key question is whether the same action is possible without precision or complex movement.";
  }
  return `${sc.title} is about making ${sc.guidelineTitle.toLowerCase()} work for real people, not only for ideal users. Ask what information, action, or feedback this criterion protects, then test whether a user can still get it when vision, hearing, movement, memory, or technology changes.`;
}

function oneSentence(sc) {
  const title = sc.title.toLowerCase();
  if (title.includes("non-text")) return "People need a text-based way to understand or use anything that is not already text.";
  if (title.includes("caption")) return "People who cannot hear the audio still need the spoken words and important sounds.";
  if (title.includes("contrast")) return "People need enough visual difference to read text and recognise controls, icons, states, and focus.";
  if (title.includes("keyboard")) return "People must be able to complete the task without a mouse.";
  if (title.includes("focus")) return "People using a keyboard must always know where they are and what will happen next.";
  if (title.includes("error")) return "People need to know what went wrong and how to fix it.";
  if (title.includes("label") || title.includes("input")) return "People need clear field names, instructions, and purpose before they can give the right information.";
  if (title.includes("authentication")) return "Logging in should not depend only on memory puzzles, transcription, or complex mental work.";
  if (title.includes("name") || title.includes("role") || title.includes("value")) return "Assistive technology needs the same control meaning that sighted mouse users get visually.";
  if (title.includes("status")) return "Important updates must be announced without stealing focus.";
  return "The user should receive the same meaning, control, and feedback even when their body, senses, device, or context changes.";
}

function protectedUserNeed(sc) {
  const principle = sc.principle;
  if (principle === "Perceivable") return "This protects users who may not see, hear, or visually interpret the content in the same way as the designer.";
  if (principle === "Operable") return "This protects users who may use keyboard, touch, switch devices, voice control, zoom, or slower movement.";
  if (principle === "Understandable") return "This protects users who need predictable language, clear instructions, consistent behavior, and recoverable mistakes.";
  return "This protects users who depend on browsers and assistive technologies to understand custom controls and dynamic updates.";
}

function realExample(sc) {
  const title = sc.title.toLowerCase();
  if (title.includes("non-text")) return "A shopping site uses a trash-can icon button in the cart. Passing example: the button name is 'Remove red jacket from cart'. Tricky fail: the icon has alt='trash', because that describes the picture, not the action.";
  if (title.includes("captions")) return "A training video says 'click the blue security tab' while an alarm sound plays. Captions must include the spoken instruction and the meaningful alarm, not just the dialogue.";
  if (title.includes("reflow")) return "At 400% zoom, a dashboard should become one readable column. If users must scroll sideways to read each line of text, it likely fails reflow.";
  if (title.includes("focus not obscured")) return "A sticky cookie banner covers the focused 'Submit' button. Even though the button technically receives focus, the user cannot see it, so the design fails the real purpose.";
  if (title.includes("label in name")) return "A visible button says 'Search'. The accessible name should include 'Search'. If the code names it 'Submit query', voice users saying 'click Search' may fail.";
  if (title.includes("target size")) return "A list of tiny adjacent delete buttons creates accidental taps. The fix can be a larger target, spacing, or an equivalent easier control depending on the rule level.";
  if (title.includes("status")) return "After adding a product to cart, the page shows 'Added'. A screen reader user should hear that update without focus being moved away from the current control.";
  return "Imagine this in a checkout, health form, learning platform, or government service. The user is tired, zoomed in, using keyboard only, or listening through a screen reader. The pass/fail question is whether the same task still works.";
}

function commonTrap(sc) {
  const title = sc.title.toLowerCase();
  if (title.includes("contrast")) return "Do not only test paragraph text. Disabled-looking active controls, icon buttons, charts, focus indicators, and selected states often hide the real failure.";
  if (title.includes("keyboard")) return "Do not stop after pressing Tab a few times. Test opening, closing, selecting, escaping, and returning focus after dialogs or menus.";
  if (title.includes("error")) return "A red border alone is not enough. The user needs text that identifies the error and, for harder criteria, useful correction help.";
  if (title.includes("audio description")) return "Captions do not replace audio description. Captions cover audio; audio description covers important visual information.";
  if (title.includes("consistent")) return "Consistency does not mean every page must be identical. It means repeated help, navigation, and controls should not change meaning or location unpredictably.";
  return "The common mistake is treating the criterion as a checklist phrase instead of testing the user outcome it protects.";
}

function testSteps(sc) {
  return [
    `Read the exact WCAG wording for ${sc.num} and underline the user need it protects.`,
    "Find every place in the page where this issue could appear, including hidden states, errors, overlays, mobile, and zoom.",
    "Test with keyboard, browser zoom, screen reader or accessibility tree, and visual inspection as relevant.",
    "Decide pass or fail from evidence. Write the failure so a developer can reproduce it.",
    "Retest after the fix, especially if the fix changes names, focus, visible text, or layout."
  ];
}

function officialLinks(sc) {
  return [
    ["WCAG 2.2 specification", `https://www.w3.org/TR/WCAG22/#${sc.id}`],
    ["Understanding document", `https://www.w3.org/WAI/WCAG22/Understanding/${sc.id}.html`],
    ["How to meet WCAG 2.2", "https://www.w3.org/WAI/WCAG22/quickref/"]
  ];
}

function layout(content) {
  const route = state.route;
  return `
    <header class="topbar">
      <a class="brand" href="#home" aria-label="A11Y Standards Trainer home">
        <span class="brand-logo" aria-hidden="true">A11Y</span>
        <strong>Standards Trainer</strong>
      </a>
      <nav aria-label="Main navigation">
        ${navRoutes.map(([id, label]) => `<a href="#${id}" ${route === id ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
      </nav>
    </header>
    <main id="main" class="shell" tabindex="-1">${content}</main>
    <footer class="site-footer">
      <div class="shell footer-inner">
        <p>Created by <strong>Carla Goncalves</strong>. Original study content based on public W3C/WAI documentation, WCAG 2.2, WAI-ARIA/APG patterns, and cognitive accessibility guidance.</p>
        <nav class="footer-links" aria-label="Creator links">
          ${FOOTER_LINKS.map((link) => `
            <a href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="${esc(link.label)}">
              ${renderIcon(link.icon)}
              <span>${esc(link.label)}</span>
            </a>
          `).join("")}
        </nav>
      </div>
    </footer>
  `;
}

function renderIcon(icon) {
  if (icon === "github") {
    return `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.02c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`;
  }
  if (icon === "linkedin") {
    return `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21H10V9Z"/></svg>`;
  }
  return `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6.92 8h-3.18a13.6 13.6 0 0 0-1.02-4.03A7.03 7.03 0 0 1 18.92 11ZM12 5.05c.58.84 1.29 2.65 1.53 5.95h-3.06C10.7 7.7 11.42 5.9 12 5.05ZM5.08 13h3.18c.12 1.54.46 2.93 1.02 4.03A7.03 7.03 0 0 1 5.08 13Zm3.18-2H5.08a7.03 7.03 0 0 1 4.2-4.03A13.6 13.6 0 0 0 8.26 11ZM12 18.95c-.58-.84-1.29-2.65-1.53-5.95h3.06c-.24 3.3-.95 5.1-1.53 5.95Zm2.72-1.92c.56-1.1.9-2.49 1.02-4.03h3.18a7.03 7.03 0 0 1-4.2 4.03Z"/></svg>`;
}

function pageTitle(kicker, title, description) {
  return `
    <section class="page-title">
      <p class="eyebrow">${esc(kicker)}</p>
      <h1>${esc(title)}</h1>
      <p>${esc(description)}</p>
    </section>
  `;
}

function renderHome() {
  const studied = Object.values(progress).filter((p) => p.studied).length;
  const byPrinciple = groupedByPrinciple();
  return layout(`
    <section class="hero">
      <div>
        <p class="eyebrow">WCAG 2.2 conformance study platform</p>
        <h1>WCAG 2.2 study guide for practical accessibility work.</h1>
        <p class="muted">Use a structured path to review concepts, connect them to the standard, practise with realistic examples, and prepare for more advanced assessment questions.</p>
        <div class="actions">
          <a class="button primary" href="#tutorials">Start with mini tutorials</a>
          <a class="button primary" href="#guided">Use guided mode</a>
          <a class="button" href="#course">Open study map</a>
          <a class="button" href="#lessons">Then open lessons</a>
          <a class="button" href="#quiz">Hard quiz after study</a>
        </div>
      </div>
      <div>
        <h2>Recommended study path</h2>
        <ol>
          <li>Review the concept summary.</li>
          <li>Use guided study for focused review.</li>
          <li>Read the related WCAG lesson.</li>
          <li>Use the knowledge bank for reference.</li>
          <li>Practise with quiz and exam questions.</li>
        </ol>
        <h3>Progress</h3>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${successCriteria.length}" aria-valuenow="${studied}" aria-label="${studied} of ${successCriteria.length} criteria studied"><span style="width:${Math.round((studied / successCriteria.length) * 100)}%"></span></div>
        <p><strong>${studied}</strong> of <strong>${successCriteria.length}</strong> criteria marked studied.</p>
      </div>
    </section>
    <section class="stats" aria-label="Coverage summary">
      <div class="stat"><strong>${successCriteria.length}</strong><span>WCAG 2.2 criteria</span></div>
      <div class="stat"><strong>${successCriteria.filter((sc) => sc.level === "A").length}</strong><span>Level A criteria</span></div>
      <div class="stat"><strong>${successCriteria.filter((sc) => sc.level === "AA").length}</strong><span>Level AA criteria</span></div>
      <div class="stat"><strong>${COURSE_LIBRARY.length}</strong><span>course knowledge areas</span></div>
    </section>
    <section class="grid two">
      <article class="panel">
        <h2>Study design</h2>
        <p>The guide uses short sections, consistent structure, concrete examples, review prompts, and active recall. The goal is to make the material easier to review without reducing the technical accuracy.</p>
        <div class="actions"><a class="button primary" href="#tutorials">Open mini tutorials</a></div>
      </article>
      <article class="panel">
        <h2>Broader standards coverage</h2>
        <p>The knowledge bank connects WCAG to practical accessibility work: disability context, UX, semantic HTML, visual design, input methods, forms, media, SPAs, ARIA widgets, testing, screen readers, usability, and legal conformance.</p>
        <div class="actions"><a class="button" href="#library">Open reference library</a></div>
      </article>
    </section>
    <section class="domain-grid">
      ${Object.entries(byPrinciple).map(([principle, list]) => `
        <a class="card" href="#lessons">
          <span class="badge">${list.length} criteria</span>
          <h2>${esc(principle)}</h2>
          <p>${esc(PRINCIPLE_SUMMARIES[principle])}</p>
        </a>
      `).join("")}
    </section>
  `);
}

function filters() {
  const hasFilters = Boolean(state.query.trim()) || state.level !== "all" || state.principle !== "all";
  return `
    <div class="toolbar ${hasFilters ? "is-filtering" : ""}" role="search" aria-label="Search and filter standards">
      <label class="search">Search standards <input id="search" type="search" value="${esc(state.query)}" placeholder="Try focus, captions, errors, 1.4.3..." autocomplete="off" /></label>
      <label>Level <select id="level">
        ${["all", "A", "AA", "AAA"].map((level) => `<option value="${level}" ${state.level === level ? "selected" : ""}>${level === "all" ? "All" : level}</option>`).join("")}
      </select></label>
      <label>Principle <select id="principle">
        ${["all", "Perceivable", "Operable", "Understandable", "Robust"].map((principle) => `<option value="${principle}" ${state.principle === principle ? "selected" : ""}>${principle === "all" ? "All" : principle}</option>`).join("")}
      </select></label>
      ${hasFilters ? `<button type="button" class="button" data-clear-criteria-search>Reset filters</button>` : ""}
    </div>
  `;
}

function renderLessons() {
  const list = criteria();
  const hasFilters = Boolean(state.query.trim()) || state.level !== "all" || state.principle !== "all";
  return layout(`
    ${pageTitle("Lessons", "All WCAG 2.2 lessons", "Every criterion gets a plain-language explanation, a real-life example, a common trap, and a practical test routine.")}
    ${filters()}
    <div class="result-summary ${hasFilters ? "is-filtering" : ""}" role="status" aria-live="polite">
      <strong>${list.length === 1 ? "1 lesson found" : `${list.length} lessons found`}</strong>
      <span>${hasFilters ? "Filters are active." : "Showing the full WCAG 2.2 lesson set."}</span>
    </div>
    <section class="lesson-list" aria-label="Lesson list">
      ${list.length ? list.map((sc) => `
        <a class="lesson-row" href="#lesson/${sc.id}">
          <span>
            <span class="badge level-${sc.level.toLowerCase()}">${esc(sc.level)}</span>
            <h2>${esc(sc.num)} ${esc(sc.title)}</h2>
            <p>${esc(sc.principle)} / ${esc(sc.guidelineTitle)}. ${esc(plainExplanation(sc))}</p>
          </span>
          <span class="badge">${progress[sc.id]?.studied ? "studied" : "open"}</span>
        </a>
      `).join("") : `
        <div class="empty-state panel">
          <h2>No lessons found.</h2>
          <p>Try a different keyword, level, or principle.</p>
        </div>
      `}
    </section>
  `);
}

function renderLesson(id) {
  const sc = getCriterion(id);
  return layout(`
    ${pageTitle(`${sc.principle} / Level ${sc.level}`, `${sc.num} ${sc.title}`, `${sc.guidelineTitle}: ${sc.contentText.slice(0, 220)}${sc.contentText.length > 220 ? "..." : ""}`)}
    <div class="lesson-layout">
      <article class="panel">
        <div class="plain-box">
          <h2>In one sentence</h2>
          <p><strong>${esc(oneSentence(sc))}</strong></p>
        </div>
        <div class="plain-box">
          <h2>Who this protects</h2>
          <p>${esc(protectedUserNeed(sc))}</p>
        </div>
        <div class="plain-box">
          <h2>Plain English</h2>
          <p>${esc(plainExplanation(sc))}</p>
        </div>
        <div class="example-box">
          <h2>Real-life example</h2>
          <p>${esc(realExample(sc))}</p>
        </div>
        <div class="trap-box">
          <h2>Exam trap</h2>
          <p>${esc(commonTrap(sc))}</p>
        </div>
        <h2>How to test it</h2>
        <ol>${testSteps(sc).map((step) => `<li>${esc(step)}</li>`).join("")}</ol>
        <h2>Memory hook</h2>
        <p>Ask: <strong>what would break if the user cannot rely on the default screen, mouse, sound, memory, or timing?</strong> That question usually reveals the criterion faster than memorising the title.</p>
        <div class="example-box">
          <h2>Try it now</h2>
          <p>Open any real page and find one place this criterion could matter. Say out loud: <strong>the user needs...</strong> Then finish the sentence before looking at the WCAG wording.</p>
        </div>
        <div class="actions">
          <button type="button" class="button primary" data-mark="${esc(sc.id)}">Mark studied</button>
          <a class="button" href="#quiz/${sc.id}">Quiz this criterion</a>
          <a class="button" href="#lessons">Back to lessons</a>
        </div>
      </article>
      <aside class="source-panel">
        <h2>Sources and references</h2>
        <p class="muted">Use these for exact wording and technique detail.</p>
        ${officialLinks(sc).map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`).join("")}
      </aside>
    </div>
  `);
}

function renderCourse() {
  return layout(`
    ${pageTitle("Study map", "Accessibility study roadmap", "A standards-first path through the skills needed for practical accessibility work, from human context to conformance evidence.")}
    <section class="grid two">
      ${COURSE_METHODS.map((topic, index) => `
        <article class="card">
          <span class="badge">Module ${index + 1}</span>
          <h2>${esc(topic.split(":")[0])}</h2>
          <p>${esc(topic)}</p>
        </article>
      `).join("")}
    </section>
    <section class="panel">
      <h2>How to use this map</h2>
      <ol>
        <li>Study the plain-language lesson for the criterion.</li>
        <li>Read the official WCAG wording and Understanding page.</li>
        <li>Test a real interface state, not only a perfect demo state.</li>
        <li>Take the difficult quiz until close distractors stop fooling you.</li>
      </ol>
    </section>
  `);
}

function renderLibrary() {
  return layout(`
    ${pageTitle("Reference library", "Expanded accessibility knowledge map", "Original study guidance organized around public standards, WAI learning resources, and practical testing responsibilities.")}
    <section class="grid two">
      ${COURSE_LIBRARY.map((course) => `
        <article class="card">
          <span class="badge">${esc(course.source)}</span>
          <h2>${esc(course.title)}</h2>
          <p>${esc(course.takeaway)}</p>
          <h3>Bank topics</h3>
          <ul>${course.topics.map((topic) => `<li>${esc(topic)}</li>`).join("")}</ul>
        </article>
      `).join("")}
    </section>
  `);
}

function tutorialCategories() {
  return ["all", ...new Set(TUTORIAL_RECORDS.map((tutorial) => tutorial.category))];
}

function tutorialSearchText(tutorial) {
  return [
    tutorial.title,
    tutorial.description,
    tutorial.category,
    tutorial.topic,
    tutorial.difficulty,
    tutorial.level,
    tutorial.example,
    tutorial.practice,
    tutorial.check,
    ...tutorial.tags,
    ...tutorial.wcagRefs,
    ...tutorial.teach
  ].join(" ").toLowerCase();
}

function filteredTutorials() {
  const query = state.tutorialQuery.trim().toLowerCase();
  return TUTORIAL_RECORDS.filter((tutorial) => {
    const categoryMatch = state.tutorialCategory === "all" || tutorial.category === state.tutorialCategory;
    const queryMatch = !query || tutorialSearchText(tutorial).includes(query);
    return categoryMatch && queryMatch;
  });
}

function tutorialPagination(total) {
  const pageCount = Math.max(1, Math.ceil(total / TUTORIAL_PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, state.tutorialPage), pageCount);
  state.tutorialPage = currentPage;
  const start = (currentPage - 1) * TUTORIAL_PAGE_SIZE;
  return {
    pageCount,
    currentPage,
    start,
    end: Math.min(start + TUTORIAL_PAGE_SIZE, total)
  };
}

function renderTutorialCard(tutorial) {
  return `
    <article class="tutorial-result card">
      <div class="tutorial-card-head">
        <span class="badge">${esc(tutorial.category)}</span>
        <span class="badge">${esc(tutorial.difficulty)}</span>
      </div>
      <h2>${esc(tutorial.title)}</h2>
      <p>${esc(tutorial.description)}</p>
      <dl class="tutorial-meta">
        <div><dt>Topic</dt><dd>${esc(tutorial.topic)}</dd></div>
        <div><dt>WCAG</dt><dd>${tutorial.wcagRefs.map((num) => `<a href="#lesson/${getCriterion(num).id}">${esc(num)}</a>`).join(", ")}</dd></div>
      </dl>
      <div class="tag-list" aria-label="Tutorial tags">
        ${tutorial.tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}
      </div>
      <details class="tutorial-details">
        <summary>View study steps</summary>
        <h3>Learn it</h3>
        <ol>${tutorial.teach.map((step) => `<li>${esc(step)}</li>`).join("")}</ol>
        <div class="example-box"><h3>Example</h3><p>${esc(tutorial.example)}</p></div>
        <div class="plain-box"><h3>Practice</h3><p>${esc(tutorial.practice)}</p></div>
        <div class="trap-box"><h3>Review prompt</h3><p>${esc(tutorial.check)}</p></div>
      </details>
      <div class="actions">
        <a class="button primary" href="#guided">Start guided review</a>
        <a class="button" href="#quiz/${getCriterion(tutorial.wcagRefs[0]).id}">Practice quiz</a>
      </div>
    </article>
  `;
}

function renderTutorialPagination(pageInfo, total) {
  if (total === 0) return "";
  const pages = Array.from({ length: pageInfo.pageCount }, (_, index) => index + 1);
  return `
    <nav class="pagination" aria-label="Tutorial results pages">
      <button type="button" class="button" data-tutorial-page="${pageInfo.currentPage - 1}" ${pageInfo.currentPage === 1 ? "disabled" : ""}>Previous</button>
      <ol>
        ${pages.map((page) => `
          <li>
            <button
              type="button"
              class="pagination-page"
              data-tutorial-page="${page}"
              ${page === pageInfo.currentPage ? 'aria-current="page"' : ""}
              aria-label="Page ${page} of ${pageInfo.pageCount}"
            >${page}</button>
          </li>
        `).join("")}
      </ol>
      <button type="button" class="button" data-tutorial-page="${pageInfo.currentPage + 1}" ${pageInfo.currentPage === pageInfo.pageCount ? "disabled" : ""}>Next</button>
    </nav>
  `;
}

function renderStandardCard(sc) {
  return `
    <article class="standard-card card">
      <div class="standard-card-head">
        <span class="criterion-number">${esc(sc.num)}</span>
        <span class="badge level-${sc.level.toLowerCase()}">Level ${esc(sc.level)}</span>
        <span class="badge">${esc(sc.principle)}</span>
      </div>
      <h2>${esc(sc.title)}</h2>
      <p>${esc(oneSentence(sc))}</p>
      <dl class="tutorial-meta">
        <div><dt>Guideline</dt><dd>${esc(sc.guidelineTitle)}</dd></div>
        <div><dt>Evidence to collect</dt><dd>${esc(testSteps(sc).slice(1, 3).join(" "))}</dd></div>
      </dl>
      <details class="tutorial-details">
        <summary>Read plain-English detail</summary>
        <p>${esc(plainExplanation(sc))}</p>
        <p><strong>Common trap:</strong> ${esc(commonTrap(sc))}</p>
      </details>
      <div class="actions">
        <a class="button primary" href="#lesson/${sc.id}">Open lesson</a>
        <a class="button" href="#quiz/${sc.id}">Quiz this</a>
        <a class="button" href="https://www.w3.org/WAI/WCAG22/Understanding/${sc.id}.html" target="_blank" rel="noopener noreferrer">Official doc</a>
      </div>
    </article>
  `;
}

function renderStandardPagination(pageInfo, total) {
  if (total === 0) return "";
  const pages = Array.from({ length: pageInfo.pageCount }, (_, index) => index + 1);
  return `
    <nav class="pagination" aria-label="Standards results pages">
      <button type="button" class="button" data-standard-page="${pageInfo.currentPage - 1}" ${pageInfo.currentPage === 1 ? "disabled" : ""}>Previous</button>
      <ol>
        ${pages.map((page) => `
          <li>
            <button
              type="button"
              class="pagination-page"
              data-standard-page="${page}"
              ${page === pageInfo.currentPage ? 'aria-current="page"' : ""}
              aria-label="Standards page ${page} of ${pageInfo.pageCount}"
            >${page}</button>
          </li>
        `).join("")}
      </ol>
      <button type="button" class="button" data-standard-page="${pageInfo.currentPage + 1}" ${pageInfo.currentPage === pageInfo.pageCount ? "disabled" : ""}>Next</button>
    </nav>
  `;
}

function renderTutorials() {
  const tutorials = filteredTutorials();
  const pageInfo = tutorialPagination(tutorials.length);
  const currentTutorials = tutorials.slice(pageInfo.start, pageInfo.end);
  const filteringActive = Boolean(state.tutorialQuery.trim()) || state.tutorialCategory !== "all";
  const resultLabel = tutorials.length === 1 ? "1 tutorial found" : `${tutorials.length} tutorials found`;
  return layout(`
    ${pageTitle("Mini tutorials", "Concept summaries", "Search and review focused tutorials by topic, WCAG reference, category, tag, and difficulty.")}
    <section class="tutorial-dashboard panel" aria-labelledby="tutorial-search-heading">
      <div>
        <h2 id="tutorial-search-heading">Find a tutorial</h2>
        <p>Search the complete tutorial dataset. Results and pagination update together.</p>
      </div>
      <div class="tutorial-controls">
        <label class="search tutorial-search ${filteringActive ? "is-active" : ""}">
          Search tutorials
          <input id="tutorial-search" type="search" value="${esc(state.tutorialQuery)}" placeholder="Try keyboard, forms, contrast, 1.1.1..." autocomplete="off" />
        </label>
        <label>
          Category
          <select id="tutorial-category">
            ${tutorialCategories().map((category) => `<option value="${esc(category)}" ${state.tutorialCategory === category ? "selected" : ""}>${category === "all" ? "All categories" : esc(category)}</option>`).join("")}
          </select>
        </label>
        ${filteringActive ? `<button type="button" class="button" data-clear-tutorial-search>Clear search</button>` : ""}
      </div>
      <div class="result-summary ${filteringActive ? "is-filtering" : ""}" role="status" aria-live="polite">
        <strong>${esc(resultLabel)}</strong>
        ${tutorials.length ? `<span>Showing ${pageInfo.start + 1}-${pageInfo.end} of ${tutorials.length}. Page ${pageInfo.currentPage} of ${pageInfo.pageCount}.</span>` : `<span>No tutorials found. Try a different keyword.</span>`}
      </div>
    </section>
    <section class="tutorial-results" aria-label="Tutorial search results">
      ${currentTutorials.length ? currentTutorials.map(renderTutorialCard).join("") : `
        <div class="empty-state panel">
          <h2>No tutorials found.</h2>
          <p>Try a different keyword, WCAG reference, category, or tag.</p>
        </div>
      `}
    </section>
    ${renderTutorialPagination(pageInfo, tutorials.length)}
  `);
}

function guidedProgressLabel() {
  return `${Math.min(state.guidedIndex + 1, GUIDED_STEPS.length)} of ${GUIDED_STEPS.length}`;
}

function renderGuided() {
  const index = Math.max(0, Math.min(state.guidedIndex, GUIDED_STEPS.length - 1));
  state.guidedIndex = index;
  const step = GUIDED_STEPS[index];
  const relatedCriterion = getCriterion(step.related[0]);
  const percent = Math.round(((index + 1) / GUIDED_STEPS.length) * 100);
  return layout(`
    ${pageTitle("Guided study", "Focused concept review", "Review one concept card at a time, then open an example, jump to the related lesson, or practise with a quiz.")}
    <section class="guided-wrap">
      <article class="guided-card panel" aria-labelledby="guided-title" aria-describedby="guided-help guided-body">
        <div class="guided-toolbar" aria-label="Guided learning status">
          <span class="meta-tag">Step ${esc(guidedProgressLabel())}</span>
          <span class="meta-tag">${esc(step.kind)}</span>
        </div>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${GUIDED_STEPS.length}" aria-valuenow="${index + 1}" aria-label="Guided progress ${percent}%"><span style="width:${percent}%"></span></div>
        <p class="eyebrow">${esc(step.prompt)}</p>
        <h2 id="guided-title">${esc(step.title)}</h2>
        <p id="guided-body" class="guided-big">${esc(step.body)}</p>
        ${state.guidedExampleOpen ? `
          <div class="example-box">
            <h3>Another example</h3>
            <p>${esc(step.example)}</p>
          </div>
        ` : ""}
        <div class="trap-box">
          <h3>Review prompt</h3>
          <p>${esc(step.check)}</p>
        </div>
        <div class="actions">
          <button type="button" class="button primary" data-guided-next>Mark reviewed</button>
          <button type="button" class="button" data-guided-example aria-expanded="${state.guidedExampleOpen ? "true" : "false"}">${state.guidedExampleOpen ? "Hide example" : "Show example"}</button>
          <a class="button" href="#quiz/${relatedCriterion.id}">Practice quiz</a>
          <a class="button" href="#lesson/${relatedCriterion.id}">Open full lesson</a>
        </div>
        <p class="muted">Related criteria: ${step.related.map((num) => `<a href="#lesson/${getCriterion(num).id}">${esc(num)}</a>`).join(", ")}</p>
      </article>
      <aside class="source-panel" id="guided-help">
        <h2>How to use this mode</h2>
        <ol>
          <li>Read the concept card.</li>
          <li>Review the example.</li>
          <li>Open the full lesson for context.</li>
          <li>Use the practice quiz for recall.</li>
        </ol>
        <button type="button" class="button" data-guided-reset>Restart guided mode</button>
      </aside>
    </section>
  `);
}

function renderBank() {
  const list = criteria();
  const pageInfo = paginate(list.length, state.standardPage, STANDARD_PAGE_SIZE);
  state.standardPage = pageInfo.currentPage;
  const visibleStandards = list.slice(pageInfo.start, pageInfo.end);
  const hasFilters = Boolean(state.query.trim()) || state.level !== "all" || state.principle !== "all";
  return layout(`
    ${pageTitle("Standards", "Searchable WCAG 2.2 reference", "Find the criterion, level, principle, plain-English meaning, evidence to collect, related lesson, and practice quiz.")}
    ${filters()}
    <div class="result-summary ${hasFilters ? "is-filtering" : ""}" role="status" aria-live="polite">
      <strong>${list.length === 1 ? "1 standard found" : `${list.length} standards found`}</strong>
      ${list.length ? `<span>Showing ${pageInfo.start + 1}-${pageInfo.end} of ${list.length}. Page ${pageInfo.currentPage} of ${pageInfo.pageCount}.</span>` : `<span>No standards found. Try a different keyword, level, or principle.</span>`}
    </div>
    <section class="panel">
      <h2>Expanded course knowledge areas</h2>
      <p class="muted">Use these areas to connect WCAG criteria with the kinds of product work where issues usually appear.</p>
      <div class="mini-grid">
        ${COURSE_LIBRARY.map((course) => `
          <div class="mini">
            <strong>${esc(course.title)}</strong>
            <span>${esc(course.topics.slice(0, 4).join(", "))}</span>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="standards-grid" aria-label="Standards search results">
      ${visibleStandards.length ? visibleStandards.map(renderStandardCard).join("") : `
        <div class="empty-state panel">
          <h2>No standards found.</h2>
          <p>Try a different keyword, level, or principle.</p>
        </div>
      `}
    </section>
    ${renderStandardPagination(pageInfo, list.length)}
    <details class="panel">
      <summary><strong>Open compact criteria table</strong> <span class="muted">${list.length} filtered rows. Best for quick comparison.</span></summary>
      <div class="table-wrap">
      <table>
        <thead><tr><th>SC</th><th>Level</th><th>Plain-language meaning</th><th>Common evidence</th></tr></thead>
        <tbody>
          ${list.map((sc) => `
            <tr>
              <td><a href="#lesson/${sc.id}">${esc(sc.num)} ${esc(sc.title)}</a></td>
              <td>${esc(sc.level)}</td>
              <td>${esc(plainExplanation(sc))}</td>
              <td>${esc(testSteps(sc).slice(1, 4).join(" "))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      </div>
    </details>
  `);
}

function makeQuestion(sc, index = 0) {
  const pool = successCriteria.filter((other) => other.id !== sc.id && (other.principle === sc.principle || other.level === sc.level));
  const distractors = pool.slice(index, index + 8).sort((a, b) => a.num.localeCompare(b.num)).slice(0, 3);
  const choices = [sc, ...distractors].sort((a, b) => a.title.localeCompare(b.title));
  return {
    sc,
    prompt: `A tester finds this issue: ${realExample(sc)} Which WCAG success criterion is the best match?`,
    choices,
    answer: sc.id,
    explanation: `The best match is ${sc.num} ${sc.title}. ${commonTrap(sc)}`
  };
}

function startQuiz(targetId = null, count = 10) {
  const filteredPool = criteria();
  const pool = targetId ? [getCriterion(targetId)] : filteredPool.length ? filteredPool : successCriteria;
  const expanded = [];
  for (let i = 0; i < count; i += 1) {
    expanded.push(makeQuestion(pool[i % pool.length], i));
  }
  state.quiz = { questions: expanded, index: 0, score: 0, answered: [], targetId, count };
  state.selected = null;
}

function renderQuiz(targetId = null, exam = false) {
  const expectedCount = exam ? 25 : 10;
  if (!state.quiz || state.quiz.targetId !== targetId || state.quiz.count !== expectedCount) {
    startQuiz(targetId, expectedCount);
  }
  const quiz = state.quiz;
  const done = quiz.index >= quiz.questions.length;
  if (done) {
    const percent = Math.round((quiz.score / quiz.questions.length) * 100);
    return layout(`
      ${pageTitle(exam ? "Exam result" : "Quiz result", `${percent}% score`, "Review missed questions, then go back to the lessons for weak criteria.")}
      <section class="panel">
        <p>You scored <strong>${quiz.score}</strong> out of <strong>${quiz.questions.length}</strong>.</p>
        <div class="actions">
          <button type="button" class="button primary" data-restart="${exam ? "exam" : "quiz"}">Try again</button>
          <a class="button" href="#lessons">Study lessons</a>
        </div>
      </section>
      <section class="grid">
        ${quiz.answered.map((a, i) => `
          <article class="card">
            <span class="badge">${a.correct ? "Correct" : "Review"}</span>
            <h2>Question ${i + 1}: ${esc(a.question.sc.num)} ${esc(a.question.sc.title)}</h2>
            <p>${esc(a.question.explanation)}</p>
          </article>
        `).join("")}
      </section>
    `);
  }

  const question = quiz.questions[quiz.index];
  return layout(`
    ${pageTitle(exam ? "Exam practice" : "Difficult quiz", exam ? "Mixed WCAG 2.2 exam simulator" : "Close-distractor quiz", "These questions are intentionally tricky. The goal is to recognise the protected user outcome, not just the familiar words.")}
    <section class="question">
      <span class="badge">Question ${quiz.index + 1} of ${quiz.questions.length}</span>
      <h2>${esc(question.prompt)}</h2>
      <div class="options-list">
        ${question.choices.map((choice) => {
          const answered = state.selected;
          const klass = answered && choice.id === question.answer ? "correct" : answered === choice.id ? "wrong" : "";
          const stateText = answered && choice.id === question.answer ? "Correct answer" : answered === choice.id ? "Selected answer" : "";
          return `<button type="button" class="option ${klass}" data-answer="${esc(choice.id)}" ${answered ? "disabled" : ""}>
            <strong>${esc(choice.num)} ${esc(choice.title)}</strong>
            <span class="muted"> ${esc(choice.principle)} / Level ${esc(choice.level)}</span>
            ${stateText ? `<span class="answer-state">${esc(stateText)}</span>` : ""}
          </button>`;
        }).join("")}
      </div>
      ${state.selected ? `<div class="feedback" role="status" aria-live="polite"><strong>${state.selected === question.answer ? "Correct." : "Not quite."}</strong> ${esc(question.explanation)}</div>` : ""}
      <div class="actions">
        ${state.selected ? `<button type="button" class="button primary" data-next-question>Next question</button>` : ""}
        <a class="button" href="#lesson/${question.sc.id}">Study this criterion</a>
      </div>
    </section>
  `);
}

function renderGlossary() {
  return layout(`
    ${pageTitle("Glossary", "Accessibility terms", "Short definitions for common WCAG, testing, and assistive technology terms.")}
    <section class="grid two">
      ${GLOSSARY.map(([term, definition]) => `
        <article class="card">
          <h2>${esc(term)}</h2>
          <p>${esc(definition)}</p>
        </article>
      `).join("")}
    </section>
  `);
}

function renderDocs() {
  return layout(`
    ${pageTitle("Documentation", "Official sources used by this trainer", "The trainer is original teaching material, but it points learners back to public standards for exact requirements and deeper examples.")}
    <section class="panel">
      <h2>How the documentation is used</h2>
      <ol>
        <li><strong>WCAG 2.2</strong> gives the exact requirement.</li>
        <li><strong>Understanding WCAG</strong> explains the intent and examples.</li>
        <li><strong>WAI cognitive accessibility guidance</strong> shapes the way lessons are chunked, repeated, and written in plain language.</li>
        <li><strong>WAI-ARIA/APG</strong> guides custom-control semantics and keyboard behavior.</li>
      </ol>
    </section>
    <section class="grid two">
      ${OFFICIAL_DOCS.map((doc) => `
        <article class="card">
          <h2>${esc(doc.title)}</h2>
          <p>${esc(doc.use)}</p>
          <p><a href="${doc.url}" target="_blank" rel="noopener noreferrer">Open official documentation</a></p>
        </article>
      `).join("")}
    </section>
  `);
}

function render() {
  state.route = slugFromHash();
  const hashParts = window.location.hash.replace(/^#\/?/, "").split("/");
  const id = hashParts[1];
  if (state.route !== "quiz" && state.route !== "exam") {
    state.quiz = null;
    state.selected = null;
  }

  if (state.route === "home") app.innerHTML = renderHome();
  if (state.route === "course") app.innerHTML = renderCourse();
  if (state.route === "library") app.innerHTML = renderLibrary();
  if (state.route === "tutorials") app.innerHTML = renderTutorials();
  if (state.route === "guided") app.innerHTML = renderGuided();
  if (state.route === "lessons") app.innerHTML = renderLessons();
  if (hashParts[0] === "lesson") app.innerHTML = renderLesson(id);
  if (state.route === "bank") app.innerHTML = renderBank();
  if (state.route === "quiz") app.innerHTML = renderQuiz(id, false);
  if (state.route === "exam") app.innerHTML = renderQuiz(null, true);
  if (state.route === "glossary") app.innerHTML = renderGlossary();
  if (state.route === "docs") app.innerHTML = renderDocs();

  document.querySelector("#search")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.standardPage = 1;
    render();
  });
  document.querySelector("#level")?.addEventListener("change", (event) => {
    state.level = event.target.value;
    state.standardPage = 1;
    render();
  });
  document.querySelector("#principle")?.addEventListener("change", (event) => {
    state.principle = event.target.value;
    state.standardPage = 1;
    render();
  });
  document.querySelector("[data-clear-criteria-search]")?.addEventListener("click", () => {
    state.query = "";
    state.level = "all";
    state.principle = "all";
    state.standardPage = 1;
    announce("Filters reset.");
    render();
  });
  document.querySelector("#tutorial-search")?.addEventListener("input", (event) => {
    state.tutorialQuery = event.target.value;
    state.tutorialPage = 1;
    render();
  });
  document.querySelector("#tutorial-category")?.addEventListener("change", (event) => {
    state.tutorialCategory = event.target.value;
    state.tutorialPage = 1;
    render();
  });
  document.querySelector("[data-clear-tutorial-search]")?.addEventListener("click", () => {
    state.tutorialQuery = "";
    state.tutorialCategory = "all";
    state.tutorialPage = 1;
    announce("Tutorial search cleared.");
    render();
  });
  document.querySelectorAll("[data-tutorial-page]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const page = Number(event.currentTarget.dataset.tutorialPage);
      if (Number.isFinite(page)) {
        state.tutorialPage = page;
        announce(`Tutorial results page ${page}.`);
        render();
      }
    });
  });
  document.querySelectorAll("[data-standard-page]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const page = Number(event.currentTarget.dataset.standardPage);
      if (Number.isFinite(page)) {
        state.standardPage = page;
        announce(`Standards results page ${page}.`);
        render();
      }
    });
  });
  document.querySelector("[data-mark]")?.addEventListener("click", (event) => markStudied(event.currentTarget.dataset.mark));
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const question = state.quiz.questions[state.quiz.index];
      state.selected = event.currentTarget.dataset.answer;
      const correct = state.selected === question.answer;
      if (correct) state.quiz.score += 1;
      state.quiz.answered.push({ question, selected: state.selected, correct });
      render();
    });
  });
  document.querySelector("[data-next-question]")?.addEventListener("click", () => {
    state.quiz.index += 1;
    state.selected = null;
    render();
  });
  document.querySelector("[data-restart]")?.addEventListener("click", (event) => {
    startQuiz(null, event.currentTarget.dataset.restart === "exam" ? 25 : 10);
    render();
  });
  document.querySelector("[data-guided-next]")?.addEventListener("click", () => {
    state.guidedIndex = Math.min(state.guidedIndex + 1, GUIDED_STEPS.length - 1);
    state.guidedExampleOpen = false;
    saveGuidedIndex();
    announce("Next guided learning card.");
    render();
  });
  document.querySelector("[data-guided-example]")?.addEventListener("click", () => {
    state.guidedExampleOpen = !state.guidedExampleOpen;
    render();
  });
  document.querySelector("[data-guided-reset]")?.addEventListener("click", () => {
    state.guidedIndex = 0;
    state.guidedExampleOpen = false;
    saveGuidedIndex();
    announce("Guided mode restarted.");
    render();
  });
}

window.addEventListener("hashchange", render);
render();

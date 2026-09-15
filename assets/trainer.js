import { successCriteria } from "./questionbank-DZXLgNQi.js";

const ACTIVE_WCAG_LEVELS = new Set(["A", "AA", "AAA"]);
const ACTIVE_SUCCESS_CRITERIA = successCriteria.filter(({ level }) => ACTIVE_WCAG_LEVELS.has(level));

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
  },
  {
    title: "Section 508 and EAA readiness",
    source: "Section508.gov, EUR-Lex, European Commission, and Your Europe guidance",
    topics: ["Section 508 scope", "EAA scope", "covered products", "official communications", "conformity evidence", "exceptions"],
    takeaway: "Regulatory readiness means knowing what is covered, which technical requirements apply, what evidence proves the outcome, and when an exception must be escalated."
  }
];

const SOURCE_COURSE_PATHS = [
  {
    title: "IAAP CPACC Certification Preparation 3.0",
    purpose: "Build the disability, accessibility law, standards, and inclusive-design foundation before moving into technical WCAG testing.",
    courses: [
      { title: "IAAP Certification Quick Guide", status: 85 },
      { title: "IAAP CPACC Certification Preparation 3.0 (2026)", status: 0 }
    ],
    assessments: [
      { title: "Take graded exam now", status: 75 }
    ]
  },
  {
    title: "Web Accessibility Deep Dive & IAAP WAS Certification Preparation 2.2",
    purpose: "Turn WCAG into practical product testing skill: semantics, visual design, input methods, forms, media, SPAs, ARIA, testing tools, screen readers, and usability.",
    courses: [
      { title: "IAAP Certification Quick Guide", status: 85 },
      { title: "Accessibility Fundamentals - Disabilities, Guidelines, and Laws", status: 100 },
      { title: "Designing an Accessible User Experience", status: 100 },
      { title: "Semantic Structure and Navigation (with WCAG 2.2 updates)", status: 50 },
      { title: "Visual Design and Colors (with WCAG 2.2 updates)", status: 100 },
      { title: "Device-Independent Input Methods (with WCAG 2.2 updates)", status: 8 },
      { title: "Form Labels, Instructions, and Validation (with WCAG 2.2 updates)", status: 4 },
      { title: "Images, SVG, and Canvas", status: 26 },
      { title: "Responsive Design and Zoom", status: 3 },
      { title: "Multimedia, Animations, and Motion: The Basics", status: 0 },
      { title: "Multimedia, Animations, and Motion: Advanced", status: 0 },
      { title: "Dynamic Updates, AJAX, and Single-Page Apps", status: 5 },
      { title: "Custom ARIA/JavaScript Components", status: 1 },
      { title: "Web Accessibility Testing: Basic Methods and Tools", status: 1 },
      { title: "Web Accessibility Testing: Screen Readers", status: 1 },
      { title: "Usability Testing for Accessibility", status: 12 },
      { title: "Angular Accessibility", status: 4 }
    ],
    assessments: [
      { title: "Take graded exam now", status: 75 }
    ]
  },
  {
    title: "Reference Materials for Conformance Testing",
    purpose: "Convert standards knowledge into formal audit methodology for WCAG, EN 301 549, and Section 508 evidence.",
    courses: [
      { title: "WCAG 2.0 & 2.1 Conformance Testing, Detailed Methodology", status: 10 },
      { title: "WCAG 2.2 Conformance Testing, Detailed Methodology", status: 100 },
      { title: "EN 301-549 (v. 3.2.1) Conformance Testing, Detailed Methodology", status: 0 },
      { title: "Section 508 (2017) Conformance Testing, Detailed Methodology", status: 0 },
      { title: "European Accessibility Act Readiness, Scope, and Evidence", status: 0 }
    ]
  },
  {
    title: "Other Courses",
    purpose: "Practice implementation and testing workflows until accessibility evidence can be written clearly and reproduced.",
    courses: [
      { title: "Semantic Structure and Navigation (WCAG 2.1)", status: 1 },
      { title: "Visual Design and Colors (WCAG 2.1)", status: 2 },
      { title: "Device-Independent Input Methods (WCAG 2.1)", status: 2 },
      { title: "Form Labels, Instructions, and Validation (WCAG 2.1)", status: 2 },
      { title: "Custom JavaScript/ARIA Widgets (2025)", status: 1 },
      { title: "Fast Track to Accessibility for Web Developers, Part 1: Core Techniques", status: 100 },
      { title: "Fast Track to Accessibility for Web Developers, Part 2: Advanced Techniques", status: 100 },
      { title: "IAAP CPACC Certification Preparation (2024)", status: 24 },
      { title: "Fast Track to Accessibility for QA Testers 1.0", status: 10 },
      { title: "Fast Track to Accessibility for QA Testers 2.0", status: 4 }
    ],
    assessments: [
      { title: "Developer fast track part 1 graded exam", status: 75 },
      { title: "Developer fast track part 2 graded exam", status: 75 },
      { title: "QA testers 1.0 exam failed", status: 10 },
      { title: "Retake QA testers 1.0 graded exam", status: 10 },
      { title: "QA testers 2.0 graded exam", status: 75 }
    ]
  }
];

const PEDAGOGY_STEPS = [
  "Preview the purpose: know the barrier, the affected user, and the WCAG principle before reading details.",
  "Study one small concept: keep the chunk narrow enough to explain without jargon.",
  "Look at a real interface state: normal, error, hover, focus, mobile, zoom, and dynamic update states count.",
  "Write the evidence: state the user impact, the failing condition, the exact criterion, and a reproducible step.",
  "Quiz with close distractors: choose by protected user outcome, not by familiar keywords.",
  "Teach it back: explain the rule in one sentence, one example, and one common trap."
];

const SOURCE_TOC_COVERAGE = [
  { title: "IAAP Certification Quick Guide", pages: 6, lane: "Certification orientation", sample: ["Introduction", "CPACC Certification Exam Guide", "WAS Certification Exam Guide", "ADS Certification Exam Guide"] },
  { title: "IAAP CPACC Certification Preparation 3.0 (2026)", pages: 170, lane: "CPACC foundation", sample: ["About CPACC Certification", "Why Certify?", "Who Should Certify?", "Exam Topics - CPACC Content Outline"] },
  { title: "Accessibility Fundamentals - Disabilities, Guidelines, and Laws", pages: 34, lane: "People and policy", sample: ["Types of Disabilities: Personas", "Blind", "Low Vision", "Motor Disabilities"] },
  { title: "Designing an Accessible User Experience", pages: 46, lane: "Inclusive UX", sample: ["Accessibility and Inclusive Design", "7 Principles of Universal Design", "Avoid Exclusive Design Patterns", "Examine Assumptions"] },
  { title: "Semantic Structure and Navigation (WCAG 2.2)", pages: 94, lane: "Structure and navigation", sample: ["Page Title", "Meaningful Page Title", "Language", "Navigation"] },
  { title: "Visual Design and Colors (WCAG 2.2)", pages: 38, lane: "Visual accessibility", sample: ["Color that Conveys Meaning", "Color to Distinguish Links from Text", "Contrast", "Focus Visibility"] },
  { title: "Device-Independent Input Methods (WCAG 2.2)", pages: 36, lane: "Input methods", sample: ["Click Target Size", "Pointer Cancellation", "Keyboard Input", "Keyboard Shortcuts"] },
  { title: "Form Labels, Instructions, and Validation (WCAG 2.2)", pages: 44, lane: "Forms and errors", sample: ["Semantic Labels", "Meaningful Label Text", "Placeholder Text as Labels", "Error Identification"] },
  { title: "Images, SVG, and Canvas", pages: 53, lane: "Text alternatives", sample: ["Informative Images", "Decorative or Redundant Images", "Actionable Images", "Canvas"] },
  { title: "Responsive Design and Zoom", pages: 26, lane: "Zoom and reflow", sample: ["Responsive Design is Low Vision Design", "CSS Media Queries", "Responsive Forms", "Zoom"] },
  { title: "Multimedia, Animations, and Motion: The Basics", pages: 30, lane: "Media basics", sample: ["Multimedia Accessibility Decision Matrix", "Captions", "Live Events", "Audio Description"] },
  { title: "Multimedia, Animations, and Motion: Advanced", pages: 30, lane: "Media advanced", sample: ["Media Player Accessibility", "Keyboard Accessibility", "Customizability", "Advanced Transcripts"] },
  { title: "Dynamic Updates, AJAX, and Single-Page Apps", pages: 20, lane: "SPA behavior", sample: ["Notifying Users of Changes", "Move the Focus", "ARIA Live", "Time Limits"] },
  { title: "Custom ARIA/JavaScript Components", pages: 62, lane: "ARIA components", sample: ["ARIA Concepts", "Name", "Role", "Component Roles"] },
  { title: "Web Accessibility Testing: Basic Methods and Tools", pages: 57, lane: "Testing workflow", sample: ["Accountability for Testing", "Checklists", "Automated Tools", "Bug Reports"] },
  { title: "Web Accessibility Testing: Screen Readers", pages: 75, lane: "Screen reader testing", sample: ["Screen Reader Basics", "Why Test with Screen Readers?", "NVDA", "Forms"] },
  { title: "Usability Testing for Accessibility", pages: 8, lane: "User research", sample: ["Plan the Test", "Develop the Test", "Conduct A Moderated Test", "Analyze Test Results"] },
  { title: "Angular Accessibility", pages: 21, lane: "Framework accessibility", sample: ["Page View/Titles", "Keyboard Navigation", "Focus Management", "Live Regions and Alerts"] },
  { title: "WCAG 2.0 & 2.1 Conformance Testing, Detailed Methodology", pages: 190, lane: "Conformance method", sample: ["Required Tools", "Interpreting the Guidelines", "Level A", "SC 1.1.1 Non-text Content"] },
  { title: "WCAG 2.2 Conformance Testing, Detailed Methodology", pages: 195, lane: "WCAG 2.2 audit method", sample: ["Getting Started", "Test Platforms", "Understanding WCAG Normative", "Third Party Content and Sites"] },
  { title: "EN 301-549 (v. 3.2.1) Conformance Testing, Detailed Methodology", pages: 176, lane: "EN 301 549 audit method", sample: ["Background", "Testing Tools", "Scoping Considerations", "Clause 5 Generic Requirements"] },
  { title: "Section 508 (2017) Conformance Testing, Detailed Methodology", pages: 157, lane: "Section 508 audit method", sample: ["Background", "Required Tools", "Scoping Considerations", "Chapter 3 Functional Performance Criteria"] },
  { title: "Semantic Structure and Navigation (WCAG 2.1)", pages: 94, lane: "Legacy WCAG 2.1 structure", sample: ["Page Title", "Language", "Headings", "Landmarks"] },
  { title: "Visual Design and Colors (WCAG 2.1)", pages: 38, lane: "Legacy visual design", sample: ["Color", "Contrast", "Images of Text", "Resize Text"] },
  { title: "Device-Independent Input Methods (WCAG 2.1)", pages: 36, lane: "Legacy input methods", sample: ["Mouse Input", "Keyboard Input", "Focus Order", "Keyboard Trap"] },
  { title: "Form Labels, Instructions, and Validation (WCAG 2.1)", pages: 42, lane: "Legacy forms", sample: ["Labels", "Instructions", "Required Fields", "Validation"] },
  { title: "Custom JavaScript/ARIA Widgets (2025)", pages: 58, lane: "Advanced widgets", sample: ["Native vs Custom Components", "Roles", "Names or Labels", "States and Properties"] },
  { title: "Fast Track to Accessibility for Web Developers, Part 1: Core Techniques", pages: 25, lane: "Developer core", sample: ["The Big Concepts in Web Accessibility", "Keyboard Accessibility", "Testing with NVDA", "Semantic HTML"] },
  { title: "Fast Track to Accessibility for Web Developers, Part 2: Advanced Techniques", pages: 19, lane: "Developer advanced", sample: ["The Accessibility Tree", "The Purpose of ARIA", "ARIA Components and Patterns", "Native vs. Custom Components"] },
  { title: "IAAP CPACC Certification Preparation (2024)", pages: 173, lane: "CPACC legacy review", sample: ["About CPACC Certification", "Disability Types", "Accessibility Laws", "Universal Design"] },
  { title: "Fast Track to Accessibility for QA Testers 1.0", pages: 20, lane: "QA testing core", sample: ["Bird's Eye View of the Page", "Mouse Functionality", "Keyboard Functionality", "Color Contrast"] },
  { title: "Fast Track to Accessibility for QA Testers 2.0", pages: 24, lane: "QA testing updated", sample: ["Course Overview", "Customizing NVDA", "Downloading Bookmarklets", "Automated Testing"] }
];

const INTEGRATION_STRATEGY = [
  {
    title: "1. Inventory",
    detail: "Use the source course inventory and each course TOC as a coverage checklist. Store titles, counts, and learning lanes only."
  },
  {
    title: "2. Rewrite",
    detail: "Turn each cluster into original plain-language lessons: user need, barrier, rule, example, fix, and retest."
  },
  {
    title: "3. Connect",
    detail: "Map every lesson to WCAG criteria, practical testing steps, references, and related study paths."
  },
  {
    title: "4. Drill",
    detail: "Create close-distractor quizzes that test reasoning, not keyword memory, then send learners back to weak areas."
  }
];

const QA_TESTER_TRACK = [
  {
    title: "1. Page risk map",
    outcome: "Identify what matters before tools run: regions, forms, custom widgets, dialogs, media, dynamic updates, and risky states.",
    tutorialId: "qa-bird-eye"
  },
  {
    title: "2. Manual interaction checks",
    outcome: "Use keyboard, mouse, touch expectations, zoom, contrast, and focus visibility to find barriers that scanners miss.",
    tutorialId: "keyboard-map"
  },
  {
    title: "3. Screen reader confirmation",
    outcome: "Confirm headings, landmarks, field names, roles, states, error messages, and live updates with a screen reader.",
    tutorialId: "qa-nvda-setup"
  },
  {
    title: "4. Tools and evidence",
    outcome: "Run scanner and bookmarklet checks, verify findings manually, then write clear user-impact evidence.",
    tutorialId: "qa-tools-evidence"
  },
  {
    title: "5. Regression loop",
    outcome: "Retest the exact failing path and nearby states so accessibility fixes stay fixed.",
    tutorialId: "qa-regression-loop"
  }
];

const CPACC_REVIEW_TRACK = [
  {
    title: "1. People and disability context",
    outcome: "Study disability types, assistive technology, environmental barriers, and respectful language as practical product decisions.",
    action: "#tutorials"
  },
  {
    title: "2. Laws, standards, and responsibilities",
    outcome: "Separate legal requirements, organizational policy, technical standards, and ethical responsibility so exam questions feel less tangled.",
    action: "#docs"
  },
  {
    title: "3. Universal and inclusive design",
    outcome: "Turn abstract design principles into concrete product examples: flexibility, simple use, error tolerance, and low effort.",
    action: "#guided"
  },
  {
    title: "4. Plain-language recall",
    outcome: "Review each concept as user need, barrier, practical support, and common trap before attempting difficult questions.",
    action: "#bank"
  },
  {
    title: "5. Exam reasoning",
    outcome: "Practise choosing the best answer by impact and responsibility, not by familiar keywords.",
    action: "#quiz"
  }
];

const REGULATORY_LAST_REVIEWED = "15 September 2026";

const REGULATORY_SOURCES = [
  {
    title: "U.S. Access Board: Revised 508 Standards",
    url: "https://www.access-board.gov/ict/",
    use: "Primary text for the Revised 508 application, scoping, functional-performance, hardware, software, support, and referenced-standard requirements."
  },
  {
    title: "Section508.gov: Applicability and Conformance Requirements",
    url: "https://www.section508.gov/develop/applicability-conformance/",
    use: "Confirms that the Revised 508 Standards incorporate WCAG 2.0 Level AA and apply those criteria to web and non-web electronic content."
  },
  {
    title: "Section508.gov: Determine Which Standards Apply",
    url: "https://www.section508.gov/buy/determine-ict-standards/",
    use: "Use for scoping public-facing content, agency official communications, software, hardware, support documentation, support services, and functional performance criteria."
  },
  {
    title: "European Commission: European Accessibility Act",
    url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en",
    use: "Official overview of the EAA purpose and covered products and services, including consumer ICT, transport, banking, e-books, and e-commerce."
  },
  {
    title: "Your Europe: Accessibility requirements for services and products",
    url: "https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/index_en.htm",
    use: "Business-facing EU guidance on general accessibility rules, applicability after 28 June 2025, exceptions, and conformity assessment."
  },
  {
    title: "EUR-Lex: Directive (EU) 2019/882",
    url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj",
    use: "Primary legal text for exact EAA articles, annexes, scope, accessibility requirements, and transition provisions."
  },
  {
    title: "European Commission news: The EU becomes more accessible for all",
    url: "https://commission.europa.eu/news-and-media/news/eu-becomes-more-accessible-all-2025-07-31_en",
    use: "Current public summary of EAA effects after it came into effect in June 2025, including implementation examples."
  }
];

const SECTION_508_CHAPTERS = [
  {
    chapter: "508 Chapter 1",
    focus: "Application and administration",
    decisions: "Definitions, referenced standards, equivalent facilitation, and the rules used to interpret the rest of the standard.",
    anchors: "E101–E103"
  },
  {
    chapter: "508 Chapter 2",
    focus: "Scoping",
    decisions: "When the standard applies, exceptions, functional performance, electronic content, hardware, software, and support obligations.",
    anchors: "E201–E208"
  },
  {
    chapter: "Chapter 3",
    focus: "Functional performance criteria",
    decisions: "Outcome-based access for users with limited vision, color perception, hearing, speech, manipulation, reach, and cognition.",
    anchors: "301–302"
  },
  {
    chapter: "Chapter 4",
    focus: "Hardware",
    decisions: "Closed functionality, biometrics, privacy, operable parts, displays, status indicators, connections, and multimedia controls.",
    anchors: "401–415"
  },
  {
    chapter: "Chapter 5",
    focus: "Software",
    decisions: "Platform accessibility, assistive-technology interoperability, applications, and authoring-tool output and prompts.",
    anchors: "501–504"
  },
  {
    chapter: "Chapter 6",
    focus: "Support",
    decisions: "Accessible product documentation, accessibility-feature documentation, accommodation of communication needs, and support services.",
    anchors: "601–603"
  },
  {
    chapter: "Chapter 7",
    focus: "Referenced standards",
    decisions: "The precise editions and extent of incorporated standards, including WCAG 2.0 and other technology-specific references.",
    anchors: "701–702"
  }
];

const SECTION_508_SCOPE_STEPS = [
  ["1", "Inventory every ICT component", "Separate content, software, hardware, authoring functions, documentation, and support; a single product can trigger several chapters."],
  ["2", "Evaluate exceptions component by component", "Document the exact exception and owner. An exception for one component does not automatically remove requirements from the others."],
  ["3", "Apply Chapter 2 scoping", "Classify public-facing content, the nine categories of non-public official communication, web/non-web software, hardware, and support."],
  ["4", "Map the technical requirements", "Apply the incorporated WCAG baseline and every relevant non-WCAG chapter; include functional performance where E204 calls for it."],
  ["5", "Write reproducible evidence", "Record requirement, state, steps, expected and actual result, affected users, method, exception status, owner, and retest."],
  ["6", "Keep the decision trail", "Preserve scoping notes, test results, vendor claims, remediation decisions, and approvals instead of reducing conformance to a single badge."]
];

const SECTION_508_OFFICIAL_COMMUNICATIONS = [
  "Emergency notifications",
  "Initial or final decisions adjudicating an administrative claim or proceeding",
  "Internal or external program or policy announcements",
  "Notices of benefits, program eligibility, employment opportunity, or personnel action",
  "Formal acknowledgments of receipt",
  "Survey questionnaires",
  "Templates or forms",
  "Educational or training materials",
  "Intranet content designed as a web page"
];

const SECTION_508_COMPONENT_MATRIX = [
  {
    component: "Public-facing electronic content",
    baseline: "E205.1 and E205.4 apply all WCAG 2.0 A and AA success criteria. Separately, E208 routes ICT support documentation and services to 602 and 603.",
    watch: "Public-facing is broader than an agency website and can include social media, documents, multimedia, or content shown on a kiosk."
  },
  {
    component: "Non-public official communication",
    baseline: "E205 when the content falls within one or more of the nine specified categories.",
    watch: "Delivery by email, text, storage media, download, or intranet does not by itself decide coverage."
  },
  {
    component: "Non-web electronic document",
    baseline: "E205.4 applies WCAG 2.0 A/AA except 2.4.1, 2.4.5, 3.2.3, and 3.2.4. E208 separately applies 602 and 603 to ICT support documentation and services.",
    watch: "The four exclusions are format/scoping adjustments, not permission to ignore structure, reading order, contrast, forms, or alternatives."
  },
  {
    component: "Web-based software",
    baseline: "E207.1 routes software to 502, 503, 504, 602.3, and 603; E207.2 also applies WCAG 2.0 A/AA. Apply Chapter 3 when E204 requires functional performance review.",
    watch: "A browser interface can be both content and software. Component classification must not erase application behavior or AT interoperability."
  },
  {
    component: "Non-web software",
    baseline: "E207.1 routes software to 502, 503, 504, 602.3, and 603. E207.2 also applies WCAG 2.0 A/AA with the four non-web success-criterion exclusions and without WCAG Conformance Requirement 3; E207.3 separately requires every item in a multi-step software process to conform.",
    watch: "Native applications are not evaluated by WCAG alone: platform services, object information, preferences, focus, and documented accessibility features matter."
  },
  {
    component: "Authoring tool",
    baseline: "The applicable software requirements plus 504 Authoring Tools.",
    watch: "Test whether accessible output can be created, whether accessibility information is preserved, and whether prompts or repair assistance are available."
  },
  {
    component: "Hardware or closed functionality",
    baseline: "Chapter 4, including 402 for closed functionality when users cannot attach or install assistive technology; add the applicable display, biometric, voice, and multimedia provisions.",
    watch: "A kiosk may need both hardware testing and separate testing of its content/software; a screen-reader test on the web version is not sufficient evidence."
  },
  {
    component: "Support documentation and services",
    baseline: "602 and 603, including accessible documentation and accommodation of users' communication needs.",
    watch: "A conforming interface does not cancel inaccessible setup guides, undocumented accessibility features, or unusable support channels."
  }
];

const REGULATORY_WCAG_DIFFERENCES = [
  {
    axis: "What it is",
    wcag: "A technical accessibility standard for web content success criteria and conformance levels.",
    section508: "A U.S. federal ICT requirement that uses WCAG 2.0 A/AA for many web, software, and electronic-content checks.",
    eaa: "An EU product and service accessibility law for covered market categories, implemented through Member State law.",
    takeaway: "WCAG tells you how to test many digital barriers. Section 508 and the EAA tell you when that evidence has regulatory consequences."
  },
  {
    axis: "Starting question",
    wcag: "Does this page/content meet the selected WCAG version and level?",
    section508: "Is this federal ICT, public-facing content, agency official communication, software, hardware, documentation, or support?",
    eaa: "Is this a covered product placed on the EU market or a covered service provided after the relevant applicability date?",
    takeaway: "WCAG starts with the interface. Regulations start with scope."
  },
  {
    axis: "Technical baseline",
    wcag: "The trainer teaches WCAG 2.2 for modern product skill and exam readiness.",
    section508: "The Revised 508 Standards incorporate WCAG 2.0 Level A and AA for applicable web and electronic content.",
    eaa: "The EAA sets accessibility outcomes; teams often use harmonised standards such as EN 301 549 to show technical conformity.",
    takeaway: "Do not assume the same WCAG version is the legal baseline in every jurisdiction."
  },
  {
    axis: "What goes beyond ordinary WCAG page testing",
    wcag: "Focuses on content outcomes such as text alternatives, keyboard access, contrast, captions, errors, and robust semantics.",
    section508: "Adds federal ICT scoping, functional performance criteria, software/hardware concerns, authoring tools, support documentation, and support services.",
    eaa: "Adds product/service categories, accessible information and support, conformity assessment, CE marking for products, exceptions, market surveillance, and national implementation.",
    takeaway: "A WCAG pass can be necessary and still not be the full regulatory answer."
  },
  {
    axis: "Evidence students must write",
    wcag: "Criterion, page/state, steps, expected result, actual result, user impact, and retest.",
    section508: "Everything in the WCAG note plus applicable 508 chapter or content type, exception status, and procurement/ACR relevance.",
    eaa: "Everything in the WCAG note plus covered product/service scope, accessibility outcome, conformity evidence, support-channel impact, and national-law follow-up.",
    takeaway: "Regulatory evidence is WCAG evidence plus scope, ownership, and decision trail."
  }
];

const REGULATORY_MODULES = [
  {
    title: "1. Start with WCAG, then ask what the law changes",
    badge: "Triage",
    summary: "Regulatory readiness starts by using WCAG as the testing language, then adding the legal scope question. Students should be able to say what WCAG proves, what it does not prove, and what Section 508 or the EAA changes.",
    learn: [
      "Name the WCAG issue first: user need, failing state, criterion, and evidence.",
      "Then write a one-sentence regulatory scope statement before choosing the legal requirement.",
      "Separate legal scope from technical test scope: law, product/service, platform, audience, release date, and content type.",
      "Flag edge cases for a Section 508 Program Manager, procurement owner, legal counsel, or relevant EU national authority."
    ],
    drill: "Given a checkout, PDF, kiosk, training course, or mobile app, decide whether the first question is Section 508, EAA, both, or neither."
  },
  {
    title: "2. Section 508 specified requirements",
    badge: "United States federal ICT",
    summary: "For U.S. federal ICT, the Revised 508 Standards are the anchor. For web and many electronic content situations, students must know that Section 508 currently incorporates WCAG 2.0 Level A and AA, then adds scoping, support, software, hardware, and functional performance requirements.",
    learn: [
      "Public-facing federal electronic content must be accessible.",
      "Agency official communications can be covered even when they are not public-facing, including emergency notices, benefits notices, forms, surveys, educational materials, and intranet web pages.",
      "Web-based content and software typically require all applicable WCAG A and AA success criteria; non-web electronic content has specific WCAG exceptions.",
      "Do not stop at web pages: support documentation, support services, software interoperability, hardware, authoring tools, and functional performance criteria can matter."
    ],
    drill: "Build a mini ACR note for a federal benefits form: scope, applicable 508 chapter, WCAG evidence, support documentation, and unresolved exceptions."
  },
  {
    title: "3. Current European Accessibility Act readiness",
    badge: "EU products and services",
    summary: "Member States apply the EAA's requirements from 28 June 2025, subject to Article 32 transition provisions and national implementation. Students should learn the covered categories, the functional accessibility outcomes, and the evidence a business needs to explain conformance.",
    learn: [
      "Covered examples include computers and operating systems, smartphones, ATMs, ticketing and check-in machines, consumer banking, passenger transport services, electronic communications, audiovisual media access services, e-books, and e-commerce.",
      "General expectations include cognitive accessibility, assistive technology interoperability, multiple input and output options, consistent navigation, enough time, and avoiding seizure-inducing visuals.",
      "Conformity evidence should describe the product or service, how it meets accessibility requirements, and the technical and design procedures used.",
      "The EAA is an EU directive implemented through Member State law, so final compliance checks need the relevant national implementation and any applicable harmonized standards."
    ],
    drill: "Scope an EU e-commerce checkout: covered service, user journey, WCAG/EN 301 549 evidence to gather, support-channel requirements, and national-law follow-up."
  },
  {
    title: "4. Crosswalk WCAG skill into regulatory evidence",
    badge: "Evidence",
    summary: "WCAG testing skill is necessary but not enough. Students need to translate findings into regulatory evidence: user impact, technical failure, affected requirement, product scope, exception status, and retest plan.",
    learn: [
      "For Section 508, connect each finding to the Revised 508 scoping requirement and the applicable WCAG 2.0 A/AA success criterion or non-WCAG chapter.",
      "For EAA work, connect findings to the covered product/service, Annex I accessibility outcomes, customer support or information obligations, and the technical standard the team is using.",
      "Write evidence that a developer, procurement reviewer, product owner, and auditor can reproduce without guessing.",
      "Treat automated findings as leads; regulatory evidence still needs manual confirmation."
    ],
    drill: "Rewrite a scanner finding as a regulatory note with scope, user impact, applicable requirement, failed state, expected result, and retest method."
  },
  {
    title: "5. Exceptions, transitions, and risk communication",
    badge: "Judgment",
    summary: "Students should be prepared to identify when a claim is outside ordinary testing judgment. Exceptions and transitional rules need evidence and approval; they should not be used casually to avoid fixing barriers.",
    learn: [
      "Keep two routes distinct: a WCAG conforming alternate version must meet WCAG's defined conditions, while Revised 508 E101.2 permits equivalent facilitation only when it provides substantially equivalent or greater accessibility and usability.",
      "EAA guidance includes transition provisions, microenterprise service-provider exceptions, and disproportionate-burden claims that require evidence and periodic review.",
      "When unsure, write the accessibility risk clearly and route the legal decision to the accountable owner.",
      "A good accessibility professional says what was tested, what failed, what is unknown, and who must decide the exception."
    ],
    drill: "Practise saying: 'This is a legal/business exception question. Here is the accessibility evidence, the user impact, and the decision owner.'"
  }
];

const REGULATORY_CROSSWALK = [
  {
    title: "Section 508 baseline",
    standard: "Revised 508",
    details: "Use WCAG 2.0 Level A and AA for web content and many electronic content/software checks, then confirm 508 scoping and chapters for support, software, hardware, authoring tools, and functional performance criteria.",
    action: "#bank"
  },
  {
    title: "EAA baseline",
    standard: "Directive (EU) 2019/882",
    details: "Start with covered product/service scope and the EAA accessibility outcomes. Use EN 301 549/WCAG mapping where appropriate, then confirm the Member State implementation and harmonized standard status.",
    action: "#regulations"
  },
  {
    title: "Shared testing spine",
    standard: "WCAG evidence",
    details: "Keyboard, focus, semantics, names, captions, contrast, reflow, errors, timing, status messages, and cognitive support are the repeatable skill base for both regulatory tracks.",
    action: "#tutorials"
  },
  {
    title: "Reporting output",
    standard: "Audit readiness",
    details: "A complete note includes scope, affected users, failing state, requirement reference, reproduction steps, evidence, recommended fix, exception status, and retest result.",
    action: "#lessons"
  }
];

const REGULATORY_SCENARIOS = [
  {
    title: "Federal benefits application",
    law: "Section 508",
    ask: "A public-facing web form lets citizens apply for benefits and upload supporting documents.",
    answer: "Treat the web flow as public-facing electronic content. Test applicable WCAG A/AA criteria, file upload states, errors, confirmation messages, documents, and support information. Record any inaccessible third-party or document workflow separately."
  },
  {
    title: "Internal agency training deck",
    law: "Section 508",
    ask: "A self-paced employee training course is posted on an agency intranet with slides, quiz questions, and downloadable handouts.",
    answer: "Educational or training materials can be agency official communications. Check electronic documents and web-based course screens, including headings, reading order, alt text, captions, keyboard access, quiz feedback, and support documentation."
  },
  {
    title: "EU online shop checkout",
    law: "European Accessibility Act",
    ask: "A retailer provides an e-commerce service to EU consumers after 28 June 2025.",
    answer: "Scope it as an EAA-covered e-commerce service. Test account creation, product selection, cart, payment, errors, support, and confirmation. Prepare evidence for accessible information, consistent navigation, timing, assistive technology compatibility, and cognitive accessibility."
  },
  {
    title: "Banking app and payment terminal",
    law: "European Accessibility Act",
    ask: "A bank offers an app and customer payment terminal for EU consumers.",
    answer: "Banking services and some self-service terminals are covered categories. Test digital flows, authentication, transaction review, support channels, multi-sensory output, input alternatives, compatibility with assistive technology, and physical-terminal constraints owned by the product team."
  },
  {
    title: "Transport ticketing kiosk",
    law: "European Accessibility Act",
    ask: "A rail operator uses self-service kiosks and a web ticketing flow.",
    answer: "Passenger transport services and ticketing/check-in machines are covered examples. Test digital journey steps, announcements, time limits, error recovery, readable information, nonvisual operation, support options, and any transition rule for terminals already in lawful use."
  }
];

const REGULATORY_READINESS_CHECKS = [
  "I can explain the difference between legal scope, technical standard, and test evidence.",
  "I can identify when Section 508 applies to public-facing content, agency official communications, software, hardware, support documentation, and support services.",
  "I can distinguish the Section 508 web baseline (WCAG 2.0 A/AA) from the adjusted non-web content and software mappings, and identify the additional applicable 508 chapters.",
  "I can identify common EAA-covered products and services and the 28 June 2025 applicability date.",
  "I can explain that the EAA is a directive implemented through Member State law, so national implementation and harmonized-standard status matter.",
  "I can write a regulatory finding with scope, user impact, requirement reference, reproduction steps, expected result, and retest method.",
  "I know when to escalate exception claims, disproportionate-burden claims, transition questions, or equivalent-facilitation questions."
];

const SECTION_508_QUESTIONS = [
  {
    id: "508-mixed-product",
    title: "Scope a multi-component acquisition",
    competency: "Component scoping",
    source: "Revised 508 E205–E208; Chapters 4–6",
    prompt: "An agency buys a lobby kiosk package containing a touch display, locked-down application, public instructions, PDF receipts, and a vendor help desk. The web administration portal passes WCAG. Which conclusion is strongest?",
    choices: [
      ["a", "The package conforms because WCAG conformance of its web portal covers the complete acquisition.", "WCAG evidence for one component cannot establish conformance for the hardware, closed software, content, documents, and support components."],
      ["b", "Inventory and scope each component, then apply the relevant content, software, hardware, closed-functionality, documentation, and support requirements.", "Correct: Section 508 applicability is determined for each ICT component, and a single solution may trigger several chapters."],
      ["c", "Only Chapter 4 applies because a kiosk is always classified solely as hardware.", "A kiosk has hardware, but its software, displayed content, documents, and support can independently trigger other requirements."],
      ["d", "Only functional performance criteria apply because users cannot install assistive technology on the kiosk.", "Closed functionality triggers specific Chapter 4 requirements; functional performance criteria do not replace all technical scoping."]
    ],
    answer: "b",
    explanation: "Start with an ICT inventory, not the product label. Scope every component and preserve a separate evidence trail for each applicable chapter.",
    studyHref: "#regulations"
  },
  {
    id: "508-internal-content",
    title: "Distinguish covered internal content",
    competency: "E205 official communications",
    source: "Revised 508 E205.3",
    prompt: "Which non-public agency item most clearly falls outside the nine categories of agency official communication, assuming it is not otherwise public-facing?",
    choices: [
      ["a", "A required cybersecurity training quiz sent to employees.", "Educational and training materials are one of the nine named categories."],
      ["b", "An employee survey measuring workplace satisfaction.", "Survey questionnaires are one of the nine named categories."],
      ["c", "An informal set of personal brainstorming notes never distributed as agency business.", "Correct: private, informal working notes do not become covered official communications merely because they are electronic."],
      ["d", "An email formally acknowledging receipt of a benefits application.", "A formal acknowledgment of receipt is one of the nine named categories."]
    ],
    answer: "c",
    explanation: "For non-public content, classify the communication by purpose. The delivery channel does not decide coverage; the nine E205.3 categories do.",
    studyHref: "#regulations"
  },
  {
    id: "508-document-exclusions",
    title: "Apply the non-web document baseline",
    competency: "Incorporated WCAG",
    source: "Revised 508 E205.4",
    prompt: "A covered, non-web PDF is an agency training handout. Which set identifies the four WCAG 2.0 success criteria excluded from the non-web electronic-content mapping?",
    choices: [
      ["a", "1.4.10 Reflow, 2.5.5 Target Size, 3.1.2 Language of Parts, and 4.1.3 Status Messages", "These are not the four non-web exclusions, and several did not exist in WCAG 2.0."],
      ["b", "2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, and 3.2.4 Consistent Identification", "Correct: these four provisions are excluded in the non-web mapping."],
      ["c", "1.2.2 Captions, 1.2.5 Audio Description, 2.1.1 Keyboard, and 2.3.1 Three Flashes", "Media and keyboard requirements remain applicable when their conditions are present."],
      ["d", "All of Guideline 2.4 and Guideline 3.2", "The adjustment is limited to four named success criteria, not two entire guidelines."]
    ],
    answer: "b",
    explanation: "The exclusions are narrow. They do not remove requirements for headings, meaningful sequence, text alternatives, contrast, keyboard operation, or accessible forms.",
    studyHref: "#regulations"
  },
  {
    id: "508-web-software",
    title: "Do not stop at a WCAG pass",
    competency: "Software requirements",
    source: "Revised 508 E207; 502; 503; 602; 603",
    prompt: "A browser-based federal case-management application passes every applicable WCAG 2.0 A/AA test. What evidence is still needed before claiming complete Section 508 coverage for the software component?",
    choices: [
      ["a", "None; WCAG is the complete Section 508 standard for all software.", "The Revised 508 Standards add software interoperability, application, documentation, and support requirements."],
      ["b", "Only a WCAG 2.2 AAA automated scan.", "A later or higher WCAG target can be useful, but it does not substitute for the applicable non-WCAG requirements."],
      ["c", "Evidence for 502 interoperability, 503 applications, 602 documentation, 603 support services, and any functional-performance review required by E204.", "Correct: these requirements sit alongside the incorporated WCAG baseline."],
      ["d", "A vendor statement that the product works with one screen reader.", "A narrow compatibility assertion is not reproducible evidence across the applicable provisions."]
    ],
    answer: "c",
    explanation: "WCAG is a major technical baseline under Section 508, not the entire rule. Software and support obligations require their own tests and evidence.",
    studyHref: "#regulations"
  },
  {
    id: "508-authoring-tool",
    title: "Recognise authoring-tool scope",
    competency: "Chapter 5",
    source: "Revised 508 504",
    prompt: "An agency procures a low-code tool whose users build public web forms. The forms can be accessible after manual code repair, but the tool drops accessibility information when templates are edited and gives authors no accessibility prompts. What is the most complete analysis?",
    choices: [
      ["a", "Test only the published forms against WCAG because authoring behavior is outside Section 508.", "Published output matters, but the tool's authoring functions separately trigger 504."],
      ["b", "Apply the software requirements and 504, including preservation of accessibility information and support for producing accessible output.", "Correct: tools used to create or modify content for others are authoring tools, so 504 adds requirements."],
      ["c", "Treat the tool solely as support documentation because authors use it for guidance.", "The primary item is software with authoring functionality, not merely documentation."],
      ["d", "Accept manual remediation as equivalent facilitation without an outcome comparison or agency decision.", "Equivalent facilitation requires substantially equivalent or greater accessibility and an accountable determination; it is not an informal workaround label."]
    ],
    answer: "b",
    explanation: "Test both the application and the authoring workflow. Accessible final output alone does not answer whether the procured authoring tool meets 504.",
    studyHref: "#regulations"
  },
  {
    id: "508-closed-functionality",
    title: "Test closed functionality",
    competency: "Chapter 4",
    source: "Revised 508 402; 407–415",
    prompt: "A ticket kiosk prevents users from attaching or installing assistive technology. The same transaction is accessible on a separate website. Which test decision is defensible?",
    choices: [
      ["a", "Skip the kiosk because an accessible website automatically makes it a conforming alternate version.", "Alternate versions are constrained, and a separate channel does not erase requirements scoped to the kiosk."],
      ["b", "Test 402 closed functionality and every applicable hardware provision, plus the kiosk's own software and content; document the website separately.", "Correct: the kiosk must be evaluated as the ICT actually provided."],
      ["c", "Run only a screen-reader test on the separate website.", "That produces no evidence about privacy, operable parts, display, speech output, or the closed kiosk journey."],
      ["d", "Apply only WCAG 2.2 because all modern kiosks are web content.", "Kiosks can combine hardware, closed software, and content; Chapter 4 is not replaced by WCAG."]
    ],
    answer: "b",
    explanation: "Closed functionality is a signal to expand the test plan. Verify nonvisual access, privacy, operable parts, time, audio, displays, and other provisions actually triggered by the device.",
    studyHref: "#regulations"
  },
  {
    id: "508-functional-performance",
    title: "Use functional performance correctly",
    competency: "E204 and Chapter 3",
    source: "Revised 508 E204; 301–302",
    prompt: "When should a team use Chapter 3 functional performance criteria in a Section 508 analysis?",
    choices: [
      ["a", "As a universal substitute whenever testing technical provisions is inconvenient.", "Functional performance criteria do not provide a convenience exception to Chapters 4 and 5."],
      ["b", "Only after every user with a disability has completed a usability study.", "User research is valuable, but this is not the scoping trigger stated in E204."],
      ["c", "When Chapters 4 or 5 do not address one or more functions, or when evaluating substantially equivalent access under equivalent facilitation.", "Correct: E204 and E101.2 identify these roles for functional performance."],
      ["d", "Never, because WCAG completely replaced Chapter 3.", "Chapter 3 remains part of the Revised 508 Standards and has defined scoping roles."]
    ],
    answer: "c",
    explanation: "Functional performance is an outcome backstop and an equivalent-facilitation measure, not a blanket replacement for technical requirements.",
    studyHref: "#regulations"
  },
  {
    id: "508-support",
    title: "Include the support experience",
    competency: "Chapter 6",
    source: "Revised 508 602–603",
    prompt: "An agency application itself conforms, but its setup guide is an untagged PDF and the help desk refuses relay calls. What should the conformance report say?",
    choices: [
      ["a", "Conforming, because support sits outside the ICT product.", "Chapter 6 explicitly covers support documentation and support services."],
      ["b", "Partially tested: record separate failures under 602 and 603 and avoid a complete-conformance claim until the scoped support barriers are resolved.", "Correct: interface conformance does not cancel independent support obligations."],
      ["c", "Conforming if the vendor promises to update the guide after deployment.", "A future promise is remediation planning, not current conformance evidence."],
      ["d", "Test the guide only against color contrast because documents do not need structure.", "Covered electronic documents retain many WCAG requirements, including programmatic structure and meaningful sequence."]
    ],
    answer: "b",
    explanation: "Report at the requirement and component level. A single global label would hide material barriers in documentation and support.",
    studyHref: "#regulations"
  },
  {
    id: "508-sequence",
    title: "Judge a complete process",
    competency: "Conformance",
    source: "WCAG conformance as incorporated by Revised 508",
    prompt: "A four-step federal benefits application passes at steps 1, 2, and 4. At step 3, a keyboard user cannot activate the upload control. Which statement is accurate?",
    choices: [
      ["a", "The process conforms because 75% of its pages pass.", "WCAG conformance is not averaged across pages or process steps."],
      ["b", "Only step 3 needs to be reported; the complete process cannot be claimed conforming while a required step fails.", "Correct: every page in a complete process must conform at the claimed level."],
      ["c", "The process conforms if most users can email the file later.", "An informal workaround does not establish conformance of the provided process."],
      ["d", "The failure is excluded because file upload is software rather than content.", "The control is part of the web application's required user journey and remains in scope."]
    ],
    answer: "b",
    explanation: "Conformance is not a percentage score. Preserve both the page-level finding and its consequence for the end-to-end process claim.",
    studyHref: "#regulations"
  },
  {
    id: "508-public-facing",
    title: "Interpret public-facing content",
    competency: "E205 scoping",
    source: "Revised 508 E205.2",
    prompt: "An agency publishes emergency instructions only on a public social-media account and on a display in a federal waiting room. Neither item sits on the agency's main website. What is the right first conclusion?",
    choices: [
      ["a", "Neither is covered because public-facing means HTML on an agency-owned domain.", "Public-facing is based on availability to the general public, not ownership of the platform or an HTML-only format."],
      ["b", "Both are candidates for public-facing electronic-content scope; classify their formats and any hardware/software components before mapping requirements.", "Correct: public-facing content can appear on third-party platforms or non-web displays."],
      ["c", "Only the social-media post is covered because displays cannot contain electronic content.", "Content on a display can be public-facing and the display may introduce hardware requirements too."],
      ["d", "Only the waiting-room display is covered because social media is always exempt third-party content.", "Platform ownership alone does not create a categorical exemption for agency-published content."]
    ],
    answer: "b",
    explanation: "Ask who can access the agency content and what components deliver it. Do not equate public-facing with 'a page on our website.'",
    studyHref: "#regulations"
  },
  {
    id: "508-nara-component",
    title: "Limit an exception to its component",
    competency: "Exception analysis",
    source: "Revised 508 E205.3 note; Section508.gov applicability sequence",
    prompt: "A records-search product contains archived electronic records maintained by NARA, new search software, and public help documentation. A content exception applies to the archived records. What follows?",
    choices: [
      ["a", "The entire product is outside Section 508 because one content component is excepted.", "An exception for archived records does not automatically extend to separately scoped software or documentation."],
      ["b", "Continue scoping the search software and help documentation, and document the exact boundary of the records exception.", "Correct: exceptions must be applied at the relevant component and the remaining ICT still needs analysis."],
      ["c", "Test the records but ignore the new software because content always controls the product classification.", "The software is an independent ICT component with its own scoping requirements."],
      ["d", "Replace all testing with an ACR requested from the vendor.", "A vendor report can contribute evidence but does not perform the agency's scoping decision or resolve uncovered components."]
    ],
    answer: "b",
    explanation: "Write the exception as a bounded decision: what component, under what provision, decided by whom, and what remains in scope.",
    studyHref: "#regulations"
  },
  {
    id: "508-at-exception",
    title: "Scope assistive technology",
    competency: "Software exceptions",
    source: "Section508.gov software applicability sequence",
    prompt: "A federal solution bundles assistive-technology software with a mainstream desktop application and dedicated hardware. The AT software component is treated as not having to conform under the software applicability sequence. Which next step is correct?",
    choices: [
      ["a", "Close the review because any presence of assistive technology exempts the bundle.", "The determination applies to the AT software component, not automatically to other software or hardware."],
      ["b", "Continue scoping the mainstream application and hardware, recording the boundary and rationale for the AT software determination.", "Correct: the other components retain their own applicability analysis."],
      ["c", "Test only the AT software against WCAG AAA.", "This reverses the applicability result and ignores the in-scope components."],
      ["d", "Apply only Chapter 6 because assistive technology is a support service.", "Assistive technology is not automatically classified as support, and the rest of the bundle remains software/hardware."]
    ],
    answer: "b",
    explanation: "Component boundaries matter throughout Section 508. Never promote a narrow exception into a product-wide conclusion without a provision that supports it.",
    studyHref: "#regulations"
  },
  {
    id: "508-acr-evidence",
    title: "Evaluate a vendor claim",
    competency: "Procurement evidence",
    source: "Section 508 acquisition process",
    prompt: "A vendor's ACR marks every row 'Supports' but provides identical text—'the product is accessible'—for each criterion and omits test methods, versions, and known limitations. What is the best procurement response?",
    choices: [
      ["a", "Accept it as conclusive because the ACR format is itself a federal certification.", "An ACR records a vendor's conformance claim; its presence does not make vague assertions sufficient evidence."],
      ["b", "Request criterion-specific evidence, tested versions and configurations, methods, limitations, and clarification for the scoped non-WCAG requirements; validate high-risk claims.", "Correct: useful evidence must be specific enough to assess and reproduce."],
      ["c", "Reject the product solely because no product can support every criterion.", "Some criteria can legitimately be not applicable or supported; the problem here is unsupported, non-specific evidence."],
      ["d", "Replace the ACR with a single automated WCAG scan of the marketing site.", "That would neither test the procured product nor cover manual and non-WCAG requirements."]
    ],
    answer: "b",
    explanation: "Treat an ACR as structured evidence to interrogate, not a compliance certificate. Procurement decisions need scope-matched, version-specific detail.",
    studyHref: "#regulations"
  },
  {
    id: "508-alternate-version",
    title: "Challenge an alternate-version claim",
    competency: "Conformance judgment",
    source: "Revised 508 E101.2, E205.4, E207.2; WCAG 2.0 Conformance Requirement 1",
    prompt: "A team leaves an inaccessible primary federal form unchanged and offers a simplified accessible form at another URL, calling it both a ‘conforming alternate version’ and ‘equivalent facilitation.’ Which review comment is strongest?",
    choices: [
      ["a", "Approve automatically because any accessible alternate satisfies Section 508.", "The Revised 508 Standards place constraints on alternate versions and equivalent facilitation."],
      ["b", "Reject automatically because alternate designs are never allowed.", "Equivalent facilitation and some conforming alternate-version paths exist, but they require a defensible, scoped analysis."],
      ["c", "Identify which route is claimed: a WCAG conforming alternate version must satisfy WCAG's alternate-version conditions and full-process conformance; E101.2 instead requires substantially equivalent or greater accessibility and usability, judged using Chapter 3.", "Correct: these are distinct provisions with different conditions and evidence."],
      ["d", "Compare only the landing pages because process completion is irrelevant.", "When WCAG conformance is claimed, complete processes must conform; equivalent-facilitation evidence must also address the actual access and usability delivered."]
    ],
    answer: "c",
    explanation: "Do not collapse the two concepts. Record the exact legal or conformance route, its conditions, the functional comparison, complete-process coverage where WCAG conformance is claimed, and the decision owner.",
    studyHref: "#regulations"
  }
];

const ADVANCED_WCAG_QUESTIONS = [
  {
    id: "wcag-name-label",
    title: "Separate name rules",
    competency: "Criterion discrimination",
    source: "WCAG 2.2: 2.5.3 and 4.1.2",
    prompt: "A speech-input user says “Search products” to a button whose visible text is “Search products,” but its accessible name is “Find catalogue.” Screen readers still announce a role and name. Which analysis is most precise?",
    choices: [
      ["a", "Only 4.1.2 fails because the button has no programmatic name.", "The control does have a programmatic name; the mismatch is the central problem."],
      ["b", "2.5.3 is the direct failure because the accessible name does not contain the visible label; 4.1.2 may still pass its basic name requirement.", "Correct: Label in Name protects alignment between visible text and the programmatic name used by speech input."],
      ["c", "1.3.1 fails because all visible text must be encoded as a heading.", "The issue is not structural heading information."],
      ["d", "No criterion fails because accessible and visible labels may always use unrelated synonyms.", "Unrelated names can prevent voice users from activating the control by speaking what they see." ]
    ],
    answer: "b",
    explanation: "Choose the narrowest criterion that explains the user failure. A named control can satisfy one aspect of 4.1.2 while still failing 2.5.3.",
    studyHref: "#lesson/label-in-name"
  },
  {
    id: "wcag-dragging",
    title: "Distinguish dragging from path gestures",
    competency: "Input alternatives",
    source: "WCAG 2.2: 2.5.1 and 2.5.7",
    prompt: "A kanban card can be moved only by holding and dragging it in a straight line. The gesture does not require drawing a particular path. Which success criterion is the best primary match?",
    choices: [
      ["a", "2.5.1 Pointer Gestures, because every drag is a path-based gesture.", "2.5.1 targets multipoint or path-based gestures; a drag is separately addressed even when its path is arbitrary."],
      ["b", "2.5.7 Dragging Movements, because functionality that uses dragging needs a non-dragging single-pointer alternative unless dragging is essential.", "Correct: the defining interaction is the maintained-contact dragging movement."],
      ["c", "2.1.2 No Keyboard Trap, because the pointer remains captured while moving.", "Pointer capture is not itself a keyboard trap."],
      ["d", "1.4.13 Content on Hover or Focus, because the card changes position.", "The issue is an input method, not dismissible hover-triggered content."]
    ],
    answer: "b",
    explanation: "Classify the motor action precisely. Add controls such as Move left/right or a destination menu, then separately verify keyboard operation.",
    studyHref: "#lesson/dragging-movements"
  },
  {
    id: "wcag-status-name",
    title: "Separate status updates from control semantics",
    competency: "Dynamic content",
    source: "WCAG 2.2: 4.1.2 and 4.1.3",
    prompt: "Submitting a form adds “Saved” visually without moving focus. The submit button already has a correct role, name, value, and state. A screen reader announces nothing. What is the strongest primary finding?",
    choices: [
      ["a", "4.1.2 Name, Role, Value, because every unannounced change is a control-state failure.", "The control semantics are already correct; the missing information is a status update."],
      ["b", "4.1.3 Status Messages, because the update communicates success without a focus change and is not programmatically exposed as a status.", "Correct: users should receive the result through role or properties without focus being moved."],
      ["c", "2.4.3 Focus Order, because focus must always move to confirmation text.", "Status messages are designed to be conveyed without requiring a focus move."],
      ["d", "3.3.1 Error Identification, because saving is an input error.", "A successful save is not an error condition."]
    ],
    answer: "b",
    explanation: "Test what changed and what the message does. Correct control semantics do not automatically expose a separate dynamic result.",
    studyHref: "#lesson/status-messages"
  },
  {
    id: "wcag-errors",
    title: "Layer form-error requirements",
    competency: "Overlapping criteria",
    source: "WCAG 2.2: 3.3.1, 3.3.3, and 3.3.4",
    prompt: "A tax-payment form marks an invalid account number only with a red border. It neither identifies the field in text nor suggests the required format, and submission immediately creates a legally binding payment. Which assessment is most complete?",
    choices: [
      ["a", "Only 1.4.1 Use of Color can fail because all error requirements collapse into color use.", "Color is one problem, but the scenario supplies evidence relevant to multiple independent error and legal-transaction safeguards."],
      ["b", "Assess 1.4.1 and 3.3.1; also assess 3.3.3 if a known correction can be suggested, and 3.3.4 for review, confirmation, or reversibility of the legal transaction.", "Correct: overlapping criteria protect different outcomes and should be reported separately when their conditions apply."],
      ["c", "Only 3.3.4 applies because legal transactions override all lower-level criteria.", "Conformance requirements accumulate; a higher-risk context does not remove the basic error-identification obligations."],
      ["d", "No failure exists if the server rejects the number after submission.", "Server rejection does not make the error identifiable or provide the required prevention safeguards."]
    ],
    answer: "b",
    explanation: "Hard questions often have several true observations. Choose the option that preserves each distinct user outcome without treating one criterion as a catch-all.",
    studyHref: "#lesson/error-identification"
  },
  {
    id: "wcag-focus-obscured",
    title: "Evaluate sticky overlays",
    competency: "Focus visibility",
    source: "WCAG 2.2: 2.4.11 and 2.4.12",
    prompt: "When keyboard focus moves to the final link, a sticky cookie banner covers the lower half of its focus indicator but leaves the upper half visible. Which statement is correct at WCAG 2.2?",
    choices: [
      ["a", "It necessarily fails 2.4.11 Focus Not Obscured (Minimum), because any covered pixel is a failure.", "The minimum criterion requires that the focused component is not entirely hidden by author-created content."],
      ["b", "It can pass 2.4.11 while failing the AAA 2.4.12 Focus Not Obscured (Enhanced), which requires the component not be obscured at all.", "Correct: partial visibility distinguishes the minimum and enhanced outcomes, subject to the exact component geometry."],
      ["c", "It fails only 1.4.11 Non-text Contrast, regardless of indicator color.", "Obscuring and contrast are separate tests; no color measurements are given."],
      ["d", "It always passes because cookie banners are user-agent content.", "An author-provided sticky banner is author-created content and remains relevant to the criterion."]
    ],
    answer: "b",
    explanation: "Do not import the stricter AAA threshold into AA. Record whether the focused component is fully or partially obscured and which conformance target is being assessed.",
    studyHref: "#lesson/focus-not-obscured-minimum"
  },
  {
    id: "wcag-authentication",
    title: "Analyse authentication effort",
    competency: "Cognitive access",
    source: "WCAG 2.2: 3.3.8",
    prompt: "A sign-in flow requires users to memorize a one-time code shown on the same device, disables paste, and offers no password manager, copy, object-recognition, or other mechanism. What is the best AA analysis?",
    choices: [
      ["a", "No issue, because one-time codes are categorically exempt from accessible authentication.", "A code does not create a blanket exception; the test concerns the cognitive function required and available alternatives or assistance."],
      ["b", "Assess 3.3.8 Accessible Authentication (Minimum): memorization is required without an alternative, assistance mechanism, or qualifying object/personal-content recognition path.", "Correct: the scenario intentionally removes mechanisms that could avoid the cognitive-function test."],
      ["c", "Only 2.2.1 Timing Adjustable applies because all authentication problems are time limits.", "Timing may also matter, but the stated barrier is forced memorization without assistance."],
      ["d", "Only 1.3.5 Identify Input Purpose applies because the code field lacks autocomplete.", "Input-purpose metadata is different from requiring a cognitive-function test to authenticate."]
    ],
    answer: "b",
    explanation: "Test the actual cognitive task and the mechanisms offered. Do not decide from the authentication technology's label alone.",
    studyHref: "#lesson/accessible-authentication-minimum"
  },
  {
    id: "wcag-redundant-entry",
    title: "Recognise repeated data",
    competency: "Cognitive access",
    source: "WCAG 2.2: 3.3.7",
    prompt: "During one application process, a user enters their address in step 1. Step 4 asks for the same address again, but allows the user to select “Use application address,” which populates editable fields. What is the strongest conclusion?",
    choices: [
      ["a", "It automatically fails 3.3.7 because repeated information may never appear again.", "The criterion allows previously entered information to be auto-populated or available for selection, with exceptions."],
      ["b", "The selection mechanism can satisfy 3.3.7 because the previously entered information is available for reuse and remains editable.", "Correct: the mechanism avoids requiring the user to recall and re-enter the same data."],
      ["c", "It passes only if browser autocomplete is the sole reuse method.", "The criterion does not require one particular technology; selectable reuse is expressly relevant."],
      ["d", "The only applicable criterion is 1.3.5 because addresses are input purposes.", "Input-purpose metadata and redundant entry protect different outcomes."]
    ],
    answer: "b",
    explanation: "Focus on whether the process forces recall and re-entry. A usable selection or auto-population path can satisfy the outcome.",
    studyHref: "#lesson/redundant-entry"
  },
  {
    id: "wcag-target-spacing",
    title: "Apply target-size exceptions",
    competency: "Pointer access",
    source: "WCAG 2.2: 2.5.8",
    prompt: "Two adjacent 16 by 16 CSS-pixel icon buttons have no equivalent control elsewhere. To determine whether the spacing exception applies, what geometry must the tester verify?",
    choices: [
      ["a", "Whether the icon has an accessible name.", "Naming is important but does not determine the target-size spacing exception."],
      ["b", "Whether a 24 CSS-pixel-diameter circle centered on each target's bounding box neither intersects the other target nor the corresponding circle around another undersized target.", "Correct: the spacing exception tests the defined circles against nearby targets and the circles around other undersized targets."],
      ["c", "Whether the table uses zebra striping.", "Row styling does not affect the target geometry."],
      ["d", "Whether the button is reached in a logical keyboard order.", "Keyboard order is a separate requirement and does not settle pointer target size."]
    ],
    answer: "b",
    explanation: "Apply the spacing geometry in 2.5.8 exactly rather than guessing from visual density. Then test other applicable requirements such as name, contrast, and keyboard access separately.",
    studyHref: "#lesson/target-size-minimum"
  },
  {
    id: "wcag-text-spacing-reflow",
    title: "Separate reflow from text spacing",
    competency: "Visual adaptation",
    source: "WCAG 2.2: 1.4.10 and 1.4.12",
    prompt: "At 320 CSS pixels wide, a page has no two-dimensional scrolling. After a user applies the specified text-spacing overrides, button labels are clipped and controls overlap. Which finding is best supported?",
    choices: [
      ["a", "Only 1.4.10 Reflow fails because all viewport and spacing adaptations are the same test.", "The viewport already reflows; the new failure is caused by user-applied text spacing."],
      ["b", "1.4.12 Text Spacing is directly implicated; 1.4.10 may pass in the tested narrow viewport because no two-dimensional scrolling or loss was observed before the spacing override.", "Correct: the tests have different conditions and must not be conflated."],
      ["c", "1.4.4 Resize Text necessarily fails even though no zoom or text-resize result is described.", "The prompt provides no evidence from the resize-text test condition."],
      ["d", "No failure exists because custom user styles are never covered.", "1.4.12 specifically tests whether content remains usable when users override defined text-spacing properties."]
    ],
    answer: "b",
    explanation: "Attribute the failure to the condition that caused it. Related responsive criteria should be tested independently and reported only with evidence.",
    studyHref: "#lesson/text-spacing"
  },
  {
    id: "wcag-media",
    title: "Classify prerecorded media alternatives",
    competency: "Time-based media",
    source: "WCAG 2.2: 1.2.2, 1.2.3, and 1.2.5",
    prompt: "A prerecorded training video has dialogue, meaningful silent demonstrations, accurate captions, and no audio description. A complete text alternative describes both the dialogue and visual demonstrations. At Level AA, what is the most precise result?",
    choices: [
      ["a", "The text alternative always substitutes for audio description at Level AA.", "At Level AA, 1.2.5 requires audio description for prerecorded video; the Level A alternative in 1.2.3 does not replace it."],
      ["b", "1.2.2 can pass through the captions and 1.2.3 can pass through the text alternative, but 1.2.5 fails without audio description of essential visual information.", "Correct: each criterion and conformance level adds a distinct media outcome."],
      ["c", "Only 1.2.1 applies because every prerecorded video is audio-only content.", "A synchronized audiovisual training video is not audio-only or video-only content."],
      ["d", "All media criteria pass because the dialogue is captioned.", "Captions expose audio information but do not convey meaningful visual demonstrations to users who cannot see them."]
    ],
    answer: "b",
    explanation: "Track media modality, prerecorded/live status, the information missing from each channel, and the claimed conformance level before choosing a criterion.",
    studyHref: "#lesson/audio-description-prerecorded"
  }
];

const OFFICIAL_SOURCE_URLS = {
  section508: "https://www.access-board.gov/ict/",
  wcag22: "https://www.w3.org/TR/WCAG22/",
  titleII: "https://www.ada.gov/resources/2024-03-08-web-rule/",
  titleIIFirstSteps: "https://www.ada.gov/resources/web-rule-first-steps/",
  eaa: "https://eur-lex.europa.eu/eli/dir/2019/882/oj"
};

const TITLE_II_QUESTIONS = [
  {
    id: "titleii-contractor-scope",
    title: "Scope a contracted digital service",
    competency: "Covered entities and contractors",
    source: "ADA Title II web and mobile app rule",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A county hires a private vendor to operate the county's online permit application under the county's program. The vendor hosts every screen on its own domain. Which conclusion is strongest?",
    choices: [
      ["a", "The rule cannot apply because the county does not own the vendor's domain.", "Domain ownership does not decide whether web content or a mobile app is provided through a public entity's contractual arrangement."],
      ["b", "The county must ensure the contracted service meets the rule when the vendor provides it on the county's behalf.", "Correct: the rule covers web content and mobile apps a state or local government provides or makes available, including through contractual or other arrangements."],
      ["c", "Only the vendor has an ADA duty, so the county may omit the service from its inventory.", "The public entity remains responsible for the program it makes available through the arrangement."],
      ["d", "Only downloadable PDFs in the service are covered.", "The rule covers the web and mobile experience, not only conventional electronic documents."]
    ],
    answer: "b",
    explanation: "Inventory services delivered through vendors as well as those hosted directly. Contract structure does not remove a public entity's Title II responsibility.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-technical-standard",
    title: "Name the legal technical baseline",
    competency: "Technical standard",
    source: "28 CFR part 35, subpart H",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A city targets WCAG 2.2 AA for product quality. What must its legal conformance record say about the specific technical standard adopted by DOJ's Title II web rule?",
    choices: [
      ["a", "The adopted standard is WCAG 2.0 AA.", "That is the baseline incorporated into the Revised Section 508 Standards, not the standard adopted by this Title II rule."],
      ["b", "The adopted standard is WCAG 2.1 Level AA; a WCAG 2.2 target may add current good practice but should not be mislabeled as the rule's text.", "Correct: DOJ adopted WCAG 2.1 Level AA for the covered web content and mobile apps."],
      ["c", "The rule adopts WCAG 2.2 AAA.", "The rule does not adopt WCAG 2.2 or Level AAA."],
      ["d", "The rule contains no technical standard.", "The central change is an enforceable technical standard, subject to the rule's scope and exceptions."]
    ],
    answer: "b",
    explanation: "Keep the legal baseline and an organization's higher internal target distinct. Evidence may map both, but the source of each claim must be clear.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-revised-deadlines",
    title: "Apply the current compliance dates",
    competency: "Compliance timing",
    source: "DOJ Title II web rule fact sheet, updated April 2026",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "After DOJ's April 2026 deadline revision, which pairing is accurate for the web and mobile app rule?",
    choices: [
      ["a", "Every public entity: 28 June 2025.", "That date is associated with application of the European Accessibility Act, not this Title II schedule."],
      ["b", "Entities serving 50,000 or more people: 26 April 2027; entities serving fewer than 50,000 people and special district governments: 26 April 2028.", "Correct: these are the current dates stated in DOJ's updated fact sheet."],
      ["c", "Larger entities: 24 April 2026; smaller entities: 24 April 2027.", "Those were the original compliance dates before the 2026 revision."],
      ["d", "The deadline depends only on annual technology spending.", "The published schedule distinguishes entity size and special district governments, not technology budget alone."]
    ],
    answer: "b",
    explanation: "Use the current DOJ dates, record the population basis, and do not rely on a pre-revision implementation calendar.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-archived-definition",
    title: "Test every archived-content condition",
    competency: "Exceptions",
    source: "ADA Title II web rule: archived web content",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A 2023 council report is retained only for reference, has not been changed since it was archived, and sits in a clearly identified archive. Which remaining fact is necessary for the rule's archived-content exception?",
    choices: [
      ["a", "It must have been created before the public entity's compliance date.", "Correct: creation before the applicable compliance date is one of four cumulative conditions."],
      ["b", "It must be a scanned image rather than HTML.", "The exception turns on the four archival conditions, not a preferred file format."],
      ["c", "It must be more than ten years old.", "The rule uses the entity's compliance date, not a ten-year age threshold."],
      ["d", "It must be inaccessible to the public.", "Archived content may remain available; it must be organized in a dedicated, clearly identified archived area and satisfy the other conditions."]
    ],
    answer: "a",
    explanation: "Archived status is not a casual label. The content must satisfy all four conditions: timing, exclusive archival purpose, no post-archive change, and dedicated identification.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-archive-update",
    title: "Recognise when an archive exception ends",
    competency: "Exception boundaries",
    source: "ADA Title II web rule: archived web content",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A qualifying archived page is edited after archiving to add a new policy interpretation. How should the entity analyze the exception?",
    choices: [
      ["a", "It remains excepted forever because it first entered the archive correctly.", "The exception requires that the content not be altered or updated after it is archived."],
      ["b", "The edit breaks an archived-content condition, so the entity must reassess the updated content under the rule.", "Correct: post-archive alteration means the content no longer satisfies all four archival conditions."],
      ["c", "Only the added sentence must meet WCAG, regardless of the resulting page.", "The rule's archival exception applies to the content only while all conditions are met; the updated item needs a fresh scope analysis."],
      ["d", "Any edit is allowed if the archive label remains visible.", "A clearly identified archive is only one of the cumulative conditions." ]
    ],
    answer: "b",
    explanation: "Exception records should include change controls. Updating archived material can move it back into the ordinary conformance workflow.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-preexisting-document",
    title: "Limit the preexisting-document exception",
    competency: "Conventional electronic documents",
    source: "ADA Title II web rule: preexisting conventional electronic documents",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A pre-compliance-date PDF is still the form residents must use to apply for a current housing program. Which conclusion is most defensible?",
    choices: [
      ["a", "It is automatically excepted because its file-creation date predates the deadline.", "The preexisting-document exception does not cover a document currently used to apply for, gain access to, or participate in a public entity's services, programs, or activities."],
      ["b", "Its current role in applying for a program removes it from that exception; test and remediate it as in-scope content.", "Correct: current operational use is the critical limitation in this fact pattern."],
      ["c", "It is covered only if more than 50 people download it.", "The exception does not use a download-count threshold."],
      ["d", "It is exempt whenever an employee can help by telephone.", "A support channel does not itself establish the document exception or technical conformance."]
    ],
    answer: "b",
    explanation: "Do not classify a document by age alone. Record whether people currently use it to access or participate in the public program.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-third-party-post",
    title: "Distinguish independent third-party content",
    competency: "Third-party content",
    source: "ADA Title II web rule: content posted by third parties",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A transit authority pays a contractor to publish route alerts inside the authority's app. Can it rely on the exception for content posted by third parties?",
    choices: [
      ["a", "Yes, because every contractor is a third party.", "The exception excludes content posted because of contractual, licensing, or other arrangements with the public entity."],
      ["b", "No. The contractual arrangement makes this different from independent third-party posts such as unsolicited public comments.", "Correct: the exception is bounded by how and why the third party supplies the content."],
      ["c", "Yes, if the contractor owns the authoring software.", "Tool ownership does not change the contractual-arrangement limitation."],
      ["d", "No third-party content can ever qualify for an exception.", "Some independent third-party posts can qualify; this scenario does not."]
    ],
    answer: "b",
    explanation: "Capture the relationship behind the content. Calling a vendor a third party is not enough when the post exists because of the entity's arrangement.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-individualized-documents",
    title: "Identify the individualized-document category",
    competency: "Password-protected documents",
    source: "ADA Title II web rule: individualized conventional electronic documents",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "Which item best matches the rule's exception category for individualized, password-protected conventional electronic documents?",
    choices: [
      ["a", "A public city-budget spreadsheet linked from the homepage.", "This is public-facing content, not a password-protected document about a specific person, property, or account."],
      ["b", "A password-protected PDF utility bill for one named account holder.", "Correct: the category concerns conventional electronic documents about a specific individual, property, or account in a secure area."],
      ["c", "A general benefits handbook behind a shared staff password.", "A shared-access location does not make a general document individualized."],
      ["d", "Every record in an authenticated government portal.", "The exception is not a blanket exclusion for all authenticated content or application interfaces."]
    ],
    answer: "b",
    explanation: "Apply the category to the document and facts stated in the rule; do not expand it to an entire portal or service journey.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-exception-residual-duties",
    title: "Preserve duties outside the technical rule",
    competency: "ADA obligations",
    source: "ADA Title II web rule: effect of exceptions",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A document fits one of the five specific web-rule exceptions, and a person with a disability cannot obtain the information. What follows?",
    choices: [
      ["a", "The public entity has no further ADA responsibility for the information.", "The exceptions do not remove existing duties such as effective communication, reasonable modifications, and equal opportunity."],
      ["b", "The technical exception can apply, but the entity must still analyze and meet its other Title II duties for the person's access.", "Correct: an exception from the technical standard is not an exception from the ADA as a whole."],
      ["c", "The entity must delete the document immediately.", "Deletion is not the prescribed consequence and may impair program access or records obligations."],
      ["d", "Only a court may provide the information in another format.", "Public entities retain their own operational duties under Title II." ]
    ],
    answer: "b",
    explanation: "Write exception decisions narrowly and maintain an accessible-response process for effective communication and equal participation.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-alternate-version",
    title: "Control use of alternate versions",
    competency: "Conforming alternate versions",
    source: "ADA Title II web rule: conforming alternate versions",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A county proposes an accessible text-only site instead of fixing its inaccessible primary site because remediation costs more. Which rule-based analysis is strongest?",
    choices: [
      ["a", "Cost preference alone permits a separate conforming alternate version.", "The rule restricts alternate versions to circumstances involving technical or legal limitations, not ordinary cost preference."],
      ["b", "The county may use a conforming alternate version only when making the content directly accessible is not possible because of technical or legal limitations.", "Correct: the rule deliberately limits this route so separate experiences do not become the default."],
      ["c", "Any text-only page is automatically a conforming alternate version.", "The alternate version must itself conform and meet the rule's conditions; a label or format is not enough."],
      ["d", "Alternate versions are prohibited in every circumstance.", "The rule permits them within a narrow technical-or-legal-limitation condition." ]
    ],
    answer: "b",
    explanation: "Treat alternate-version use as a documented exception path, not a routine remediation strategy.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-undue-burden",
    title: "Document undue-burden decisions",
    competency: "Limitations and decision authority",
    source: "ADA Title II web rule: fundamental alteration and undue financial and administrative burdens",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "A department says that remediating a service would create undue financial and administrative burdens. Which record is required for a defensible decision?",
    choices: [
      ["a", "A developer's informal estimate attached to the backlog.", "An informal engineering estimate is not the decision process described by Title II."],
      ["b", "A decision by the head of the public entity or designee, after considering all resources available for the program, with a written statement of the reasons.", "Correct: the limitation requires accountable, resource-aware, written decision-making."],
      ["c", "A vendor statement that remediation is uncommon in the market.", "Market practice does not establish undue burden for the public entity's program."],
      ["d", "No written record if the entity serves fewer than 50,000 people.", "Entity size affects the compliance date, not this documentation requirement." ]
    ],
    answer: "b",
    explanation: "Testers supply evidence and impact; the authorized official makes and documents the limitation decision. The entity must still take other action that does not cause the burden where possible.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-minimal-impact",
    title: "Avoid turning a narrow defense into a shortcut",
    competency: "Minimal impact",
    source: "ADA Title II web rule: minimal impact on access",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "An automated scan finds only two failures, so the team labels the entire site 'minimal impact' without evaluating disabled users' access. What is wrong with that reasoning?",
    choices: [
      ["a", "Nothing; a low issue count automatically proves minimal impact.", "The defense is not a numeric scanner threshold and cannot be established without analyzing access in the manner required by the rule."],
      ["b", "The public entity bears the burden of showing the nonconformance has only minimal impact on access; issue count alone does not establish that.", "Correct: the rule describes a narrow, fact-specific showing, not a general tolerance score."],
      ["c", "Minimal impact can be used only for printed documents.", "The provision concerns covered web content and mobile apps, not print-only material."],
      ["d", "Any WCAG failure always proves total denial of access.", "Severity and impact require evidence; this absolute claim is also unsupported." ]
    ],
    answer: "b",
    explanation: "Never derive legal impact from scanner counts. Examine the affected information, controls, user journeys, and disabled users' access.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-mobile-app",
    title: "Include native mobile experiences",
    competency: "Technology coverage",
    source: "ADA Title II web and mobile app rule",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleIIFirstSteps,
    prompt: "A state agency remediates its responsive website but omits its native appointment app from the compliance inventory. Which statement is accurate?",
    choices: [
      ["a", "The inventory is complete because native apps are not web content.", "The rule expressly covers mobile apps as well as web content."],
      ["b", "The native app remains in scope and needs its own WCAG 2.1 AA evaluation across supported platforms, states, and complete user processes.", "Correct: a conforming website does not establish conformance of a separate covered mobile app."],
      ["c", "The app is covered only if it embeds a browser.", "The rule is not limited to webviews."],
      ["d", "App-store accessibility statements replace testing.", "Store metadata is not conformance evidence for the actual user experience." ]
    ],
    answer: "b",
    explanation: "Inventory by service and technology surface. Web, native mobile, documents, and vendor-operated components can require separate evidence.",
    studyHref: "#regulations/title-ii"
  },
  {
    id: "titleii-five-exceptions",
    title: "Recognise the complete exception set",
    competency: "Exception taxonomy",
    source: "ADA Title II web rule: exceptions",
    sourceUrl: OFFICIAL_SOURCE_URLS.titleII,
    prompt: "Which list accurately names the five categories of content exceptions in the Title II web and mobile app rule?",
    choices: [
      ["a", "Archived web content; preexisting conventional electronic documents; certain third-party posts; individualized password-protected conventional electronic documents; preexisting social media posts.", "Correct: these are the five categories, each with its own conditions."],
      ["b", "All legacy pages; every vendor service; all PDFs; social media; small-government websites.", "These broad categories do not match the rule and erase important conditions."],
      ["c", "Maps; videos; forms; mobile apps; emergency notices.", "These content types are not the rule's five exceptions."],
      ["d", "WCAG Level AAA content; intranets; databases; live audio; public records.", "This list does not state the five exceptions adopted by DOJ." ]
    ],
    answer: "a",
    explanation: "Knowing the names is only the first step. Apply the detailed conditions to each item and preserve other ADA duties.",
    studyHref: "#regulations/title-ii"
  }
];

const EAA_QUESTIONS = [
  {
    id: "eaa-applicability-date",
    title: "Anchor the application date",
    competency: "Temporal scope",
    source: "Directive (EU) 2019/882, Article 31",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "What is the central application date learners should use when first scoping covered EAA products placed on the market and covered services provided to consumers?",
    choices: [
      ["a", "28 June 2025, subject to the Directive's transition provisions and national implementing law.", "Correct: Member States apply the measures from that date, while Article 32 contains specific transitional rules."],
      ["b", "24 April 2026 for every covered operator.", "That was an original U.S. Title II compliance date, not the EAA application date."],
      ["c", "The date on which WCAG 2.2 became a Recommendation.", "The EAA's application date is established by the Directive, not by a W3C publication milestone."],
      ["d", "There is no shared EU date.", "The Directive establishes a shared application date, though enforcement and implementation operate through Member State law." ]
    ],
    answer: "a",
    explanation: "Start with 28 June 2025, then test product/service category, transaction timing, Article 32 transitions, and the relevant national law.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-ecommerce-scope",
    title: "Classify an e-commerce service",
    competency: "Covered services",
    source: "Directive (EU) 2019/882, Article 2(2)(f)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "A retailer provides an online service to EU consumers so they can purchase products through a website and app. Which initial EAA classification is strongest?",
    choices: [
      ["a", "It is an e-commerce service within the Directive's covered service categories; assess the consumer journey and applicable national law.", "Correct: e-commerce services are expressly in scope."],
      ["b", "It is out of scope because the products sold are not themselves digital.", "The covered service is the consumer e-commerce journey, regardless of whether the goods are physical."],
      ["c", "Only the payment confirmation email can be covered.", "The service journey is broader than one communication."],
      ["d", "It is covered only if the retailer is a public authority.", "The EAA reaches specified private-market products and services; it is not limited to public bodies." ]
    ],
    answer: "a",
    explanation: "Map account creation, discovery, selection, checkout, payment, confirmation, and support as parts of the covered service rather than auditing a homepage alone.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-products",
    title: "Identify covered product categories",
    competency: "Product scope",
    source: "Directive (EU) 2019/882, Article 2(1)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "Which collection consists of product categories expressly addressed by the EAA?",
    choices: [
      ["a", "General-purpose consumer computer hardware and operating systems, certain self-service terminals, consumer terminal equipment with interactive computing capability, and e-readers.", "Correct: these categories track Article 2(1), subject to its exact definitions and limits."],
      ["b", "Every household appliance, all industrial robots, furniture, and prescription medicine.", "The Directive is targeted rather than a blanket accessibility law for all products."],
      ["c", "Only websites and PDFs.", "The EAA expressly covers physical products as well as services."],
      ["d", "Only products purchased by a government body.", "Product coverage is not limited to public procurement." ]
    ],
    answer: "a",
    explanation: "Use Article 2 and the Directive's definitions; never infer blanket product coverage from a broad accessibility objective.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-services",
    title: "Identify covered service categories",
    competency: "Service scope",
    source: "Directive (EU) 2019/882, Article 2(2)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "Which set is closest to the service scope stated in Article 2(2)?",
    choices: [
      ["a", "Electronic communications, access to audiovisual media services, specified passenger transport elements, consumer banking, e-books and dedicated software, and e-commerce.", "Correct: this reflects the targeted service categories in the Directive."],
      ["b", "All professional services offered anywhere in the world.", "The EAA defines particular covered categories and territorial conditions."],
      ["c", "Only banking websites operated by governments.", "Coverage is broader in category and is not confined to public operators."],
      ["d", "Only physical ticket offices and printed books.", "The Directive addresses specified digital services and products, including e-books and service interfaces." ]
    ],
    answer: "a",
    explanation: "Name the precise Article 2 category before mapping Annex I requirements; a generic claim that 'the EAA covers digital' is not sufficient.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-microenterprise-service",
    title: "Apply the microenterprise service exemption",
    competency: "Operator exceptions",
    source: "Directive (EU) 2019/882, Article 4(5)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "A microenterprise provides an otherwise covered service. What does Article 4(5) state?",
    choices: [
      ["a", "Microenterprises providing services are exempt from complying with the accessibility requirements and related service obligations in the Directive.", "Correct: Article 4(5) states this service-provider exemption."],
      ["b", "Every small and medium-sized enterprise is exempt from every part of the Directive.", "The provision is narrower: it concerns microenterprises providing services."],
      ["c", "The exemption applies only after a regulator approves each inaccessible screen.", "That approval mechanism is not what Article 4(5) states."],
      ["d", "Microenterprises must instead conform to WCAG AAA.", "The Directive does not replace the exemption with that target." ]
    ],
    answer: "a",
    explanation: "Classify both the operator and its role. Do not turn a service-provider exemption into a blanket exemption for all small businesses or products.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-microenterprise-product",
    title: "Do not overextend the microenterprise rule",
    competency: "Product obligations",
    source: "Directive (EU) 2019/882, Articles 4(5) and 7",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "A microenterprise manufactures a covered product for the EU market and claims Article 4(5) automatically exempts it. Which response is accurate?",
    choices: [
      ["a", "Correct; Article 4(5) exempts every microenterprise product manufacturer.", "Article 4(5) is worded for microenterprises providing services, not as a blanket product-manufacturer exemption."],
      ["b", "The automatic service-provider exemption should not be applied to its product role; analyze the product obligations and any other applicable provisions.", "Correct: operator role matters, and the product must not be removed from scope on the basis of Article 4(5)."],
      ["c", "Only CE marking applies; accessibility requirements never do.", "CE marking accompanies product conformity obligations; it does not replace accessibility."],
      ["d", "The product is exempt if sold online.", "Sales channel does not create this exemption." ]
    ],
    answer: "b",
    explanation: "Avoid shorthand such as 'microbusiness exemption.' State whether the entity provides a service or performs a product-market role.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-built-environment",
    title: "Separate EU requirements from national options",
    competency: "Built environment",
    source: "Directive (EU) 2019/882, Article 4(4)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "Does Article 4(4) itself impose one identical built-environment rule for every covered service location across the EU?",
    choices: [
      ["a", "Yes; it directly fixes every doorway and counter specification.", "Article 4(4) gives Member States an option rather than imposing one exhaustive EU-wide built-environment code."],
      ["b", "No. Member States may decide that the built environment used by clients of covered services must meet Annex III requirements, so national implementation must be checked.", "Correct: this is a national option stated in Article 4(4)."],
      ["c", "No physical environment can ever matter under the EAA.", "The Directive expressly allows Member States to address the relevant built environment."],
      ["d", "It applies only to employee-only offices.", "The provision concerns the built environment used by clients of covered services." ]
    ],
    answer: "b",
    explanation: "Label EU-level duties and Member State options separately. For physical locations, the relevant national implementation is indispensable.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-burden-assessment",
    title: "Evidence a limitation claim",
    competency: "Fundamental alteration and disproportionate burden",
    source: "Directive (EU) 2019/882, Article 14",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "An economic operator invokes disproportionate burden for a covered feature. What record does Article 14 require?",
    choices: [
      ["a", "A documented assessment using the relevant criteria in Annex VI, retained for five years after the product was last made available or after the service was last provided.", "Correct: Article 14 requires assessment, documentation, and a five-year record period."],
      ["b", "A verbal statement that competitors have the same barrier.", "Competitor practice is not the documented assessment required by Article 14."],
      ["c", "Only an automated WCAG score.", "A scanner score does not perform the Annex VI legal and resource assessment."],
      ["d", "No record unless a consumer files suit.", "The obligation to assess and document does not depend on litigation." ]
    ],
    answer: "a",
    explanation: "Testing evidence informs the analysis, but the operator must document the limitation against the Directive's criteria and preserve the record.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-external-funding",
    title: "Recognise the funding restriction",
    competency: "Disproportionate burden",
    source: "Directive (EU) 2019/882, Article 14(6)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "An operator received funding from a public source specifically to improve accessibility, but still wants to invoke disproportionate burden for the funded work. What does Article 14(6) indicate?",
    choices: [
      ["a", "The operator may always ignore the funding when measuring burden.", "Article 14(6) prevents reliance on disproportionate burden where the operator has received third-party funding for improving accessibility."],
      ["b", "The operator cannot invoke disproportionate burden in that circumstance.", "Correct: the funding condition blocks that limitation route."],
      ["c", "Funding converts the service into a microenterprise.", "Funding does not determine the microenterprise definition."],
      ["d", "Only private funding matters.", "The provision addresses funding from sources other than the operator's own resources, including public and private sources." ]
    ],
    answer: "b",
    explanation: "A burden analysis must record accessibility-specific external funding; it cannot treat funded remediation as though the operator bears the entire resource impact.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-harmonised-presumption",
    title: "Limit the presumption of conformity",
    competency: "Standards and evidence",
    source: "Directive (EU) 2019/882, Article 15",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "A team conforms to part of a harmonised standard whose reference is published in the Official Journal of the European Union. What presumption does Article 15 support?",
    choices: [
      ["a", "Automatic conformity with every EAA requirement and every national accessibility law.", "The presumption is limited to requirements covered by the cited standard or part."],
      ["b", "Presumed conformity only with the Directive's accessibility requirements covered by that standard or part.", "Correct: both the published reference and the extent of coverage matter."],
      ["c", "No evidential value under any circumstance.", "Article 15 expressly provides a presumption route."],
      ["d", "A permanent exemption from market surveillance.", "Presumption of conformity does not abolish oversight or other operator duties." ]
    ],
    answer: "b",
    explanation: "Record the standard edition, cited reference, clauses used, and exact Annex I requirements covered; do not turn a partial mapping into a blanket claim.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-transition-service-products",
    title: "Apply the service transition window",
    competency: "Article 32 transitions",
    source: "Directive (EU) 2019/882, Article 32(1)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "A service provider used a particular product lawfully to provide a similar covered service before 28 June 2025. Which transition may national measures permit?",
    choices: [
      ["a", "Continued provision using those products until 28 June 2030.", "Correct: Article 32(1) provides this service transition period."],
      ["b", "Permanent use of every legacy product with no end date.", "The general service transition has a stated end date."],
      ["c", "Use only until 26 April 2027.", "That is a U.S. Title II deadline, not this EAA transition."],
      ["d", "Immediate destruction of all products used before 2025.", "The Directive provides transition routes rather than requiring this." ]
    ],
    answer: "a",
    explanation: "Distinguish the general 2030 service transition from the separate rule for service contracts and the optional terminal-life provision.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-transition-contracts",
    title: "Calculate the contract transition cap",
    competency: "Article 32 transitions",
    source: "Directive (EU) 2019/882, Article 32(1)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "A covered service contract was agreed before 28 June 2025 and continues unchanged. How long may it continue under the Article 32 transition?",
    choices: [
      ["a", "Until its expiry, but no longer than five years from 28 June 2025.", "Correct: Article 32 sets both the contractual endpoint and a five-year maximum."],
      ["b", "For twenty years in every case.", "The twenty-year maximum relates to a separate optional treatment of certain self-service terminals."],
      ["c", "Only for six months.", "That is not the transition period stated in Article 32."],
      ["d", "Forever if neither party changes the text.", "The Directive imposes a maximum period." ]
    ],
    answer: "a",
    explanation: "Record contract date, expiry, change history, and the five-year cap; do not confuse contract and equipment transitions.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-terminal-transition",
    title: "Bound the terminal transition",
    competency: "Self-service terminals",
    source: "Directive (EU) 2019/882, Article 32(2)",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "What may Member States allow for self-service terminals lawfully used before 28 June 2025 to provide covered services?",
    choices: [
      ["a", "Continued use until the end of their economically useful life, but not longer than twenty years after they entered into use.", "Correct: Article 32(2) combines an economically useful life concept with a twenty-year maximum."],
      ["b", "Unlimited use because all terminals are permanently exempt.", "The provision has an explicit maximum and is not a blanket permanent exemption."],
      ["c", "Use for exactly five years, with no Member State choice.", "The five-year cap concerns certain preexisting service contracts; Article 32(2) is a separate Member State option."],
      ["d", "Use only if the terminal conforms to WCAG 2.2 AAA.", "That is not the condition stated by Article 32(2)." ]
    ],
    answer: "a",
    explanation: "Check national implementation before relying on this option, and retain the terminal's first-use date and useful-life evidence.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-product-conformity",
    title: "Connect product evidence and market marking",
    competency: "Product conformity assessment",
    source: "Directive (EU) 2019/882, Articles 7, 16 and 18; Annex IV",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "Before placing a covered product on the EU market, which evidence chain is most complete for a manufacturer?",
    choices: [
      ["a", "Technical documentation and conformity assessment, an EU declaration of conformity, and CE marking, alongside the manufacturer's accessibility obligations.", "Correct: the Directive connects the Annex IV assessment route with declaration and CE marking requirements."],
      ["b", "A homepage accessibility statement alone.", "A web statement does not replace product technical documentation, assessment, declaration, or marking."],
      ["c", "A vendor's private WCAG score with no product identification.", "The evidence must be tied to the covered product and the Directive's requirements."],
      ["d", "No documentation until a market-surveillance authority requests it.", "Manufacturers have proactive conformity and documentation duties." ]
    ],
    answer: "a",
    explanation: "Product evidence is broader than an interface audit. Preserve identification, design and test evidence, standards mapping, declaration, and marking decisions.",
    studyHref: "#regulations/eaa"
  },
  {
    id: "eaa-service-information",
    title: "Maintain accessible service information",
    competency: "Service-provider documentation",
    source: "Directive (EU) 2019/882, Article 13 and Annex V",
    sourceUrl: OFFICIAL_SOURCE_URLS.eaa,
    prompt: "What must a non-exempt provider of a covered service do with information explaining how the service meets the accessibility requirements?",
    choices: [
      ["a", "Prepare the information in accordance with Annex V, make it available to the public in written and oral form including accessibly, and keep it for as long as the service operates.", "Correct: these are core Article 13 documentation and availability duties."],
      ["b", "Keep it secret unless a court orders disclosure.", "Article 13 requires public availability rather than secrecy."],
      ["c", "Publish it once, then delete it after thirty days.", "The information must be maintained for as long as the service is in operation."],
      ["d", "Provide only a machine-generated conformance percentage.", "Annex V calls for meaningful service and conformity information, not a bare score." ]
    ],
    answer: "a",
    explanation: "Treat service accessibility information as a maintained operational artifact tied to how the service works, not a one-time marketing claim.",
    studyHref: "#regulations/eaa"
  }
];

function withQuestionMetadata(questions, domain, sourceUrl, studyHref) {
  return questions.map((question) => ({
    ...question,
    domain,
    sourceUrl: question.sourceUrl || sourceUrl,
    studyHref: studyHref || question.studyHref
  }));
}

const SECTION_508_ASSESSMENT_QUESTIONS = withQuestionMetadata(SECTION_508_QUESTIONS, "Section 508", OFFICIAL_SOURCE_URLS.section508, "#regulations/section-508");
const WCAG_ASSESSMENT_QUESTIONS = withQuestionMetadata(ADVANCED_WCAG_QUESTIONS, "WCAG 2.2", OFFICIAL_SOURCE_URLS.wcag22);
const TITLE_II_ASSESSMENT_QUESTIONS = withQuestionMetadata(TITLE_II_QUESTIONS, "ADA Title II", OFFICIAL_SOURCE_URLS.titleII);
const EAA_ASSESSMENT_QUESTIONS = withQuestionMetadata(EAA_QUESTIONS, "European Accessibility Act", OFFICIAL_SOURCE_URLS.eaa);
const ADVANCED_QUESTION_BANK = [
  ...SECTION_508_ASSESSMENT_QUESTIONS,
  ...TITLE_II_ASSESSMENT_QUESTIONS,
  ...EAA_ASSESSMENT_QUESTIONS,
  ...WCAG_ASSESSMENT_QUESTIONS
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
    example: "For a modal dialog implemented with the WAI-ARIA APG pattern, focus moves into the dialog, Escape closes it, and focus normally returns to the invoking control; confirm the component specification and user context.",
    practice: "Test a menu, dialog, form, and carousel using only the keyboard.",
    check: "Can a tired user predict where focus goes next?"
  },
  {
    id: "forms-helper",
    title: "Forms: behave like a patient helper",
    level: "Beginner to exam",
    related: ["1.3.1", "1.3.5", "3.3.1", "3.3.2", "3.3.3", "3.3.7", "3.3.8"],
    teach: [
      "Each field needs instructions or identification that communicates its purpose; when a visible label is presented, associate it programmatically with the field.",
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
    related: ["1.4.1", "1.4.3", "1.4.11", "1.4.13", "2.4.7", "2.4.13"],
    teach: [
      "Check normal text.",
      "Check large text.",
      "Apply the relevant criterion: 1.4.11 to required component or state boundaries and 2.4.13 (AAA) to focus-indicator area and contrast; 2.4.7 only requires focus to be visible.",
      "Check hover and focus popups.",
      "Check the design in disabled-looking but active states."
    ],
    example: "A visible focus ring may satisfy 2.4.7 while failing the stricter Level AAA measurements in 2.4.13; report the criterion and claimed conformance level.",
    practice: "Pick five UI states: default, hover, focus, selected, error. Test contrast for each.",
    check: "Can the user tell what is interactive and what changed?"
  },
  {
    id: "spa-announcements",
    title: "Single-page apps: tell the user what changed",
    level: "Intermediate",
    related: ["2.4.2", "2.4.3", "3.2.2", "4.1.2", "4.1.3"],
    teach: [
      "When a route change changes the page's topic or purpose, keep the document title descriptive.",
      "Choose focus management from the interaction context; WCAG does not require focus to move on every SPA route change.",
      "When a non-focus status message reports a result, error, wait state, or progress, expose it programmatically so assistive technology can present it without receiving focus.",
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
    check: "Could someone with fatigue, memory difficulty, dyslexia, or anxiety still finish the task? These usability patterns support cognitive access; the listed WCAG criteria become normative only when their specific conditions are met."
  },
  {
    id: "qa-bird-eye",
    title: "QA first pass: build a page risk map",
    level: "QA foundation",
    related: ["1.3.1", "1.4.3", "2.4.2", "2.4.6", "3.3.2"],
    teach: [
      "Start with the visible page before running tools.",
      "List the main regions, forms, controls, media, tables, dialogs, and dynamic areas.",
      "Mark anything that depends on color, hover, dragging, timing, or a custom widget.",
      "Choose the first test path by user risk, not by what is easiest to inspect.",
      "Record what you tested so the same state can be retested later."
    ],
    example: "A checkout page risk map includes cart table, coupon form, shipping fields, payment iframe, error summary, modal terms, and order confirmation status.",
    practice: "Open one page and write a five-line risk map before touching an automated scanner.",
    check: "Could another tester understand what matters on this page in under one minute?"
  },
  {
    id: "qa-nvda-setup",
    title: "Screen reader QA: test meaning, not every command",
    level: "QA practical",
    related: ["1.3.1", "2.4.1", "2.4.6", "3.3.1", "4.1.2", "4.1.3"],
    teach: [
      "Use headings and landmarks to understand page structure.",
      "Tab through interactive controls and listen for name, role, state, and value.",
      "Check that form errors are announced near the field or in a useful summary.",
      "After dynamic updates, confirm the screen reader receives the result.",
      "Stop when you have enough evidence for the user task; do not turn testing into command memorization."
    ],
    example: "A filter button that only says 'button collapsed' fails the task because the user does not know which filter it controls.",
    practice: "Test a form with NVDA or another screen reader and write what each field is called, what role it has, and what error is announced.",
    check: "If the visual label disappeared, would the spoken name still tell the user what to do?"
  },
  {
    id: "qa-tools-evidence",
    title: "QA tools: turn scanner output into useful evidence",
    level: "QA practical",
    related: ["1.1.1", "1.4.3", "1.4.11", "2.1.1", "4.1.2"],
    teach: [
      "Run automated tools after the page state is ready.",
      "Treat tool output as a lead, not a final conclusion.",
      "Verify the issue manually in the browser state where it appears.",
      "Write evidence with selector, visible behavior, assistive technology impact, criterion, and expected result.",
      "Retest the fixed state, not just the initial page load."
    ],
    example: "A contrast tool reports a failing border; the useful bug explains that the selected tab border is the only selected-state indicator and is too low contrast.",
    practice: "Take one automated finding and rewrite it as a complete bug report with user impact and retest steps.",
    check: "Would a developer know exactly what to fix and how you will verify it?"
  },
  {
    id: "qa-regression-loop",
    title: "QA regression loop: prove the fix stayed fixed",
    level: "QA advanced",
    related: ["2.1.1", "2.4.3", "2.4.7", "3.3.1", "4.1.3"],
    teach: [
      "Save the failing state before the fix: viewport, browser, login state, data, and steps.",
      "Retest the exact path with keyboard, zoom, and the relevant assistive technology.",
      "Check nearby states that often break with the same code change.",
      "Update the evidence when the fix changes behavior in a different way.",
      "Add the stable check to the team's regression list."
    ],
    example: "After a modal focus fix, retest opening, tab order, Escape, close button, click outside behavior, and focus return.",
    practice: "Choose one fixed accessibility bug and build a six-step regression checklist for the component.",
    check: "Can the team repeat this test next month without asking you what you meant?"
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
  },
  "qa-bird-eye": {
    category: "QA testing",
    topic: "Risk mapping",
    difficulty: "Foundation",
    description: "Learn the first-pass QA routine: identify page regions, risky components, interaction states, and the first user path to test.",
    tags: ["qa", "risk map", "manual testing", "inspection", "page states"]
  },
  "qa-nvda-setup": {
    category: "QA testing",
    topic: "Screen reader checks",
    difficulty: "Practical",
    description: "Use screen reader testing to confirm structure, control names, form errors, and dynamic updates without getting lost in commands.",
    tags: ["qa", "nvda", "screen reader", "name role value", "forms", "status messages"]
  },
  "qa-tools-evidence": {
    category: "QA testing",
    topic: "Tool output and bug reports",
    difficulty: "Practical",
    description: "Convert automated scanner findings into verified evidence that developers can reproduce and fix.",
    tags: ["qa", "axe", "bookmarklets", "automated testing", "bug reports", "evidence"]
  },
  "qa-regression-loop": {
    category: "QA testing",
    topic: "Regression testing",
    difficulty: "Advanced",
    description: "Retest accessibility fixes with the exact state, nearby states, and a reusable regression checklist.",
    tags: ["qa", "regression", "retest", "keyboard", "focus", "component testing"]
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
  ["A11Y", "Numeronym for accessibility: A, then 11 letters, then Y."],
  ["Accessibility", "The practice of making products, services, content, and environments usable by people with a wide range of abilities and contexts."],
  ["Accessibility Conformance Report (ACR)", "A report that documents how a product meets accessibility standards, often created from a VPAT template."],
  ["Accessible authentication", "Login or verification that does not depend only on memory, transcription, puzzles, or complex mental work."],
  ["Accessible description", "Extra programmatic information that helps explain a control or element beyond its accessible name."],
  ["Accessible name", "The name assistive technology announces for a control, link, image button, or widget."],
  ["Accessible Rich Internet Applications (ARIA)", "A W3C specification for adding roles, states, and properties when native HTML cannot express a custom interface correctly."],
  ["ADA", "Americans with Disabilities Act, a U.S. civil rights law that prohibits disability discrimination in covered contexts."],
  ["ADS", "Accessible Document Specialist, an IAAP certification focused on accessible document creation and remediation."],
  ["Alternative for time-based media", "A text document that provides equivalent information for audio or video, such as a full transcript with relevant visual detail."],
  ["Alternative text", "Text that communicates the purpose or information of non-text content, often through an image alt attribute or nearby equivalent."],
  ["APG", "ARIA Authoring Practices Guide, W3C guidance for expected keyboard interaction and semantics for common widgets."],
  ["Assistive technology", "Tools people use to access digital content, such as screen readers, magnifiers, switch control, voice input, captions, and braille displays."],
  ["AT", "Assistive technology."],
  ["ATAG", "Authoring Tool Accessibility Guidelines, W3C guidance for tools used to create web content."],
  ["Audio description", "Narration that describes important visual information in video for people who cannot see it."],
  ["Authoring tool", "Software or a service used to create content, such as a CMS, document editor, design tool, or course builder."],
  ["Bypass blocks", "A way to skip repeated content, such as a skip link that moves keyboard focus directly to the main content."],
  ["CAPTCHA", "Under WCAG 1.1.1, CAPTCHA needs a text alternative identifying and describing its purpose and alternative forms using different sensory modes, unless an already-conforming path avoids it."],
  ["Captions", "Text synchronized with media that includes speech and meaningful sounds needed to understand the audio."],
  ["CE marking", "A mark used for some products in the European market to indicate declared conformity with applicable EU requirements."],
  ["CEN", "European Committee for Standardization, one of the European standards organizations involved in harmonized standards."],
  ["CENELEC", "European Committee for Electrotechnical Standardization, a European standards organization."],
  ["COGA", "Cognitive and Learning Disabilities Accessibility, a W3C/WAI area focused on cognitive and learning disability needs."],
  ["Compatibility", "The aim of WCAG Guideline 4.1, Compatible, under the Robust principle: maximizing compatibility with current and future user agents, including assistive technologies."],
  ["Conforming alternate version", "A version that conforms at the designated level, provides the same information and functionality in the same language, stays up to date, and is reachable from the nonconforming page through an accessibility-supported mechanism—or vice versa."],
  ["Conformance", "A claim that a page or product meets a specific WCAG version and level, such as WCAG 2.2 AA."],
  ["Content management system (CMS)", "Software used to create, edit, publish, and manage digital content."],
  ["CPACC", "Certified Professional in Accessibility Core Competencies, an IAAP certification covering disability, accessibility, universal design, and laws/standards."],
  ["CSS pixel", "A web layout unit used by browsers; WCAG zoom and reflow requirements often refer to CSS pixels."],
  ["Decorative content", "Content that adds visual style but no meaning. It should usually be hidden from assistive technology."],
  ["DOM", "Document Object Model, the browser's structured representation of a web page."],
  ["EAA", "European Accessibility Act, Directive (EU) 2019/882, covering accessibility requirements for certain products and services in the EU market."],
  ["Electronic content", "Digital content such as web pages, documents, media, forms, training materials, and messages."],
  ["EN 301 549", "European standard for accessibility requirements for ICT products and services, often used for public procurement and EAA/WAD technical alignment."],
  ["Equivalent facilitation", "An accessibility approach that uses an alternate method to provide substantially equivalent or greater access."],
  ["Essential", "A WCAG term for something that cannot be removed without fundamentally changing the information or function."],
  ["ETSI", "European Telecommunications Standards Institute, one of the standards organizations involved in EN 301 549."],
  ["European Accessibility Act", "EU directive setting accessibility requirements for covered products and services such as e-commerce, banking, e-books, transport services, and consumer ICT."],
  ["Focus", "The current interactive place on the page, often shown by a visible outline when using a keyboard."],
  ["Focus indicator", "The visible styling that shows which element currently has keyboard focus."],
  ["Focus order", "The sequence in which keyboard focus moves through interactive elements."],
  ["Focus trap", "A failure where keyboard focus cannot leave a component or page area."],
  ["Functional performance criteria (FPC)", "Criteria that describe access by functional ability, used in Section 508 when technical provisions do not fully address a user need."],
  ["Harmonized standard", "A European standard cited in the Official Journal of the EU that can provide a presumption of conformity for relevant legal requirements."],
  ["HTML", "HyperText Markup Language, the core markup language for web page structure and semantics."],
  ["IAAP", "International Association of Accessibility Professionals, an organization that provides accessibility certifications and professional resources."],
  ["ICT", "Information and communication technology, including software, hardware, electronic content, support services, and telecommunications."],
  ["Informative", "Helpful explanatory material that is not itself the binding requirement."],
  ["Keyboard trap", "A state where keyboard users can move focus into an area but cannot move focus out using standard keys."],
  ["Label in name", "WCAG requirement that the accessible name of a control includes the visible label text, supporting speech input and screen reader users."],
  ["Landmark", "A semantic page region such as main, navigation, search, banner, contentinfo, or complementary."],
  ["Live region", "An area of a page that can announce dynamic updates to assistive technologies without moving focus."],
  ["Market surveillance", "Oversight activity by authorities to check whether products or services meet applicable market requirements."],
  ["Name, role, value", "The core accessibility information a control must expose: what it is called, what type of thing it is, and its current state or value."],
  ["Native HTML", "Built-in HTML elements with default semantics and behavior, such as button, input, select, heading, list, and table elements."],
  ["Normative", "The official requirement text. In an exam, normative wording matters more than opinions or habits."],
  ["Non-interference", "WCAG conformance rule that certain failures must not block the whole page, even if alternate content exists."],
  ["Non-text content", "Content that is not text, such as images, icons, charts, audio, video, CAPTCHA, and canvas drawings."],
  ["NVDA", "NonVisual Desktop Access, a free Windows screen reader commonly used for accessibility testing."],
  ["OCR", "Optical character recognition, a process that converts images of text into machine-readable text."],
  ["Official Journal of the European Union (OJEU)", "The official publication where EU legal acts and harmonized standard references are published."],
  ["Operable", "WCAG principle requiring that people can use interface controls and navigation."],
  ["Perceivable", "WCAG principle requiring that people can perceive the information being presented."],
  ["PDF/UA", "PDF/Universal Accessibility, an ISO standard for accessible PDF documents."],
  ["Pointer gesture", "A multipoint or path-based pointer input, such as a pinch gesture or tracing a particular path; dragging movement is addressed separately in WCAG 2.5.7."],
  ["Dragging movement", "A pointer operation in which the pointer contacts an element, moves while contact is maintained, and is released; WCAG 2.5.7 requires a single-pointer alternative unless dragging is essential or user-agent controlled."],
  ["POUR", "The four WCAG principles: Perceivable, Operable, Understandable, and Robust."],
  ["Programmatically determined", "Information is available in code so software can read it, not only visible to the eye."],
  ["QA", "Quality assurance, the process of checking whether a product behaves as expected and meets requirements."],
  ["Reflow", "Layout behavior that allows content to fit in one direction at high zoom or narrow viewport widths without two-dimensional scrolling, except for content that requires a two-dimensional layout."],
  ["Robust", "WCAG principle requiring that content works with current and future user agents and assistive technologies."],
  ["SC", "Success criterion, a specific testable WCAG requirement such as 1.1.1 Non-text Content."],
  ["Screen reader", "Assistive technology that speaks or brailles interface content and structure."],
  ["Section 508", "U.S. federal accessibility requirements for ICT developed, procured, maintained, or used by federal agencies."],
  ["Semantic HTML", "HTML that communicates meaning and structure, not just visual appearance."],
  ["SPA", "Single-page application, a web app that changes views dynamically without full page reloads."],
  ["Status message", "A change in content that is not a change of context and conveys a result, waiting or progress state, or the existence of errors; when WCAG 4.1.3 applies, software must be able to determine it without focus."],
  ["SVG", "Scalable Vector Graphics, an XML-based format for vector images that may need accessible names or hiding when decorative."],
  ["Transcript", "Text version of audio or media content, often including speech and relevant non-speech information."],
  ["UA", "User agent, software that presents web content, such as a browser, media player, or assistive technology."],
  ["UAAG", "User Agent Accessibility Guidelines, W3C guidance for browsers and other user agents."],
  ["Understandable", "WCAG principle requiring that content and operation are clear, predictable, and supported by helpful input assistance."],
  ["User interface component", "A control or widget that users interact with, such as a button, link, field, tab, menu, slider, or dialog."],
  ["UX", "User experience, the overall quality of how people perceive, understand, and complete tasks in a product or service."],
  ["VoiceOver", "Apple's built-in screen reader for macOS, iOS, iPadOS, watchOS, and tvOS."],
  ["VPAT", "Voluntary Product Accessibility Template, a template used to create an Accessibility Conformance Report."],
  ["W3C", "World Wide Web Consortium, the standards organization that publishes WCAG, WAI-ARIA, ATAG, and related web standards."],
  ["WAD", "Web Accessibility Directive, EU directive covering accessibility of public sector websites and mobile apps."],
  ["WAI", "Web Accessibility Initiative, the W3C group that develops accessibility standards and guidance."],
  ["WAI-ARIA", "W3C Accessible Rich Internet Applications specification."],
  ["WAS", "Web Accessibility Specialist, an IAAP certification focused on technical web accessibility knowledge."],
  ["WCAG", "Web Content Accessibility Guidelines, the main W3C standard for accessible web content."],
  ["WCAG2ICT", "W3C guidance on applying WCAG 2 requirements to non-web documents and software."],
  ["WebVTT", "Web Video Text Tracks, a format used for captions, subtitles, and text tracks in web media."]
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
  },
  {
    title: "W3C Web Accessibility Evaluation Tools List",
    url: "https://www.w3.org/WAI/test-evaluate/tools/list/",
    use: "Public W3C list for finding evaluation tools by guideline, language, and platform."
  },
  {
    title: "Chrome DevTools Accessibility Reference",
    url: "https://developer.chrome.com/docs/devtools/accessibility/reference/",
    use: "Inspect the accessibility tree, names, roles, contrast, and computed accessibility properties."
  },
  {
    title: "Lighthouse Accessibility Audits",
    url: "https://developer.chrome.com/docs/lighthouse/accessibility/",
    use: "Run automated browser audits and learn what each audit can and cannot prove."
  },
  {
    title: "WAVE Web Accessibility Evaluation Tool",
    url: "https://wave.webaim.org/",
    use: "Visual inspection aid for headings, labels, alt text, contrast, structure, and ARIA warnings."
  },
  {
    title: "Accessibility Insights for Web",
    url: "https://accessibilityinsights.io/docs/web/overview/",
    use: "FastPass, assessment workflows, tab stops, and guided manual checks for web apps."
  },
  {
    title: "NVDA Screen Reader",
    url: "https://www.nvaccess.org/download/",
    use: "Free Windows screen reader for checking spoken names, roles, states, form errors, headings, and live updates."
  },
  {
    title: "Apple VoiceOver User Guide",
    url: "https://support.apple.com/guide/voiceover/welcome/mac",
    use: "Official VoiceOver guidance for testing on macOS and Safari."
  },
  {
    title: "Section508.gov Applicability and Conformance",
    url: "https://www.section508.gov/develop/applicability-conformance/",
    use: "Official U.S. federal guidance on Revised 508 applicability, WCAG 2.0 Level AA incorporation, and conformance expectations."
  },
  {
    title: "Section508.gov Determine Which Standards Apply",
    url: "https://www.section508.gov/buy/determine-ict-standards/",
    use: "Official scoping guide for electronic content, software, hardware, support documentation, support services, and functional performance criteria."
  },
  {
    title: "European Commission European Accessibility Act",
    url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en",
    use: "Official EAA overview covering purpose and products/services such as computers, ATMs, smartphones, transport, banking, e-books, and e-commerce."
  },
  {
    title: "EUR-Lex Directive (EU) 2019/882",
    url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj",
    use: "Primary legal text for European Accessibility Act articles, annexes, scope, requirements, and transition provisions."
  },
  {
    title: "Your Europe Accessibility Requirements",
    url: "https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/index_en.htm",
    use: "Business-facing EU guidance on covered products and services, general accessibility rules, exceptions, and conformity assessment."
  }
];

const AUTHORITY_CHAINS = [
  {
    jurisdiction: "United States",
    title: "Section 508 authority chain",
    description: "Trace a conclusion from the legal duty to the evidence. Each layer answers a different question.",
    steps: [
      ["1", "Statute", "29 U.S.C. § 794d", "Creates the federal-agency duty for ICT developed, procured, maintained, or used."],
      ["2", "Regulation", "36 CFR Part 1194, Appendices A and C", "Supplies scoping rules, exceptions, and technical requirements."],
      ["3", "Incorporated standard", "WCAG 2.0 Level A and AA", "Provides criteria incorporated for applicable web, content, and software."],
      ["4", "Evidence", "Agency method and ICT Testing Baseline", "Shows how provisions were evaluated; it does not create the duty."]
    ]
  },
  {
    jurisdiction: "United States",
    title: "ADA Title II web and mobile authority chain",
    description: "Decide coverage, deadline, exceptions, and proof without treating WCAG as the source of the legal duty.",
    steps: [
      ["1", "Statute", "42 U.S.C. §§ 12131–12134", "Defines public entities, prohibits disability discrimination, and authorises implementing regulations."],
      ["2", "Regulation", "28 CFR Part 35, Subpart H", "Sets web and mobile scope, WCAG 2.1 A/AA, exceptions, alternatives, duties, and the minimal-impact test."],
      ["3", "Incorporated standard", "WCAG 2.1 Level A and AA", "Supplies the technical success criteria incorporated by § 35.200."],
      ["4", "Determination record", "Facts, provision, application, evidence, boundary", "Shows why a deadline, exception, alternative, or limitation does—or does not—fit the actual facts."]
    ]
  },
  {
    jurisdiction: "European Union",
    title: "European Accessibility Act authority chain",
    description: "Keep EU legislation, national law, standards, and evidence separate.",
    steps: [
      ["1", "EU legislation", "Directive (EU) 2019/882", "Defines Union-level scope, requirements, operator duties, limitations, and transitions."],
      ["2", "National law", "Member State implementing measure", "Controls the jurisdiction-specific enforcement route, procedures, and penalties."],
      ["3", "Conformity route", "Cited harmonised standard", "Can give limited presumption of conformity when the Article 15 conditions are met."],
      ["4", "Evidence", "Assessment and technical documentation", "Supports conformity or a properly bounded limitation claim."]
    ]
  }
];

const LEGAL_DOCUMENTS = [
  {
    title: "ADA Title II statute — public services",
    url: "https://uscode.house.gov/view.xhtml?edition=prelim&path=%2Fprelim%40title42%2Fchapter126%2Fsubchapter2%2FpartA",
    jurisdiction: "us", authority: "legislation", topic: "title-ii", force: "Binding federal statute", reference: "42 U.S.C. §§ 12131–12134",
    use: "Establish whether the organisation is a public entity and identify the statutory nondiscrimination duty before applying the web rule.",
    question: "Is this a covered public entity, service, program, or activity?"
  },
  {
    title: "Integrated ADA Title II regulation",
    url: "https://www.ada.gov/law-and-regs/regulations/title-ii-2010-regulations/",
    jurisdiction: "us", authority: "regulation", topic: "title-ii", force: "Binding DOJ regulation", reference: "28 CFR Part 35, Subpart H",
    use: "Apply §§ 35.200–35.205 for scope, exceptions, conforming alternate versions, equivalent facilitation, duties, and minimal impact; read them with the April 2026 interim final rule for current compliance dates.",
    question: "Which Subpart H rule controls this fact pattern?"
  },
  {
    title: "Title II web rule — current compliance dates",
    url: "https://www.ada.gov/title-ii-web-rule/",
    jurisdiction: "us", authority: "guidance", topic: "title-ii", force: "Official DOJ explanation of the rule and 2026 extension", reference: "April 2026 interim final rule",
    use: "Confirm the extended compliance date: April 26, 2027 for entities serving 50,000 or more people, and April 26, 2028 for smaller entities and special district governments.",
    question: "Which current compliance date applies?"
  },
  {
    title: "First Steps Toward Complying with the Web and Mobile App Rule",
    url: "https://www.ada.gov/resources/web-rule-first-steps/",
    jurisdiction: "us", authority: "guidance", topic: "title-ii", force: "Official DOJ implementation guidance", reference: "ADA.gov First Steps",
    use: "Determine population evidence, special-district treatment, university and school-district calculations, content inventory, and exception boundaries.",
    question: "What facts and records are needed to apply the rule correctly?"
  },
  {
    title: "ADA effective communication guidance",
    url: "https://www.ada.gov/resources/effective-communication/",
    jurisdiction: "us", authority: "guidance", topic: "title-ii", force: "Official DOJ guidance on an existing Title II duty", reference: "28 CFR §§ 35.160–35.164",
    use: "Check communication obligations that remain relevant even when particular content meets a Subpart H exception.",
    question: "What existing ADA duty still applies to the interaction?"
  },
  {
    title: "Section 508 statute — 29 U.S.C. § 794d",
    url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section794d&num=0&edition=prelim",
    jurisdiction: "us", authority: "legislation", force: "Binding federal statute", reference: "29 U.S.C. § 794d",
    use: "Identify the federal-agency duty and statutory boundaries before moving to the Access Board standards.",
    question: "What duty exists, for whom, and for what ICT activity?"
  },
  {
    title: "Revised 508 Standards",
    url: "https://www.access-board.gov/ict/",
    jurisdiction: "us", authority: "regulation", force: "Mandatory standards in 36 CFR Part 1194", reference: "Appendices A and C",
    use: "Use scoping Chapters 1–2 before selecting technical provisions in Chapters 3–7.",
    question: "Which component, exception, and technical chapter control?"
  },
  {
    title: "WCAG 2.0 incorporated by reference",
    url: "https://www.access-board.gov/ict/#E205.4",
    jurisdiction: "us", authority: "standard", force: "Binding where the Revised 508 Standards incorporate it", reference: "E205.4 and E207.2",
    use: "Apply Level A and AA as incorporated, including the four named exclusions for non-web documents and software.",
    question: "Which WCAG version and mapping does the regulation invoke?"
  },
  {
    title: "ICT Testing Baseline Portfolio",
    url: "https://www.section508.gov/test/ict-testing-baseline-portfolio/",
    jurisdiction: "us", authority: "testing", force: "Official test components; not a legal standard", reference: "Section508.gov",
    use: "Build consistent test evidence while citing the controlling Revised 508 provision separately.",
    question: "What reproducible evidence demonstrates the requirement?"
  },
  {
    title: "European Accessibility Act legal text",
    url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj",
    jurisdiction: "eu", authority: "legislation", force: "EU directive requiring national implementation", reference: "Directive (EU) 2019/882",
    use: "Read the relevant Article with its Annex, definitions, limitations, operator duties, and Article 32 transitions.",
    question: "Is the item in scope, and which Annex I section applies?"
  },
  {
    title: "National implementing legislation lookup",
    url: "https://commission.europa.eu/law/search-law/national-law_en",
    jurisdiction: "eu", authority: "legislation", force: "National law controls jurisdiction-specific enforcement", reference: "Member State transposition",
    use: "Find the implementing measure, competent authority, procedures, and penalties connected to the facts.",
    question: "Which national measure and authority govern?"
  },
  {
    title: "EAA accessibility requirements",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882",
    jurisdiction: "eu", authority: "legislation", force: "Directive requirements as implemented nationally", reference: "Article 4 and Annex I",
    use: "Map the product or service to the common, specific, and functional-performance requirements that apply.",
    question: "Which exact requirement applies to this feature and operator?"
  },
  {
    title: "EAA presumption of conformity",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882",
    jurisdiction: "eu", authority: "standard", force: "Conditional conformity route", reference: "Article 15",
    use: "Verify the current Official Journal reference, edition, scope, and requirements covered before claiming presumption.",
    question: "Is the standard currently cited, applicable, and complete for this claim?"
  },
  {
    title: "Fundamental alteration and disproportionate burden",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882",
    jurisdiction: "eu", authority: "legislation", force: "Narrow limitation requiring assessment", reference: "Article 14 and Annex VI",
    use: "Document the assessment, retain evidence, and reassess it when the law or service facts require.",
    question: "What supports the limitation, and when must it be reassessed?"
  },
  {
    title: "WCAG 2.2 Recommendation",
    url: "https://www.w3.org/TR/WCAG22/",
    jurisdiction: "foundation", authority: "standard", force: "W3C Recommendation; legal force depends on adoption", reference: "WCAG 2.2",
    use: "Use as the current W3C standard without silently replacing the WCAG version incorporated by controlling law.",
    question: "Is this the technical target, the legally incorporated version, or both?"
  }
];

const CASEBOOK_CASES = [
  {
    id: "federal-personnel-pdf", title: "The internal personnel-action packet", law: "Section 508", difficulty: "Advanced",
    brief: "A federal agency distributes a nonpublic PDF confirming an employee promotion and requiring acknowledgement. The manager says internal documents are outside Section 508; the tester uses WCAG 2.2 but never records why the packet is covered.",
    task: "Build a defensible coverage and baseline memo.",
    dimensions: [
      {
        id: "scope", label: "Scope conclusion", prompt: "Which fact most directly establishes coverage?", answer: "personnel",
        choices: [["public", "Every employee is legally part of the public."], ["personnel", "It is a formal personnel action, one of E205.3's nine official-communication categories."], ["pdf", "Every federal PDF is automatically covered."], ["control", "Only the acknowledgement control is covered."]],
        explanation: "E205.3 category 4 covers formal personnel actions. Internal delivery alone neither proves nor defeats coverage."
      },
      {
        id: "baseline", label: "Controlling baseline", prompt: "Which baseline belongs in the memo?", answer: "e205",
        choices: [["wcag22", "WCAG 2.2 AAA because the newest version is automatically law."], ["e205", "E205.4: WCAG 2.0 A/AA with the four named non-web exclusions."], ["hardware", "Chapter 4 because a computer displays the PDF."], ["aria", "ARIA APG as the complete legal baseline."]],
        explanation: "The four exclusions are 2.4.1, 2.4.5, 3.2.3, and 3.2.4. WCAG 2.2 may be an additional policy target, but it is not the incorporated Section 508 version."
      },
      {
        id: "authority", label: "Authority trail", prompt: "Which chain best supports the conclusion?", answer: "chain",
        choices: [["chain", "29 U.S.C. § 794d → 36 CFR Part 1194 E205.3/E205.4 → incorporated WCAG 2.0."], ["blog", "Blog → scanner score → vendor statement."], ["wcag", "WCAG 2.2 alone, without Section 508 scoping."], ["policy", "Agency policy, even if it conflicts with the regulation."]],
        explanation: "Trace statute to the Revised 508 scoping provision and then to incorporated criteria. Guidance explains; it does not replace the authority chain."
      },
      {
        id: "evidence", label: "Evidence record", prompt: "Which evidence package is strongest?", answer: "record",
        choices: [["score", "A passing automated PDF score."], ["record", "Coverage rationale, provisions, exclusions, manual/tool results, impact, owner, and retest record."], ["reader", "A statement that it opens in one screen reader."], ["checklist", "A WCAG 2.2 checklist with no Section 508 mapping."]],
        explanation: "A defensible record separates coverage, baseline, evidence, impact, ownership, and retest. A tool score cannot establish legal scope."
      }
    ],
    memo: ["Covered under E205.3 category 4 as a formal personnel action.", "Apply E205.4's incorporated WCAG 2.0 A/AA baseline and record the four exclusions.", "Treat any WCAG 2.2 target as an additional policy commitment and retain criterion-level evidence."],
    caution: "Coverage of this packet does not make every unrelated file in the repository covered."
  },
  {
    id: "federal-kiosk", title: "The ‘WCAG-passing’ kiosk acquisition", law: "Section 508", difficulty: "Expert",
    brief: "An agency is acquiring a benefits kiosk package: web portal, authoring CMS, locked-down kiosk, receipt PDFs, manual, and vendor help desk. The portal passes WCAG 2.0 A/AA, so procurement proposes marking the entire package conformant.",
    task: "Scope the package and identify the evidence still required.",
    dimensions: [
      {
        id: "scope", label: "Component analysis", prompt: "What is the strongest scoping approach?", answer: "inventory",
        choices: [["portal", "Use the portal result for the whole package."], ["inventory", "Inventory each component and map content, software, hardware, authoring, documentation, and support."], ["hardware", "Call the whole package hardware."], ["fpc", "Apply only functional performance criteria."]],
        explanation: "E205–E208 route different components to Chapters 3–6. One acquisition can require several evidence tracks."
      },
      {
        id: "missing", label: "Missing provisions", prompt: "What remains after the portal WCAG pass?", answer: "chapters",
        choices: [["none", "Nothing."], ["chapters", "Closed functionality/hardware, interoperability, authoring, receipts, documentation, and support."], ["aaa", "Only automated WCAG 2.2 AAA."], ["mobile", "Only mobile-app testing."]],
        explanation: "Relevant requirements can include 402, Chapter 4, 502–504, 602, and 603 in addition to WCAG. Facts decide the exact mapping."
      },
      {
        id: "exception", label: "Exception handling", prompt: "The kiosk blocks user-installed assistive technology. What follows?", answer: "closed",
        choices: [["waiver", "The whole package is exempt."], ["closed", "Assess closed-functionality requirements and document any separate exception or equivalent-facilitation decision."], ["ignore", "Ignore nonvisual operation."], ["vendor", "Let the vendor make the agency decision."]],
        explanation: "Closed functionality is a requirement path, not a waiver. Any exception is tied to a component, provision, owner, and evidence."
      },
      {
        id: "record", label: "Procurement record", prompt: "Which record is defensible?", answer: "matrix",
        choices: [["matrix", "Component-by-provision matrix, results, gaps, exception decisions, commitments, and acceptance criteria."], ["vpat", "Only the supplier ACR."], ["scan", "Only the portal scan."], ["promise", "A general promise to fix later."]],
        explanation: "Supplier claims are inputs. The agency record must show what was evaluated, accepted, remediated, or escalated."
      }
    ],
    memo: ["Inventory every ICT component rather than inheriting the portal result.", "Map each component through E205–E208 to the applicable chapters.", "Keep exception and equivalent-facilitation decisions narrow and evidence-based."],
    caution: "An ACR or VPAT is supplier disclosure, not an agency-wide conformance determination."
  },
  {
    id: "eu-commerce", title: "The cross-border e-commerce service", law: "European Accessibility Act", difficulty: "Expert",
    brief: "A retailer sells to consumers in several EU countries after 28 June 2025. It cites WCAG 2.2 and EN 301 549, but has not identified national implementing laws, Article 32 transitions, or the scope of an Official Journal citation.",
    task: "Build the authority and conformity analysis without treating a standard as the law.",
    dimensions: [
      {
        id: "scope", label: "Scope route", prompt: "Where should the analysis begin?", answer: "directive",
        choices: [["wcag", "WCAG 2.2 decides EAA scope."], ["directive", "Article 2/definitions, service facts, Article 32 transitions, and relevant national implementing law."], ["standard", "EN 301 549 alone."], ["date", "The date alone; all EU websites are covered."]],
        explanation: "Scope comes from legislation and national implementation, not a technical standard. Service, operator, date, country, exclusions, and transitions matter."
      },
      {
        id: "requirements", label: "Requirements map", prompt: "Which mapping is most complete?", answer: "annex",
        choices: [["annex", "Article 4 → Annex I Section III common service requirements + Section IV e-commerce requirements → national law."], ["wcag", "WCAG only."], ["product", "Only product requirements."], ["statement", "Only the accessibility statement."]],
        explanation: "Use the common and e-commerce-specific Annex I requirements. WCAG evidence helps, but does not exhaust the legal analysis."
      },
      {
        id: "presumption", label: "Presumption claim", prompt: "When is the standards claim strongest?", answer: "verify",
        choices: [["name", "Whenever EN 301 549 is named."], ["verify", "After verifying the current OJ reference, edition, scope, and requirements covered."], ["wcag", "Whenever WCAG 2.2 AA is claimed."], ["vendor", "Whenever a vendor calls it harmonised."]],
        explanation: "Article 15 presumption is conditional and limited. A standard name does not prove current status, edition, scope, or full coverage."
      },
      {
        id: "record", label: "Service evidence", prompt: "What should be maintained?", answer: "service",
        choices: [["badge", "A homepage badge."], ["service", "Scope/national-law analysis, Annex mapping, service information, tests, changes, complaints, and limitations."], ["scan", "One launch scan."], ["certificate", "A certificate with no legal mapping."]],
        explanation: "Evidence must explain the service, requirements, conformity basis, ongoing changes, and any claimed limitation for the national route."
      }
    ],
    memo: ["Classify the service and identify relevant Member State measures and transition facts.", "Map Article 4 to Annex I rather than replacing it with WCAG.", "Claim Article 15 presumption only after verifying OJ status, edition, scope, and coverage."],
    caution: "The 28 June 2025 date does not erase Article 32 transitions or case-specific facts."
  },
  {
    id: "eu-limitation", title: "The microenterprise and burden claim", law: "European Accessibility Act", difficulty: "Expert",
    brief: "A small company provides a covered service and imports a covered product. It employs eight people. Management says ‘microenterprises are exempt’ or remediation is too expensive, but has no financial evidence, operator-role analysis, Article 14 assessment, or national-law review.",
    task: "Separate service, product, exemption, and burden questions.",
    dimensions: [
      {
        id: "definition", label: "Status", prompt: "What establishes microenterprise status?", answer: "criteria",
        choices: [["staff", "Fewer than ten people alone."], ["criteria", "Fewer than ten people plus annual turnover or annual balance-sheet total not exceeding EUR 2 million, evidenced for the entity."], ["claim", "A management declaration."], ["sector", "Working in technology."]],
        explanation: "The definition combines a staffing threshold with a financial threshold. The relevant entity and current facts need evidence."
      },
      {
        id: "boundary", label: "Exemption boundary", prompt: "If it qualifies, which statement is strongest?", answer: "service",
        choices: [["all", "All product and service activity is exempt."], ["service", "Article 4(5) exempts microenterprises providing services; product importing needs a separate operator-duty analysis."], ["none", "Status never matters."], ["wcag", "The exemption depends on WCAG results."]],
        explanation: "The express exemption concerns service provision. Do not extend it automatically to covered product activity."
      },
      {
        id: "burden", label: "Article 14", prompt: "What supports disproportionate burden?", answer: "assessment",
        choices: [["cost", "Saying it costs too much."], ["assessment", "A documented Article 14/Annex VI assessment, retained and reassessed as required, with national duties checked."], ["scan", "A failed scan."], ["certificate", "Any consultant certificate."]],
        explanation: "Disproportionate burden is an evidenced, bounded assessment—not inconvenience or unbudgeted work."
      },
      {
        id: "decision", label: "Decision", prompt: "What can be concluded now?", answer: "insufficient",
        choices: [["exempt", "Approve a company-wide exemption."], ["burden", "Approve burden because the company is small."], ["insufficient", "Evidence is insufficient: establish status/roles, separate service and product, apply national law, and assess Article 14."], ["wcag", "Test WCAG and omit legal analysis."]],
        explanation: "The record proves neither status nor the reach of a limitation. Service and product roles require separate national analyses."
      }
    ],
    memo: ["Verify status with staffing and financial evidence.", "Apply Article 4(5) to qualifying service provision only; analyse the product role separately.", "For Article 14, retain the Annex VI assessment and check national notification and reassessment duties."],
    caution: "‘Small business,’ ‘microenterprise,’ and ‘disproportionate burden’ are not interchangeable conclusions."
  }
];

const TITLE_II_CASES = [
  {
    id: "state-university-vendor",
    title: "The outsourced admissions platform",
    difficulty: "Expert",
    brief: "A state university licenses a vendor-hosted admissions website and mobile app. The vendor controls releases and says its contract—not the university—is responsible for accessibility. The university plans against its 34,000-student enrolment and tests only the public marketing pages against WCAG 2.2.",
    task: "Determine coverage, deadline, technical baseline, and the documentation the university must control.",
    dimensions: [
      {
        id: "entity", label: "Covered entity", prompt: "Which coverage conclusion best fits the facts?", answer: "public",
        choices: [["private", "The vendor's private ownership places the entire service outside Title II."], ["public", "The state university is a public entity, and § 35.200 reaches web content and apps it provides through contractual or licensing arrangements."], ["students", "Coverage depends on whether an applicant already has a disability record."], ["federal", "Only Section 508 can apply because higher education receives federal funds."]],
        explanation: "A state university is an instrumentality of a State. Contracting or licensing the delivery platform does not remove the public entity's § 35.200 obligation."
      },
      {
        id: "deadline", label: "Compliance date", prompt: "What determines this university's Subpart H deadline?", answer: "state",
        choices: [["students", "Its 34,000-student enrolment, producing the smaller-entity date."], ["vendor", "The vendor's employee count."], ["state", "The State's population, producing the April 26, 2027 date for a State university."], ["launch", "The date the platform was first launched."]],
        explanation: "DOJ's First Steps guidance says a State university uses the State's population, not student enrolment. Under the 2026 extension, entities serving 50,000 or more people have an April 26, 2027 compliance date."
      },
      {
        id: "baseline", label: "Technical rule", prompt: "Which technical baseline is legally incorporated by § 35.200?", answer: "wcag21",
        choices: [["wcag21", "WCAG 2.1 Level A and Level AA."], ["wcag22", "WCAG 2.2 automatically, because it is newer."], ["section508", "The Revised Section 508 Standards instead of the Title II regulation."], ["vendor", "Whichever checklist the vendor names in its contract."]],
        explanation: "Subpart H incorporates WCAG 2.1 Level A and AA. A public entity may adopt a newer internal target, but it should distinguish that target from the incorporated legal baseline."
      },
      {
        id: "scope", label: "Content inventory", prompt: "What should the university include in its initial scope record?", answer: "journey",
        choices: [["marketing", "Only pages on the university's primary domain."], ["journey", "The applicant journey across university and licensed web content, mobile-app screens, documents, authentication, payment, notices, and support."], ["vendoracr", "Only features listed in the vendor's accessibility conformance report."], ["complaints", "Only screens that have already generated a complaint."]],
        explanation: "The delivery arrangement and user journey matter more than domain ownership. Inventory the content and functions the public entity provides or makes available, including contract-delivered parts."
      },
      {
        id: "record", label: "Decision record", prompt: "Which evidence package most strongly supports the determination?", answer: "controlled",
        choices: [["promise", "A contract clause saying the vendor owns accessibility."], ["scan", "A single automated scan of the marketing site."], ["controlled", "Entity and population basis, service inventory, contract roles, § 35.200/WCAG mapping, manual and automated evidence, defects, owners, acceptance criteria, and retest dates."], ["badge", "A WCAG 2.2 badge on the admissions homepage."]],
        explanation: "The public entity needs a traceable record connecting coverage and the current date to criterion-level evidence and accountable remediation. Supplier evidence is an input, not a transfer of legal responsibility."
      }
    ],
    record: {
      issue: "Whether the licensed admissions journey is covered and when the State university must comply.",
      rule: "42 U.S.C. §§ 12131–12134 and 28 CFR § 35.200; current deadline guidance following the April 2026 interim final rule.",
      application: "The university is a public entity and provides the admissions service through a licensing arrangement. Its deadline follows State population, and WCAG 2.1 A/AA is the incorporated baseline.",
      evidence: "Record the State-population source, end-to-end inventory, contractual controls, criterion-level results, user-impact findings, defect owners, acceptance decisions, and retests.",
      boundary: "This determination does not decide whether Section 504, State law, procurement terms, or a stricter institutional policy adds separate obligations."
    }
  },
  {
    id: "archive-current-use",
    title: "The archive that still runs today's permit process",
    difficulty: "Expert",
    brief: "A county with a 2020 Census population of 41,800 moves pre-deadline planning PDFs into a folder labelled ‘Archive.’ Staff correct OCR in some files after archiving. Current permit instructions link applicants to one of the PDFs to determine required setback measurements. The county treats every file in the folder as exempt.",
    task: "Apply the current date and distinguish the archived-content and preexisting-document exceptions.",
    dimensions: [
      {
        id: "deadline", label: "Compliance date", prompt: "Which date applies on the stated population evidence?", answer: "2028",
        choices: [["2027", "April 26, 2027 because all counties use the larger-entity date."], ["2028", "April 26, 2028 because the county's 2020 Census population is below 50,000."], ["created", "Each document's creation date is its compliance date."], ["none", "Counties have no Subpart H compliance date."]],
        explanation: "The current extended date is April 26, 2028 for public entities serving fewer than 50,000 people. DOJ directs entities with a population to use the 2020 decennial Census."
      },
      {
        id: "archive", label: "Archived-content definition", prompt: "Why does the folder label fail to settle the exception?", answer: "four",
        choices: [["label", "A page labelled Archive automatically qualifies."], ["age", "Anything created before the deadline automatically qualifies."], ["four", "Archived web content must satisfy all four conditions: timing/physical-media origin, exclusive reference or recordkeeping use, no post-archive alteration, and placement in a clearly identified archive area."], ["format", "Only HTML can be archived content."]],
        explanation: "The definition is conjunctive. A dedicated archive area is only one element; exclusive purpose and no alteration after archiving are also required."
      },
      {
        id: "alteration", label: "Post-archive change", prompt: "What is the legal significance of correcting OCR after archiving?", answer: "breaks",
        choices: [["none", "OCR changes never count because users cannot see them."], ["helps", "Any accessibility improvement preserves the exception automatically."], ["breaks", "The altered file no longer satisfies the archived-content condition that it not be altered or updated after archiving."], ["deletes", "The change removes the file from Title II entirely."]],
        explanation: "The rule's definition turns on whether the content was altered or updated after archiving, not whether the edit was well intentioned. Analyse the affected file rather than the folder as a whole."
      },
      {
        id: "current", label: "Current-use document", prompt: "How should the permit-linked PDF be analysed?", answer: "used",
        choices: [["old", "It is excepted solely because it predates the deadline."], ["used", "The preexisting conventional-document exception does not cover a document currently used to apply for, access, or participate in the county's services, programs, or activities."], ["print", "It is outside the rule because a user could print it."], ["archive", "The folder location overrides its current operational use."]],
        explanation: "A preexisting conventional electronic document loses that exception when it is currently used in access to or participation in a service, program, or activity. The live permit use is a controlling fact."
      },
      {
        id: "record", label: "Exception log", prompt: "What record supports a defensible file-by-file decision?", answer: "inventory",
        choices: [["inventory", "Creation/source date, archive location, exclusive purpose, change history, current links and uses, exception invoked, reviewer, evidence, and recheck trigger."], ["folder", "A screenshot of the Archive folder label."], ["age", "A list containing only file creation years."], ["blanket", "One county-wide statement that all legacy content is exempt."]],
        explanation: "The record must preserve every fact required by the asserted exception and expose changes or current uses that defeat it."
      }
    ],
    record: {
      issue: "Whether moving pre-deadline planning PDFs into an archive folder places every file within a Subpart H exception.",
      rule: "28 CFR § 35.104 definition of archived web content and § 35.201(a)–(b).",
      application: "The county uses the 2028 date, but the label alone proves no exception. Post-archive changes defeat the archived-content definition for affected files, and a PDF used in the current permit process is outside the preexisting-document exception.",
      evidence: "Maintain file-level origin dates, purposes, archive placement, change history, inbound links, operational uses, exception analysis, and review dates.",
      boundary: "An exception from the specific web rule does not erase the county's other ADA obligations, including effective communication where applicable."
    }
  },
  {
    id: "third-party-boundary",
    title: "Residents, contractors, and the city message board",
    difficulty: "Expert",
    brief: "A city hosts a public message board where unaffiliated residents post road photographs and comments. Under a service contract, a platform company posts official emergency alerts and operates a licensed payment widget. The city marks the entire platform ‘third-party content’ and offers an email address for accessibility requests.",
    task: "Draw the third-party exception boundary and identify the duties the label cannot remove.",
    dimensions: [
      {
        id: "resident", label: "Unaffiliated posts", prompt: "Which conclusion is best supported for resident-submitted posts?", answer: "potential",
        choices: [["potential", "They may fit § 35.201(c) if posted by unaffiliated third parties and not because of contractual, licensing, or other arrangements, subject to the actual facts."], ["owned", "They are always city-authored once hosted."], ["covered", "Every third-party post must conform before publication without exception."], ["request", "An email request automatically makes every post excepted."]],
        explanation: "The exception is tied to who posted the content and why. Preserve evidence of independence and the absence of a relevant arrangement instead of classifying the whole platform."
      },
      {
        id: "contractor", label: "Contractor content", prompt: "How should the official alerts and licensed payment widget be classified?", answer: "arranged",
        choices: [["third", "Excepted because a separate company supplies them."], ["arranged", "Not within the third-party-content exception because they are provided through contractual or licensing arrangements."], ["optional", "Covered only after a user complains."], ["federal", "Covered only if federal money purchased the platform."]],
        explanation: "Sections 35.200 and 35.201(c) expressly preserve the duty where content is supplied through contractual, licensing, or other arrangements."
      },
      {
        id: "scope", label: "Scoping method", prompt: "Which inventory best avoids a blanket classification error?", answer: "provenance",
        choices: [["domain", "Classify everything on one domain identically."], ["format", "Classify all images as third-party and all text as city content."], ["provenance", "Record content type, poster, relationship, publishing mechanism, public function, arrangement, owner, and exception decision."], ["volume", "Except all content when residents create more than half of it."]],
        explanation: "Mixed platforms require content-level provenance and arrangement facts. Domain, format, or volume does not answer the regulatory test."
      },
      {
        id: "continuing", label: "Continuing duties", prompt: "What does a valid § 35.201 exception do?", answer: "limited",
        choices: [["erase", "It removes all Title II obligations for the content and service."], ["limited", "It limits the new Subpart H conformance requirement for that content; existing Title II duties such as effective communication still apply."], ["transfer", "It transfers every duty to the individual resident."], ["delay", "It merely delays WCAG testing for 30 days."]],
        explanation: "DOJ warns that the exceptions do not remove existing ADA responsibilities. A response channel may support a process but is not a blanket substitute for analysing those duties."
      },
      {
        id: "record", label: "Boundary record", prompt: "Which record most directly supports the mixed-platform decision?", answer: "matrix",
        choices: [["email", "The accessibility mailbox address."], ["terms", "Generic terms of use with no content provenance."], ["matrix", "A provenance-and-arrangement matrix tied to functions, content owners, exception facts, accessibility evidence, request handling, and periodic review."], ["vendor", "A vendor statement that the platform is community generated."]],
        explanation: "The strongest record connects each content class to the exception elements and separately records conformance and continuing-duty processes."
      }
    ],
    record: {
      issue: "Which parts of a mixed city platform qualify as third-party content not supplied through an arrangement.",
      rule: "28 CFR §§ 35.200 and 35.201(c), read with the continuing effective-communication duties in §§ 35.160–35.164.",
      application: "Unaffiliated resident posts may qualify on proven facts. Contract-posted alerts and the licensed payment function do not qualify merely because a vendor supplies them.",
      evidence: "Keep a provenance and arrangement matrix, contracts, publishing roles, functional inventory, conformance evidence, request records, ownership, and review triggers.",
      boundary: "A Subpart H content exception is not an exemption from Title II as a whole and does not automatically validate email as equally effective access."
    }
  },
  {
    id: "defenses-and-alternatives",
    title: "The inaccessible licensing renewal and three shortcuts",
    difficulty: "Expert",
    brief: "A State licensing portal exposes unlabeled payment errors that prevent blind users from renewing independently. Staff propose three shortcuts: call it minimal impact, link to an accessible but reduced-function ‘alternate’ page, or claim undue financial and administrative burdens based only on the project budget. The agency head has made no decision.",
    task: "Test each proposed route against §§ 35.202–35.205 and specify the determination record.",
    dimensions: [
      {
        id: "minimal", label: "Minimal impact", prompt: "Can § 35.205 support the proposed finding?", answer: "no",
        choices: [["yes", "Yes, because only one error component fails."], ["cost", "Yes, if repair costs more than expected."], ["no", "No on these facts: users cannot complete the same transaction with substantially equivalent timeliness, privacy, independence, and ease of use."], ["automatic", "Yes, whenever most WCAG criteria pass."]],
        explanation: "Minimal impact is an outcome test, not a defect-count or cost test. Blocking an independent licence-renewal transaction cuts directly against the required equivalence factors."
      },
      {
        id: "alternate", label: "Conforming alternate version", prompt: "When may § 35.202 permit reliance on a conforming alternate version?", answer: "limits",
        choices: [["choice", "Whenever it is cheaper or preferred by the project team."], ["limits", "Only when making the web content or mobile app directly accessible is not possible due to technical or legal limitations."], ["link", "Whenever a link to any accessible page exists."], ["phone", "Whenever phone assistance is available."]],
        explanation: "A conforming alternate version is a narrow route tied to technical or legal impossibility; it is not a convenience exception. Its content and functionality must also meet the rule's definition."
      },
      {
        id: "equivalent", label: "Equivalent facilitation", prompt: "What must an alternative design, method, or technique achieve under § 35.203?", answer: "equal",
        choices: [["some", "Some access for most users."], ["equal", "Substantially equivalent or greater accessibility and usability."], ["cheap", "The lowest-cost accessible outcome."], ["manual", "A manual workaround regardless of delay or privacy."]],
        explanation: "Equivalent facilitation is performance-based, but it still demands substantially equivalent or greater accessibility and usability; a reduced-function page does not establish that result."
      },
      {
        id: "burden", label: "Burden determination", prompt: "What is missing from the proposed § 35.204 burden claim?", answer: "head",
        choices: [["budget", "Nothing; the project budget is the only relevant resource."], ["vendor", "Only a vendor signature."], ["head", "A decision by the public entity head or designee after considering all resources available for the service, plus a written statement of reasons."], ["vote", "A vote by every user of the portal."]],
        explanation: "The public entity bears the proof burden. The decision-maker, resource scope, and written reasons are prescribed; a product team's budget assertion is insufficient."
      },
      {
        id: "remaining", label: "Residual duty", prompt: "If the entity proves a fundamental alteration or undue burden, what follows?", answer: "maximum",
        choices: [["stop", "No further action is required."], ["maximum", "Compliance remains required to the extent it does not cause the alteration or burden, and other action must still maximise access to benefits or services."], ["delete", "The entity must permanently remove the licensing service."], ["vendor", "The vendor alone selects whether to act."]],
        explanation: "Section 35.204 narrows the relief and preserves an affirmative duty to take other action that provides the maximum possible benefits or services."
      }
    ],
    record: {
      issue: "Whether minimal impact, an alternate version, equivalent facilitation, or undue burden excuses an inaccessible licence-renewal payment flow.",
      rule: "28 CFR §§ 35.202–35.205.",
      application: "The blocked transaction cannot satisfy minimal impact. No technical or legal impossibility supports an alternate version, reduced functionality does not establish equivalent facilitation, and the proposed burden record lacks the required decision-maker and resource analysis.",
      evidence: "Document user-task results, timeliness/privacy/independence/ease effects, technical and legal constraints, functional comparison, all available resources, decision authority, written reasons, alternatives, owners, and review dates.",
      boundary: "Even a proven § 35.204 limitation leaves compliance required to the extent possible and requires other action that maximises access to the service."
    }
  }
];

const TOOL_REFERENCES = [
  {
    title: "W3C Quick Reference",
    url: "https://www.w3.org/WAI/WCAG22/quickref/",
    use: "Filter WCAG 2.2 criteria by level, topic, and technology before writing pass/fail evidence.",
    tags: ["all", "wcag", "conformance"]
  },
  {
    title: "Understanding WCAG 2.2",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/",
    use: "Read the intent, user benefits, examples, failures, and techniques for the exact criterion.",
    tags: ["all", "wcag", "criteria"]
  },
  {
    title: "Chrome DevTools Accessibility Reference",
    url: "https://developer.chrome.com/docs/devtools/accessibility/reference/",
    use: "Inspect accessible names, roles, computed properties, contrast, and the accessibility tree.",
    tags: ["all", "names", "roles", "forms", "aria", "contrast", "devtools"]
  },
  {
    title: "Lighthouse Accessibility Audits",
    url: "https://developer.chrome.com/docs/lighthouse/accessibility/",
    use: "Run automated checks for common failures. Treat results as leads, then verify manually.",
    tags: ["all", "automation", "qa", "contrast", "forms", "images"]
  },
  {
    title: "WAVE",
    url: "https://wave.webaim.org/",
    use: "Visualize headings, landmarks, labels, alt text, contrast, ARIA, and structural warnings.",
    tags: ["all", "headings", "forms", "images", "contrast", "labels"]
  },
  {
    title: "Accessibility Insights for Web",
    url: "https://accessibilityinsights.io/docs/web/overview/",
    use: "Use FastPass, tab stops, and guided assessments for repeatable manual testing.",
    tags: ["all", "qa", "keyboard", "focus", "regression", "assessment"]
  },
  {
    title: "NVDA",
    url: "https://www.nvaccess.org/download/",
    use: "Confirm headings, landmarks, form names, role/state/value, errors, and live updates on Windows.",
    tags: ["screen reader", "nvda", "names", "forms", "aria", "status", "headings"]
  },
  {
    title: "Apple VoiceOver User Guide",
    url: "https://support.apple.com/guide/voiceover/welcome/mac",
    use: "Confirm Safari/macOS screen reader behavior, rotor navigation, forms, headings, and announcements.",
    tags: ["screen reader", "voiceover", "names", "forms", "aria", "status", "headings"]
  },
  {
    title: "ARIA Authoring Practices Guide",
    url: "https://www.w3.org/WAI/ARIA/apg/",
    use: "Check expected roles, states, properties, focus movement, and keyboard patterns for custom widgets.",
    tags: ["aria", "keyboard", "focus", "widgets", "components"]
  },
  {
    title: "WAI Evaluation Tools List",
    url: "https://www.w3.org/WAI/test-evaluate/tools/list/",
    use: "Find additional public evaluation tools when a project needs platform-specific checks.",
    tags: ["tools", "qa", "automation", "conformance"]
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
    href: "https://www.linkedin.com/in/carla-goncalves-9a01a5164/",
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
  globalSearchQuery: "",
  docQuery: "",
  docJurisdiction: "all",
  docAuthority: "all",
  casebook: {
    caseId: "federal-personnel-pdf",
    answers: {},
    submitted: false
  },
  titleIILab: {
    caseId: "state-university-vendor",
    answers: {},
    rationale: "",
    submitted: false
  },
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
  ["regulations", "Section 508 + EAA"],
  ["title-ii-lab", "ADA Title II Lab"],
  ["casebook", "Standards Casebook"],
  ["search", "Search"],
  ["bank", "Standards"],
  ["quiz", "Difficult Quiz"],
  ["exam", "Exam Practice"],
  ["glossary", "Glossary"],
  ["docs", "Docs"]
];

const navGroups = [
  {
    label: "Learn",
    routes: [["course", "Course map"], ["tutorials", "Mini tutorials"], ["guided", "Guided mode"], ["lessons", "WCAG lessons"]]
  },
  {
    label: "Laws",
    routes: [["regulations", "Section 508 + EAA"], ["title-ii-lab", "ADA Title II lab"], ["casebook", "Standards casebook"]]
  },
  {
    label: "Practice",
    routes: [["quiz", "Difficult quiz"], ["exam", "Exam practice"]]
  },
  {
    label: "Reference",
    routes: [["library", "Reference library"], ["bank", "Standards bank"], ["glossary", "Glossary"], ["docs", "Documentation"], ["search", "Search"]]
  }
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

function searchTermFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [rawRoute = "", ...parts] = hash.split("/");
  if (rawRoute !== "search") return "";
  const rawTerm = parts.join("/");
  try {
    return decodeURIComponent(rawTerm).trim();
  } catch {
    return rawTerm.trim();
  }
}

function criteria() {
  return ACTIVE_SUCCESS_CRITERIA
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
  return ACTIVE_SUCCESS_CRITERIA.reduce((acc, sc) => {
    acc[sc.principle] ||= [];
    acc[sc.principle].push(sc);
    return acc;
  }, {});
}

function findCriterion(idOrNum) {
  return ACTIVE_SUCCESS_CRITERIA.find((sc) => sc.id === idOrNum || sc.num === idOrNum);
}

function getCriterion(idOrNum) {
  return findCriterion(idOrNum) || ACTIVE_SUCCESS_CRITERIA[0];
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

function technicalChecks(sc) {
  const text = `${sc.num} ${sc.title} ${sc.guidelineTitle} ${sc.contentText}`.toLowerCase();
  if (text.includes("non-text") || text.includes("image") || text.includes("text alternative")) {
    return [
      "Inspect the DOM for a useful accessible name: `alt`, visible text, `aria-label`, `aria-labelledby`, SVG `<title>`, or a nearby text alternative.",
      "Classify the asset by purpose: decorative, informative, functional, complex, CAPTCHA, or media alternative.",
      "For functional images, test the control name in the accessibility tree, not only the visible icon.",
      "For complex images, provide the short label near the image and the full explanation in adjacent text, a table, or a linked long description."
    ];
  }
  if (text.includes("caption") || text.includes("audio") || text.includes("video") || text.includes("media")) {
    return [
      "Identify whether the media is audio-only, video-only, synchronized media, live, or prerecorded.",
      "Check that captions include meaningful speech, speaker changes, and important sound effects.",
      "Check transcripts for audio-only content and audio description or media alternatives for important visual-only information.",
      "Verify custom media controls with keyboard, visible focus, accessible names, and screen reader announcements."
    ];
  }
  if (text.includes("keyboard") || text.includes("focus") || text.includes("pointer") || text.includes("drag") || text.includes("target")) {
    return [
      "Test without a mouse: Tab, Shift+Tab, Enter, Space, Escape, and arrow keys where the pattern expects them.",
      "Record focus order and compare it with the visual reading/task order.",
      "Check that focus is visible, not obscured, and returns to the trigger after dialogs, menus, or route changes.",
      "For pointer gestures, confirm there is a simple alternative input path and that cancellation/recovery works."
    ];
  }
  if (text.includes("contrast") || text.includes("color") || text.includes("resize") || text.includes("reflow") || text.includes("spacing")) {
    return [
      "Test text, icons, borders, focus indicators, selected states, charts, and form boundaries, not only paragraph text.",
      "Check 200% text resize, 320 CSS px width, and 400% browser zoom where relevant.",
      "Confirm information is not conveyed by color alone; add text, icons with labels, patterns, or semantic state.",
      "Use browser zoom and text spacing overrides to confirm content does not overlap, clip, or require two-dimensional scrolling."
    ];
  }
  if (text.includes("error") || text.includes("label") || text.includes("input") || text.includes("form") || text.includes("authentication")) {
    return [
      "Verify every input has a persistent programmatic label and any instructions are available before the user submits.",
      "Submit empty, invalid, and corrected values; confirm errors identify the field, problem, and recovery step.",
      "Inspect `for`/`id`, `fieldset`/`legend`, `aria-describedby`, `autocomplete`, and error-summary links where relevant.",
      "Check that users are not forced to memorize, retype, or solve unnecessary cognitive puzzles to authenticate."
    ];
  }
  if (text.includes("status") || text.includes("name") || text.includes("role") || text.includes("value") || text.includes("aria") || text.includes("parsing")) {
    return [
      "Inspect the accessibility tree for the expected name, role, state, value, description, and relationship.",
      "Prefer native HTML controls before ARIA; if ARIA is used, verify the keyboard behavior matches the announced role.",
      "For dynamic updates, confirm the message is announced without moving focus unless focus movement is the user-friendly action.",
      "Check custom components in default, hover, focus, selected, expanded, disabled, loading, error, and mobile states."
    ];
  }
  return [
    "Identify the user task protected by the criterion before testing implementation details.",
    "Check the default state, keyboard state, zoomed state, error state, and dynamic state if the page has one.",
    "Use the browser accessibility tree to compare visible meaning with programmatic meaning.",
    "Write evidence with the page/state, exact steps, expected result, actual result, user impact, and criterion reference."
  ];
}

function implementationExample(sc) {
  const text = `${sc.num} ${sc.title} ${sc.guidelineTitle}`.toLowerCase();
  if (text.includes("non-text") || text.includes("image")) {
    return {
      failure: "Icon-only search button has no text alternative, so a screen reader announces only 'button'.",
      better: "Button has visible or programmatic name 'Search', and decorative SVG is hidden from assistive technology."
    };
  }
  if (text.includes("keyboard") || text.includes("focus")) {
    return {
      failure: "A modal opens, but focus stays behind it and keyboard users can tab into the page underneath.",
      better: "Focus moves to the dialog heading or first useful control, stays inside while open, Escape closes it, and focus returns to the trigger."
    };
  }
  if (text.includes("contrast") || text.includes("color")) {
    return {
      failure: "Required fields are shown only with red labels and the selected tab is only a faint colored border.",
      better: "Required fields include text or semantic indication, and selected/focus states have sufficient non-text contrast."
    };
  }
  if (text.includes("error") || text.includes("label") || text.includes("form")) {
    return {
      failure: "The form says 'Invalid value' at the top but does not identify which field failed.",
      better: "The error summary links to the field, the field references the error text, and the message explains how to correct it."
    };
  }
  if (text.includes("status") || text.includes("aria") || text.includes("name") || text.includes("role")) {
    return {
      failure: "A custom dropdown visually opens but still exposes a generic `div` with no expanded state.",
      better: "The control exposes a clear name, expected role, expanded state, selected option, and matching keyboard behavior."
    };
  }
  return {
    failure: "The interface appears understandable visually but the same meaning is missing in code, keyboard behavior, or assistive technology output.",
    better: "Visible design, semantic HTML, keyboard behavior, and assistive technology output all communicate the same task and state."
  };
}

function toolTagsForCriterion(sc) {
  const text = `${sc.title} ${sc.guidelineTitle} ${sc.contentText}`.toLowerCase();
  const tags = new Set(["all", "wcag"]);
  if (text.includes("image") || text.includes("non-text")) ["images"].forEach((tag) => tags.add(tag));
  if (text.includes("label") || text.includes("input") || text.includes("error") || text.includes("form")) ["forms", "labels"].forEach((tag) => tags.add(tag));
  if (text.includes("keyboard") || text.includes("focus") || text.includes("pointer")) ["keyboard", "focus"].forEach((tag) => tags.add(tag));
  if (text.includes("contrast") || text.includes("color") || text.includes("resize")) ["contrast"].forEach((tag) => tags.add(tag));
  if (text.includes("status") || text.includes("aria") || text.includes("role") || text.includes("name")) ["aria", "names", "status"].forEach((tag) => tags.add(tag));
  if (text.includes("heading") || text.includes("language") || text.includes("navigation")) ["headings"].forEach((tag) => tags.add(tag));
  return [...tags];
}

function toolLinks(tags, limit = 5) {
  const tagSet = new Set(tags.map((tag) => tag.toLowerCase()));
  return TOOL_REFERENCES
    .filter((tool) => tool.tags.some((tag) => tagSet.has(tag.toLowerCase())))
    .slice(0, limit);
}

function renderToolLinks(tags, limit = 5) {
  const tools = toolLinks(tags, limit);
  return `
    <div class="tool-links">
      ${tools.map((tool) => `
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer">
          <strong>${esc(tool.title)}</strong>
          <span>${esc(tool.use)}</span>
        </a>
      `).join("")}
    </div>
  `;
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
    <header class="topbar" data-site-header data-nav-open="false">
      <div class="topbar-inner">
        <a class="brand" href="#home" aria-label="A11Y Standards Trainer home">
          <span class="brand-logo" aria-hidden="true"><span>A11Y</span></span>
          <span class="brand-name"><strong>Standards</strong><small>Trainer</small></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
          <span class="nav-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span>
          <span>Menu</span>
        </button>
        <nav id="primary-navigation" class="primary-nav" aria-label="Main navigation">
          <a class="nav-home" href="#home" ${route === "home" ? 'aria-current="page"' : ""}>Home</a>
          ${navGroups.map((group) => {
            const groupIsCurrent = group.routes.some(([id]) => id === route);
            return `
              <details class="nav-cluster ${groupIsCurrent ? "is-current" : ""}">
                <summary>${group.label}</summary>
                <div class="nav-cluster-menu">
                  ${group.routes.map(([id, label]) => `<a href="#${id}" ${route === id ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
                </div>
              </details>
            `;
          }).join("")}
          <a class="nav-study-link" href="#course">Study map</a>
        </nav>
        <a class="header-cta" href="#course">Open study map</a>
      </div>
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
  const studied = ACTIVE_SUCCESS_CRITERIA.filter((sc) => progress[sc.id]?.studied).length;
  const byPrinciple = groupedByPrinciple();
  return layout(`
    <section class="hero">
      <div class="hero-inner">
        <p class="eyebrow">Accessibility law and standards learning</p>
        <h1>Build the judgement behind accessible digital work.</h1>
        <p class="hero-summary">Study WCAG 2.2, Section 508, ADA Title II, and the European Accessibility Act through primary-source documentation, worked scenarios, and demanding assessments.</p>
        <form class="hero-search" role="search" aria-label="Search the training library" data-global-search>
          <label class="sr-only" for="hero-search-input">Search laws, standards, and training material</label>
          <span class="hero-search-scope" aria-hidden="true">All resources</span>
          <input id="hero-search-input" name="q" type="search" value="${esc(state.globalSearchQuery)}" placeholder="Search a law, criterion, term, or scenario" autocomplete="off" />
          <button type="submit">Search</button>
        </form>
        <div class="popular-links" aria-label="Popular topics">
          <span>Popular:</span>
          <a href="#regulations">Section 508</a>
          <a href="#title-ii-lab">ADA Title II</a>
          <a href="#lessons">WCAG 2.2</a>
          <a href="#regulations">EAA</a>
        </div>
      </div>
    </section>
    <section class="home-intro">
      <p class="eyebrow">Choose a learning path</p>
      <h2>From source text to defensible decisions</h2>
      <p>Start with the documentation, connect legal duties to technical standards, then test whether you can apply them when the answer is not obvious.</p>
    </section>
    <section class="learning-path-grid" aria-label="Learning paths">
      <a class="learning-path-card" href="#tutorials">
        <span class="path-number" aria-hidden="true">01</span>
        <h2>Learn the standards</h2>
        <p>Build accurate mental models with tutorials, guided review, and criterion-level WCAG lessons.</p>
        <span class="text-link">Start learning <span aria-hidden="true">→</span></span>
      </a>
      <a class="learning-path-card" href="#regulations">
        <span class="path-number" aria-hidden="true">02</span>
        <h2>Understand the laws</h2>
        <p>Trace Section 508, ADA Title II, and EAA obligations back to their authoritative sources.</p>
        <span class="text-link">Explore legal coverage <span aria-hidden="true">→</span></span>
      </a>
      <a class="learning-path-card" href="#quiz">
        <span class="path-number" aria-hidden="true">03</span>
        <h2>Test your judgement</h2>
        <p>Work through difficult scenarios that require interpretation, evidence, and precise reasoning.</p>
        <span class="text-link">Begin practice <span aria-hidden="true">→</span></span>
      </a>
    </section>
    <section class="home-progress panel">
      <div>
        <p class="eyebrow">Your progress</p>
        <h2>Continue your WCAG review</h2>
        <p><strong>${studied}</strong> of <strong>${ACTIVE_SUCCESS_CRITERIA.length}</strong> active criteria marked studied.</p>
      </div>
      <div>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${ACTIVE_SUCCESS_CRITERIA.length}" aria-valuenow="${studied}" aria-label="${studied} of ${ACTIVE_SUCCESS_CRITERIA.length} active criteria studied"><span style="width:${Math.round((studied / ACTIVE_SUCCESS_CRITERIA.length) * 100)}%"></span></div>
        <div class="actions"><a class="button primary" href="#course">Continue with the study map</a></div>
      </div>
    </section>
    <section class="stats" aria-label="Coverage summary">
      <div class="stat"><strong>${ACTIVE_SUCCESS_CRITERIA.length}</strong><span>active WCAG 2.2 criteria</span></div>
      <div class="stat"><strong>${ACTIVE_SUCCESS_CRITERIA.filter((sc) => sc.level === "A").length}</strong><span>Level A criteria</span></div>
      <div class="stat"><strong>${ACTIVE_SUCCESS_CRITERIA.filter((sc) => sc.level === "AA").length}</strong><span>Level AA criteria</span></div>
      <div class="stat"><strong>${COURSE_LIBRARY.length}</strong><span>knowledge areas</span></div>
    </section>
    <section class="section-heading home-principles-heading">
      <div><p class="eyebrow">WCAG foundations</p><h2>Browse by accessibility principle</h2></div>
      <a class="button" href="#lessons">View all lessons</a>
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
  const example = implementationExample(sc);
  const criterionToolTags = toolTagsForCriterion(sc);
  return layout(`
    ${pageTitle(`${sc.principle} / Level ${sc.level}`, `${sc.num} ${sc.title}`, `${sc.guidelineTitle}: ${sc.contentText.slice(0, 220)}${sc.contentText.length > 220 ? "..." : ""}`)}
    <div class="lesson-layout">
      <article class="panel">
        <div class="plain-box">
          <h2>Accuracy note</h2>
          <p>The quoted success-criterion text and official W3C links are authoritative. Plain-language explanations, examples, memory hooks, and test steps are learning aids; use the normative text for conformance decisions.</p>
        </div>
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
        <div class="plain-box">
          <h2>Technical details to check</h2>
          <ul>${technicalChecks(sc).map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </div>
        <div class="example-box">
          <h2>Implementation example</h2>
          <dl class="comparison-list">
            <div><dt>Failure pattern</dt><dd>${esc(example.failure)}</dd></div>
            <div><dt>Better pattern</dt><dd>${esc(example.better)}</dd></div>
          </dl>
        </div>
        <div class="plain-box">
          <h2>Tools to use</h2>
          <p>Use tools to collect evidence, then verify manually. Automated tools cannot prove every WCAG requirement.</p>
          ${renderToolLinks(criterionToolTags)}
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
        <h3>Useful tools</h3>
        ${renderToolLinks(criterionToolTags, 4)}
      </aside>
    </div>
  `);
}

function coursePathProgress(path) {
  const total = path.courses.length || 1;
  const completed = path.courses.filter((course) => Number(course.status) >= 100).length;
  const average = Math.round(path.courses.reduce((sum, course) => sum + Number(course.status || 0), 0) / total);
  return { total, completed, average };
}

function courseTopicHint(title) {
  const lower = title.toLowerCase();
  if (lower.includes("fundamentals") || lower.includes("cpacc")) return "Start with people, disability models, laws, accessibility terms, and why standards exist.";
  if (lower.includes("ux")) return "Focus on plain flows, error prevention, cognitive load, and inclusive product decisions.";
  if (lower.includes("semantic")) return "Connect headings, landmarks, tables, lists, page titles, and navigation to screen reader structure.";
  if (lower.includes("visual")) return "Practise contrast, color-only meaning, focus visibility, spacing, reflow, and non-text contrast.";
  if (lower.includes("input")) return "Practise keyboard, pointer, touch, dragging, target size, shortcuts, and focus movement.";
  if (lower.includes("form")) return "Practise labels, instructions, required fields, error messages, suggestions, and authentication.";
  if (lower.includes("image") || lower.includes("svg") || lower.includes("canvas")) return "Classify images by purpose, then choose decorative, informative, functional, complex, or fallback text patterns.";
  if (lower.includes("responsive") || lower.includes("zoom")) return "Test 320px, 400 percent zoom, orientation, text resize, and whether content still reads without sideways scrolling.";
  if (lower.includes("multimedia") || lower.includes("motion")) return "Separate audio, visual, caption, transcript, description, flashing, pause, and motion-sensitive requirements.";
  if (lower.includes("dynamic") || lower.includes("ajax") || lower.includes("single-page")) return "Practise route changes, focus management, live regions, status messages, loading states, and announcements.";
  if (lower.includes("aria") || lower.includes("widget") || lower.includes("component")) return "Use native HTML first, then verify name, role, value, state, keyboard behavior, and focus return.";
  if (lower.includes("testing") || lower.includes("qa")) return "Build repeatable evidence: automated scan, keyboard path, screen reader spot check, zoom check, and bug report.";
  if (lower.includes("angular") || lower.includes("developer")) return "Convert accessibility into component contracts, lintable patterns, route behavior, and CI checks.";
  if (lower.includes("conformance") || lower.includes("section 508") || lower.includes("301")) return "Practise audit scope, methodology, evidence, exceptions, reporting, and reproducible conformance decisions.";
  return "Study the course as a compact concept, then connect it to a WCAG criterion, a real example, and a quiz question.";
}

function courseInternalAction(title) {
  const lower = title.toLowerCase();
  if (lower.includes("qa") || lower.includes("testing") || lower.includes("screen reader")) return { href: "#tutorials", label: "Study tester tutorials" };
  if (lower.includes("conformance") || lower.includes("section 508") || lower.includes("301") || lower.includes("accessibility act")) return { href: "#regulations", label: "Study regulations" };
  if (lower.includes("cpacc") || lower.includes("fundamentals") || lower.includes("ux")) return { href: "#guided", label: "Start guided review" };
  if (lower.includes("form") || lower.includes("image") || lower.includes("visual") || lower.includes("input") || lower.includes("semantic")) return { href: "#tutorials", label: "Find related tutorials" };
  if (lower.includes("aria") || lower.includes("dynamic") || lower.includes("angular") || lower.includes("developer")) return { href: "#quiz", label: "Practise questions" };
  return { href: "#tutorials", label: "Study in trainer" };
}

function renderCourseProgress(path) {
  const progress = coursePathProgress(path);
  return `
    <article class="course-path-card panel">
      <div class="course-path-head">
        <div>
          <span class="badge">${progress.completed} of ${progress.total} complete</span>
          <h2>${esc(path.title)}</h2>
          <p>${esc(path.purpose)}</p>
        </div>
        <strong class="course-percent">${progress.average}%</strong>
      </div>
      <div class="progress course-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.average}" aria-label="${esc(path.title)} average progress ${progress.average}%"><span style="width:${progress.average}%"></span></div>
      <div class="course-list" aria-label="${esc(path.title)} courses">
        ${path.courses.map((course) => {
          const action = courseInternalAction(course.title);
          return `
          <article class="course-row">
            <span>
              <strong>${esc(course.title)}</strong>
              <small>${esc(courseTopicHint(course.title))}</small>
            </span>
            <span class="course-status">
              <span>${course.status ? `${course.status}%` : "not started"}</span>
              <span class="course-mini-progress" aria-hidden="true"><span style="width:${Number(course.status || 0)}%"></span></span>
            </span>
            <a class="button small" href="${action.href}">${esc(action.label)}</a>
          </article>
        `}).join("")}
      </div>
      ${path.assessments?.length ? `
        <div class="assessment-list" aria-label="${esc(path.title)} assessment actions">
          <h3>Assessment actions</h3>
          ${path.assessments.map((assessment) => `
            <div class="assessment-row">
              <span>${esc(assessment.title)}</span>
              <strong>${assessment.status ? `${assessment.status}%` : "not started"}</strong>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </article>
  `;
}

function renderIntegrationStep(step) {
  return `
    <article class="strategy-card">
      <h3>${esc(step.title)}</h3>
      <p>${esc(step.detail)}</p>
    </article>
  `;
}

function renderCoverageCard(course) {
  return `
    <article class="toc-card">
      <div class="toc-card-head">
        <span class="badge">${esc(course.lane)}</span>
        <strong>${course.pages} pages</strong>
      </div>
      <h3>${esc(course.title)}</h3>
      <ul>
        ${course.sample.map((item) => `<li>${esc(item)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderQaTrackStep(step) {
  return `
    <article class="qa-track-card">
      <h3>${esc(step.title)}</h3>
      <p>${esc(step.outcome)}</p>
      <a class="button" href="#tutorial/${esc(step.tutorialId)}">Open tutorial</a>
    </article>
  `;
}

function renderCpaccTrackStep(step) {
  return `
    <article class="qa-track-card">
      <h3>${esc(step.title)}</h3>
      <p>${esc(step.outcome)}</p>
      <a class="button" href="${step.action}">Open trainer section</a>
    </article>
  `;
}

function renderRegulatoryModule(module) {
  return `
    <article class="regulation-module card">
      <div class="tutorial-card-head">
        <span class="badge">${esc(module.badge)}</span>
      </div>
      <h2>${esc(module.title)}</h2>
      <p>${esc(module.summary)}</p>
      <h3>Learn this</h3>
      <ul>${module.learn.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      <div class="plain-box">
        <h3>Practice drill</h3>
        <p>${esc(module.drill)}</p>
      </div>
    </article>
  `;
}

function renderRegulatoryCrosswalk(card) {
  return `
    <article class="regulation-crosswalk-card">
      <span class="badge">${esc(card.standard)}</span>
      <h3>${esc(card.title)}</h3>
      <p>${esc(card.details)}</p>
      <a class="button" href="${card.action}">Study related area</a>
    </article>
  `;
}

function renderRegulatoryScenario(scenario) {
  return `
    <article class="scenario-card">
      <div class="tutorial-card-head">
        <span class="badge">${esc(scenario.law)}</span>
      </div>
      <h3>${esc(scenario.title)}</h3>
      <p><strong>Scenario:</strong> ${esc(scenario.ask)}</p>
      <details class="tutorial-details">
        <summary>Reveal expected analysis</summary>
        <p>${esc(scenario.answer)}</p>
      </details>
    </article>
  `;
}

function renderRegulatorySource(source) {
  return `
    <article class="source-card">
      <h3>${esc(source.title)}</h3>
      <p>${esc(source.use)}</p>
      <a href="${source.url}" target="_blank" rel="noopener noreferrer">Open official source</a>
    </article>
  `;
}

function renderWcagDifferenceCard(item) {
  return `
    <article class="wcag-difference-card">
      <h3>${esc(item.axis)}</h3>
      <dl class="comparison-list">
        <div><dt>WCAG</dt><dd>${esc(item.wcag)}</dd></div>
        <div><dt>Section 508</dt><dd>${esc(item.section508)}</dd></div>
        <div><dt>EAA</dt><dd>${esc(item.eaa)}</dd></div>
      </dl>
      <p class="difference-note"><strong>Difference to remember:</strong> ${esc(item.takeaway)}</p>
    </article>
  `;
}

function renderRegulatoryReadinessList() {
  return `
    <ol class="readiness-list">
      ${REGULATORY_READINESS_CHECKS.map((check) => `<li>${esc(check)}</li>`).join("")}
    </ol>
  `;
}

function renderSection508Chapter(chapter) {
  return `
    <article class="section-508-chapter-card">
      <span class="badge">${esc(chapter.anchors)}</span>
      <h3>${esc(chapter.chapter)}</h3>
      <p><strong>${esc(chapter.focus)}</strong></p>
      <p>${esc(chapter.decisions)}</p>
    </article>
  `;
}

function renderSection508ScopeStep(step) {
  return `
    <li class="section-508-scope-step">
      <span class="scope-step-number" aria-hidden="true">${esc(step[0])}</span>
      <div><strong>${esc(step[1])}</strong><p>${esc(step[2])}</p></div>
    </li>
  `;
}

function renderSection508ComponentRow(row) {
  return `
    <tr>
      <th scope="row">${esc(row.component)}</th>
      <td>${esc(row.baseline)}</td>
      <td>${esc(row.watch)}</td>
    </tr>
  `;
}

function renderRegulationsLegacy() {
  return layout(`
    ${pageTitle("Regulations", "Section 508 deep-dive and European Accessibility Act training", `Learn to scope mixed ICT, choose the controlling provisions, test the applicable baseline, and defend the evidence. Source facts last checked ${REGULATORY_LAST_REVIEWED}.`)}
    <section class="regulation-hero panel">
      <div>
        <p class="eyebrow">Preparation target</p>
        <h2>Students should leave this section able to scope, test, explain, and escalate.</h2>
        <p>Section 508 and the European Accessibility Act both rely on accessibility outcomes, but they do not work the same way. This section teaches students to separate legal scope from technical standards, collect evidence, and know when a question belongs to an accountable regulatory owner.</p>
      </div>
      <div class="regulation-callout">
        <strong>Current anchors</strong>
        <ul>
          <li>Section 508: Revised 508 Standards with WCAG 2.0 Level A and AA for applicable web and electronic content.</li>
          <li>EAA: Directive (EU) 2019/882 applies to covered products and services placed on the EU market after 28 June 2025.</li>
          <li>Both: testing skill is evidence, not legal advice. Edge cases need documented escalation.</li>
        </ul>
      </div>
    </section>
    <section class="panel section-508-architecture">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Section 508 architecture</p>
          <h2>Start with the component, not a blanket WCAG label</h2>
        </div>
        <p>A single acquisition can contain content, software, hardware, authoring, and support components. Scope and test each component against the chapters that govern it.</p>
      </div>
      <div class="section-508-chapter-grid">
        ${SECTION_508_CHAPTERS.map(renderSection508Chapter).join("")}
      </div>
    </section>
    <section class="panel section-508-scope-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Decision sequence</p>
          <h2>Six moves from inventory to defensible finding</h2>
        </div>
        <p>Exceptions and equivalent facilitation are bounded decisions. Record the component, owner, authority, and evidence instead of treating one exception as a product-wide waiver.</p>
      </div>
      <ol class="section-508-scope-list">
        ${SECTION_508_SCOPE_STEPS.map(renderSection508ScopeStep).join("")}
      </ol>
    </section>
    <section class="grid two section-508-detail-grid">
      <article class="panel">
        <p class="eyebrow">E205 nonpublic content</p>
        <h2>Nine official-communication categories</h2>
        <p>Nonpublic electronic content must conform when it communicates agency official business in one or more of these categories.</p>
        <ol class="official-communications-list">
          ${SECTION_508_OFFICIAL_COMMUNICATIONS.map((item) => `<li>${esc(item)}</li>`).join("")}
        </ol>
      </article>
      <article class="panel">
        <p class="eyebrow">Non-web electronic documents</p>
        <h2>Know the four WCAG provisions that do not apply</h2>
        <p>Apply WCAG 2.0 Level A and AA except <strong>2.4.1 Bypass Blocks</strong>, <strong>2.4.5 Multiple Ways</strong>, <strong>3.2.3 Consistent Navigation</strong>, and <strong>3.2.4 Consistent Identification</strong>. Then assess Chapter 6 support documentation and services where applicable.</p>
        <div class="plain-box">
          <h3>Do not overgeneralise</h3>
          <p>This four-item exclusion is for non-web documents and non-web software. It is not permission to omit keyboard access, names and roles, error identification, contrast, or document structure.</p>
        </div>
      </article>
    </section>
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Component matrix</p>
          <h2>What to test—and what people commonly miss</h2>
        </div>
        <p>Use this as an initial routing aid, then confirm the exact provisions in the Revised 508 Standards for the product and acquisition.</p>
      </div>
      <div class="table-wrap section-508-table-wrap">
        <table class="section-508-component-table">
          <thead><tr><th>ICT component</th><th>Primary baseline</th><th>Commonly missed</th></tr></thead>
          <tbody>${SECTION_508_COMPONENT_MATRIX.map(renderSection508ComponentRow).join("")}</tbody>
        </table>
      </div>
      <div class="actions section-508-challenge-actions">
        <a class="button primary" href="#title-ii-lab">Work the ADA Title II Lab</a>
        <a class="button primary" href="#casebook">Work the Standards Casebook</a>
        <a class="button primary" href="#quiz/section-508">Take the Section 508 challenge</a>
        <a class="button" href="#quiz/wcag-advanced">Take the advanced WCAG challenge</a>
        <a class="button" href="#exam">Run the mixed exam</a>
      </div>
    </section>
    <section class="panel wcag-comparison-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Start here</p>
          <h2>Compare everything with WCAG first</h2>
        </div>
        <p>Students should learn WCAG as the testing language, then learn what Section 508 and the EAA add: scope, covered products and services, legal baselines, exceptions, and evidence expectations.</p>
      </div>
      <div class="wcag-difference-grid">
        ${REGULATORY_WCAG_DIFFERENCES.map(renderWcagDifferenceCard).join("")}
      </div>
    </section>
    <section class="regulation-grid" aria-label="Regulatory training modules">
      ${REGULATORY_MODULES.map(renderRegulatoryModule).join("")}
    </section>
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Crosswalk</p>
          <h2>How WCAG practice turns into regulatory readiness</h2>
        </div>
        <p>Use this as the bridge from day-to-day accessibility testing into Section 508 and EAA evidence.</p>
      </div>
      <div class="regulation-crosswalk">
        ${REGULATORY_CROSSWALK.map(renderRegulatoryCrosswalk).join("")}
      </div>
    </section>
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Scenario lab</p>
          <h2>Practise deciding what applies</h2>
        </div>
        <p>Each scenario asks students to identify the law, scope, likely requirements, and evidence they would collect.</p>
      </div>
      <div class="scenario-grid">
        ${REGULATORY_SCENARIOS.map(renderRegulatoryScenario).join("")}
      </div>
    </section>
    <section class="grid two">
      <article class="panel">
        <p class="eyebrow">Readiness checklist</p>
        <h2>Fully prepared means the student can do these without notes</h2>
        ${renderRegulatoryReadinessList()}
      </article>
      <article class="panel">
        <p class="eyebrow">Evidence formula</p>
        <h2>Write findings so they survive audit review</h2>
        <dl class="comparison-list">
          <div><dt>Scope</dt><dd>Product, service, owner, jurisdiction, platform, release date, and user journey.</dd></div>
          <div><dt>Requirement</dt><dd>Section 508 chapter/WCAG criterion or EAA product/service outcome and supporting standard.</dd></div>
          <div><dt>Evidence</dt><dd>Steps, actual result, expected result, affected users, screenshots or assistive technology notes, and retest method.</dd></div>
          <div><dt>Escalation</dt><dd>Exception, transition, disproportionate burden, equivalent facilitation, or national-law question owner.</dd></div>
        </dl>
      </article>
    </section>
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Official sources</p>
          <h2>Primary references for this training</h2>
        </div>
        <p>Use these sources for exact wording and current regulatory interpretation before final audit or legal claims.</p>
      </div>
      <div class="source-grid">
        ${REGULATORY_SOURCES.map(renderRegulatorySource).join("")}
      </div>
    </section>
  `);
}

const REGULATION_SECTIONS = [
  ["overview", "Overview"],
  ["section-508", "Section 508"],
  ["title-ii", "ADA Title II"],
  ["eaa", "European Accessibility Act"],
  ["crosswalk", "Compare and apply"]
];

function renderRegulationNav(activeSection) {
  return `
    <nav class="regulation-section-nav" aria-label="Regulation topics">
      ${REGULATION_SECTIONS.map(([id, label]) => `<a href="#regulations/${id}" ${activeSection === id ? 'aria-current="page"' : ""}>${esc(label)}</a>`).join("")}
    </nav>
  `;
}

function renderRegulationSources(sources = REGULATORY_SOURCES) {
  return `
    <section class="panel">
      <div class="section-heading">
        <div><p class="eyebrow">Primary authorities</p><h2>Verify the rule at its source</h2></div>
        <p>Training summaries support learning; the linked law or official guidance controls the final compliance analysis.</p>
      </div>
      <div class="source-grid">${sources.map(renderRegulatorySource).join("")}</div>
    </section>
  `;
}

function renderRegulationOverview() {
  return `
    <section class="regulation-hero panel">
      <div>
        <p class="eyebrow">Legal reasoning model</p>
        <h2>Scope first. Map the authority. Then test and document.</h2>
        <p>WCAG is a technical standard, not a universal statement of legal coverage. A defensible conclusion identifies the covered entity, product or service, date, jurisdiction, controlling provision, technical evidence, and any exception or transition.</p>
      </div>
      <div class="regulation-callout">
        <strong>Four questions for every file</strong>
        <ol><li>Who and what are covered?</li><li>Which authority and version control?</li><li>What evidence proves the result?</li><li>What remains unknown or needs legal review?</li></ol>
      </div>
    </section>
    <section class="regulation-grid" aria-label="Regulatory learning paths">
      <article class="card regulation-module"><span class="badge">U.S. federal</span><h2>Section 508</h2><p>Learn the Revised 508 Standards as a component-based ICT framework: content, software, hardware, authoring tools, documentation, and support.</p><a class="button" href="#regulations/section-508">Study Section 508</a></article>
      <article class="card regulation-module"><span class="badge">U.S. state and local</span><h2>ADA Title II</h2><p>Apply DOJ's web and mobile app rule, current deadlines, defined exceptions, and the ADA duties that remain even when an exception applies.</p><a class="button" href="#regulations/title-ii">Study ADA Title II</a></article>
      <article class="card regulation-module"><span class="badge">European Union</span><h2>European Accessibility Act</h2><p>Trace Directive 2019/882 through covered products and services, Annex I, operator duties, limitations, standards, national law, and transitions.</p><a class="button" href="#regulations/eaa">Study the EAA</a></article>
      <article class="card regulation-module"><span class="badge">Method</span><h2>Compare and apply</h2><p>Separate technical conformance from legal coverage and practise writing a reviewable authority-and-evidence trail.</p><a class="button" href="#regulations/crosswalk">Open the crosswalk</a></article>
    </section>
    <section class="panel">
      <p class="eyebrow">Assessment standard</p>
      <h2>Recall is only the first layer</h2>
      <p>Advanced questions require learners to distinguish scope, exceptions, versions, transition rules, evidence, and accountable decision owners. Every legal question links to a primary official source.</p>
      <div class="actions"><a class="button primary" href="#quiz/mixed/20">Take a 20-question mixed assessment</a><a class="button" href="#exam">Run the 40-question exam</a></div>
    </section>
  `;
}

function renderSection508Training() {
  return `
    <section class="panel section-508-architecture">
      <div class="section-heading"><div><p class="eyebrow">Architecture</p><h2>A component-based ICT standard</h2></div><p>Start with E201–E208, then route each component to the applicable technical chapters. A WCAG result for one component does not establish product-wide conformance.</p></div>
      <div class="section-508-chapter-grid">${SECTION_508_CHAPTERS.map(renderSection508Chapter).join("")}</div>
    </section>
    <section class="panel section-508-scope-panel">
      <div class="section-heading"><div><p class="eyebrow">Scoping sequence</p><h2>From inventory to defensible finding</h2></div><p>Record exceptions and equivalent-facilitation decisions against the exact component and authority.</p></div>
      <ol class="section-508-scope-list">${SECTION_508_SCOPE_STEPS.map(renderSection508ScopeStep).join("")}</ol>
    </section>
    <section class="grid two section-508-detail-grid">
      <article class="panel"><p class="eyebrow">E205.3</p><h2>Nine nonpublic official-communication categories</h2><ol class="official-communications-list">${SECTION_508_OFFICIAL_COMMUNICATIONS.map((item) => `<li>${esc(item)}</li>`).join("")}</ol></article>
      <article class="panel"><p class="eyebrow">E205.4 and E207.2</p><h2>Non-web exclusions are narrow</h2><p>For non-web documents and non-web software, WCAG 2.0 Level A and AA apply except <strong>2.4.1, 2.4.5, 3.2.3, and 3.2.4</strong>. E207.2 also excludes WCAG Conformance Requirement 3 for non-web software.</p><div class="plain-box"><h3>Do not overgeneralise</h3><p>The exclusions do not remove requirements for structure, keyboard operation, names and roles, error identification, or contrast.</p></div></article>
    </section>
    <section class="panel"><div class="section-heading"><div><p class="eyebrow">Component matrix</p><h2>Test the whole ICT package</h2></div><p>Use this routing aid, then verify exact provisions in the Revised 508 Standards.</p></div><div class="table-wrap section-508-table-wrap" tabindex="0" role="region" aria-label="Section 508 component matrix; scroll horizontally to view all columns"><table class="section-508-component-table"><thead><tr><th>ICT component</th><th>Primary baseline</th><th>Commonly missed</th></tr></thead><tbody>${SECTION_508_COMPONENT_MATRIX.map(renderSection508ComponentRow).join("")}</tbody></table></div><div class="actions section-508-challenge-actions"><a class="button primary" href="#quiz/section-508/20">Take the 20-question Section 508 assessment</a><a class="button" href="#casebook">Work the casebook</a></div></section>
    ${renderRegulationSources(REGULATORY_SOURCES.slice(0, 3))}
  `;
}

function renderTitleIITraining() {
  const exceptions = [
    ["Archived web content", "The content must satisfy all four archival conditions, including being retained only for reference, research, or recordkeeping and kept in a clearly identified archive."],
    ["Preexisting conventional electronic documents", "The exception is file- and date-specific; documents currently used to apply for, gain access to, or participate in services, programs, or activities are not covered by it."],
    ["Certain third-party content", "Content posted by an independent third party is treated differently from content supplied through contractual, licensing, or other arrangements with the public entity."],
    ["Individualised password-protected documents", "Certain preexisting conventional electronic documents about a specific person, their property, or account may qualify; new documents must meet the rule."],
    ["Preexisting social media posts", "Only posts made before the entity's applicable compliance date fall within this exception."]
  ];
  return `
    <section class="regulation-hero panel"><div><p class="eyebrow">28 CFR Part 35, Subpart H</p><h2>State and local government web content and mobile apps</h2><p>DOJ's rule generally requires WCAG 2.1 Level AA for web content and mobile apps that a public entity provides or makes available, directly or through contractual or other arrangements.</p></div><div class="regulation-callout"><strong>Current compliance dates</strong><dl class="comparison-list"><div><dt>50,000 or more people</dt><dd><time datetime="2027-04-26">April 26, 2027</time></dd></div><div><dt>Under 50,000 and special districts</dt><dd><time datetime="2028-04-26">April 26, 2028</time></dd></div></dl><p>These dates reflect DOJ's April 2026 interim final rule. Confirm current status at ADA.gov.</p></div></section>
    <section class="panel"><div class="section-heading"><div><p class="eyebrow">Coverage</p><h2>Ownership of the domain is not the test</h2></div><p>Inventory public websites, mobile apps, intranets, portals, course systems, documents, social media, and vendor-operated services that the public entity provides or makes available.</p></div><div class="grid two"><article><h3>Ask first</h3><ul><li>Is the organisation a state or local government or other public entity?</li><li>Is the content or app connected to a service, program, or activity?</li><li>Is a contractor or vendor providing it on the entity's behalf?</li><li>Which population measure and deadline apply?</li></ul></article><article><h3>Technical baseline</h3><p>The rule names WCAG 2.1 Level AA. A team's use of WCAG 2.2 can add useful product coverage, but does not silently change the version named by the regulation.</p><p>Small entities have a later deadline—not a general exemption.</p></article></div></section>
    <section class="panel"><div class="section-heading"><div><p class="eyebrow">Five content exceptions</p><h2>Apply conditions item by item</h2></div><p>An exception is not a site-wide waiver.</p></div><div class="regulation-grid">${exceptions.map(([title, detail]) => `<article class="card"><h3>${esc(title)}</h3><p>${esc(detail)}</p></article>`).join("")}</div></section>
    <section class="grid two"><article class="panel"><p class="eyebrow">Duties that remain</p><h2>Exceptions do not end the ADA analysis</h2><p>Public entities still must meet their existing Title II duties, including effective communication, reasonable modifications, and equal opportunity to participate in and benefit from services, programs, and activities.</p></article><article class="panel"><p class="eyebrow">Narrow alternatives</p><h2>Alternate versions and minimal impact</h2><p>A conforming alternate version is permitted only when a technical or legal limitation prevents direct accessibility. The minimal-impact provision is narrow and fact-specific; it is not a tolerance percentage or a reason to defer remediation.</p></article></section>
    <section class="panel"><div class="actions"><a class="button primary" href="#quiz/title-ii/20">Take the 20-question Title II assessment</a><a class="button" href="#title-ii-lab">Work the Title II case lab</a></div></section>
    ${renderRegulationSources(LEGAL_DOCUMENTS.filter((doc) => doc.topic === "title-ii").slice(0, 5).map((doc) => ({ title: doc.title, url: doc.url, use: doc.use })))}
  `;
}

function renderEaaTraining() {
  return `
    <section class="regulation-hero panel"><div><p class="eyebrow">Directive (EU) 2019/882</p><h2>Product and service accessibility in the EU market</h2><p>The Directive's measures apply from <time datetime="2025-06-28">28 June 2025</time>, subject to Article 32 transitions and national implementing law. Begin with Article 2 scope and the definitions—not with a WCAG scan.</p></div><div class="regulation-callout"><strong>Authority chain</strong><ol><li>Directive and annexes</li><li>Member State implementing measure</li><li>Applicable harmonised standard or technical specification</li><li>Product/service evidence</li></ol></div></section>
    <section class="grid two"><article class="panel"><p class="eyebrow">Article 2</p><h2>Covered categories</h2><p>Examples include consumer general-purpose computer hardware and operating systems, certain self-service terminals, consumer terminal equipment for electronic communications and audiovisual access, e-readers, electronic communications, audiovisual media access services, elements of passenger transport services, consumer banking, e-books, and e-commerce.</p><p>Classify the exact product, service, operator role, consumer use, market, and date.</p></article><article class="panel"><p class="eyebrow">Article 4 and Annex I</p><h2>Requirements are broader than page conformance</h2><p>Map common and category-specific requirements for information, user interface, functionality, support, and services. WCAG or EN 301 549 evidence can support the mapping, but does not replace the legal analysis.</p><p>Article 4(4) permits Member States to decide whether the built environment used by clients must meet Annex III; it is not a universal EU-wide built-environment rule.</p></article></section>
    <section class="panel"><div class="section-heading"><div><p class="eyebrow">Roles and limits</p><h2>Separate each legal question</h2></div><p>Do not turn a qualified exemption or limitation into a blanket claim.</p></div><div class="regulation-grid"><article class="card"><h3>Microenterprises</h3><p>Article 4(5) exempts microenterprises <em>providing services</em>. It is not a blanket exemption for a microenterprise that manufactures, imports, or distributes covered products.</p></article><article class="card"><h3>Article 14</h3><p>Fundamental alteration and disproportionate burden require an assessment using the relevant criteria. Keep the assessment for five years and reassess when required.</p></article><article class="card"><h3>Article 15</h3><p>Presumption of conformity applies only to the extent requirements are covered by harmonised standards or technical specifications whose references satisfy the Article's conditions.</p></article><article class="card"><h3>National law</h3><p>The Directive requires national implementation. Identify the Member State measure, authority, enforcement route, and penalties for the real service or product.</p></article></div></section>
    <section class="panel"><p class="eyebrow">Article 32 transitions</p><h2>The application date is not the whole timeline</h2><div class="grid two"><article><h3>Service contracts</h3><p>Service providers may continue providing services using products lawfully used before 28 June 2025 until 28 June 2030. Service contracts agreed before 28 June 2025 may continue unchanged until expiry, but not longer than five years from that date.</p></article><article><h3>Self-service terminals</h3><p>Member States may allow terminals lawfully used before 28 June 2025 to continue for their economically useful life, but no longer than 20 years after they entered use.</p></article></div></section>
    <section class="panel"><div class="actions"><a class="button primary" href="#quiz/eaa/20">Take the 20-question EAA assessment</a><a class="button" href="#casebook">Work the regulatory casebook</a></div></section>
    ${renderRegulationSources(REGULATORY_SOURCES.filter((source) => source.url.includes("europa.eu") || source.url.includes("eur-lex")))}
  `;
}

function renderRegulationCrosswalkTraining() {
  return `
    <section class="panel wcag-comparison-panel"><div class="section-heading"><div><p class="eyebrow">Critical distinctions</p><h2>Same evidence, different legal questions</h2></div><p>Use WCAG skill as the testing spine, while keeping the authority, covered scope, version, exceptions, and documentation duties separate.</p></div><div class="wcag-difference-grid">${REGULATORY_WCAG_DIFFERENCES.map(renderWcagDifferenceCard).join("")}</div></section>
    <section class="panel"><div class="section-heading"><div><p class="eyebrow">Applied crosswalk</p><h2>Translate tests into regulatory evidence</h2></div><p>Each conclusion needs a reproducible trail from facts to authority to technical result.</p></div><div class="regulation-crosswalk">${REGULATORY_CROSSWALK.map(renderRegulatoryCrosswalk).join("")}</div></section>
    <section class="panel"><div class="section-heading"><div><p class="eyebrow">Scenario practice</p><h2>Decide what applies before revealing the analysis</h2></div><p>Compare your answer on scope, baseline, evidence, and escalation.</p></div><div class="scenario-grid">${REGULATORY_SCENARIOS.map(renderRegulatoryScenario).join("")}</div></section>
    <section class="grid two"><article class="panel"><p class="eyebrow">Readiness</p><h2>Can the learner do this without notes?</h2>${renderRegulatoryReadinessList()}</article><article class="panel"><p class="eyebrow">Evidence formula</p><h2>Write findings that survive review</h2><dl class="comparison-list"><div><dt>Facts</dt><dd>Entity, jurisdiction, product/service, component, user journey, date, and owner.</dd></div><div><dt>Authority</dt><dd>Statute or directive, regulation or national measure, provision, and incorporated standard/version.</dd></div><div><dt>Evidence</dt><dd>State, steps, actual and expected result, affected users, method, and retest.</dd></div><div><dt>Decision trail</dt><dd>Exception, limitation, transition, uncertainty, approver, and follow-up.</dd></div></dl></article></section>
    <section class="panel"><div class="actions"><a class="button primary" href="#quiz/mixed/40">Take the 40-question mixed assessment</a><a class="button" href="#docs">Open the legal document library</a></div></section>
  `;
}

function renderRegulations(section = "overview") {
  const activeSection = REGULATION_SECTIONS.some(([id]) => id === section) ? section : "overview";
  const descriptions = {
    overview: "Learn a repeatable method for distinguishing technical standards from legal coverage.",
    "section-508": "Scope federal ICT component by component under the Revised 508 Standards.",
    "title-ii": "Apply DOJ's web and mobile app rule with current dates, exceptions, and continuing duties.",
    eaa: "Trace covered products and services through the EAA, national law, evidence, and transitions.",
    crosswalk: "Compare the frameworks and practise writing defensible legal and technical findings."
  };
  const content = activeSection === "section-508" ? renderSection508Training()
    : activeSection === "title-ii" ? renderTitleIITraining()
      : activeSection === "eaa" ? renderEaaTraining()
        : activeSection === "crosswalk" ? renderRegulationCrosswalkTraining()
          : renderRegulationOverview();
  return layout(`
    ${pageTitle("Regulations", activeSection === "overview" ? "Accessibility law learning centre" : REGULATION_SECTIONS.find(([id]) => id === activeSection)[1], `${descriptions[activeSection]} Source facts last checked ${REGULATORY_LAST_REVIEWED}.`)}
    ${renderRegulationNav(activeSection)}
    ${content}
  `);
}

function renderCourse() {
  const uniqueCourses = SOURCE_TOC_COVERAGE.length;
  const tocPages = SOURCE_TOC_COVERAGE.reduce((sum, course) => sum + course.pages, 0);
  const visibleCourseRows = SOURCE_COURSE_PATHS.reduce((sum, path) => sum + path.courses.length, 0);
  const assessmentRows = SOURCE_COURSE_PATHS.reduce((sum, path) => sum + (path.assessments?.length || 0), 0);
  return layout(`
    ${pageTitle("Study map", "Source-aligned accessibility learning path", "A structured map from the course inventory into original trainer modules, practice routines, WCAG references, and quiz review.")}
    <section class="panel">
      <h2>How this map works</h2>
      <p>This page records the course structure and progress visible in the source course inventory, then turns each topic into original study guidance inside this trainer. It is a learning map, not a course-link directory.</p>
      <ol>${PEDAGOGY_STEPS.map((step) => `<li>${esc(step)}</li>`).join("")}</ol>
    </section>
    <section class="panel">
      <h2>Course page coverage</h2>
      <p>The available member courses were crawled by course table of contents. The trainer uses that structure as a coverage checklist, then rewrites the learning material into original, accessible study modules.</p>
      <div class="coverage-stats" aria-label="Course coverage summary">
        <div><strong>${visibleCourseRows}</strong><span>course rows from member page</span></div>
        <div><strong>${uniqueCourses}</strong><span>unique course TOCs indexed</span></div>
        <div><strong>${tocPages.toLocaleString("en-US")}</strong><span>TOC pages mapped</span></div>
        <div><strong>${assessmentRows}</strong><span>assessment actions tracked</span></div>
      </div>
    </section>
    <section class="strategy-grid" aria-label="Integration strategy">
      ${INTEGRATION_STRATEGY.map(renderIntegrationStep).join("")}
    </section>
    <section class="course-paths" aria-label="Course progress map">
      ${SOURCE_COURSE_PATHS.map(renderCourseProgress).join("")}
    </section>
    <section class="panel qa-track-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Course integration</p>
          <h2>IAAP CPACC review track</h2>
        </div>
        <p>This track rewrites the CPACC-style course structure into original study steps for learners who need clearer language, slower pacing, and concrete examples.</p>
      </div>
      <div class="qa-track-grid">
        ${CPACC_REVIEW_TRACK.map(renderCpaccTrackStep).join("")}
      </div>
    </section>
    <section class="panel qa-track-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Course integration</p>
          <h2>Fast Track to Accessibility for QA Testers 2.0</h2>
        </div>
        <p>This is the first detailed rewrite track from the newly indexed course pages. It turns the QA course structure into original trainer routines a tester can actually follow.</p>
      </div>
      <div class="qa-track-grid">
        ${QA_TESTER_TRACK.map(renderQaTrackStep).join("")}
      </div>
    </section>
    <section class="panel qa-track-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Regulatory readiness</p>
          <h2>Section 508 and European Accessibility Act track</h2>
        </div>
        <p>This track prepares students to scope regulatory work, explain current requirements, collect evidence, and escalate legal exception questions responsibly.</p>
      </div>
      <div class="regulation-crosswalk">
        ${REGULATORY_CROSSWALK.map(renderRegulatoryCrosswalk).join("")}
      </div>
      <div class="actions">
        <a class="button primary" href="#regulations">Open full regulatory training</a>
      </div>
    </section>
    <section class="toc-coverage" aria-label="Indexed course page coverage">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Coverage inventory</p>
          <h2>Every available course TOC is represented</h2>
        </div>
        <p>Each card shows the integration lane, number of crawled TOC pages, and representative topics used to build original tutorials and quiz coverage.</p>
      </div>
      <div class="toc-coverage-grid">
        ${SOURCE_TOC_COVERAGE.map(renderCoverageCard).join("")}
      </div>
    </section>
    <section class="grid two" aria-label="Original trainer modules">
      ${COURSE_LIBRARY.map((course, index) => `
        <article class="card module-card">
          <span class="badge">Trainer module ${index + 1}</span>
          <h2>${esc(course.title)}</h2>
          <p>${esc(course.takeaway)}</p>
          <dl class="tutorial-meta">
            <div><dt>Study focus</dt><dd>${esc(course.topics.slice(0, 4).join(", "))}</dd></div>
            <div><dt>Practice routine</dt><dd>Read one lesson, test one real interface state, write one evidence note, then answer close-distractor questions.</dd></div>
          </dl>
          <div class="actions">
            <a class="button primary" href="#bank">Find related standards</a>
            <a class="button" href="#quiz">Practise quiz</a>
          </div>
        </article>
      `).join("")}
    </section>
    <section class="panel">
      <h2>How to study without getting lost</h2>
      <ol>
        <li>Use this trainer for repetition, plain-English review, and practical WCAG recall.</li>
        <li>Stay inside the trainer: course rows route to internal lessons, standards, guided review, and quizzes.</li>
        <li>Do not study a whole course at once. Pick one topic, one criterion, one example, and one quiz session.</li>
        <li>When a topic feels technical, translate it into: user need, barrier, evidence, fix, retest.</li>
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
  const tutorialTags = [...tutorial.tags, tutorial.category, tutorial.topic, tutorial.title, ...tutorial.wcagRefs].map((item) => String(item).toLowerCase());
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
        <h3>Technical checks</h3>
        <ul>${tutorial.wcagRefs.flatMap((num) => technicalChecks(getCriterion(num)).slice(0, 2)).slice(0, 5).map((step) => `<li>${esc(step)}</li>`).join("")}</ul>
        <div class="example-box"><h3>Example</h3><p>${esc(tutorial.example)}</p></div>
        <div class="plain-box"><h3>Practice</h3><p>${esc(tutorial.practice)}</p></div>
        <div class="trap-box"><h3>Review prompt</h3><p>${esc(tutorial.check)}</p></div>
        <div class="plain-box">
          <h3>Tools and official sources</h3>
          <p>Use the tools below when the tutorial involves implementation or testing. Always confirm with the official WCAG wording before writing final evidence.</p>
          ${renderToolLinks(tutorialTags, 5)}
        </div>
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
      <div class="table-wrap" tabindex="0" role="region" aria-label="Filtered WCAG criteria comparison table">
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

function shuffled(values) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[swapIndex]] = [copy[swapIndex], copy[i]];
  }
  return copy;
}

function materializeAdvancedQuestion(question) {
  return {
    ...question,
    choices: shuffled(question.choices.map(([id, label, rationale]) => ({ id, label, rationale })))
  };
}

function makeQuestion(sc, index = 0) {
  const pool = ACTIVE_SUCCESS_CRITERIA
    .filter((other) => other.id !== sc.id)
    .sort((a, b) => {
      const scoreA = (a.guideline === sc.guideline ? 4 : 0) + (a.principle === sc.principle ? 2 : 0) + (a.level === sc.level ? 1 : 0);
      const scoreB = (b.guideline === sc.guideline ? 4 : 0) + (b.principle === sc.principle ? 2 : 0) + (b.level === sc.level ? 1 : 0);
      return scoreB - scoreA || a.num.localeCompare(b.num, undefined, { numeric: true });
    });
  const distractors = pool.slice(0, 3);
  const choices = shuffled([sc, ...distractors].map((choice) => ({
    id: choice.id,
    label: `${choice.num} ${choice.title}`,
    rationale: choice.id === sc.id
      ? `Correct: this is the normative text of ${sc.num} ${sc.title}.`
      : `${choice.num} ${choice.title} is a different normative requirement; compare its exact scope and conditions.`
  })));
  return {
    id: `criterion-${sc.id}-${index}`,
    title: `${sc.num} ${sc.title}`,
    competency: "Criterion discrimination",
    source: `WCAG 2.2 ${sc.num}`,
    domain: "WCAG 2.2",
    sourceUrl: `https://www.w3.org/TR/WCAG22/#${sc.id}`,
    prompt: `Which WCAG 2.2 success criterion contains this normative requirement? “${sc.contentText}”`,
    choices,
    answer: sc.id,
    explanation: `The quoted wording is the normative success-criterion text for ${sc.num} ${sc.title} at Level ${sc.level}. Compare exact scope and conditions; do not infer from a nearby topic.`,
    studyHref: `#lesson/${sc.id}`
  };
}

const QUIZ_BANKS = {
  "section-508": SECTION_508_ASSESSMENT_QUESTIONS,
  "title-ii": TITLE_II_ASSESSMENT_QUESTIONS,
  eaa: EAA_ASSESSMENT_QUESTIONS,
  "wcag-advanced": WCAG_ASSESSMENT_QUESTIONS
};

function balancedQuestions(count) {
  const buckets = Object.values(QUIZ_BANKS).map((bank) => shuffled(bank));
  const selected = [];
  for (let round = 0; selected.length < count; round += 1) {
    let added = false;
    buckets.forEach((bucket) => {
      if (selected.length < count && bucket[round]) {
        selected.push(bucket[round]);
        added = true;
      }
    });
    if (!added) break;
  }
  return shuffled(selected);
}

function quizQuestionCount(targetId, requestedCount, exam) {
  if (exam) return 40;
  if (findCriterion(targetId)) return 1;
  const bank = QUIZ_BANKS[targetId];
  const fallback = bank ? bank.length : 20;
  const parsed = Number.parseInt(requestedCount, 10);
  const maximum = bank ? bank.length : ADVANCED_QUESTION_BANK.length;
  return Number.isFinite(parsed) && parsed > 0 ? Math.min(parsed, maximum) : fallback;
}

function startQuiz(targetId = "mixed", requestedCount = null, exam = false) {
  const normalizedTarget = targetId || "mixed";
  const count = quizQuestionCount(normalizedTarget, requestedCount, exam);
  let questions = [];
  if (exam || normalizedTarget === "mixed") {
    questions = balancedQuestions(count).map(materializeAdvancedQuestion);
  } else if (QUIZ_BANKS[normalizedTarget]) {
    questions = shuffled(QUIZ_BANKS[normalizedTarget]).slice(0, count).map(materializeAdvancedQuestion);
  } else {
    const criterion = findCriterion(normalizedTarget);
    if (criterion) questions = [makeQuestion(criterion)];
  }

  state.quiz = {
    questions,
    index: 0,
    score: 0,
    answered: [],
    targetId: normalizedTarget,
    count: questions.length,
    requestedCount,
    exam
  };
  state.selected = null;
}

function quizPresentation(targetId, exam) {
  if (exam) return ["Exam practice", "Cross-jurisdiction accessibility law exam", "Forty expert questions test legal scope, exceptions, transitions, technical standards, and defensible application across all four domains."];
  if (targetId === "section-508") return ["Section 508 challenge", "Component scoping and conformance judgment", "Complete the full Section 508 bank covering procurement, content, software, hardware, authoring tools, support, exceptions, and agency communication."];
  if (targetId === "title-ii") return ["ADA Title II challenge", "Rule scope, exceptions, dates, and continuing duties", "Apply the web and mobile app rule without confusing a content exception with an end to effective communication, reasonable modification, or equal opportunity duties."];
  if (targetId === "eaa") return ["European Accessibility Act challenge", "Directive scope, national implementation, and transition analysis", "Work through covered products and services, microenterprise boundaries, conformity, disproportionate-burden records, and Article 32 transitions."];
  if (targetId === "wcag-advanced") return ["Advanced WCAG challenge", "Close-call criterion analysis", "Separate neighbouring success criteria, identify layered failures, and choose the narrowest defensible primary finding."];
  return ["Expert challenge", "Mixed accessibility law and standards analysis", "A balanced assessment across Section 508, ADA Title II, the European Accessibility Act, and WCAG 2.2. Expect plausible distractors and source-linked explanations."];
}

function renderQuiz(targetId = "mixed", exam = false, requestedCount = null) {
  const normalizedTarget = targetId || "mixed";
  const expectedCount = quizQuestionCount(normalizedTarget, requestedCount, exam);
  if (!state.quiz || state.quiz.targetId !== normalizedTarget || state.quiz.count !== expectedCount || state.quiz.exam !== exam) {
    startQuiz(normalizedTarget, requestedCount, exam);
  }
  const quiz = state.quiz;
  const done = quiz.index >= quiz.questions.length;
  if (done) {
    const percent = Math.round((quiz.score / quiz.questions.length) * 100);
    const domainScores = quiz.answered.reduce((scores, answer) => {
      const domain = answer.question.domain || "WCAG 2.2";
      scores[domain] ||= { correct: 0, total: 0 };
      scores[domain].total += 1;
      if (answer.correct) scores[domain].correct += 1;
      return scores;
    }, {});
    return layout(`
      ${pageTitle(exam ? "Exam result" : "Quiz result", `${percent}% score`, "Review missed questions, then go back to the lessons for weak criteria.")}
      <section class="panel">
        <p>You scored <strong>${quiz.score}</strong> out of <strong>${quiz.questions.length}</strong>.</p>
        <div class="score-breakdown" aria-label="Score by domain">
          ${Object.entries(domainScores).map(([domain, score]) => `<div class="mini"><strong>${esc(domain)}</strong><span>${score.correct} of ${score.total} correct</span></div>`).join("")}
        </div>
        <div class="actions">
          <button type="button" class="button primary" data-restart>Try again</button>
          <a class="button" href="#regulations/overview">Review the law modules</a>
          <a class="button" href="#lessons">Review WCAG</a>
        </div>
      </section>
      <section class="grid">
        ${quiz.answered.map((a, i) => {
          const selectedChoice = a.question.choices.find((choice) => choice.id === a.selected);
          const correctChoice = a.question.choices.find((choice) => choice.id === a.question.answer);
          return `
            <article class="card quiz-review-card">
              <span class="badge">${a.correct ? "Correct" : "Review"}</span>
              <h2>Question ${i + 1}: ${esc(a.question.title)}</h2>
              <p><strong>Your answer:</strong> ${esc(selectedChoice?.label || "No answer")}</p>
              ${a.correct ? "" : `<p><strong>Best answer:</strong> ${esc(correctChoice?.label || "")}</p>`}
              <p>${esc(a.question.explanation)}</p>
              <div class="quiz-review-links">
                ${a.question.studyHref ? `<a href="${a.question.studyHref}">Review the lesson</a>` : ""}
                <a href="${a.question.sourceUrl}" target="_blank" rel="noopener noreferrer">Verify with the official source</a>
              </div>
            </article>
          `;
        }).join("")}
      </section>
    `);
  }

  const question = quiz.questions[quiz.index];
  const selectedChoice = question.choices.find((choice) => choice.id === state.selected);
  const correctChoice = question.choices.find((choice) => choice.id === question.answer);
  const [eyebrow, title, description] = quizPresentation(normalizedTarget, exam);
  return layout(`
    ${pageTitle(eyebrow, title, description)}
    ${exam ? "" : `<nav class="quiz-mode-nav" aria-label="Challenge type">
      <a class="button ${normalizedTarget === "mixed" ? "primary" : ""}" ${normalizedTarget === "mixed" ? 'aria-current="page"' : ""} href="#quiz/mixed/20">Mixed</a>
      <a class="button ${normalizedTarget === "section-508" ? "primary" : ""}" ${normalizedTarget === "section-508" ? 'aria-current="page"' : ""} href="#quiz/section-508">Section 508</a>
      <a class="button ${normalizedTarget === "title-ii" ? "primary" : ""}" ${normalizedTarget === "title-ii" ? 'aria-current="page"' : ""} href="#quiz/title-ii">ADA Title II</a>
      <a class="button ${normalizedTarget === "eaa" ? "primary" : ""}" ${normalizedTarget === "eaa" ? 'aria-current="page"' : ""} href="#quiz/eaa">EAA</a>
      <a class="button ${normalizedTarget === "wcag-advanced" ? "primary" : ""}" ${normalizedTarget === "wcag-advanced" ? 'aria-current="page"' : ""} href="#quiz/wcag-advanced">WCAG 2.2</a>
    </nav>
    ${normalizedTarget === "mixed" ? `<nav class="quiz-length-nav" aria-label="Mixed assessment length">
      ${[10, 20, 40].map((length) => `<a class="button" ${quiz.questions.length === length ? 'aria-current="page"' : ""} href="#quiz/mixed/${length}">${length} questions</a>`).join("")}
    </nav>` : `<p class="question-bank-size"><strong>${quiz.questions.length}-question complete domain assessment.</strong> Questions are shuffled on every attempt.</p>`}`}
    <form class="question" data-quiz-form aria-labelledby="quiz-question-heading">
      <div class="question-meta">
        <span class="badge">Question ${quiz.index + 1} of ${quiz.questions.length}</span>
        <span>${esc(question.domain || "WCAG 2.2")}</span>
        <span>${esc(question.competency)}</span>
        <span>${esc(question.source)}</span>
      </div>
      <h2 id="quiz-question-heading" tabindex="-1">${esc(question.prompt)}</h2>
      <fieldset class="options-list" ${state.selected ? "disabled" : ""}>
        <legend class="sr-only">Choose the best answer</legend>
        ${question.choices.map((choice) => {
          const answered = state.selected;
          const klass = answered && choice.id === question.answer ? "correct" : answered === choice.id ? "wrong" : "";
          const stateText = answered && choice.id === question.answer ? "Correct answer" : answered === choice.id ? "Selected answer" : "";
          return `<label class="option ${klass} ${answered ? "is-answered" : ""}">
            <input type="radio" name="quiz-answer" value="${esc(choice.id)}" ${state.selected === choice.id ? "checked" : ""} required />
            <span class="option-copy"><strong>${esc(choice.label)}</strong>${stateText ? `<span class="answer-state">${esc(stateText)}</span>` : ""}</span>
          </label>`;
        }).join("")}
      </fieldset>
      ${state.selected ? `<div class="feedback" id="quiz-feedback" role="status" aria-live="polite" tabindex="-1">
        <p><strong>${state.selected === question.answer ? "Correct." : "Not quite."}</strong> ${esc(question.explanation)}</p>
        <p><strong>Why your choice ${state.selected === question.answer ? "works" : "falls short"}:</strong> ${esc(selectedChoice?.rationale || "Review the controlling requirement and user impact.")}</p>
        ${state.selected === question.answer ? "" : `<p><strong>Best answer:</strong> ${esc(correctChoice?.label || "")}</p>`}
        <p><a href="${question.sourceUrl}" target="_blank" rel="noopener noreferrer">Open the official source used for this question</a></p>
      </div>` : ""}
      <div class="actions">
        ${state.selected ? `<button type="button" class="button primary" data-next-question>${quiz.index + 1 === quiz.questions.length ? "View results" : "Next question"}</button>` : `<button type="submit" class="button primary">Check answer</button>`}
        ${question.studyHref ? `<a class="button" href="${question.studyHref}">Study this topic</a>` : ""}
      </div>
    </form>
  `);
}

function textIncludesQuery(query, values) {
  return values
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function globalSearchResults(term) {
  const query = term.trim().toLowerCase();
  if (!query) {
    return { criteria: [], tutorials: [], docs: [], regulations: [], titleII: [], casebook: [], glossary: [], courses: [] };
  }

  const criterionNumberQuery = /^\d+(?:\.\d+)*$/.test(query);
  const criteriaMatches = ACTIVE_SUCCESS_CRITERIA.filter((sc) => {
    if (criterionNumberQuery) return sc.num.toLowerCase().startsWith(query);
    return textIncludesQuery(query, [
      sc.num,
      sc.id,
      sc.title,
      sc.level,
      sc.principle,
      sc.guidelineTitle,
      sc.contentText,
      plainExplanation(sc),
      oneSentence(sc)
    ]);
  });

  const tutorials = TUTORIAL_RECORDS.filter((tutorial) => textIncludesQuery(query, [
    tutorial.title,
    tutorial.description,
    tutorial.category,
    tutorial.topic,
    tutorial.difficulty,
    tutorial.level,
    tutorial.example,
    tutorial.practice,
    tutorial.check,
    tutorial.tags,
    tutorial.wcagRefs,
    tutorial.teach
  ]));

  const docs = [...LEGAL_DOCUMENTS, ...OFFICIAL_DOCS, ...REGULATORY_SOURCES].filter((doc) => textIncludesQuery(query, [
    doc.title,
    doc.url,
    doc.use,
    doc.reference,
    doc.force,
    doc.question
  ]));

  const regulations = [
    ...SECTION_508_CHAPTERS.map((item) => ({
      title: item.chapter,
      label: item.anchors,
      body: item.focus,
      details: [item.decisions, "Section 508 architecture"]
    })),
    ...SECTION_508_COMPONENT_MATRIX.map((item) => ({
      title: item.component,
      label: "Section 508 component",
      body: item.baseline,
      details: [item.watch]
    })),
    ...REGULATORY_WCAG_DIFFERENCES.map((item) => ({
      title: item.axis,
      label: "WCAG comparison",
      body: item.takeaway,
      details: [item.wcag, item.section508, item.eaa]
    })),
    ...REGULATORY_MODULES.map((item) => ({
      title: item.title,
      label: item.badge,
      body: item.summary,
      details: [item.learn, item.drill]
    })),
    ...REGULATORY_CROSSWALK.map((item) => ({
      title: item.title,
      label: item.standard,
      body: item.details,
      details: [item.action]
    })),
    ...REGULATORY_SCENARIOS.map((item) => ({
      title: item.title,
      label: item.law,
      body: item.ask,
      details: [item.answer]
    }))
  ].filter((item) => textIncludesQuery(query, [item.title, item.label, item.body, item.details]));

  const casebook = CASEBOOK_CASES.map((item) => ({
    title: item.title,
    label: `${item.law} case file`,
    body: item.brief,
    details: [
      item.task,
      item.memo,
      item.caution,
      item.dimensions.flatMap((dimension) => [dimension.label, dimension.prompt, dimension.explanation])
    ]
  })).filter((item) => textIncludesQuery(query, [item.title, item.label, item.body, item.details]));

  const titleII = TITLE_II_CASES.map((item) => ({
    title: item.title,
    label: "ADA Title II case",
    body: item.brief,
    details: [
      item.task,
      Object.values(item.record),
      item.dimensions.flatMap((dimension) => [dimension.label, dimension.prompt, dimension.explanation])
    ]
  })).filter((item) => textIncludesQuery(query, [item.title, item.label, item.body, item.details]));

  const glossary = GLOSSARY
    .map(([termName, definition]) => ({ title: termName, body: definition }))
    .filter((item) => textIncludesQuery(query, [item.title, item.body]));

  const courses = [
    ...COURSE_LIBRARY.map((course) => ({
      title: course.title,
      label: course.source,
      body: course.takeaway,
      details: course.topics
    })),
    ...SOURCE_TOC_COVERAGE.map((course) => ({
      title: course.title,
      label: course.lane,
      body: `${course.pages} indexed pages`,
      details: course.sample
    }))
  ].filter((item) => textIncludesQuery(query, [item.title, item.label, item.body, item.details]));

  return { criteria: criteriaMatches, tutorials, docs, regulations, titleII, casebook, glossary, courses };
}

function globalSearchCount(results) {
  return Object.values(results).reduce((sum, list) => sum + list.length, 0);
}

function renderSearchForm(term) {
  return `
    <form class="search-page-form panel" role="search" aria-label="Search all trainer content" data-global-search>
      <label for="search-page-input">Search terms and references</label>
      <div class="search-page-input-row">
        <input id="search-page-input" name="q" type="search" value="${esc(term)}" placeholder="Try 1.2, captions, Section 508, EAA, focus..." autocomplete="off" />
        <button type="submit" class="button primary">Search</button>
      </div>
    </form>
  `;
}

function renderSearchCriterion(sc) {
  return `
    <article class="search-result-card">
      <div class="standard-card-head">
        <span class="criterion-number">${esc(sc.num)}</span>
        <span class="badge level-${sc.level.toLowerCase()}">Level ${esc(sc.level)}</span>
        <span class="badge">${esc(sc.principle)}</span>
      </div>
      <h3>${esc(sc.title)}</h3>
      <p>${esc(oneSentence(sc))}</p>
      <p class="muted">${esc(sc.guidelineTitle)}. ${esc(sc.contentText.slice(0, 240))}${sc.contentText.length > 240 ? "..." : ""}</p>
      <div class="search-result-links" aria-label="${esc(sc.num)} references">
        <a class="button primary" href="#lesson/${sc.id}">Lesson</a>
        <a class="button" href="#quiz/${sc.id}">Quiz</a>
        ${officialLinks(sc).map(([label, href]) => `<a class="button" href="${href}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`).join("")}
      </div>
    </article>
  `;
}

function renderSearchTutorial(tutorial) {
  return `
    <article class="search-result-card">
      <span class="badge">${esc(tutorial.category)}</span>
      <h3>${esc(tutorial.title)}</h3>
      <p>${esc(tutorial.description)}</p>
      <p class="muted">References: ${tutorial.wcagRefs.map((num) => `<a href="#lesson/${getCriterion(num).id}">${esc(num)}</a>`).join(", ")}</p>
      <div class="search-result-links">
        <a class="button primary" href="#tutorials">Open tutorials</a>
        <a class="button" href="#quiz/${getCriterion(tutorial.wcagRefs[0]).id}">Practice related quiz</a>
      </div>
    </article>
  `;
}

function renderSearchDoc(doc) {
  return `
    <article class="search-result-card">
      <span class="badge">Official source</span>
      <h3>${esc(doc.title)}</h3>
      <p>${esc(doc.use)}</p>
      <a class="button" href="${doc.url}" target="_blank" rel="noopener noreferrer">Open reference</a>
    </article>
  `;
}

function renderSearchTextResult(item, label, href = null) {
  return `
    <article class="search-result-card">
      <span class="badge">${esc(item.label || label)}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
      ${href ? `<a class="button" href="${href}">Open related section</a>` : ""}
    </article>
  `;
}

function renderSearchResultsSection(title, count, body) {
  if (!count) return "";
  return `
    <section class="search-results-section" aria-labelledby="${esc(title.toLowerCase().replaceAll(" ", "-"))}-heading">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${count} match${count === 1 ? "" : "es"}</p>
          <h2 id="${esc(title.toLowerCase().replaceAll(" ", "-"))}-heading">${esc(title)}</h2>
        </div>
      </div>
      <div class="search-results-grid">${body}</div>
    </section>
  `;
}

function renderSearch(term) {
  const results = globalSearchResults(term);
  const total = globalSearchCount(results);
  const searched = Boolean(term.trim());
  return layout(`
    ${pageTitle("Search", "Search terms and references", "Search WCAG criteria, references, tutorials, official docs, regulations, legal case labs, glossary terms, and course material from the main navigation.")}
    ${renderSearchForm(term)}
    <div class="result-summary ${searched ? "is-filtering" : ""}" role="status" aria-live="polite">
      ${searched ? `<strong>${total} result${total === 1 ? "" : "s"} for ${esc(term)}</strong>` : "<strong>Enter a term to search all trainer content.</strong>"}
      ${searched && /^\d+(?:\.\d+)*$/.test(term.trim()) ? "<span>Number searches match criterion prefixes, so 1.2 returns 1.2.1, 1.2.2, and related references.</span>" : "<span>Try a WCAG reference, concept, law, tool, or source name.</span>"}
    </div>
    ${searched && total === 0 ? `
      <section class="empty-state panel">
        <h2>No results found.</h2>
        <p>Try a shorter term, a WCAG prefix like 1.2, or a concept such as captions, keyboard, ADA Title II, Section 508, or EAA.</p>
      </section>
    ` : ""}
    ${renderSearchResultsSection("WCAG criteria and references", results.criteria.length, results.criteria.map(renderSearchCriterion).join(""))}
    ${renderSearchResultsSection("Mini tutorials", results.tutorials.length, results.tutorials.map(renderSearchTutorial).join(""))}
    ${renderSearchResultsSection("Official documentation", results.docs.length, results.docs.map(renderSearchDoc).join(""))}
    ${renderSearchResultsSection("Regulatory training", results.regulations.length, results.regulations.map((item) => renderSearchTextResult(item, "Regulations", "#regulations")).join(""))}
    ${renderSearchResultsSection("ADA Title II Lab", results.titleII.length, results.titleII.map((item) => renderSearchTextResult(item, "ADA Title II case", "#title-ii-lab")).join(""))}
    ${renderSearchResultsSection("Standards Casebook", results.casebook.length, results.casebook.map((item) => renderSearchTextResult(item, "Case file", "#casebook")).join(""))}
    ${renderSearchResultsSection("Glossary", results.glossary.length, results.glossary.map((item) => renderSearchTextResult(item, "Glossary", "#glossary")).join(""))}
    ${renderSearchResultsSection("Course material", results.courses.length, results.courses.map((item) => renderSearchTextResult(item, "Course", "#course")).join(""))}
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

function renderAuthorityChain(chain) {
  return `
    <article class="authority-chain">
      <p class="eyebrow">${esc(chain.jurisdiction)}</p>
      <h2>${esc(chain.title)}</h2>
      <p>${esc(chain.description)}</p>
      <ol class="authority-steps">
        ${chain.steps.map(([number, type, reference, purpose]) => `
          <li class="authority-step">
            <span class="authority-step-number" aria-hidden="true">${esc(number)}</span>
            <div>
              <span class="badge">${esc(type)}</span>
              <h3>${esc(reference)}</h3>
              <p>${esc(purpose)}</p>
            </div>
          </li>
        `).join("")}
      </ol>
    </article>
  `;
}

function renderLegalDocument(doc) {
  const jurisdiction = doc.jurisdiction === "us" ? "United States" : doc.jurisdiction === "eu" ? "European Union" : "Foundational standard";
  return `
    <article class="doc-source-card">
      <div class="doc-meta">
        <span class="badge">${esc(jurisdiction)}</span>
        <span class="badge">${esc(doc.authority)}</span>
      </div>
      <h3>${esc(doc.title)}</h3>
      <dl class="doc-facts">
        <div><dt>Reference</dt><dd>${esc(doc.reference)}</dd></div>
        <div><dt>Legal status</dt><dd>${esc(doc.force)}</dd></div>
        <div><dt>Use it to answer</dt><dd>${esc(doc.question)}</dd></div>
      </dl>
      <p>${esc(doc.use)}</p>
      <a class="button" href="${doc.url}" target="_blank" rel="noopener noreferrer">Open source</a>
    </article>
  `;
}

function titleIIScore(caseFile) {
  return caseFile.dimensions.reduce((score, dimension) => score + (state.titleIILab.answers[dimension.id] === dimension.answer ? 1 : 0), 0);
}

function renderTitleIIDimension(dimension) {
  const selected = state.titleIILab.answers[dimension.id];
  const submitted = state.titleIILab.submitted;
  const correct = selected === dimension.answer;
  return `
    <fieldset class="case-dimension ${submitted ? (correct ? "is-correct" : "is-incorrect") : ""}">
      <legend><span>${esc(dimension.label)}</span>${esc(dimension.prompt)}</legend>
      <div class="case-choices">
        ${dimension.choices.map(([id, label], choiceIndex) => {
          const choiceCorrect = id === dimension.answer;
          const choiceSelected = id === selected;
          const stateClass = submitted && choiceCorrect ? "is-answer" : submitted && choiceSelected ? "is-wrong-answer" : "";
          return `
            <label class="case-choice ${stateClass}">
              <input type="radio" name="${esc(dimension.id)}" value="${esc(id)}" ${choiceSelected ? "checked" : ""} ${submitted ? "disabled" : ""} ${choiceIndex === 0 ? "required" : ""} />
              <span>${esc(label)}</span>
            </label>
          `;
        }).join("")}
      </div>
      ${submitted ? `
        <div class="case-feedback">
          <strong>${correct ? "Supported determination" : "Reopen this issue"}</strong>
          <p>${esc(dimension.explanation)}</p>
        </div>
      ` : ""}
    </fieldset>
  `;
}

function renderTitleIILab() {
  const caseFile = TITLE_II_CASES.find((item) => item.id === state.titleIILab.caseId) || TITLE_II_CASES[0];
  const score = state.titleIILab.submitted ? titleIIScore(caseFile) : 0;
  const sourceDocs = LEGAL_DOCUMENTS.filter((doc) => doc.topic === "title-ii");
  const recordLabels = { issue: "Issue", rule: "Rule", application: "Application", evidence: "Evidence", boundary: "Boundary" };
  return layout(`
    ${pageTitle("ADA Title II Lab", "Make and document difficult applicability decisions", "Four expert case files test the current DOJ web and mobile app rule: coverage, dates, exceptions, alternatives, defenses, continuing duties, and the evidence needed to support each conclusion.")}
    <section class="casebook-intro panel">
      <div>
        <p class="eyebrow">Legal-learning lab</p>
        <h2>Reason from the public entity and service to a bounded determination</h2>
        <ol>
          <li><strong>Issue:</strong> isolate the legal question raised by the facts.</li>
          <li><strong>Rule:</strong> identify the controlling statutory or regulatory text.</li>
          <li><strong>Application:</strong> connect every required element to a fact.</li>
          <li><strong>Evidence:</strong> name the record that would substantiate the conclusion.</li>
          <li><strong>Boundary:</strong> preserve unresolved facts and duties that remain.</li>
        </ol>
      </div>
      <div class="casebook-warning">
        <strong>Do not collapse the tests</strong>
        <p>An exception, conforming alternate version, equivalent-facilitation method, undue-burden determination, and minimal-impact defense each has a different rule and evidentiary burden.</p>
      </div>
    </section>
    <section class="panel" aria-labelledby="title-ii-dates-heading">
      <div class="section-heading">
        <div><p class="eyebrow">Current compliance dates</p><h2 id="title-ii-dates-heading">Apply the April 2026 interim final rule</h2></div>
        <p>Use the correct population method before selecting a date. State universities use State population; independent school districts use 2022 SAIPE data; special district governments use the later date.</p>
      </div>
      <div class="title-ii-deadline-grid">
        <article class="deadline-card"><strong>50,000 or more people</strong><time datetime="2027-04-26">April 26, 2027</time><p>Use the 2020 decennial Census where the public entity has a population.</p></article>
        <article class="deadline-card"><strong>Fewer than 50,000 people</strong><time datetime="2028-04-26">April 26, 2028</time><p>The smaller-entity date follows the applicable population evidence.</p></article>
        <article class="deadline-card"><strong>Special district governments</strong><time datetime="2028-04-26">April 26, 2028</time><p>The date applies regardless of the population the district serves.</p></article>
      </div>
      <p class="muted">Deadline summary current to the DOJ's April 2026 interim final rule. Recheck the official source before making an operational or legal decision.</p>
    </section>
    <section class="casebook-layout">
      <aside class="case-selector panel" aria-labelledby="title-ii-files-heading">
        <p class="eyebrow">Choose a file</p>
        <h2 id="title-ii-files-heading">Title II case files</h2>
        <div class="case-selector-list">
          ${TITLE_II_CASES.map((item, index) => `
            <button type="button" class="case-select-button" data-title-ii-select="${esc(item.id)}" aria-pressed="${item.id === caseFile.id}">
              <span>Case ${index + 1}</span>
              <strong>${esc(item.title)}</strong>
              <small>ADA Title II · ${esc(item.difficulty)}</small>
            </button>
          `).join("")}
        </div>
      </aside>
      <div class="case-workspace">
        <article class="case-brief panel">
          <div class="doc-meta"><span class="badge">28 CFR Part 35</span><span class="badge">${esc(caseFile.difficulty)}</span></div>
          <p class="eyebrow">Title II case file ${TITLE_II_CASES.indexOf(caseFile) + 1}</p>
          <h2 tabindex="-1">${esc(caseFile.title)}</h2>
          <p>${esc(caseFile.brief)}</p>
          <div class="plain-box"><strong>Your assignment</strong><p>${esc(caseFile.task)}</p></div>
        </article>
        <form class="case-analysis" data-title-ii-form>
          ${caseFile.dimensions.map(renderTitleIIDimension).join("")}
          ${state.titleIILab.submitted ? `
            <section class="determination-writing panel" aria-labelledby="learner-determination-heading">
              <p class="eyebrow">Your written record</p>
              <h2 id="learner-determination-heading">Your five-part determination</h2>
              <p class="learner-determination">${esc(state.titleIILab.rationale)}</p>
            </section>
          ` : `
            <div class="determination-writing panel">
              <label for="title-ii-rationale"><strong>Write your five-part determination</strong><span>Address Issue, Rule, Application, Evidence, and Boundary. Cite the relevant section and state what the facts do not establish.</span></label>
              <textarea id="title-ii-rationale" name="rationale" minlength="120" maxlength="1200" required>${esc(state.titleIILab.rationale)}</textarea>
              <p class="hint">Minimum 120 characters. Your reasoning is shown beside the model record after submission.</p>
            </div>
          `}
          <div class="actions">
            ${state.titleIILab.submitted
              ? `<button class="button primary" type="button" data-title-ii-reset>Try this case again</button>`
              : `<button class="button primary" type="submit">Submit determination</button>`}
            <a class="button" href="#docs">Open Documentation Navigator</a>
          </div>
        </form>
        ${state.titleIILab.submitted ? `
          <section class="case-score panel" id="title-ii-score" tabindex="-1" aria-labelledby="title-ii-score-heading">
            <p class="eyebrow">Determination quality</p>
            <h2 id="title-ii-score-heading">${score} of ${caseFile.dimensions.length} issues supported</h2>
            <p>${score === caseFile.dimensions.length ? "Your selected conclusions preserve the rule's distinct legal tests and evidence boundaries." : "Compare each missed issue with the controlling provision, then revise the written determination rather than memorising the answer label."}</p>
          </section>
          <section class="model-memo panel" aria-labelledby="title-ii-model-heading">
            <p class="eyebrow">Model determination record</p>
            <h2 id="title-ii-model-heading">A traceable conclusion, not a blanket label</h2>
            <dl class="determination-record">
              ${Object.entries(caseFile.record).map(([key, value]) => `<div><dt>${esc(recordLabels[key] || key)}</dt><dd>${esc(value)}</dd></div>`).join("")}
            </dl>
            <h3>Primary source trail</h3>
            <ul class="case-source-list">${sourceDocs.map((doc) => `<li><a href="${doc.url}" target="_blank" rel="noopener noreferrer">${esc(doc.reference)}</a> — ${esc(doc.question)}</li>`).join("")}</ul>
          </section>
        ` : ""}
      </div>
    </section>
  `);
}

function casebookScore(caseFile) {
  return caseFile.dimensions.reduce((score, dimension) => score + (state.casebook.answers[dimension.id] === dimension.answer ? 1 : 0), 0);
}

function renderCaseDimension(dimension) {
  const selected = state.casebook.answers[dimension.id];
  const submitted = state.casebook.submitted;
  const correct = selected === dimension.answer;
  return `
    <fieldset class="case-dimension ${submitted ? (correct ? "is-correct" : "is-incorrect") : ""}">
      <legend><span>${esc(dimension.label)}</span>${esc(dimension.prompt)}</legend>
      <div class="case-choices">
        ${dimension.choices.map(([id, label], choiceIndex) => {
          const choiceCorrect = id === dimension.answer;
          const choiceSelected = id === selected;
          const stateClass = submitted && choiceCorrect ? "is-answer" : submitted && choiceSelected ? "is-wrong-answer" : "";
          return `
            <label class="case-choice ${stateClass}">
              <input type="radio" name="${esc(dimension.id)}" value="${esc(id)}" ${choiceSelected ? "checked" : ""} ${submitted ? "disabled" : ""} ${choiceIndex === 0 ? "required" : ""} />
              <span>${esc(label)}</span>
            </label>
          `;
        }).join("")}
      </div>
      ${submitted ? `
        <div class="case-feedback">
          <strong>${correct ? "Sound conclusion" : "Reconsider this dimension"}</strong>
          <p>${esc(dimension.explanation)}</p>
        </div>
      ` : ""}
    </fieldset>
  `;
}

function renderCasebook() {
  const caseFile = CASEBOOK_CASES.find((item) => item.id === state.casebook.caseId) || CASEBOOK_CASES[0];
  const score = state.casebook.submitted ? casebookScore(caseFile) : 0;
  const sourceDocs = LEGAL_DOCUMENTS.filter((doc) => doc.jurisdiction === (caseFile.law === "Section 508" ? "us" : "eu"));
  return layout(`
    ${pageTitle("Standards Casebook", "Reason from facts to authority, evidence, and a defensible conclusion", "Four difficult case files test legal scope and documentation literacy. Each decision requires a source trail; no coding knowledge is needed.")}
    <section class="casebook-intro panel">
      <div>
        <p class="eyebrow">Case method</p>
        <h2>Four questions govern every file</h2>
        <ol>
          <li><strong>Scope:</strong> what facts trigger the law?</li>
          <li><strong>Authority:</strong> which text controls?</li>
          <li><strong>Evidence:</strong> what proves the conclusion?</li>
          <li><strong>Escalation:</strong> what cannot be decided from the current record?</li>
        </ol>
      </div>
      <div class="casebook-warning">
        <strong>Documentation rule</strong>
        <p>Name the provision before naming the test. A standard, checklist, scan, or supplier statement cannot decide legal scope by itself.</p>
      </div>
    </section>
    <section class="casebook-layout">
      <aside class="case-selector panel" aria-labelledby="case-files-heading">
        <p class="eyebrow">Choose a file</p>
        <h2 id="case-files-heading">Case files</h2>
        <div class="case-selector-list">
          ${CASEBOOK_CASES.map((item, index) => `
            <button type="button" class="case-select-button" data-case-select="${esc(item.id)}" aria-pressed="${item.id === caseFile.id}">
              <span>Case ${index + 1}</span>
              <strong>${esc(item.title)}</strong>
              <small>${esc(item.law)} · ${esc(item.difficulty)}</small>
            </button>
          `).join("")}
        </div>
      </aside>
      <div class="case-workspace">
        <article class="case-brief panel">
          <div class="doc-meta"><span class="badge">${esc(caseFile.law)}</span><span class="badge">${esc(caseFile.difficulty)}</span></div>
          <p class="eyebrow">Case file ${CASEBOOK_CASES.indexOf(caseFile) + 1}</p>
          <h2 tabindex="-1">${esc(caseFile.title)}</h2>
          <p>${esc(caseFile.brief)}</p>
          <div class="plain-box"><strong>Your assignment</strong><p>${esc(caseFile.task)}</p></div>
        </article>
        <form class="case-analysis" data-case-form>
          ${caseFile.dimensions.map(renderCaseDimension).join("")}
          <div class="actions">
            ${state.casebook.submitted
              ? `<button class="button primary" type="button" data-case-reset>Try this case again</button>`
              : `<button class="button primary" type="submit">Submit legal analysis</button>`}
            <a class="button" href="#docs">Open Documentation Navigator</a>
          </div>
        </form>
        ${state.casebook.submitted ? `
          <section class="case-score panel" id="casebook-score" tabindex="-1" aria-labelledby="case-score-heading">
            <p class="eyebrow">Decision quality</p>
            <h2 id="case-score-heading">${score} of ${caseFile.dimensions.length} dimensions supported</h2>
            <p>${score === caseFile.dimensions.length ? "Your reasoning preserves the authority chain and the limits of the evidence." : "Review the rationale, then rebuild the memo from the controlling source outward."}</p>
          </section>
          <section class="model-memo panel" aria-labelledby="model-memo-heading">
            <p class="eyebrow">Model decision memo</p>
            <h2 id="model-memo-heading">A concise, source-grounded conclusion</h2>
            <ol>${caseFile.memo.map((point) => `<li>${esc(point)}</li>`).join("")}</ol>
            <div class="casebook-warning"><strong>Boundary to preserve</strong><p>${esc(caseFile.caution)}</p></div>
            <h3>Primary source trail</h3>
            <ul class="case-source-list">${sourceDocs.map((doc) => `<li><a href="${doc.url}" target="_blank" rel="noopener noreferrer">${esc(doc.reference)}</a> — ${esc(doc.question)}</li>`).join("")}</ul>
          </section>
        ` : ""}
      </div>
    </section>
  `);
}

function renderDocs() {
  const query = state.docQuery.trim().toLowerCase();
  const filtered = LEGAL_DOCUMENTS.filter((doc) => {
    const jurisdictionMatch = state.docJurisdiction === "all" || doc.jurisdiction === state.docJurisdiction;
    const authorityMatch = state.docAuthority === "all" || doc.authority === state.docAuthority;
    const queryMatch = !query || textIncludesQuery(query, [doc.title, doc.reference, doc.force, doc.use, doc.question]);
    return jurisdictionMatch && authorityMatch && queryMatch;
  });
  return layout(`
    ${pageTitle("Documentation Navigator", "Know what each source can—and cannot—prove", "Trace ADA Title II, Section 508, and EAA questions through legislation, regulation, incorporated standards, guidance, and test evidence without collapsing their authority.")}
    <section class="authority-chain-grid" aria-label="Legal authority chains">
      ${AUTHORITY_CHAINS.map(renderAuthorityChain).join("")}
    </section>
    <section class="doc-filter-panel panel" aria-labelledby="source-navigator-heading">
      <div class="section-heading">
        <div><p class="eyebrow">Source navigator</p><h2 id="source-navigator-heading">Find the right authority for the question</h2></div>
        <p>Filter by jurisdiction and source type, then use the legal-status and decision-question fields before opening the source.</p>
      </div>
      <div class="doc-filter-grid">
        <label for="doc-search">Search sources<input id="doc-search" type="search" value="${esc(state.docQuery)}" placeholder="Try exceptions, WCAG version, evidence..." /></label>
        <label for="doc-jurisdiction">Jurisdiction<select id="doc-jurisdiction"><option value="all">All jurisdictions</option><option value="us" ${state.docJurisdiction === "us" ? "selected" : ""}>United States</option><option value="eu" ${state.docJurisdiction === "eu" ? "selected" : ""}>European Union</option><option value="foundation" ${state.docJurisdiction === "foundation" ? "selected" : ""}>Foundational standards</option></select></label>
        <label for="doc-authority">Source type<select id="doc-authority"><option value="all">All source types</option><option value="legislation" ${state.docAuthority === "legislation" ? "selected" : ""}>Legislation</option><option value="regulation" ${state.docAuthority === "regulation" ? "selected" : ""}>Regulation / requirements</option><option value="standard" ${state.docAuthority === "standard" ? "selected" : ""}>Standard / incorporation</option><option value="guidance" ${state.docAuthority === "guidance" ? "selected" : ""}>Official guidance</option><option value="testing" ${state.docAuthority === "testing" ? "selected" : ""}>Test method</option></select></label>
        <button class="button" type="button" data-clear-doc-filters>Reset filters</button>
      </div>
      <p class="result-summary" role="status" aria-live="polite"><strong>${filtered.length} source${filtered.length === 1 ? "" : "s"}</strong> match the current filters.</p>
    </section>
    ${filtered.length ? `<section class="doc-source-grid" aria-label="Filtered official sources">${filtered.map(renderLegalDocument).join("")}</section>` : `<section class="empty-state panel"><h2>No sources found</h2><p>Reset the filters or try a broader legal concept.</p></section>`}
    <section class="panel doc-reading-method">
      <p class="eyebrow">Reading method</p>
      <h2>Write a five-line source note</h2>
      <ol><li><strong>Issue:</strong> the legal question raised by the facts.</li><li><strong>Rule:</strong> the exact Article, section, or incorporated criterion.</li><li><strong>Application:</strong> the fact-to-rule reasoning.</li><li><strong>Evidence:</strong> the record that supports the conclusion.</li><li><strong>Boundary:</strong> exceptions, transitions, unresolved facts, and escalation owner.</li></ol>
      <div class="actions">
        <a class="button primary" href="#title-ii-lab">Apply it in the ADA Title II Lab</a>
        <a class="button" href="#casebook">Apply it in the Standards Casebook</a>
      </div>
    </section>
    <details class="panel further-sources"><summary>Further official technical and learning references</summary><div class="grid two">${OFFICIAL_DOCS.map((doc) => `<article class="card"><h3>${esc(doc.title)}</h3><p>${esc(doc.use)}</p><a href="${doc.url}" target="_blank" rel="noopener noreferrer">Open official documentation</a></article>`).join("")}</div></details>
  `);
}

function render(event) {
  const routeChanged = event?.type === "hashchange";
  state.route = slugFromHash();
  const hashParts = window.location.hash.replace(/^#\/?/, "").split("/");
  const id = hashParts[1];
  const requestedCount = hashParts[2];
  if (state.route === "search") {
    state.globalSearchQuery = searchTermFromHash();
  }
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
  if (state.route === "regulations") app.innerHTML = renderRegulations(id || "overview");
  if (state.route === "title-ii-lab") app.innerHTML = renderTitleIILab();
  if (state.route === "casebook") app.innerHTML = renderCasebook();
  if (state.route === "search") app.innerHTML = renderSearch(state.globalSearchQuery);
  if (hashParts[0] === "lesson") app.innerHTML = renderLesson(id);
  if (state.route === "bank") app.innerHTML = renderBank();
  if (state.route === "quiz") app.innerHTML = renderQuiz(id || "mixed", false, requestedCount);
  if (state.route === "exam") app.innerHTML = renderQuiz("mixed", true, 40);
  if (state.route === "glossary") app.innerHTML = renderGlossary();
  if (state.route === "docs") app.innerHTML = renderDocs();

  const siteHeader = document.querySelector("[data-site-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const setNavOpen = (open) => {
    if (!siteHeader || !navToggle) return;
    siteHeader.dataset.navOpen = String(open);
    navToggle.setAttribute("aria-expanded", String(open));
  };
  navToggle?.addEventListener("click", () => setNavOpen(navToggle.getAttribute("aria-expanded") !== "true"));
  siteHeader?.addEventListener("keydown", (navEvent) => {
    if (navEvent.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") {
      setNavOpen(false);
      navToggle.focus();
    }
  });
  document.querySelectorAll("#primary-navigation a").forEach((link) => link.addEventListener("click", () => setNavOpen(false)));

  document.querySelectorAll("[data-case-select]").forEach((button) => {
    button.addEventListener("click", (event) => {
      state.casebook = { caseId: event.currentTarget.dataset.caseSelect, answers: {}, submitted: false };
      render();
      document.querySelector(".case-brief h2")?.focus?.();
    });
  });
  document.querySelector("[data-case-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const caseFile = CASEBOOK_CASES.find((item) => item.id === state.casebook.caseId) || CASEBOOK_CASES[0];
    state.casebook.answers = Object.fromEntries(caseFile.dimensions.map((dimension) => [dimension.id, String(formData.get(dimension.id) || "")]));
    state.casebook.submitted = true;
    render();
    document.querySelector("#casebook-score")?.focus();
  });
  document.querySelector("[data-case-reset]")?.addEventListener("click", () => {
    state.casebook.answers = {};
    state.casebook.submitted = false;
    render();
    document.querySelector(".case-dimension input")?.focus();
  });
  document.querySelectorAll("[data-title-ii-select]").forEach((button) => {
    button.addEventListener("click", (event) => {
      state.titleIILab = { caseId: event.currentTarget.dataset.titleIiSelect, answers: {}, rationale: "", submitted: false };
      render();
      document.querySelector(".case-brief h2")?.focus?.();
    });
  });
  document.querySelector("[data-title-ii-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const caseFile = TITLE_II_CASES.find((item) => item.id === state.titleIILab.caseId) || TITLE_II_CASES[0];
    state.titleIILab.answers = Object.fromEntries(caseFile.dimensions.map((dimension) => [dimension.id, String(formData.get(dimension.id) || "")]));
    state.titleIILab.rationale = String(formData.get("rationale") || "").trim();
    state.titleIILab.submitted = true;
    render();
    document.querySelector("#title-ii-score")?.focus();
  });
  document.querySelector("[data-title-ii-reset]")?.addEventListener("click", () => {
    state.titleIILab.answers = {};
    state.titleIILab.rationale = "";
    state.titleIILab.submitted = false;
    render();
    document.querySelector(".case-dimension input")?.focus();
  });
  document.querySelector("#doc-search")?.addEventListener("input", (event) => {
    state.docQuery = event.target.value;
    render();
    const input = document.querySelector("#doc-search");
    input?.focus();
    input?.setSelectionRange(state.docQuery.length, state.docQuery.length);
  });
  document.querySelector("#doc-jurisdiction")?.addEventListener("change", (event) => {
    state.docJurisdiction = event.target.value;
    render();
  });
  document.querySelector("#doc-authority")?.addEventListener("change", (event) => {
    state.docAuthority = event.target.value;
    render();
  });
  document.querySelector("[data-clear-doc-filters]")?.addEventListener("click", () => {
    state.docQuery = "";
    state.docJurisdiction = "all";
    state.docAuthority = "all";
    announce("Documentation filters reset.");
    render();
  });

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
  document.querySelector("[data-quiz-form]")?.addEventListener("submit", (quizEvent) => {
    quizEvent.preventDefault();
    if (state.selected) return;
    const selected = String(new FormData(quizEvent.currentTarget).get("quiz-answer") || "");
    if (!selected) return;
    const question = state.quiz.questions[state.quiz.index];
    state.selected = selected;
    const correct = selected === question.answer;
    if (correct) state.quiz.score += 1;
    state.quiz.answered.push({ question, selected, correct });
    render();
    document.querySelector("#quiz-feedback")?.focus();
  });
  document.querySelector("[data-next-question]")?.addEventListener("click", () => {
    state.quiz.index += 1;
    state.selected = null;
    render();
    document.querySelector("#quiz-question-heading")?.focus();
  });
  document.querySelector("[data-restart]")?.addEventListener("click", () => {
    startQuiz(state.quiz.targetId, state.quiz.requestedCount, state.quiz.exam);
    render();
    document.querySelector("#quiz-question-heading")?.focus();
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
  document.querySelectorAll("[data-global-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const term = String(formData.get("q") || "").trim();
      state.globalSearchQuery = term;
      if (!term) {
        if (window.location.hash === "#search") render();
        else window.location.hash = "#search";
        announce("Search cleared.");
        return;
      }
      const nextHash = `#search/${encodeURIComponent(term)}`;
      if (window.location.hash === nextHash) render();
      else window.location.hash = nextHash;
      announce(`Search results for ${term}.`);
    });
  });

  const pageHeading = document.querySelector("#main h1");
  document.title = pageHeading ? `${pageHeading.textContent.trim()} | A11Y Standards Trainer` : "A11Y Standards Trainer";
  if (routeChanged) {
    window.scrollTo({ top: 0, left: 0 });
    document.querySelector("#main")?.focus();
  }
}

function validateLearningContent() {
  const errors = [];
  const activeIds = new Set(ACTIVE_SUCCESS_CRITERIA.map((criterion) => criterion.id));
  const activeNumbers = new Set(ACTIVE_SUCCESS_CRITERIA.map((criterion) => criterion.num));
  const removedCriteria = successCriteria.filter(({ level }) => !ACTIVE_WCAG_LEVELS.has(level));

  if (ACTIVE_SUCCESS_CRITERIA.length !== 86) errors.push(`Expected 86 active WCAG 2.2 criteria; found ${ACTIVE_SUCCESS_CRITERIA.length}.`);
  if (activeIds.size !== ACTIVE_SUCCESS_CRITERIA.length) errors.push("Active WCAG criterion IDs must be unique.");
  if (activeNumbers.size !== ACTIVE_SUCCESS_CRITERIA.length) errors.push("Active WCAG criterion numbers must be unique.");
  if (activeNumbers.has("4.1.1")) errors.push("Obsolete criterion 4.1.1 must not appear in active learning content.");
  if (removedCriteria.length !== 1 || removedCriteria[0]?.num !== "4.1.1") errors.push("The source data must identify only 4.1.1 as removed.");

  TUTORIAL_RECORDS.forEach((tutorial) => {
    tutorial.wcagRefs.forEach((reference) => {
      if (!activeNumbers.has(reference)) errors.push(`Tutorial ${tutorial.id} references inactive or unknown criterion ${reference}.`);
    });
  });

  const validateQuestionBank = (bankName, questions) => {
    const questionIds = new Set();
    questions.forEach((question) => {
      if (!question.id || questionIds.has(question.id)) errors.push(`${bankName} has a missing or duplicate question ID: ${question.id || "(missing)"}.`);
      questionIds.add(question.id);
      if (!question.source || !question.prompt || !question.explanation || !question.studyHref || !question.domain || !question.sourceUrl) errors.push(`${bankName} question ${question.id} is missing required source or teaching content.`);
      try {
        if (new URL(question.sourceUrl).protocol !== "https:") errors.push(`${bankName} question ${question.id} must cite an HTTPS official source.`);
      } catch {
        errors.push(`${bankName} question ${question.id} has an invalid official source URL.`);
      }
      if (!Array.isArray(question.choices) || question.choices.length !== 4) errors.push(`${bankName} question ${question.id} must have exactly four choices.`);
      const choiceIds = (question.choices || []).map((choice) => Array.isArray(choice) ? choice[0] : choice.id);
      if (new Set(choiceIds).size !== choiceIds.length) errors.push(`${bankName} question ${question.id} has duplicate choice IDs.`);
      if (!choiceIds.includes(question.answer)) errors.push(`${bankName} question ${question.id} has no choice matching answer ${question.answer}.`);
    });
  };

  validateQuestionBank("Advanced assessment", ADVANCED_QUESTION_BANK);
  if (ADVANCED_QUESTION_BANK.length < 50) errors.push(`The advanced assessment must contain at least 50 questions; found ${ADVANCED_QUESTION_BANK.length}.`);
  const assessmentDomains = new Set(ADVANCED_QUESTION_BANK.map((question) => question.domain));
  ["Section 508", "ADA Title II", "European Accessibility Act", "WCAG 2.2"].forEach((domain) => {
    if (!assessmentDomains.has(domain)) errors.push(`The advanced assessment is missing the ${domain} domain.`);
  });

  const validateCases = (bankName, cases) => {
    const caseIds = new Set();
    cases.forEach((caseRecord) => {
      if (!caseRecord.id || caseIds.has(caseRecord.id)) errors.push(`${bankName} has a missing or duplicate case ID: ${caseRecord.id || "(missing)"}.`);
      caseIds.add(caseRecord.id);
      const dimensionIds = new Set();
      caseRecord.dimensions.forEach((dimension) => {
        if (!dimension.id || dimensionIds.has(dimension.id)) errors.push(`${bankName} case ${caseRecord.id} has a missing or duplicate dimension ID: ${dimension.id || "(missing)"}.`);
        dimensionIds.add(dimension.id);
        if (!dimension.prompt || !dimension.explanation) errors.push(`${bankName} case ${caseRecord.id}, dimension ${dimension.id}, is missing teaching content.`);
        if (!Array.isArray(dimension.choices) || dimension.choices.length !== 4) errors.push(`${bankName} case ${caseRecord.id}, dimension ${dimension.id}, must have exactly four choices.`);
        const choiceIds = (dimension.choices || []).map((choice) => choice[0]);
        if (new Set(choiceIds).size !== choiceIds.length) errors.push(`${bankName} case ${caseRecord.id}, dimension ${dimension.id}, has duplicate choice IDs.`);
        if (!choiceIds.includes(dimension.answer)) errors.push(`${bankName} case ${caseRecord.id}, dimension ${dimension.id}, has no choice matching answer ${dimension.answer}.`);
      });
    });
  };

  validateCases("Section 508 casebook", CASEBOOK_CASES);
  validateCases("ADA Title II casebook", TITLE_II_CASES);

  LEGAL_DOCUMENTS.forEach((document) => {
    if (!document.title || !document.url || !document.reference || !document.use || !document.question) errors.push(`A legal-library record for ${document.title || "(untitled document)"} is incomplete.`);
    try {
      const url = new URL(document.url);
      if (url.protocol !== "https:") errors.push(`Legal-library source ${document.title} must use HTTPS.`);
    } catch {
      errors.push(`Legal-library source ${document.title} has an invalid URL.`);
    }
  });

  if (errors.length) throw new Error(`Learning content integrity check failed:\n- ${errors.join("\n- ")}`);
}

validateLearningContent();
window.addEventListener("hashchange", render);
render();

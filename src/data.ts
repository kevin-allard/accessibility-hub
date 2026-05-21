export interface ACR {
  product: string;
  url: string;
  updated: string;
  type: string;
  notes: string;
  category: 'Platforms' | 'Digital Tools' | 'Print/NIMAS';
}

export interface Program {
  id: string;
  name: string;
  description: string;
  platforms: string[];
  tools: string[];
  printNimas: string[];
  digitalBooks: string;
  category: string;
}

export const PROGRAM_DATA: Program[] = [
  {
    id: "math-series",
    name: "Middle & High School Math Solutions, 4th Edition",
    description: "Collaborative learning through MATHbook with individualized AI-powered coaching in MATHia and optional interactive MATHstream videos.",
    platforms: ["Clear Learning Center"],
    tools: ["MATHia", "MATHstream", "Clear Assessment Player"],
    printNimas: ["Student Edition", "Teacher's Implementation Guide"],
    digitalBooks: "",
    category: "ClearMath"
  },
  {
    id: "high-school-math",
    name: "California ClearMath Secondary",
    description: "California ClearMath is a math curriculum for California schools that supports middle school, high school, and Algebra 1, and Integrated Math courses",
    platforms: ["Clear Learning Center"],
    tools: ["MATHia", "MATHstream", "Clear Assessment Player", "Clear Lesson Player"],
    printNimas: ["Student Edition", "Teacher's Implementation Guide"],
    digitalBooks: "Accessible PDFs (Student & Teacher)",
    category: "ClearMath"
  },
  {
    id: "elementary-math",
    name: "California ClearMath Elementary",
    description: "A comprehensive core solution fully aligned with the California Mathematics Framework, tapping into kids' natural love for exploration, reasoning, and collaboration.",
    platforms: ["ClearMath Elementary Platform"],
    tools: ["Clear Assessment Player"],
    printNimas: ["Student Edition", "Teacher's Implementation Guide"],
    digitalBooks: "Accessible PDFs (Student & Teacher)",
    category: "ClearMath"
  },
  {
    id: "que-chevere",
    name: "¡Qué chévere!, 3rd Edition",
    description: "A 4-level Spanish language solution for grades 6-12 that immerses learners in culture, community, and communication–how Spanish is authentically experienced.",
    platforms: ["Clear Learning Center"],
    tools: ["Clear Assessment Player", "Clear Reader"],
    printNimas: ["Student Edition", "Annotated Teacher's Edition"],
    digitalBooks: "",
    category: "ClearLanguages"
  },
  {
    id: "tes-branche",
    name: "T’es branché?, 3rd Edition",
    description: "Go beyond words and immerse your students in the French language and culture with T’es branché?, our 4-level, blended French solution for grades 6-12.",
    platforms: ["Clear Learning Center"],
    tools: ["Clear Assessment Player", "Clear Reader"],
    printNimas: ["Student Edition", "Annotated Teacher's Edition"],
    digitalBooks: "",
    category: "ClearLanguages"
  },
  {
    id: "lenses-on-literature",
    name: "Lenses on Literature",
    description: "High-quality and standards-driven, Lenses is designed to engage all students in authentic and rigorous grade-level literacy experiences.",
    platforms: ["Clear Learning Center"],
    tools: ["Clear Assessment Player", "Clear Lesson Player"],
    printNimas: ["Student Edition", "Teacher's Edition"],
    digitalBooks: "",
    category: "ClearLiteracy"
  }
];

export const ACR_DATA: ACR[] = [
  {
    product: "MATHia",
    url: "#",
    updated: "Mar 2026",
    type: "Web Application",
    notes: "Third-party audited and tested with assistive technologies.",
    category: "Digital Tools"
  },
  {
    product: "MATHstream",
    url: "#",
    updated: "Mar 2026",
    type: "Web Application",
    notes: "Third-party audited and tested with assistive technologies.",
    category: "Digital Tools"
  },
  {
    product: "Clear Assessment Player (Learnosity)",
    url: "https://docs.google.com/spreadsheets/d/12x05acLJEGhORp3lkYWrVTBnYXzIpu8o/edit?gid=1215911950#gid=1215911950",
    updated: "Vendor Provided",
    type: "Web Application",
    notes: "Accessibility conformance documented by Learnosity.",
    category: "Digital Tools"
  },
  {
    product: "Clear Learning Center",
    url: "#",
    updated: "Mar 2024",
    type: "Website",
    notes: "Core platform supporting content delivery and user experience.",
    category: "Platforms"
  },
  {
    product: "ClearMath Elementary – Teachers & Administrators",
    url: "#",
    updated: "Jul 2025",
    type: "Website",
    notes: "Teacher and administrative interface.",
    category: "Platforms"
  },
  {
    product: "ClearMath Elementary – Students",
    url: "#",
    updated: "May 2025",
    type: "Website",
    notes: "Student-facing learning experience.",
    category: "Platforms"
  },
  {
    product: "Clear Reader",
    url: "#",
    updated: "Oct 2024",
    type: "Digital Reader",
    notes: "Separately audited digital reader covered by the KITABOO 6 ACR.",
    category: "Digital Tools"
  }
];

export const FAQ_DATA = [
  {
    q: "Are Carnegie Learning products WCAG 2.1 AA compliant?",
    say: "The ACR provides a detailed, criterion-level view of accessibility support. I recommend reviewing that document for the most accurate information.",
    dont: "Yes, we are compliant. / Mostly compliant. / We meet WCAG."
  },
  {
    q: "Will Carnegie Learning be compliant by April 2026?",
    say: "We are actively improving accessibility across our products. Please refer to the ACR and roadmap for the most current information.",
    dont: "Yes, we will be compliant by April 2026. / We are on track to meet that deadline."
  },
  {
    q: "Can districts still use Carnegie Learning products if they are not fully conformant?",
    say: "Districts typically review ACRs and determine how products fit within their accessibility plans, including accommodations or alternative formats where needed.",
    dont: "There is no risk. / It’s compliant anyway."
  },
  {
    q: "What about print materials and digital books?",
    say: "For applicable print programs, we provide NIMAS files that enable accessible formats such as braille, large print, and audio. Some programs also include accessible digital books delivered through the Clear Learning Center.",
    dont: "Print materials are WCAG compliant. / NIMAS makes us compliant. / All digital books are accessible across all programs."
  },
  {
    q: "Can I summarize the ACR for the customer?",
    say: "I recommend sharing the ACR directly, as it provides the most complete and accurate information.",
    dont: "It mostly supports accessibility. / There are only minor issues."
  },
  {
    q: "Why are districts asking more about accessibility now?",
    say: "Many districts are strengthening procurement and compliance review processes related to digital accessibility, which is increasing requests for ACRs and related documentation.",
    dont: "Everyone has to be fully compliant by one fixed date. / This only affects some states."
  }
];

export const PHILOSOPHY_DATA = {
  principles: [
    { title: "Evolving Portfolio", text: "Our products have been developed and modernized over time. As accessibility standards and technologies evolve, our portfolio reflects a range of support levels while we continue to remediate and enhance accessibility across systems." },
    { title: "Design for Access", text: "We aim to design products that are usable by the widest range of learners, including those using assistive technologies." },
    { title: "Standards Alignment", text: "We align to WCAG 2.1/2.2 and applicable regulations (e.g., Section 508) and document support via ACRs." },
    { title: "Transparency", text: "We communicate accessibility through ACRs and approved guidance rather than informal summaries." },
    { title: "Consistency", text: "We provide clear, repeatable guidance for customer-facing teams to ensure accurate messaging." }
  ],
  policy: [
    { title: "Document-First Communication", text: "ACRs are the authoritative source for accessibility support and must be shared in responses." },
    { title: "No Overstatement", text: "Staff must not claim compliance or timelines unless explicitly documented." },
    { title: "Third-Party Clarity", text: "Accessibility for third-party tools (e.g., Learnosity, KITABOO) is represented by vendor ACRs." },
    { title: "Program-Level Clarity", text: "Responses should reflect the full delivery model (platforms, tools, digital books, and print/NIMAS)." },
    { title: "Escalation", text: "Legal language, commitments, or interpretation requests must be routed to Accessibility leads." }
  ]
};

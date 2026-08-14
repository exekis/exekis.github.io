export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioItem = {
  title: string;
  meta: string;
  description: string;
  stack: string[];
  links: PortfolioLink[];
};

export const work: PortfolioItem[] = [
  {
    title: "Merge queue and CI security",
    meta: "Shopify / production infrastructure / 2026",
    description:
      "Work on Shopify's in-house merge queue and CI security, from runtime improvements to compiler checks that reject privileged Docker sidecar options before jobs reach shared workers.",
    stack: ["Ruby", "Kubernetes", "CI", "security"],
    links: [{ label: "shopify", href: "https://www.shopify.com/" }],
  },
  {
    title: "Programmable Patterns for OCaml",
    meta: "University of Toronto / ML 2026",
    description:
      "An OCaml compiler extension for user-defined patterns, designed to preserve data abstraction while giving library authors expressive, stable pattern-matching interfaces.",
    stack: ["OCaml", "compilers", "programming languages"],
    links: [
      {
        label: "talk",
        href: "https://drive.google.com/file/d/1zWeVdFa356c1EJiWW9UHc-lmIGInCLdc/view?usp=sharing",
      },
      { label: "ML 2026", href: "https://icfp26.sigplan.org/home/mlfamilyworkshop-2026" },
    ],
  },
  {
    title: "Compositional Generator Equivalence",
    meta: "University of Toronto / ICFP 2026",
    description:
      "A compositional account of generator equivalence for higher-order probabilistic programs, backed by a Lean formalization of quasi-Borel spaces and domain-theoretic structure.",
    stack: ["Lean 4", "probability", "semantics", "domain theory"],
    links: [
      {
        label: "paper",
        href: "https://icfp26.sigplan.org/details/icfp-2026-icfp-papers/23/Compositional-Generator-Equivalence",
      },
      { label: "proofs", href: "https://github.com/YellPika/quasi-borel-spaces" },
    ],
  },
];

export const research: PortfolioItem[] = [
  {
    title: "Formalizing Quasi-Borel Spaces in Lean 4",
    meta: "ICMS 2026 / Mathematics in Lean",
    description:
      "A machine-checked foundation for products, coproducts, exponentials, ωCPO limits, and probabilistic semantics in Lean.",
    stack: ["Lean 4", "formal methods", "measure theory"],
    links: [
      { label: "ICMS session", href: "https://icms-conference.org/2026/session5.html" },
      { label: "repository", href: "https://github.com/YellPika/quasi-borel-spaces" },
    ],
  },
  {
    title: "Formal Conjectures",
    meta: "Google DeepMind / open source",
    description:
      "Formalized open mathematical problems in Lean, including Lehmer's totient problem and Singmaster's conjecture, for a shared benchmark of research-level conjectures.",
    stack: ["Lean 4", "theorem proving", "mathematics"],
    links: [
      {
        label: "repository",
        href: "https://github.com/google-deepmind/formal-conjectures",
      },
    ],
  },
  {
    title: "INdexR",
    meta: "Vector Institute / research prototype",
    description:
      "A compiler-backed system for free-form text search over implicit neural representations, with a 0.7 ms encoder and 92% top-5 retrieval accuracy.",
    stack: ["C++", "Python", "LLVM", "PyTorch"],
    links: [],
  },
];

export const projects: PortfolioItem[] = [
  {
    title: "Bookit",
    meta: "browser extension",
    description:
      "Save an unruly browser session into dated, organised bookmark folders, then combine or archive them later.",
    stack: ["JavaScript", "Firefox", "Chrome"],
    links: [
      { label: "source", href: "https://github.com/exekis/bookit" },
      { label: "install", href: "https://addons.mozilla.org/en-CA/firefox/addon/bookit/" },
    ],
  },
  {
    title: "Once Upon a Chat",
    meta: "hackathon project",
    description:
      "Turns a WhatsApp group history into a small, shareable year-in-review without uploading the conversation to a third-party service.",
    stack: ["Next.js", "Python", "Firebase"],
    links: [
      { label: "source", href: "https://github.com/exekis/once-upon-a-chat" },
      { label: "write-up", href: "https://devpost.com/software/once-upon-a-chat" },
    ],
  },
  {
    title: "RATTM",
    meta: "hackathon project",
    description:
      "An eco-score calculator that estimates the environmental footprint of everyday spending and makes the assumptions visible.",
    stack: ["Django", "Next.js", "React"],
    links: [
      { label: "source", href: "https://github.com/exekis/rattm" },
      { label: "demo", href: "https://rattm.vercel.app/" },
    ],
  },
];

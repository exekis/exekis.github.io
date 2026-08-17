export type PortfolioLink = {
  label: string;
  href: string;
};

export type TerminalLine = {
  kind: "cmd" | "ok" | "err" | "note" | "out";
  text: string;
};

export type PortfolioTerminal = {
  slug: string;
  lines: TerminalLine[];
};

export type PortfolioItem = {
  title: string;
  meta: string;
  authors?: string;
  description: string;
  stack: string[];
  links: PortfolioLink[];
  terminal: PortfolioTerminal;
};

export const research: PortfolioItem[] = [
  {
    title: "Compositional Generator Equivalence",
    meta: "paper · ICFP 2026",
    authors: "Anthony Vandikas · Kiarash Sotoudeh · Marsha Chechik",
    description:
      "A compositional account of generator equivalence for higher-order probabilistic programs, backed by a Lean formalization of quasi-Borel spaces and domain-theoretic structure.",
    stack: ["Lean 4", "probability", "semantics", "domain theory"],
    links: [
      {
        label: "paper",
        href: "https://icfp26.sigplan.org/details/icfp-2026-icfp-papers/23/Compositional-Generator-Equivalence",
      },
      { label: "lean proofs", href: "https://github.com/YellPika/quasi-borel-spaces" },
    ],
    terminal: {
      slug: "halcheck",
      lines: [
        { kind: "cmd", text: "lake build" },
        { kind: "ok", text: "0 sorries · 0 errors" },
        { kind: "ok", text: "generator equivalence verified" },
      ],
    },
  },
  {
    title: "Formalizing Quasi-Borel Spaces in Lean 4",
    meta: "talk · ICMS 2026 · mathematics in lean",
    authors: "Anthony Vandikas · Kiarash Sotoudeh",
    description:
      "A machine-checked foundation for products, coproducts, exponentials, ωCPO limits, and probabilistic semantics in Lean.",
    stack: ["Lean 4", "formal methods", "measure theory"],
    links: [
      { label: "session", href: "https://icms-conference.org/2026/session5.html" },
      { label: "repository", href: "https://github.com/YellPika/quasi-borel-spaces" },
    ],
    terminal: {
      slug: "quasi-borel-spaces",
      lines: [
        { kind: "cmd", text: "lake build QuasiBorel" },
        { kind: "ok", text: "products · exponentials · ωCPOs" },
        { kind: "ok", text: "probability monad compiles" },
      ],
    },
  },
  {
    title: "Programmable Patterns for OCaml",
    meta: "talk · ML 2026 · co-located with ICFP 2026",
    authors: "Oghenevwogaga Ebresafe · Kiarash Sotoudeh · Ningning Xie",
    description:
      "An OCaml compiler extension for user-defined patterns, designed to preserve data abstraction while giving library authors expressive, stable pattern-matching interfaces. Funded by the Ahrefs Grant Program for OCaml.",
    stack: ["OCaml", "compilers", "programming languages"],
    links: [
      {
        label: "slides",
        href: "https://drive.google.com/file/d/1zWeVdFa356c1EJiWW9UHc-lmIGInCLdc/view?usp=sharing",
      },
      { label: "workshop", href: "https://icfp26.sigplan.org/home/mlfamilyworkshop-2026" },
      {
        label: "ahrefs grant",
        href: "https://discuss.ocaml.org/t/ahrefs-grant-program-for-ocaml/17604/5",
      },
    ],
    terminal: {
      slug: "pcaml",
      lines: [
        { kind: "cmd", text: "utop -require patterns" },
        { kind: "out", text: "# match q with x ::: _ -> x;;" },
        { kind: "out", text: "- : int = 7" },
      ],
    },
  },
  {
    title: "Formal Conjectures",
    meta: "Google DeepMind · open source",
    description:
      "Formalized open mathematical problems in Lean for DeepMind's benchmark of research-level conjectures behind AlphaProof, including Lehmer's totient problem and Singmaster's conjecture.",
    stack: ["Lean 4", "theorem proving", "mathematics"],
    links: [
      {
        label: "repository",
        href: "https://github.com/google-deepmind/formal-conjectures",
      },
    ],
    terminal: {
      slug: "formal-conjectures",
      lines: [
        { kind: "cmd", text: "lake build Lehmer Singmaster" },
        { kind: "ok", text: "statements compile" },
        { kind: "note", text: "proofs: still open problems" },
      ],
    },
  },
  {
    title: "INdexR",
    meta: "Vector Institute · research prototype",
    description:
      "A compiler-backed system for free-form text search over implicit neural representations, with a 0.7 ms encoder and 92% top-5 retrieval accuracy.",
    stack: ["C++", "Python", "LLVM", "PyTorch"],
    links: [],
    terminal: {
      slug: "indexr",
      lines: [
        { kind: "cmd", text: 'indexr query "sharp edges"' },
        { kind: "ok", text: "encoded in 0.7 ms" },
        { kind: "out", text: "1. mesh_0412   2. mesh_0077" },
      ],
    },
  },
];

export const industry: PortfolioItem[] = [
  {
    title: "Merge queue and CI security",
    meta: "Shopify · software engineering intern · summer 2026",
    description:
      "Owned Shopify's in-house merge queue on its internal Git server, from runtime improvements to compiler passes that reject privileged Docker sidecar options before jobs reach shared workers.",
    stack: ["Ruby", "Kubernetes", "CI", "security"],
    links: [{ label: "shopify", href: "https://www.shopify.com/" }],
    terminal: {
      slug: "shopify/merge-queue",
      lines: [
        { kind: "cmd", text: "ci verify --sidecar-options" },
        { kind: "err", text: "privileged sidecar rejected" },
        { kind: "ok", text: "policy holds on shared workers" },
      ],
    },
  },
  {
    title: "Scholarship finder",
    meta: "Embark Student Corp. · software engineering intern · 2026",
    description:
      "Scraped and normalized University of Toronto and Waterloo awards into typed snapshots, then built the scholarship finder around them: amount filters, sorting, pagination, and detail pages.",
    stack: ["TypeScript", "Next.js", "Playwright"],
    links: [{ label: "embark", href: "https://www.embark.ca/" }],
    terminal: {
      slug: "files/awards",
      lines: [
        { kind: "cmd", text: "embark scrape --school uoft" },
        { kind: "ok", text: "awards → typed snapshots" },
        { kind: "ok", text: "finder reindexed" },
      ],
    },
  },
  {
    title: "ESG scoring compiler",
    meta: "Cash App · software engineering apprenticeship · 2024",
    description:
      "Built the compiler behind an ESG scoring system with real-time carbon-footprint tracking, and optimized its ML inference path with XLA.",
    stack: ["Python", "C++", "XLA"],
    links: [{ label: "cash app", href: "https://cash.app/" }],
    terminal: {
      slug: "uoft/csc207/cashapp/esgc",
      lines: [
        { kind: "cmd", text: "esgc build footprint.rules" },
        { kind: "ok", text: "scoring pipeline compiled" },
        { kind: "ok", text: "xla: inference path fused" },
      ],
    },
  },
];

export const projects: PortfolioItem[] = [
  {
    title: "Recli",
    meta: "rust · terminal tooling",
    description:
      "An interactive shell wrapper that logs every command's directory, timing, output, and exit code into per-session JSON, with optional Azure Cosmos DB export and a cosmos_doctor setup check.",
    stack: ["Rust", "Unix", "Azure Cosmos DB"],
    links: [{ label: "source", href: "https://github.com/exekis/recli" }],
    terminal: {
      slug: "recli",
      lines: [
        { kind: "cmd", text: "recli" },
        { kind: "out", text: "logging to ~/.recli/logs" },
        { kind: "ok", text: "cosmos_doctor: auth ok" },
      ],
    },
  },
  {
    title: "Symon",
    meta: "rust · system monitoring",
    description:
      "A cross-platform system monitor for Arch Linux and macOS with weighted CPU accounting and multi-factor memory-pressure scoring, configured and logged as JSON while staying featherweight.",
    stack: ["Rust", "Perl", "Linux"],
    links: [{ label: "source", href: "https://github.com/exekis/symon" }],
    terminal: {
      slug: "symon",
      lines: [
        { kind: "cmd", text: "symon --log json" },
        { kind: "out", text: "cpu weighted · mem pressure low" },
        { kind: "ok", text: "snapshot appended" },
      ],
    },
  },
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
    terminal: {
      slug: "bookit",
      lines: [
        { kind: "cmd", text: "bookit save --today" },
        { kind: "ok", text: "37 tabs → 2026-08-17/" },
        { kind: "ok", text: "merged 3 old folders" },
      ],
    },
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
    terminal: {
      slug: "once-upon-a-chat",
      lines: [
        { kind: "cmd", text: "ouac wrap chat-export.txt" },
        { kind: "ok", text: "parsed locally · no uploads" },
        { kind: "ok", text: "wrapped.html ready to share" },
      ],
    },
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
    terminal: {
      slug: "rattm",
      lines: [
        { kind: "cmd", text: "rattm score groceries.csv" },
        { kind: "out", text: "eco-score: B · assumptions shown" },
        { kind: "ok", text: "breakdown saved to report/" },
      ],
    },
  },
];

import type { PortfolioTerminal, TerminalLine } from "@/content/portfolio";

const lineMarks: Record<TerminalLine["kind"], string> = {
  cmd: "$",
  ok: "✓",
  err: "✗",
  note: "?",
  out: " ",
};

export default function TerminalPane({ terminal }: { terminal: PortfolioTerminal }) {
  return (
    <figure className="term" aria-label={`Illustrative terminal session for ${terminal.slug}`}>
      <figcaption className="term-bar">
        <span className="term-name">{terminal.slug}</span>
        <span className="term-controls" aria-hidden="true">
          ─ □ ×
        </span>
      </figcaption>
      <pre className="term-body" aria-hidden="true">
        {terminal.lines.map((line, index) => (
          <span className={`term-line term-${line.kind}`} key={`${line.kind}-${index}`}>
            <span className="term-mark">{lineMarks[line.kind]}</span> {line.text}
          </span>
        ))}
        <span className="term-line term-cmd">
          <span className="term-mark">$</span> <span className="term-cursor">▌</span>
        </span>
      </pre>
    </figure>
  );
}

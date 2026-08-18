import {
  Archive,
  Award,
  CalendarDays,
  Download,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Music2,
  NotebookText,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import ExternalLink from "@/components/ExternalLink";
import StackLogo from "@/components/StackLogo";
import TerminalPane from "@/components/TerminalPane";
import {
  industry,
  projects,
  research,
  type PortfolioItem,
  type PortfolioLink,
  type PortfolioLinkKind,
} from "@/content/portfolio";

const profileLinks = [
  { label: "github", href: "https://github.com/exekis", Icon: Github },
  {
    label: "scholar",
    href: "https://scholar.google.ca/citations?user=Z83H9x8AAAAJ&hl=en",
    Icon: GraduationCap,
  },
  { label: "linkedin", href: "https://www.linkedin.com/in/kiarash-sotoudeh/", Icon: Linkedin },
  {
    label: "spotify",
    href: "https://open.spotify.com/user/efd4z12jjxli06kzkh0uk5hbs?si=f3612c92d02b40f5",
    Icon: Music2,
  },
];

const linkGlyphs: Record<PortfolioLinkKind, LucideIcon> = {
  paper: FileText,
  preprint: Archive,
  code: Github,
  slides: Presentation,
  event: CalendarDays,
  web: Globe,
  install: Download,
  writeup: NotebookText,
  grant: Award,
};

const exekisBanner = [
  "",
  "  ▄████████ ▀████    ▐████▀    ▄████████    ▄█   ▄█▄  ▄█     ▄████████ ",
  "  ███    ███   ███▌   ████▀    ███    ███   ███ ▄███▀ ███    ███    ███ ",
  "  ███    █▀     ███  ▐███      ███    █▀    ███▐██▀   ███▌   ███    █▀  ",
  " ▄███▄▄▄        ▀███▄███▀     ▄███▄▄▄      ▄█████▀    ███▌   ███        ",
  "▀▀███▀▀▀        ████▀██▄     ▀▀███▀▀▀     ▀▀█████▄    ███▌ ▀███████████ ",
  "  ███    █▄    ▐███  ▀███      ███    █▄    ███▐██▄   ███           ███ ",
  "  ███    ███  ▄███     ███▄    ███    ███   ███ ▀███▄ ███     ▄█    ███ ",
  "  ██████████ ████       ███▄   ██████████   ███   ▀█▀ █▀    ▄████████▀  ",
  "        ",
].join("\n");

function SectionHeading({
  id,
  index,
  children,
}: {
  id: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <span aria-hidden="true">{index}</span>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function TitleLink({ link, title }: { link: PortfolioLink; title: string }) {
  const Glyph = linkGlyphs[link.kind ?? "web"];
  return (
    <ExternalLink href={link.href} showMark={false}>
      {title}
      <Glyph aria-hidden="true" className="title-glyph" strokeWidth={1.7} />
    </ExternalLink>
  );
}

function ItemLink({ link }: { link: PortfolioLink }) {
  const Glyph = linkGlyphs[link.kind ?? "web"];
  return (
    <ExternalLink href={link.href} showMark={false}>
      <Glyph aria-hidden="true" className="link-glyph" strokeWidth={1.7} />
      <span>{link.label}</span>
    </ExternalLink>
  );
}

function ItemList({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <article className="item-row" key={item.title}>
          <p className="item-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div className="item-copy">
            <p className="item-meta">{item.meta}</p>
            <h3>
              {item.links[0] ? (
                <TitleLink link={item.links[0]} title={item.title} />
              ) : (
                item.title
              )}
            </h3>
            {item.authors && <p className="item-authors">{item.authors}</p>}
            <p>{item.description}</p>
            <ul className="stack-list" aria-label={`${item.title} technologies`}>
              {item.stack.map((technology) => (
                <li key={technology}>
                  <StackLogo name={technology} />
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <div className="item-side">
            <TerminalPane terminal={item.terminal} />
            {item.links.length > 0 && (
              <div className="item-links">
                {item.links.map((link) => (
                  <ItemLink key={link.href} link={link} />
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 className="visually-hidden" id="hero-title">
            Kiarash Sotoudeh, exekis
          </h1>
          <pre className="exekis-banner" aria-hidden="true">
            {exekisBanner}
          </pre>
          <p className="hero-summary">
            Hey there! I&apos;m Kiarash and I&apos;m a fourth-year undergrad at the University
            of Toronto (Computer Science Specialist, Math Major, Philosophy Minor). I am currently looking for computer science MSc positions in Canada for Fall 2027.
          </p>
          {/* <p className="hero-summary">
            Here&apos;s a small summary of my work in compilers, formal methods, and systems
            software.
          </p> */}
          <div className="profile-links" aria-label="Profile links">
            {profileLinks.map(({ href, Icon, label }) => (
              <ExternalLink href={href} key={label} showMark={false}>
                <Icon aria-hidden="true" className="profile-icon" strokeWidth={1.7} />
                <span>{label}</span>
              </ExternalLink>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="research" aria-labelledby="research-title">
        <SectionHeading id="research-title" index="01">research</SectionHeading>
        <ItemList items={research} />
      </section>

      <section className="page-section" id="industry" aria-labelledby="industry-title">
        <SectionHeading id="industry-title" index="02">industry work</SectionHeading>
        <ItemList items={industry} />
      </section>

      <section className="page-section" id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" index="03">projects</SectionHeading>
        <ItemList items={projects} />
      </section>
    </>
  );
}

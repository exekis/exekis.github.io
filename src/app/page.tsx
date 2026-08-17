import { Github, GraduationCap, Linkedin, Music2 } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";
import TerminalPane from "@/components/TerminalPane";
import { industry, projects, research, type PortfolioItem } from "@/content/portfolio";

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
            <h3>{item.title}</h3>
            {item.authors && <p className="item-authors">{item.authors}</p>}
            <p>{item.description}</p>
            <ul className="stack-list" aria-label={`${item.title} technologies`}>
              {item.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
          <div className="item-side">
            <TerminalPane terminal={item.terminal} />
            {item.links.length > 0 && (
              <div className="item-links">
                {item.links.map((link) => (
                  <ExternalLink href={link.href} key={link.href}>
                    {link.label}
                  </ExternalLink>
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
            Kiarash Sotoudeh. This is a small index of my work in compilers, formal methods, and
            systems software.
          </p>
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

      <section className="page-section about-section" id="about" aria-labelledby="about-title">
        <SectionHeading id="about-title" index="04">about</SectionHeading>
        <div className="about-copy">
          <h3>I like systems that explain themselves.</h3>
          <p>
            I&apos;m studying computer science at the University of Toronto alongside mathematics and
            philosophy. I care about tools that let people express strong ideas without giving up
            safety, whether that means a type system, a proof, a compiler pass, or a reliable CI
            pipeline.
          </p>
          <p>
            Away from the terminal, I write, play piano and guitar, and follow soccer. I use Arch,
            by the way.
          </p>
        </div>
        <pre className="about-proof" aria-label="A small type signature">
          {`build : Idea → Safe System
build idea =
  idea
  |> make_explicit
  |> test_assumptions
  |> ship`}
        </pre>
      </section>
    </>
  );
}

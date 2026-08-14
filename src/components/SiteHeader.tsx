import Link from "next/link";

const navigation = [
  { label: "work", href: "/#work" },
  { label: "research", href: "/#research" },
  { label: "writing", href: "/blog" },
  { label: "about", href: "/#about" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Kiarash Sotoudeh, home">
        <span aria-hidden="true">λ</span> kiarash
      </Link>
      <nav aria-label="Primary navigation">
        <ol className="nav-list">
          {navigation.map((item, index) => (
            <li key={item.label}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}.</span>{" "}
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <section className="error-page">
      <p className="prompt-line">kiarash@toronto:~$ resolve &quot;$PATH&quot;</p>
      <p className="error-code" aria-hidden="true">
        127
      </p>
      <h1>Command not found.</h1>
      <p>The path doesn&apos;t exist, or it moved without leaving a symlink.</p>
      <Link className="text-link" href="/">
        cd ~ <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

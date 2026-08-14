import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Undefined behaviour",
  description: "The old browser crash route, made safe.",
};

export default function SusPage() {
  return (
    <section className="error-page">
      <p className="prompt-line">kiarash@toronto:~$ ulimit -c 0</p>
      <p className="error-code" aria-hidden="true">
        SIGSEGV
      </p>
      <h1>Undefined behaviour avoided.</h1>
      <p>This route used to recurse until the browser gave up. It returns cleanly now.</p>
      <pre>{`int main(void) {
  return EXIT_SUCCESS;
}`}</pre>
      <Link className="text-link" href="/">
        cd ~ <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

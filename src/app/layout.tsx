import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exekis.github.io"),
  title: {
    default: "Kiarash Sotoudeh",
    template: "%s | Kiarash Sotoudeh",
  },
  description:
    "Software engineer and programming languages researcher working on CI systems, compilers, and formal methods.",
  authors: [{ name: "Kiarash Sotoudeh" }],
  openGraph: {
    type: "website",
    title: "Kiarash Sotoudeh",
    description:
      "Software engineer and programming languages researcher working on CI systems, compilers, and formal methods.",
    url: "/",
    siteName: "Kiarash Sotoudeh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiarash Sotoudeh",
    description:
      "Software engineer and programming languages researcher working on CI systems, compilers, and formal methods.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <a className="skip-link" href="#content">
          skip to content
        </a>
        <div className="site-shell">
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

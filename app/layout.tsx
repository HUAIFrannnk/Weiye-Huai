import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://weiyehuai.com"),
  title: { default: "Weiye Huai(Franklin)", template: "%s — Weiye Huai" },
  description: "The academic and professional portfolio of Weiye Huai (怀伟烨), who goes by Franklin in English, a senior at the University of International Business and Economics studying Business English and Finance.",
  keywords: ["Weiye Huai", "Franklin", "怀伟烨", "business", "market", "management", "international business"],
  authors: [{ name: "Weiye Huai" }],
  openGraph: {
    title: "Weiye Huai(Franklin)",
    description: "Business student focused on digital marketing, consumer behavior, and international markets.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

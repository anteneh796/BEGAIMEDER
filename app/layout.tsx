import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://begaimederacademy.com"),
  title: { default: "BEGAIMEDER ACADEMY", template: "%s | BEGAIMEDER ACADEMY" },
  description: "The official digital home of BEGAIMEDER ACADEMY — a KG through Grade 8 learning community.",
  keywords: ["BEGAIMEDER ACADEMY", "school", "KG", "Grade 8", "education", "Ethiopia"],
  alternates: { canonical: "/" },
  openGraph: { title: "BEGAIMEDER ACADEMY", description: "A thoughtful learning community for children from KG through Grade 8.", type: "website", url: "https://begaimederacademy.com", siteName: "BEGAIMEDER ACADEMY" },
  twitter: { card: "summary_large_image", title: "BEGAIMEDER ACADEMY", description: "KG through Grade 8 — learning, belonging and becoming." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{children}</div></body></html>;
}

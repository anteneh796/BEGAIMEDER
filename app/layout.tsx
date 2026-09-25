import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BEGAIMEDER ACADEMY",
    template: "%s | BEGAIMEDER ACADEMY"
  },
  description: "The official digital home of BEGAIMEDER ACADEMY — KG to Grade 8.",
  metadataBase: new URL("https://begaimederacademy.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
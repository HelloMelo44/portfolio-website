import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-website-self-nine-23.vercel.app"
  ),

  title: {
    default: "Tlamelo Mokgatlhane | Data, Applications & Software",
    template: "%s | Tlamelo Mokgatlhane",
  },

  description:
    "Portfolio of Tlamelo Mokgatlhane, a database and applications professional building practical projects in data analytics, software engineering and automation.",

  openGraph: {
    title: "Tlamelo Mokgatlhane | Data, Applications & Software",
    description:
      "Practical work across enterprise applications, data analytics, software engineering and automation.",
    url: "/",
    siteName: "Tlamelo Mokgatlhane Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tlamelo Mokgatlhane | Data, Applications & Software",
    description:
      "Practical work across enterprise applications, data analytics, software engineering and automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

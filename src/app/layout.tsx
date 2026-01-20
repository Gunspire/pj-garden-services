import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../sections/Header";
import { SITE } from "../lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE.companyName} | Gardening & Landscaping`,
  description:
    "Professional gardening and landscaping in London & the Home Counties. Lawn care, hedge trimming, garden clearance, fencing and emergency call-outs. Get a free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cat Weiss - Portfolio",
  description:
    "Data Engineer portfolio showcasing data engineering, analytics, and GenAI projects.",
  keywords: [
    "Cat Weiss",
    "data engineer",
    "portfolio",
    "machine learning",
    "data pipelines",
    "RAG",
  ],
  authors: [{ name: "Cat Weiss" }],
  openGraph: {
    title: "Cat Weiss - Portfolio",
    description: "Data Engineer portfolio with data and GenAI project case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

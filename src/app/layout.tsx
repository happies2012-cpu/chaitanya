import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Eb1 | Tech Advisors for EB-1A Green Card",
  description: "Simplifying your path to U.S. permanent residency. Expert EB-1A guidance for individuals with extraordinary abilities in science, arts, business, and education.",
  keywords: ["EB-1A Visa", "Extraordinary Ability", "US Green Card", "Horizon Eb1", "Immigration Consulting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} antialiased font-sans bg-background text-foreground bg-mesh min-h-screen`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

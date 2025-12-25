import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GuideSoft | Professional Web & Mobile Development",
  description: "Elite strategic advisory and development for modern businesses. GuideSoft bridges the gap between innovation and execution.",
  keywords: ["Software Development", "Web Development", "Mobile Apps", "GuideSoft", "AI Agents"],
};

import { PremiumBackground } from "@/components/ui/PremiumBackground";
import { ThemeProvider } from "@/components/providers/theme-provider";

import { WhatsAppWidget } from "@/components/marketing/WhatsAppWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-inter bg-background text-foreground min-h-screen relative transition-colors duration-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PremiumBackground />
          {children}
          <WhatsAppWidget />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

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
  title: "horizoneb1techadvisors | Elite EB-1A Technical Advisory",
  description: "Elite strategic advisory for EB-1A extraordinary talent. Engineering global mobility for technical pioneers. horizoneb1techadvisors bridges the gap between innovation and adjudication.",
  keywords: ["EB-1A Visa", "Extraordinary Ability", "US Green Card", "horizoneb1techadvisors", "Immigration Engineering"],
};

import { PremiumBackground } from "@/components/ui/PremiumBackground";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

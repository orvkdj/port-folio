import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Andrea Mayqa - Graphic Designer",
  description: "Portfolio of Andrea Mayqa, a passionate graphic designer specializing in social media marketing, video editing and graphic design.",
  keywords: "Andrea Mayqa, Graphic Designer, React, Next.js, Web Development, Portfolio",
  authors: [{ name: "Andrea Mayqa" }],
  openGraph: {
    title: "Andrea Mayqa - Graphic Designer",
    description: "Portfolio of Andrea Mayqa, a passionate graphic designer specializing in graphic design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UFRPE Answer Analyser",
  description: "QA scoring system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-gradient-to-b from-neutral-50 to-neutral-300 text-neutral-900 dark:from-neutral-700 dark:to-neutral-950 dark:text-neutral-100")}>
        <main className="flex flex-col h-dvh gap-8 items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import favicon from "./favicon.svg";
import { cn } from "~/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filip Kalný",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body
        className={cn(
          inter.className,
          "flex min-h-full justify-center bg-slate-50 px-4 py-6 dark:bg-slate-800 print:contents",
        )}
      >
        {children}
      </body>
    </html>
  );
}

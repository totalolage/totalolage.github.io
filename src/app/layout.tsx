import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import favicon from "./favicon.svg";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Filip Kalný",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className="contents">
        <main className="flex min-h-full justify-center bg-slate-50 px-4 py-6 dark:bg-slate-800 print:contents">
          {children}
        </main>
        <Footer className="sticky bottom-0" />
      </body>
    </html>
  );
}

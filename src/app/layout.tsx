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
    <html
      lang="en"
      className="bg-bg-light bg-gradient-to-b from-bg-light to-bg-footer-light bg-fixed dark:bg-bg-dark dark:from-bg-dark dark:to-bg-footer-dark"
    >
      <head>
        <link rel="icon" href={favicon.src} />
        <meta name="theme-color" content="var(--tw-bg-light)" />
        <meta
          name="theme-color"
          content="var(--tw-bg-dark)"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="contents">
        <main className="flex min-h-full justify-center px-4 py-6 print:contents">
          {children}
        </main>
        <Footer className="sticky bottom-0" />
      </body>
    </html>
  );
}

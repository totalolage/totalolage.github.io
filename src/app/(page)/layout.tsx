import "github-markdown-css";
import { PropsWithChildren } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <style>
        {
          /* css */ `
          /* A small hack around tailwind resetting image display option */
          .markdown-body img {
            display: initial;
          }

          /* Reduce font size in print */
          @media only print {
            .markdown-body {
              font-size: 8pt;
            }
          }
          `
        }
      </style>
      <article className="markdown-body w-[120ch] max-w-full rounded-3xl bg-white px-12 pb-20 pt-12 shadow-lg dark:bg-slate-950 print:contents">
        {children}
      </article>
    </>
  );
}

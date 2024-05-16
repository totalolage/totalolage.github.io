import "./mdx.css";
import type { MDXComponents } from "mdx/types";
import { cn } from "./utils/cn";
import { Barlow, Epilogue } from "next/font/google";

const epilogue = Epilogue({
  display: "swap",
  subsets: ["latin"],
});

const barlow = Barlow({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const headingFont = epilogue.className;
const bodyFont = barlow.className;

type StringComponent = Extract<
  keyof JSX.IntrinsicElements,
  keyof MDXComponents
>;
const withStyle = <El extends StringComponent>(Tag: El, className: string) => {
  const el = (props: JSX.IntrinsicElements[El]) => {
    const El = Tag as any;
    return <El {...props} className={cn(props.className, className)} />;
  };
  el.displayName = `mdx-${Tag}`;
  return el;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: withStyle("h1", headingFont),
    h2: withStyle("h2", headingFont),
    h3: withStyle("h3", headingFont),
    h4: withStyle("h4", headingFont),
    h5: withStyle("h5", headingFont),
    h6: withStyle("h6", headingFont),
    img: withStyle("img", "inline"),
    wrapper: ({ className, children }) => (
      <article
        className={cn(
          "markdown-body w-[120ch] max-w-full rounded-3xl px-12 pb-20 pt-12 text-lg shadow-lg print:contents print:text-sm",
          bodyFont,
          className,
        )}
      >
        {children}
      </article>
    ),
  };
}

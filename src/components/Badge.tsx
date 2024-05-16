/* eslint-disable @next/next/no-img-element */

import { ComponentType, ReactNode } from "react";
import { cn } from "~/utils/cn";

const kB = 2 ** 10;
// Inline at most 2kB
const MAX_SIZE_TO_INLINE = 2 * kB;

type Props = {
  className?: string;
  color: string;
  href?: string;
  label: string;
  logo?: string;
  logoColor?: string;
  message?: string;
  printContent?: ReactNode;
  variant?: "plastic" | "flat" | "flat-square" | "for-the-badge" | "social";
};

export default async function Badge({
  className,
  color,
  href,
  label,
  logo,
  logoColor,
  message,
  printContent,
  variant,
}: Props) {
  const badgeUrl = new URL(
    `https://img.shields.io/badge/${[label, message, color]
      .filter(Boolean)
      .map(encodeURIComponent)
      .join("-")}`,
  );

  if (variant) badgeUrl.searchParams.set("style", variant);
  if (logo) badgeUrl.searchParams.set("logo", logo);
  if (logoColor) badgeUrl.searchParams.set("logoColor", logoColor);

  const response = await fetch(badgeUrl.toString());
  const img = await response.blob();

  let BadgeEl: ComponentType<{ className?: string }>;
  if (img.size < MAX_SIZE_TO_INLINE) {
    const asBuffer = new Uint8Array(await img.arrayBuffer());
    const base64 = Buffer.from(asBuffer).toString("base64");
    BadgeEl = function BadgeEl({ className }) {
      return (
        <img
          alt={label}
          src={`data:${img.type};base64,${base64}`}
          className={className}
        />
      );
    };
  } else {
    BadgeEl = function BadgeEl({ className }) {
      return (
        <img alt={label} className={className} src={badgeUrl.toString()} />
      );
    };
  }

  const BadgeElLinkable: typeof BadgeEl = function BadgeElWithLink() {
    const badgeClass = cn("print:hidden", className);
    if (!href) return <BadgeEl className={badgeClass} />;
    return (
      <a href={href} className={badgeClass}>
        <BadgeEl />
      </a>
    );
  };

  const TextEl = function TextEl() {
    return (
      <span className={cn("screen:sr-only", className)}>
        {printContent ?? label}
      </span>
    );
  };

  return (
    <>
      <BadgeElLinkable className={cn("print:hidden", className)} />
      <TextEl />
    </>
  );
}

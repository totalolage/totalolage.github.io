/* eslint-disable @next/next/no-img-element */

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

  let out;
  if (img.size < MAX_SIZE_TO_INLINE) {
    const asBuffer = new Uint8Array(await img.arrayBuffer());
    const base64 = Buffer.from(asBuffer).toString("base64");
    out = (
      <img
        alt={label}
        src={`data:${img.type};base64,${base64}`}
        className={className}
      />
    );
  } else {
    out = <img alt={label} className={className} src={badgeUrl.toString()} />;
  }
  if (href) return <a href={href}>{out}</a>;
  return out;
}

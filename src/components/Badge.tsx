import { ComponentType, Fragment, PropsWithChildren } from "react";
import imageLinkToDataUri from "~/utils/imageLinkToDataUri";

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

  const imageDataUri = await imageLinkToDataUri(badgeUrl);

  const Wrapper: ComponentType<PropsWithChildren> = href
    ? ({ children }) => <a href={href}>{children}</a>
    : ({ children }) => <Fragment>{children}</Fragment>;

  return (
    <Wrapper>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={className} src={imageDataUri} alt={label} />
    </Wrapper>
  );
}

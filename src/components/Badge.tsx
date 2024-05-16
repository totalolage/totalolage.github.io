import { ComponentType, Fragment, PropsWithChildren } from "react";
import imageLinkToDataUri from "~/utils/imageLinkToDataUri";

type Props = {
  style: "plastic" | "flat" | "flat-square" | "for-the-badge" | "social";
  label: string;
  message?: string;
  color: string;
  logo?: string;
  logoColor?: string;
  href?: string;
};

export default async function Badge({
  style,
  label,
  color,
  message,
  logo,
  logoColor,
  href,
}: Props) {
  const badgeUrl = new URL(
    `https://img.shields.io/badge/${[label, message, color]
      .filter(Boolean)
      .map(encodeURIComponent)
      .join("-")}`,
  );

  badgeUrl.searchParams.set("style", style);
  if (logo) badgeUrl.searchParams.set("logo", logo);
  if (logoColor) badgeUrl.searchParams.set("logoColor", logoColor);

  const imageDataUri = await imageLinkToDataUri(badgeUrl);

  const Wrapper: ComponentType<PropsWithChildren> = href
    ? ({ children }) => <a href={href}>{children}</a>
    : ({ children }) => <Fragment>{children}</Fragment>;

  return (
    <Wrapper>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageDataUri} alt={label} />
      <pre>{badgeUrl.toString()}</pre>
    </Wrapper>
  );
}

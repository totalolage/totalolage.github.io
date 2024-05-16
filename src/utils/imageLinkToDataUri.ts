export default async function imageLinkToDataUri(
  url: string | URL,
): Promise<string> {
  const response = await fetch(url.toString());
  const blob = await response.blob();
  const mime = blob.type;
  const buffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const image = Buffer.from(bytes).toString("base64");

  return `data:${mime};base64,${image}`;
}

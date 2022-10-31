export function host(
  hashes: TemplateStringsArray,
  ...values: string[]
): string {
  const HOST_URL = process.env.HOST_URL ?? "";
  if (!values?.[0]) return HOST_URL + hashes[0];
  return (
    HOST_URL +
    values
      .map((value, index) => hashes[index] + value)
      .concat(hashes.slice(values.length))
      .join("")
  );
}

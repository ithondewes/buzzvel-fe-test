const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public file for the Pages build. Unset locally, so dev stays at /. */
export function publicPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export function toDocSlug(path: string): string {
  return path
    .trim()
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/_/g, '-');
}

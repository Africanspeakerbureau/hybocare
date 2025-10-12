export function docLink(slug: string, title: string, googleUrl: string) {
  return `/docs/${slug}?u=${encodeURIComponent(googleUrl)}&title=${encodeURIComponent(title)}`;
}

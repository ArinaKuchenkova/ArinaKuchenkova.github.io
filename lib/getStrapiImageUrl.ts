import { NEXT_PUBLIC_IMAGES_PREFIX, NEXT_PUBLIC_STRAPI_URL } from "./env"

function extractSubdomainPath(url: string): string | null {
  const regex = /^https?:\/\/([a-z0-9-]+)\./i;
  const match = url.match(regex);

  if (!match) {
    return null;
  }

  const subdomain = match[1];
  return subdomain;
}

const strapiProject = extractSubdomainPath(NEXT_PUBLIC_STRAPI_URL);
const strapiMediaUrl = `https://${strapiProject}.media.strapiapp.com`;

export const getStrapiImageUrl = (url?: string) => {
  if (!url) {
    return ''
  }
  if (url?.startsWith('/')) {
    return `${NEXT_PUBLIC_IMAGES_PREFIX}${url}`
  }
  if (url?.startsWith(strapiMediaUrl)) {
    return url.replace(strapiMediaUrl, '/uploads');
  }
  return url
}
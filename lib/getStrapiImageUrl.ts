import { NEXT_PUBLIC_IMAGES_PREFIX, NEXT_PUBLIC_STRAPI_URL } from "./env"

export const getStrapiImageUrl = (url?: string) => {
  if (!url) {
    return ''
  }
  if (url?.startsWith('/')) {
    return `${NEXT_PUBLIC_IMAGES_PREFIX}${url}`
  }
  if (url?.startsWith(NEXT_PUBLIC_STRAPI_URL)) {
    return url.replace(NEXT_PUBLIC_STRAPI_URL, '/');
  }
  return url
}
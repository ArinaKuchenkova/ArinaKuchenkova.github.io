import { GraphQLClient, } from "graphql-request";
import { getSdk } from '@/graphql/generated';
import { NEXT_PUBLIC_STRAPI_URL } from "@/lib/env";

const apiClient = new GraphQLClient(`${NEXT_PUBLIC_STRAPI_URL}/graphql`, {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
  }
})

const sdk = getSdk(apiClient);

export const loadPortfolio = async () => {
  const data = await sdk.ProjectsByCategories(undefined, {
    cache: 'no-store'
  });

  return data.projectCategories;
}


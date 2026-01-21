import { gql } from "graphql-request"

export const imageFieldsFragment = gql`
fragment ImageFields on UploadFile {
  width
  height
  caption
  name
  url
}
`

export const projectsByCategoriesQuery = gql`
query ProjectsByCategories {
  projectCategories(sort: "sortOrder:asc") {
    title
    slug
    projects(pagination: { pageSize: 100 }) {
      sortOrder
      title
      slug
      links {
        id
        label
        url
      }
      content {
        ... on ComponentProjectTextBlock {
          id
          title
          content
        }
        ... on ComponentProjectGallery {
          id
          images(pagination: { pageSize: 100 }) {
            ...ImageFields
          }
          layout
        }
        __typename
      }
      projectCategories {
        documentId
        title
        slug
        createdAt
        updatedAt
        publishedAt
      }
      previewImages {
        ...ImageFields
      }
      sortOrder
    }
  }
}
${imageFieldsFragment}
`
import gql from "graphql-tag";

export const GET_SERVICE_PROVIDER = gql`
  query getServiceProvider($id: ID!) {
    serviceProvider(id: $id) {
      id
      name
      image
      email
      products {
        slug
      }
      type
    }
  }
`;

export const GET_SERVICE_PROVIDERS = gql`
  query getServiceProviders(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    serviceProviders(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        email
        name
      }
      hasMore
    }
  }
`;

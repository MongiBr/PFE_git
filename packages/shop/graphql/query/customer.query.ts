import gql from "graphql-tag";

export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser($id: String = "1") {
    me(id: $id) {
      id
      name
      email
      addresses {
        id
        type
        name
        info
      }
      contacts {
        id
        type
        number
      }
      card {
        id
        type
        cardType
        name
        lastFourDigit
      }
    }
  }
`;

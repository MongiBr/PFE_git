import gql from "graphql-tag";

export const UPDATE_CONTACT = gql`
  mutation($contactInput: String!) {
    updateContact(contactInput: $contactInput) {
      id
      name
      contacts {
        id
        type
        number
      }
    }
  }
`;
export const DELETE_CONTACT = gql`
  mutation($contactId: String!) {
    deleteContact(contactId: $contactId) {
      id
      name
      contacts {
        id
        type
        number
      }
    }
  }
`;

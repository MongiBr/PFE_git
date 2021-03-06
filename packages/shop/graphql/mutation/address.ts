import gql from "graphql-tag";

export const UPDATE_ADDRESS = gql`
  mutation($addressInput: String!) {
    updateAddress(addressInput: $addressInput) {
      id
      name
      addresses {
        id
        name
        info
      }
    }
  }
`;
export const DELETE_ADDRESS = gql`
  mutation($addressId: String!) {
    deleteAddress(addressId: $addressId) {
      id
      name
      addresses {
        id
        name
        info
      }
    }
  }
`;

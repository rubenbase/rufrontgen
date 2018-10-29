import gql from "graphql-tag";

export default gql`
  query {
    isUpdatingContent @client
  }
`;

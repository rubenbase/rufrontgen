import gql from "graphql-tag";

export default gql`
  query {
    currentLanguage @client {
      currentLanguage
    }
  }
`;

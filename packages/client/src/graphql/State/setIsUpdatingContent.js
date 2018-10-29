import gql from "graphql-tag";

export default gql`
  mutation setIsUpdatingContent($index: String!, $value: boolean!) {
    setCurrentLanguage(index: $index, value: $value) @client {
      currentLanguage
    }
  }
`;

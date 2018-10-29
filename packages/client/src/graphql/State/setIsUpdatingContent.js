import gql from "graphql-tag";

export default gql`
  mutation setIsUpdatingContent($index: String!, $value: boolean!) {
    setIsUpdatingContent(index: $index, value: $value) @client {
      currentLanguage
    }
  }
`;

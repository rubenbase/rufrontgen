import gql from "graphql-tag";

export const stateResolvers = {
  setCurrentLanguage: (_, { index, value }, { cache }) => {
    const query = gql`
      query GetCurrentLanguage {
        currentLanguage @client {
          __typename
          currentLanguage
        }
      }
    `;

    const previousState = cache.readQuery({ query });

    const data = {
      ...previousState,
      currentLanguage: {
        ...previousState.currentLanguage,
        [index]: value
      }
    };

    cache.writeData({ query, data });
    console.log(data);
  },
  setIsUpdatingContent: (_, { index, value }, { cache }) => {
    cache.writeData({ data: { isUpdatingContent: value } });
    console.log(value);
  },
  isLoading: (_, { index, value }, { cache }) => {
    cache.writeData({ data: { isLoading: value } });
    console.log(value);
  }
};

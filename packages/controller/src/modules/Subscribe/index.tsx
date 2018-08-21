// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
// import { graphql } from "react-apollo";

export const subscribeToListMutation = gql`
  mutation SubscribeToListMutation(
    $email: String!
    $name: String!
    $lastname: String!
  ) {
    createListing(input: { email: $email, name: $name, lastname: $lastname })
  }
`;

// export interface WithCreateListingProps {
//   createListing: (variables: CreateListingMutationVariables) => void;
// }

// export const withCreateListing = graphql<
//   any,
//   CreateListingMutation,
//   CreateListingMutationVariables,
//   WithCreateListingProps
// >(createListingMutation, {
//   props: ({ mutate }) => ({
//     createListing: async variables => {
//       if (!mutate) {
//         return;
//       }

//       const response = await mutate({
//         variables
//       });
//       console.log(response);
//     }
//   })
// });

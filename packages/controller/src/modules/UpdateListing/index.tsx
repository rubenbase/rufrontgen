// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  UpdateListingMutation,
  UpdateListingMutationVariables
} from "../../schemaTypes";

export const updateListingMutation = gql`
  mutation UpdateListingMutation(
    $listingId: String!
    $input: UpdateListingInput!
  ) {
    updateListing(listingId: $listingId, input: $input)
  }
`;

export interface WithUpdateListing {
  updateListing: MutationFn<
    UpdateListingMutation,
    UpdateListingMutationVariables
  >;
}

export class UpdateListing extends React.PureComponent<{
  children: (data: WithUpdateListing) => JSX.Element | null;
}> {
  render() {
    const { children } = this.props;
    return (
      <Mutation mutation={updateListingMutation}>
        {mutate => {
          return children({
            updateListing: mutate
          });
        }}
      </Mutation>
    );
  }
}

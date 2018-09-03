// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ViewListingQuery_viewListing } from "../../schemaTypes";

export const viewListingQuery = gql`
  query ViewListingQuery($id: String!) {
    viewListing(id: $id) {
      id
      name
      category
      pictureUrl
      owner {
        id
        email
      }
    }
  }
`;

export interface WithViewListing {
  listing: ViewListingQuery_viewListing | null;
  loading: boolean;
}

export class ViewListing extends React.PureComponent<{
  listingId: string;
  children: (data: WithViewListing) => JSX.Element | null;
}> {
  render() {
    const { children, listingId } = this.props;
    return (
      <Query query={viewListingQuery} variables={{ id: listingId }}>
        {({ data, loading }) => {
          let listing: ViewListingQuery_viewListing | null = null;

          if (data && data.viewListing) {
            listing = data.viewListing;
          }

          return children({
            listing,
            loading
          });
        }}
      </Query>
    );
  }
}

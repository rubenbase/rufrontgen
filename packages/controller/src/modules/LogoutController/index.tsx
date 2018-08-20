import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";

const logoutMutation = gql`
  mutation LogoutMutation {
    logout
  }
`;

export interface Props {
  children: (
    data: {
      logout: () => void;
    }
  ) => JSX.Element | null;
}

// React.SFC = React functional component
export const LogoutController: React.SFC<Props> = ({ children }) => (
  <Mutation mutation={logoutMutation}>
    {(mutate, { client }) =>
      children({
        logout: async () => {
          await mutate();
          await client.resetStore();
        }
      })
    }
  </Mutation>
);

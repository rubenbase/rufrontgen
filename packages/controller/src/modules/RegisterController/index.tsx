import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  RegisterMutation,
  RegisterMutationVariables
} from "./__generated__/RegisterMutation";
export interface IProps {
  children: (
    data: { submit: (values: RegisterMutationVariables) => Promise<null> }
  ) => JSX.Element | null;
}
class C extends React.PureComponent<
  ChildMutateProps<IProps, RegisterMutation, RegisterMutationVariables>
> {
  submit = async (values: RegisterMutationVariables) => {
    const response = await this.props.mutate({
      variables: {
        email: values.email,
        password: values.password,
        name: values.name,
        lastname: values.lastname
      }
    });
    console.log("RESPONSE ", response);
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const registerMutation = gql`
  mutation RegisterMutation(
    $email: String!
    $password: String!
    $name: String!
    $lastname: String!
  ) {
    register(
      email: $email
      password: $password
      name: $name
      lastname: $lastname
    ) {
      path
      message
    }
  }
`;

export const RegisterController = graphql<
  IProps,
  RegisterMutation,
  RegisterMutationVariables
>(registerMutation)(C);

// export const RegisterController = graphql<
// IProps,
// RegisterMutation,
// REgisterMutationVariables>(registerMutation)(C);

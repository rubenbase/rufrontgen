import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

interface IProps {
  children: (
    data: { submit: (values: any) => Promise<null> }
  ) => JSX.Element | null;
  defaulted: number;
}
class C extends React.PureComponent<IProps> {
  public static defaultProps = {
    defaulted: 0
  };
  submit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const RegisterMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

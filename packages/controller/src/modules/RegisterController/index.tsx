import * as React from "react";

interface IProps {
  children: (
    data: { submit: (values: any) => Promise<null> }
  ) => JSX.Element | null;
  defaulted: number;
}
class RegisterController extends React.PureComponent<IProps> {
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

module.exports = RegisterController;

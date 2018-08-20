import * as React from "react";

export default class CallLogout extends React.PureComponent {
  async componentDidMount() {
    await this.props.logout();
    this.props.onFinish();
  }

  render() {
    return null;
  }
}

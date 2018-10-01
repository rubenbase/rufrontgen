import * as React from "react";
import { withViewMenu } from "@rufrontgen/controller";

class C extends React.PureComponent {
  render() {
    const { children, loading, menu } = this.props;
    return children({ loading, menu });
  }
}

export const ViewWrapper = withViewMenu(C);

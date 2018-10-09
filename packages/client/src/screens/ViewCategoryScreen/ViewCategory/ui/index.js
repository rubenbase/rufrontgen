import * as React from "react";
import { withViewCategory, WithViewCategory } from "@rufrontgen/controller";

class C extends React.PureComponent {
  render() {
    const { children, loading, category } = this.props;
    return children({ loading, category });
  }
}

export const ViewWrapper = withViewCategory(C);

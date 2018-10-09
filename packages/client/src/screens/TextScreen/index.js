import React from "react";
// import Page from "containers/LayoutContainers/Page";
import Helmet from "react-helmet";
import Text from "./Text";

class TextScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      //   <Page {...props}>
      <div>
        <Helmet title="Text" />
        <Text {...this.props} />
      </div>
      //   </Page>
    );
  }
}

export default TextScreen;

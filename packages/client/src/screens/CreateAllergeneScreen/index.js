import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CreateAllergene from "./CreateAllergene";

class CreateAllergeneScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Create Allergene" />
        <CreateAllergene {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default CreateAllergeneScreen;

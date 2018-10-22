import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import EditAllergene from "./EditAllergene";

class EditAllergeneScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Edit Allergene" />
        <EditAllergene {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default EditAllergeneScreen;

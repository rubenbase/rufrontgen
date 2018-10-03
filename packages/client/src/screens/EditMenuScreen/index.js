import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import EditMenu from "./EditMenu";

class EditMenuScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Edit Menu" />
        <EditMenu {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default EditMenuScreen;

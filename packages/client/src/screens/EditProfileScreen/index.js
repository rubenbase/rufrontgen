import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import EditProfile from "./EditProfile";

class EditProfileScreen extends React.Component {
  static defaultProps = {
    pathName: "EditProfile",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      //   <Page {...props}>
      <div>
        <Helmet title="EdiProfile" />
        <EditProfile {...props} />
      </div>
      //   </Page>
    );
  }
}

export default EditProfileScreen;

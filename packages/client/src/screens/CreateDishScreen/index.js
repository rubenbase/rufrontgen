import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CreateMenu from "./CreateMenu";

class CreateDishScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Create Menu" />
        <CreateDish {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default CreateDishScreen;

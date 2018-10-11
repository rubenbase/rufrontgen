import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import EditDish from "./EditDish";

class EditDishScreen extends React.Component {
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
        <EditDish {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default EditDishScreen;

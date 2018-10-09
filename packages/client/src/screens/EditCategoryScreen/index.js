import React from "react";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import EditCategory from "./EditCategory";

class EditCategoryScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      <div>
        <Helmet title="Edit Categories" />
        <EditCategory {...this.props} />
      </div>
    );
  }
}

export default EditCategoryScreen;

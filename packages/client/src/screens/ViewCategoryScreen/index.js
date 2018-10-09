import React from "react";
import Helmet from "react-helmet";
import ViewCategoryConnector from "./ViewCategory/index";

// import Page from "components/LayoutComponents/Page";
// import FindCategories from "./FindCategories";

class ViewCategoryScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      <div>
        <Helmet tittle="Categories view" />
        <ViewCategoryConnector {...props} />
      </div>
    );
  }
}

export default ViewCategoryScreen;

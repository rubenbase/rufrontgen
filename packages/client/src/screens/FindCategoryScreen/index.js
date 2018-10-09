import React from "react";
import Helmet from "react-helmet";
import FindCategories from "./FindCategories";

class FindCategoriesScreen extends React.Component {
  static defaultsProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      <div>
        <Helmet title="Find categories" />
        <FindCategories {...this.props} />
      </div>
    );
  }
}

export default FindCategoriesScreen;

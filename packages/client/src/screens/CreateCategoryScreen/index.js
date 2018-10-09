import React from "react";
import Helmet from "react-helmet";
import CreateCategory from "./CreateCategory";

class CreateCategoryScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    role: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      <div>
        <Helmet title="Create Category" />
        <CreateCategory {...this.props} />
      </div>
    );
  }
}

export default CreateCategoryScreen;

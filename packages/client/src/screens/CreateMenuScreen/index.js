import React from "../../../../../node_modules/@types/react/index";
// import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CreateMenu from "./CreateMenu";

class CreateMenuScreen extends React.Component {
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
        <CreateMenu {...this.props} />
      </div>
      // </Page>
    );
  }
}

export default CreateMenuScreen;

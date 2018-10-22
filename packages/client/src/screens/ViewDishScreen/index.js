import React from "react";
import Helmet from "react-helmet";
import ViewDishConnector from "./ViewDish/index";
// import Page from "components/LayoutComponents/Page";
// import FindListings from "./FindListings";

class ViewDishScreen extends React.Component {
  static defaultProps = {
    pathName: "Lockscreen",
    roles: ["agent", "administrator"]
  };

  render() {
    const props = this.props;
    return (
      // <Page {...props}>
      <div>
        <Helmet title="Dish detail" />
        <ViewDishConnector {...props} />
      </div>
      // </Page>
    );
  }
}

export default ViewDishScreen;

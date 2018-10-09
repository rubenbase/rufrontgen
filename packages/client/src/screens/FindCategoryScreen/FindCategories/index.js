import React from "react";
import { Button } from "antd";
import AuthHeader from "modules/LayoutComponents/AuthHeader/index";
import { FindCategoriesConnector } from "./FindCategoriesForm/findCategoriesConnector";
import ViewCategoryScreen from "../../ViewCategoryScreen/index";

class FindCategories extends React.Component {
  render() {
    return (
      <div className="login__block mb-5">
        <div className="row">
          <div className="col-xl-12">
            <div className="login__block__inner">
              <div className="login__block__form">
                <FindCategoriesConnector />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindCategories;

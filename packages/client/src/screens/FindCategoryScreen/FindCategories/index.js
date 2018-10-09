import React from "react";
import { FindCategoriesConnector } from "./FindCategoriesForm/findCategoriesConnector";

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

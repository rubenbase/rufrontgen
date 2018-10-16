import React from "react";
import { Button } from "antd";
import MainMenu from "containers/LayoutContainers/MainMenu";
import { EditCategoryConnector } from "./EditCategoryForm/editCategoryConnector";

class EditCategory extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <MainMenu />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <EditCategoryConnector {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Heredan props en el Edit pero NO en el Create. Por que??
export default EditCategory;

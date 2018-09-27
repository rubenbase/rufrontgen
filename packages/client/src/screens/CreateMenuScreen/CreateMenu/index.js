import React from "react";
import { Button } from "antd";
import MainMenu from "../../../modules/LayoutComponents/MainMenu/index";
import { CreateMenuConnector } from "./CreateMenuForm/createMenuConnector";
class CreateMenu extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <MainMenu />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <CreateMenuConnector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMenu;

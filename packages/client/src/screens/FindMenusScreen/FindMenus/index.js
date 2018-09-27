import React from "react";
import { Button } from "antd";
import AuthHeader from "../../../modules/LayoutComponents/AuthHeader/index";
import { FindMenusConnector } from "./FindMenusForm/findMenusConnector";
import MainMenu from "../../../modules/LayoutComponents/MainMenu/index";
class FindMenus extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <MainMenu />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <FindMenusConnector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindMenus;

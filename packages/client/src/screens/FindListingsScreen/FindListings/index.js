import React from "react";
import { Button } from "antd";
import AuthHeader from "containers/LayoutContainers/AuthHeader/index";
import { FindListingsConnector } from "./FindListingsForm/findListingsConnector";
import MainMenu from "containers/LayoutContainers/MainMenu/index";
class FindListings extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <MainMenu />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <FindListingsConnector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindListings;

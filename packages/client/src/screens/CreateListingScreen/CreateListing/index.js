import React from "react";
import { Button } from "antd";
import MainMenu from "modules/LayoutComponents/MainMenu/index";
import { CreateListingConnector } from "./CreateListingForm/createListingConnector";
class CreateListing extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <MainMenu />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <CreateListingConnector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateListing;

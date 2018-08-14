import React from "react";
import { Button } from "antd";
import AuthHeader from "modules/LayoutComponents/AuthHeader/index";
import { CreateListingConnector } from "./CreateListingForm/createListingConnector";
class CreateListing extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <AuthHeader />
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

import React from "react";
import { Button } from "antd";
import AuthHeader from "modules/LayoutComponents/AuthHeader/index";

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
                  <h3>Secret info is here</h3>
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

import React from "react";
import { Button } from "antd";
import ForgotPasswordConnector from "./ForgotPasswordForm/forgotPasswordConnector";
import AuthHeader from "containers/LayoutComponents/AuthHeader/index";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <AuthHeader />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <ForgotPasswordConnector {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;

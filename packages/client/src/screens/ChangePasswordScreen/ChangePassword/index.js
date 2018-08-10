import React from "react";
import { Button } from "antd";
import ChangePasswordConnector from "./ChangePasswordForm/changePasswordConnector";
import "./style.scss";

class ChangePassword extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <div className="login__header">
          <div className="row">
            <div className="col-lg-8">
              <div className="login__header__logo">
                <a href="javascript: void(0);">
                  <img src="resources/images/logo.svg" alt="RufrontGen logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <ChangePasswordConnector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;

import React from "react";
import { Button } from "antd";
import RegisterConnector from "./RegisterForm/registerConnector";
import "./style.scss";

class Register extends React.Component {
  render() {
    return (
      <div className={"login login--fullscreen"}>
        <div className="login__header">
          <div className="row">
            <div className="col-lg-8">
              <div className="login__header__logo">
                <a href="*">
                  <img
                    src="{require('../../../../public/logo.svg')}"
                    alt="Insert logo here"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login__block">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__promo text-white text-center">
                <h1 className="mb-3 text-white">
                  <strong>
                    Enim eu qui veniam officia enim duis officia culpa tempor et
                    dolor.
                  </strong>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="login__block__inner">
                <div className="login__block__form">
                  <h4 className="text-uppercase">
                    <strong>Please Register</strong>
                  </h4>
                  <br />
                  <RegisterConnector />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login__footer text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="javascript: void(0);">Terms of Use</a>
            </li>
            <li className="active list-inline-item">
              <a href="javascript: void(0);">Compliance</a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);">Confidential Information</a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);">Support</a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Register;
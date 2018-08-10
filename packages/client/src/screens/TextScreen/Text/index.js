import React from "react";
import { Button } from "antd";
import "./style.scss";

class Text extends React.Component {
  render() {
    const {
      location: { state }
    } = this.props;

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
                  <h3>{state && state.message ? state.message : "Go back."}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Text;

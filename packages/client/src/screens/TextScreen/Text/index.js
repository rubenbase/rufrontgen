import React from "react";
import { Button } from "antd";
import AuthHeader from "containers/LayoutContainers/AuthHeader/index";

class Text extends React.Component {
  render() {
    const {
      location: { state }
    } = this.props;

    return (
      <div className="login login--fullscreen">
        <AuthHeader />
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

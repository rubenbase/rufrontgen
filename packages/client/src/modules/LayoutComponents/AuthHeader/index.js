import React from "react";

class AuthHeader extends React.PureComponent {
  render() {
    return (
      <div className="login__header">
        <div className="row">
          <div className="col-lg-12">
            <div className="login__header__logo">
              <a href="/">
                <img src="resources/images/logo.svg" alt="RufrontGen logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthHeader;

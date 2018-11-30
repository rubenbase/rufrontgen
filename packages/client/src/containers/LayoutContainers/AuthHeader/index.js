import React from "react";
import "./style.scss";

/**
 * Class that returns a bar with the logo Yoowriter, which get the user to the root
 * page after clicking the icon.
 */
class AuthHeader extends React.PureComponent {
  render() {
    return (
      <div className="auth_header">
        <div className="row">
          <div className="col-lg-12">
            <div className="login__header__logo">
              <a href="/">
                <img
                  src="resources/images/logo-white.svg"
                  alt="Yoowriter logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthHeader;

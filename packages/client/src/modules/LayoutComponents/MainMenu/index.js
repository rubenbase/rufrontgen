import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
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
            <Link to="logout">logout</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthHeader;

import * as React from "react";
import "./style.scss";

class Logo extends React.Component {
  render() {
    return (
      <img
        className="logo"
        src="resources/images/logo-white.svg"
        alt="Logo"
        title="logo"
      />
    );
  }
}

export { Logo };

import React from "react";
import "./style.scss";
import { Logo } from "../../home/ui/Logo/index";
import { Link } from "react-router-dom";
import { Icon } from "antd";

class MainMenu extends React.PureComponent {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand navbar-logo">
          <Logo />
        </a>
        <Link to="logout">
          Cerrar sesión <Icon type="logout" />
        </Link>
      </nav>
    );
  }
}

export default MainMenu;

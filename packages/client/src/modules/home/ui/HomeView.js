import * as React from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

export class HomeView extends React.PureComponent {
  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="mail">
          <Icon type="mail" />Contacto
        </Menu.Item>
        <Menu.Item key="user">
          <Icon type="user" />Iniciar sesión
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="user" />Iniciar sesión
            </span>
          }
        >
          <Menu.Item key="setting:1">Log in</Menu.Item>
          <Menu.Item key="setting:2">Register</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

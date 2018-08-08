import * as React from "react";
import { Menu, Icon } from "antd";
import "./style.scss";

const SubMenu = Menu.SubMenu;

export class HomeView extends React.PureComponent {
  render() {
    return (
      <div>
        <Menu onClick={this.handleClick} mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />Inicio
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
        <div class="jumbotron">
          <h1 class="display-4">¡Bienvenidos a Yoowriter!</h1>
          <p class="lead">
            Yoowriter nace para hacer los Premios Literarios más transparentes,
            fiables y seguros.
          </p>

          <p>Comprueba todo lo que te da Yoowriter.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Registrarme
            </a>
          </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="card">
              <img class="card-img-top" src="" alt="" title="" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text myclass">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

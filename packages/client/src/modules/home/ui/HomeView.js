import * as React from "react";
import { Menu, Icon } from "antd";
import LiveSearch from "./LiveSearch";
import "./style.scss";

const SubMenu = Menu.SubMenu;

export class HomeView extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="topbar">
          <div className="topbar__left">
            <a href="javascript: void(0);">
              <img src="../../../../public/img/logo.svg" alt="Yoowriter logo" />
            </a>
          </div>
          <div className="topbar__right">
            <Menu onClick={this.handleClick} mode="horizontal">
              <Menu.Item key="trophy">
                <Icon type="trophy" />Premios abiertos
              </Menu.Item>
              <Menu.Item key="home">
                <LiveSearch />
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="user" />Iniciar sesión
                  </span>
                }
              >
                <Menu.Item key="setting:1">Entrar</Menu.Item>
                <Menu.Item key="setting:2">Registrarse</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
        <div class="jumbotron">
          <h1 class="display-4 text-center">¡Bienvenidos a Yoowriter!</h1>
          <p class="lead text-center">
            Yoowriter nace para hacer los Premios Literarios más transparentes,
            fiables y seguros.
          </p>

          <p class="text-center">Comprueba todo lo que te da Yoowriter.</p>
          <p class="lead text-center">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Registrarme
            </a>
          </p>
        </div>
        <div class="container">
          <div class="row features">
            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src="" alt="" title="" />
                <div class="card-body">
                  <h5 class="card-title text-center">
                    ¿Eres una entidad convocante?
                  </h5>
                  <ul>
                    <li>Inscríbete en Yoowriter</li>
                    <li>Registrar un premio literario</li>
                    <li>Convoca ya n premio literario</li>
                    <li>Consulta el estado de un concurso</li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block">
                    Regístrate en Yoowriter
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src="" alt="" title="" />
                <div class="card-body">
                  <h5 class="card-title text-center">¿Eres un autor?</h5>
                  <ul>
                    <li>Inscríbete como autor en Yoowriter</li>
                    <li>Utiliza servicios avanzados</li>
                    <li>Presenta una obra a un concurso</li>
                    <li>Consulta el estado de tus obras</li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block">
                    Regístrate en Yoowriter
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src="" alt="" title="" />
                <div class="card-body">
                  <h5 class="card-title text-center">
                    ¿Eres una persona atenta al mundo literario?
                  </h5>
                  <ul>
                    <li>Inscríbete en Yoowriter</li>
                    <li>Conoce la actualidad de los premios literarios</li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block">
                    Regístrate en Yoowriter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h2 class="text-center">Ventajas de Yoowriter</h2>
          <div class="row features">
            <div class="col-sm">
              <h5 class="text-center">
                <Icon type="lock" /> Confidencialidad
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus
                non cum dictumst luctus condimentum ullamcorper
              </p>
            </div>
            <div class="col-sm">
              <h5 class="text-center">
                <Icon type="sync" /> Transparencia
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus
                non cum dictumst luctus condimentum ullamcorper
              </p>
            </div>
            <div class="col-sm">
              <h5 class="text-center">
                <Icon type="hourglass" /> Eficiencia
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus
                non cum dictumst luctus condimentum ullamcorper
              </p>
            </div>
            <div class="col-sm">
              <h5 class="text-center">
                <Icon type="heart" /> Sostenibilidad
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus
                non cum dictumst luctus condimentum ullamcorper
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

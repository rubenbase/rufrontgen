import * as React from "react";
import { Menu, Icon } from "antd";
import LiveSearch from "./LiveSearch";
import "./style.scss";

const SubMenu = Menu.SubMenu;

export class HomeView extends React.PureComponent {
  render() {
    return (
      <div>
        <Menu className="topbar" onClick={this.handleClick} mode="horizontal">
          <div className="topbar__left">
            <div className="menuTop__logo">
              <div className="menuTop__logoContainer">
                <img src="resources/images/logo-white.svg" alt="" />
              </div>
            </div>
          </div>

          <Menu.Item key="trophy">
            <Icon type="trophy" />
            Premios abiertos
          </Menu.Item>
          <Menu.Item key="home">
            <LiveSearch />
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="user" />
                Iniciar sesión
              </span>
            }
          >
            <Menu.Item key="setting:1">Entrar</Menu.Item>
            <Menu.Item key="setting:2">Registrarse</Menu.Item>
          </SubMenu>
        </Menu>

        <div
          className="jumbotron"
          style={{ backgroundImage: `url(resources/images/bg.jpg)` }}
        >
          <h1 className="display-4 text-center text-light">
            ¡Bienvenidos a Yoowriter!
          </h1>
          <p className="lead text-center text-light">
            Yoowriter nace para hacer los Premios Literarios más transparentes,
            fiables y seguros.
          </p>

          <p className="text-center text-light">
            Comprueba todo lo que te da Yoowriter.
          </p>
          <p className="lead text-center">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Registrarme
            </a>
          </p>
        </div>
        <div className="container">
          <div className="row features">
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="resources/images/bg.jpg"
                  alt=""
                  title=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    ¿Eres una entidad convocante?
                  </h5>
                  <ul>
                    <li>Inscríbete en Yoowriter</li>
                    <li>Registrar un premio literario</li>
                    <li>Convoca ya n premio literario</li>
                    <li>Consulta el estado de un concurso</li>
                  </ul>
                  <a href="#" className="btn btn-primary btn-block">
                    Regístrate en Yoowriter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="resources/images/writer.jpg"
                  alt=""
                  title=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">¿Eres un autor?</h5>
                  <ul>
                    <li>Inscríbete como autor en Yoowriter</li>
                    <li>Utiliza servicios avanzados</li>
                    <li>Presenta una obra a un concurso</li>
                    <li>Consulta el estado de tus obras</li>
                  </ul>
                  <a href="#" className="btn btn-primary btn-block">
                    Regístrate en Yoowriter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="resources/images/reader.jpg"
                  alt=""
                  title=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    ¿Eres una persona atenta al mundo literario?
                  </h5>
                  <ul>
                    <li>Inscríbete en Yoowriter</li>
                    <li>Conoce la actualidad de los premios literarios</li>
                  </ul>
                  <a href="#" className="btn btn-primary btn-block">
                    Regístrate en Yoowriter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="features-intro">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 nopadding features-intro-img">
                <div
                  class="features-bg"
                  style={{
                    backgroundImage: `url(resources/images/features-intro-01.jpg)`
                  }}
                />
              </div>
              <div class="col-md-6 nopadding">
                <div class="features-text yellow">
                  <h5>
                    <i class="anticon anticon-lock" /> Confidencialidad
                  </h5>
                  <p>
                    Yoowriter protege la información facilitada por las
                    instituciones y/o particulares y garantiza las mejores
                    condiciones de seguridad para que la confidencialidad de los
                    usuarios esté asegurada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 nopadding features-intro-img order-md-12">
                <div
                  class="features-bg"
                  style={{
                    backgroundImage: `url(resources/images/features-intro-02.jpg)`
                  }}
                />
              </div>
              <div class="col-md-6 nopadding order-md-1">
                <div class="features-text">
                  <h5 className="text-center">
                    <Icon type="sync" /> Transparencia
                  </h5>
                  <p>
                    Yoowriter asegura la transparencia en los concursos entre
                    instituciones y/o particulares y, garantiza una comunicación
                    en tiempo real y verídica sobre los avances del estado de
                    los concursos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 nopadding features-intro-img">
                <div
                  class="features-bg"
                  style={{
                    backgroundImage: `url(resources/images/features-intro-03.jpg)`
                  }}
                />
              </div>
              <div class="col-md-6 nopadding">
                <div class="features-text red">
                  <h5>
                    <Icon type="hourglass" /> Eficiencia
                  </h5>
                  <p>
                    Yoowriter agiliza la burogracia en los consursos entre
                    instituciones y/o particulares y garantiza un mayor
                    dinamismo en la realización de los consursos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 nopadding features-intro-img order-md-12">
                <div
                  class="features-bg"
                  style={{
                    backgroundImage: `url(resources/images/features-intro-04.jpg)`
                  }}
                />
              </div>
              <div class="col-md-6 nopadding order-md-1">
                <div class="features-text green">
                  <h5 className="text-center">
                    <Icon type="heart" /> Sostenibilidad
                  </h5>
                  <p>
                    Yoowriter compromete a instituciones y/o particulares a ser
                    respetuosos con el medio ambiente y las personas en todos
                    los concursos lieterarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

import * as React from "react";
import { Menu, Input, List, Button, Icon, Checkbox } from "antd";
import "./style.scss";
import { SubscribeForm } from "../../subscribeForm/index";

const SubMenu = Menu.SubMenu;

const data = [
  "Registra un premio literario.",
  "Convoca un premio literario.",
  "Consulta el estado de un concurso."
];

const data2 = [
  "Utiliza servicios avanzados.",
  "Presenta una obra a un concurso.",
  "Consulta el estado de tus obras."
];

export class HomeView extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          className="jumbotron"
          style={{ backgroundImage: `url(resources/images/bg.jpg)` }}
        >
          <div class="row">
            <div class="col-sm">
              <img
                class="landing-logo"
                src="resources/images/logo-white.svg"
                alt=""
              />
              <h1 className="display-4 text-center text-light">
                ¡Bienvenidos a Yoowriter!
              </h1>
              <p className="lead text-center text-light header-text">
                Yoowriter nace para hacer los Premios Literarios más
                transparentes, fiables y seguros.
              </p>

              <p className="text-center text-light header-text">
                Comprueba todo lo que te da Yoowriter.
              </p>
            </div>
            <div class="col-sm">
              <div class="form-home">
                <h2>Me gustaría estar informado los concursos literarios.</h2>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row features">
            <div className="col-sm">
              <div className="card">
                <img
                  className="card-img-top"
                  src="resources/images/entity.jpg"
                  alt=""
                  title=""
                />
                <div className="card-body">
                  <h5 className="card-title">¿Eres una entidad convocante?</h5>
                  <List
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
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
                  <h5 className="card-title">¿Eres un autor?</h5>
                  <List
                    dataSource={data2}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="features-section">
          <div class="container-fluid">
            <div class="row">
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
            <div class="row">
              <div class="col-md-6 nopadding">
                <div class="features-text red">
                  <h5>
                    <Icon type="hourglass" /> Eficiencia
                  </h5>
                  <p>
                    Yoowriter agiliza la burocracia en los consursos entre
                    instituciones y/o particulares y garantiza un mayor
                    dinamismo en la realización de los consursos.
                  </p>
                </div>
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

        <section class="footer-form">
          <div class="container">
            <div class="form-home">
              <h2>Me gustaría estar informado los concursos literarios.</h2>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

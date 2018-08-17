import * as React from "react";
import { Menu, Input, Button, Icon, Checkbox } from "antd";
import "./style.scss";

const SubMenu = Menu.SubMenu;

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
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email de contacto:</label>
                    <Input placeholder="ejemplo@gmail.com" />
                    <label for="exampleInputEmail1">Nombre:</label>
                    <Input placeholder="Tu nombre" />
                    <label for="exampleInputEmail1">Primer apellido:</label>
                    <Input placeholder="Tu apellido" />
                    <div class="form-check">
                      <Checkbox>
                        Acepto los <a href="./legal">Términos y condiciones</a>
                      </Checkbox>
                    </div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Quiero información
                    </Button>
                  </div>
                </form>
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
                  <h5 className="card-title text-center">
                    ¿Eres una entidad convocante?
                  </h5>
                  <ul>
                    <li>Registrar un premio literario</li>
                    <li>Convoca un premio literario</li>
                    <li>Consulta el estado de un concurso</li>
                  </ul>
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
                    <li>Utiliza servicios avanzados</li>
                    <li>Presenta una obra a un concurso</li>
                    <li>Consulta el estado de tus obras</li>
                  </ul>
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
        <section>
          <div class="container">
            <div class="form-home">
              <h2>Me gustaría estar informado los concursos literarios.</h2>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email de contacto:</label>
                  <Input placeholder="ejemplo@gmail.com" />
                  <label for="exampleInputEmail1">Nombre:</label>
                  <Input placeholder="Tu nombre" />
                  <label for="exampleInputEmail1">Primer apellido:</label>
                  <Input placeholder="Tu apellido" />
                  <div class="form-check">
                    <Checkbox>
                      Acepto los <a href="./legal">Términos y condiciones</a>
                    </Checkbox>
                  </div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Quiero información
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

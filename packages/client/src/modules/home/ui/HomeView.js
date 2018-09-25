import * as React from "react";
import { Menu, Input, Card, List, Button, Icon, Checkbox } from "antd";
import "./style.scss";
import { Logo } from "./Logo";
import { SubscribeForm } from "../../subscribeForm/index";
import { graphql, compose } from "react-apollo";
import getCurrentLanguage from "graphql/State/getCurrentLanguage";

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

const { Meta } = Card;

class HomeView extends React.PureComponent {
  render() {
    const {
      currentLanguage: { currentLanguage }
    } = this.props;

    return (
      <div>
        {console.log(currentLanguage)}
        <div
          className="jumbotron"
          style={{ backgroundImage: `url(resources/images/bg.jpg)` }}
        >
          <div className="row">
            <div className="col-sm">
              <div className="landing-logo">
                <Logo />
              </div>
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
            <div className="col-sm">
              <div className="form-home">
                <h2>Me gustaría estar informado los concursos literarios.</h2>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row features">
            <div className="col-sm">
              <Card
                className="home-cards"
                cover={<img alt="example" src="resources/images/entity.jpg" />}
              >
                <Meta title="¿Eres una entidad convocante?" />
                <List
                  dataSource={data}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              </Card>
            </div>
            <div className="col-sm">
              <Card
                className="home-cards"
                cover={<img alt="example" src="resources/images/writer.jpg" />}
              >
                <Meta title="¿Eres un autor?" />
                <List
                  dataSource={data2}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              </Card>
            </div>
          </div>
        </div>
        <section className="features-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 nopadding">
                <div className="features-text yellow">
                  <h5>
                    <i className="anticon anticon-lock" /> Confidencialidad
                  </h5>
                  <p>
                    Yoowriter protege la información facilitada por las
                    instituciones y/o particulares y garantiza las mejores
                    condiciones de seguridad para que la confidencialidad de los
                    usuarios esté asegurada.
                  </p>
                </div>
              </div>
              <div className="col-md-6 nopadding order-md-1">
                <div className="features-text">
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
            <div className="row">
              <div className="col-md-6 nopadding">
                <div className="features-text red">
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
              <div className="col-md-6 nopadding order-md-1">
                <div className="features-text green">
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
        <section className="footer-form">
          <div className="container">
            <div className="form-home">
              <h2>Me gustaría estar informado los concursos literarios.</h2>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default compose(
  graphql(getCurrentLanguage, {
    props: ({ data: { currentLanguage, loading } }) => ({
      currentLanguage,
      loading
    })
  })
)(HomeView);

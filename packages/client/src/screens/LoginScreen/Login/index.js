import React from "react";
import LoginConnector from "./LoginForm/loginConnector";
import "./style.scss";
import FooterView from "containers/footer/ui/FooterView";
import AuthHeader from "containers/LayoutComponents/AuthHeader/index";

class Login extends React.Component {
  state = {};

  componentDidMount() {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.getElementsByTagName("body")[0].style.overflow = "";
  }

  render() {
    return (
      <div
        className="main-login main-login--fullscreen"
        style={{ backgroundImage: `url(resources/images/bg.jpg)` }}
      >
        <AuthHeader />
        <div className="main-login__block main-login__block--extended pb-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="main-login__block__inner">
                <div className="main-login__block__form">
                  <LoginConnector
                    {...this.props}
                    email={this.state.restoredEmail}
                  />
                </div>
                <div className="main-login__block__sidebar">
                  <h4 className="main-login__block__sidebar__title text-white">
                    <strong>
                      III CONCURSO INTERNACIONAL DE RELATOS CORTOS CIUDAD DE
                      SEVILLA
                    </strong>
                    <br />
                    <span>Noviembre 2018</span>
                  </h4>
                  <div className="main-login__block__sidebar__item">
                    El Ayuntamiento de Sevilla, la Editorial Samarcanda y el
                    Círculo Mercantil e Industrial de Sevilla organizan el
                    certamen literario con las siguientes características.
                  </div>

                  <div className="main-login__block__sidebar__place">
                    <i className="icmn-location mr-3" />
                    Ver bases del concurso.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterView />
      </div>
    );
  }
}

export default Login;

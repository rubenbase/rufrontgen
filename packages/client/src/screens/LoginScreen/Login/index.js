import React from "react";
import LoginConnector from "./LoginForm/loginConnector";
import "./style.scss";
import FooterView from "modules/footer/ui/FooterView";

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
      <div className="main-login main-login--fullscreen">
        <div className="main-login__header">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-login__header__logo">
                <a href="javascript: void(0);">
                  <img
                    src="resources/images/login/logo.png"
                    alt="Insertar logo aqui"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-login__block main-login__block--extended pb-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="main-login__block__promo text-black text-center">
                <h1 className="mb-3 text-black">
                  <strong>Consequat ea reprehenderit velit eu.</strong>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="main-login__block__inner">
                <div className="main-login__block__form">
                  <LoginConnector email={this.state.restoredEmail} />
                </div>
                <div className="main-login__block__sidebar">
                  <h4 className="main-login__block__sidebar__title text-white">
                    <strong>Agile Dev Meetup</strong>
                    <br />
                    <span>August 2018</span>
                  </h4>
                  <div className="main-login__block__sidebar__item">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="main-login__block__sidebar__item">
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s.
                  </div>
                  <div className="main-login__block__sidebar__place">
                    <i className="icmn-location mr-3" />
                    New York, USA
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

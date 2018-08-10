import React from "react";
import { Button } from "antd";
import RegisterConnector from "./RegisterForm/registerConnector";
import "./style.scss";
import FooterView from "modules/footer/ui/FooterView";
import AuthHeader from "modules/LayoutComponents/AuthHeader/index";

class Register extends React.Component {
  render() {
    return (
      <div className="login login--fullscreen">
        <AuthHeader />

        <div className="login__block main-login__block--extended pb-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__promo text-black text-center">
                <h1 className="mb-3 text-black">
                  <strong>¡Únete a Yoowriter!</strong>
                </h1>
                <p>
                  Yoowriter nace para hacer los Premios Literarios más
                  transparentes, fiables y seguros.
                  <br />
                  Comprueba todo lo que te da Yoowriter.
                </p>
              </div>
              <div className="login__block__inner">
                <div className="login__block__form">
                  <h4 className="text-uppercase">
                    <strong>Registro</strong>
                  </h4>
                  <br />
                  <RegisterConnector {...this.props} />
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

export default Register;

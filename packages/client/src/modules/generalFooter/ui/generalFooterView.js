import * as React from "react";
import { Col } from "antd";
import "modules/generalFooter/ui/style.scss";
export default class GeneralFooterView extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="footer__top">
          <div className="row">
            <Col md={8} sm={24} xs={24}>
              <div className="col-lg-9">
                <p>
                  <strong>Términos y Condicciones</strong>
                </p>
                <p>Legal</p>
              </div>
            </Col>
            <Col md={8} sm={24} xs={24}>
              <div className="col-lg-9">
                <p>
                  <strong>Soporte</strong>
                </p>
                <p>Whatever</p>
                <p>Whatever</p>
                <p>Whatever</p>
              </div>
            </Col>
            <Col md={8} sm={24} xs={24}>
              <div className="col-lg-9">
                <p>
                  <strong>Valores</strong>
                </p>
                <p>Misión</p>
              </div>
            </Col>
          </div>
        </div>
        <Col md={3} sm={24} xs={24}>
          <div className="col-sm-6">
            <div className="footer__copyright">
              <img
                src="resources/images/logo-white.png"
                target="_blank"
                rel="noopener noreferrer"
                alt="Mediatec Software"
              />
              <span>
                © 2018
                <a
                  href="http://mediatec.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yoowriter
                </a>
                <br />
                All rights reserved
              </span>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

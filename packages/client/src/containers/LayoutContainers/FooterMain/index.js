import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Modal, message, Row, Col, Badge, Icon } from "antd";
import "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.footerFirstTitle" />
                </h2>
                <div>
                  <a href="http://pro.ant.design">Ant Design Pro</a>
                </div>

                <div>
                  <Badge dot offset={[3, 0]}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://kitchen.alipay.com"
                    >
                      Kitchen
                    </a>
                    <span> - </span>
                    Whatever
                  </Badge>
                </div>
              </div>
              design
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.footerSecondTitle" />
                </h2>

                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://medium.com/rubenbase/"
                  >
                    Medium
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.footerThirdTitle" />
                </h2>
                <div>
                  <a
                    target="_blank "
                    href="https://github.com/ant-design/ant-design"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <img
                    className="title-icon"
                    src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                    alt="AFX Cloud"
                  />
                  <FormattedMessage id="app.footer.footerFourthTitle" />
                </h2>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://yuque.com/"
                  >
                    YuQue
                  </a>
                  <span> - </span>
                  YuQue Slogan
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          Made with <span className="heart">❤</span> by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rubenbase/rufrontgen"
          >
            Rufrontgen
          </a>
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);

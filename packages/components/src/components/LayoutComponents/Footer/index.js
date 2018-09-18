import React from 'react'
import { Button } from 'antd'
import './style.scss'

class AppFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__top">
          <div className="row">
            <div className="col-lg-9">
              <p>
                <strong>Clean UI Admin Template React - Best Solution for Your App!</strong>
              </p>
              <p>
                Clean UI – a modern professional admin template, based on Bootstrap 4 framework.
                Clean UI is a powerful and super flexible tool, which suits best for any kind of web
                application: Web Applications; CRM; CMS; Admin Panels; Dashboards; etc. Clean UI is
                fully responsive, which means that it looks perfect on mobiles and tablets.
              </p>
              <p>
                Clean UI is fully based on SASS pre-processor, includes 50+ commented SASS files.
                Each file corresponds to a single component, layout, page, plugin or extension – so
                you can easily find necessary piece of code and edit it for your needs. The package
                includes both normal and minified CSS files, compiled from SASS.
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="row">
            <div className="col-sm-6">
              <a
                href="https://themeforest.net/item/clean-ui-admin-template-react-redux-ant-design-fully-responsive-freebies/21938700"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <Button type="primary">Buy Now 25$</Button>
              </a>
            </div>
            <div className="col-sm-6">
              <div className="footer__copyright">
                <img
                  src="resources/images/mediatec.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Mediatec Software"
                />
                <span>
                  © 2018{' '}
                  <a href="http://mediatec.org/" target="_blank" rel="noopener noreferrer">
                    Mediatec Software
                  </a>
                  <br />
                  All rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppFooter

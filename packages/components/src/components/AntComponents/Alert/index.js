import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderAlertBanner } from './Banner/index.js'
import { default as renderAlertBasic } from './Basic/index.js'
import { default as renderAlertClosable } from './Closable/index.js'
import { default as renderAlertClosetext } from './Closetext/index.js'
import { default as renderAlertDescription } from './Description/index.js'
import { default as renderAlertIcon } from './Icon/index.js'
import { default as renderAlertSmoothclosed } from './Smoothclosed/index.js'
import { default as renderAlertStyle } from './Style/index.js'

const Panel = Collapse.Panel

class AlertItems extends React.Component {
  componentDidMount() {
    renderAlertBanner(ReactDOM, document.getElementById('AlertBanner'))
    renderAlertBasic(ReactDOM, document.getElementById('AlertBasic'))
    renderAlertClosable(ReactDOM, document.getElementById('AlertClosable'))
    renderAlertClosetext(ReactDOM, document.getElementById('AlertClosetext'))
    renderAlertDescription(ReactDOM, document.getElementById('AlertDescription'))
    renderAlertIcon(ReactDOM, document.getElementById('AlertIcon'))
    renderAlertSmoothclosed(ReactDOM, document.getElementById('AlertSmoothclosed'))
    renderAlertStyle(ReactDOM, document.getElementById('AlertStyle'))
  }

  render() {
    return (
      <div className="AlertDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Alert</strong>
                  <a
                    href="https://ant.design/components/alert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary ml-4"
                  >
                    Official Documentation <i className="icmn-link ml-1" />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-alert-demo-banner">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Banner</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Display Alert as a banner at top of page.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AlertBanner" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

ReactDOM.render(
  <div>
    <Alert message="Warning text" banner />
    <br />
    <Alert message="Very long warning text warning text text text text text text text" banner closable />
    <br />
    <Alert showIcon=\{false\} message="Warning text without icon" banner />
    <br />
    <Alert type="error" message="Error text" banner />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-alert-demo-closable">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Closable</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">To show close button.</div>
                      <div className="card-body pb-0">
                        <div id="AlertClosable" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

const onClose = function (e) \{
  console.log(e, 'I was closed.');
\};

ReactDOM.render(
  <div>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose=\{onClose\}
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose=\{onClose\}
    />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-alert-demo-description">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Description</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Additional description for alert message.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AlertDescription" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

ReactDOM.render(
  <div>
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-alert-demo-smooth-closed">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Smoothly Unmount</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Smoothly and unaffectedly unmount Alert.</div>
                      <div className="card-body pb-0">
                        <div id="AlertSmoothclosed" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

class App extends React.Component \{
  state = \{
    visiable\: true,
  \}
  handleClose = () => \{
    this.setState(\{ visiable\: false \});
  \}
  render() \{
    return (
      <div>
        \{
          this.state.visiable ? (
            <Alert
              message="Alert Message Text"
              type="success"
              closable
              afterClose=\{this.handleClose\}
            />
          ) \: null
        \}
        <p>placeholder text here</p>
      </div>
    );
  \}
\}

ReactDOM.render(
  <App />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-alert-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The simplest usage for short messages.</div>
                      <div className="card-body pb-0">
                        <div id="AlertBasic" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

ReactDOM.render(
  <Alert message="Success Text" type="success" />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-alert-demo-close-text">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Close Text</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Replace the default icon with customized text.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AlertClosetext" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

ReactDOM.render(
  <Alert message="Info Text" type="info" closeText="Close Now" />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-alert-demo-icon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Decent icon make information more clear and more friendly.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AlertIcon" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

ReactDOM.render(
  <div>
    <Alert message="Success Tips" type="success" showIcon />
    <Alert message="Informational Notes" type="info" showIcon />
    <Alert message="Warning" type="warning" showIcon />
    <Alert message="Error" type="error" showIcon />
    <Alert
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-alert-demo-style">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">More types</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        There are 4 types of Alert: <code>{'success'}</code>, <code>{'info'}</code>,{' '}
                        <code>{'warning'}</code>, <code>{'error'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AlertStyle" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Alert \} from 'antd';

ReactDOM.render(
  <div>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AlertItems

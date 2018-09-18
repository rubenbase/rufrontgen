import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderMessageDuration } from './Duration/index.js'
import { default as renderMessageInfo } from './Info/index.js'
import { default as renderMessageLoading } from './Loading/index.js'
import { default as renderMessageOther } from './Other/index.js'

const Panel = Collapse.Panel

class MessageItems extends React.Component {
  componentDidMount() {
    renderMessageDuration(ReactDOM, document.getElementById('MessageDuration'))
    renderMessageInfo(ReactDOM, document.getElementById('MessageInfo'))
    renderMessageLoading(ReactDOM, document.getElementById('MessageLoading'))
    renderMessageOther(ReactDOM, document.getElementById('MessageOther'))
  }

  render() {
    return (
      <div className="MessageDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Message</strong>
                  <a
                    href="https://ant.design/components/message/"
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
                    <div className="card card--example" id="components-message-demo-duration">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customize duration</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Customize message display duration from default <code>{'3s'}</code> to{' '}
                        <code>{'10s'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MessageDuration" />
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
                              {`import \{ message, Button \} from 'antd';

const success = () => \{
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
\};

ReactDOM.render(
  <Button onClick=\{success\}>Customized display duration</Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-message-demo-loading">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Message of loading</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Display a global loading indicator, which is dismissed by itself
                        asynchronously.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MessageLoading" />
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
                              {`import \{ message, Button \} from 'antd';

const success = () => \{
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
\};

ReactDOM.render(
  <Button onClick=\{success\}>Display a loading indicator</Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-message-demo-info">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Normal prompt</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Normal messages as feedbacks.</div>
                      <div className="card-body pb-0">
                        <div id="MessageInfo" />
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
                              {`import \{ message, Button \} from 'antd';

const info = () => \{
  message.info('This is a normal message');
\};

ReactDOM.render(
  <Button type="primary" onClick=\{info\}>Display normal message</Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-message-demo-other">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Other types of message</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Messages of success, error and warning types.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MessageOther" />
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
                              {`import \{ message, Button \} from 'antd';

const success = () => \{
  message.success('This is a message of success');
\};

const error = () => \{
  message.error('This is a message of error');
\};

const warning = () => \{
  message.warning('This is message of warning');
\};

ReactDOM.render(
  <div>
    <Button onClick=\{success\}>Success</Button>
    <Button onClick=\{error\}>Error</Button>
    <Button onClick=\{warning\}>Warning</Button>
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

export default MessageItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderBacktopBasic } from './Basic/index.js'
import { default as renderBacktopCustom } from './Custom/index.js'

const Panel = Collapse.Panel

class BacktopItems extends React.Component {
  componentDidMount() {
    renderBacktopBasic(ReactDOM, document.getElementById('BacktopBasic'))
    renderBacktopCustom(ReactDOM, document.getElementById('BacktopCustom'))
  }

  render() {
    return (
      <div className="BacktopDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>BackTop</strong>
                  <a
                    href="https://ant.design/components/back-top/"
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
                    <div className="card card--example" id="components-back-top-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The most basic usage.</div>
                      <div className="card-body pb-0">
                        <div id="BacktopBasic" />
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
                              {`import \{ BackTop \} from 'antd';

ReactDOM.render(
  <div>
    <BackTop />
    Scroll down to see the bottom-right
    <strong style=\{\{ color\: 'rgba(64, 64, 64, 0.6)' \}\}> gray </strong>
    button.
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-back-top-demo-custom">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom style</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can customize the style of the button, just note the size limit: no more
                        than <code>{'40px * 40px'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="BacktopCustom" />
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
                              {`import \{ BackTop \} from 'antd';

ReactDOM.render(
  <div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
    Scroll down to see the bottom-right
    <strong style=\{\{ color\: '#1088e9' \}\}> blue </strong>
    button.
  </div>,
  mountNode
);
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

export default BacktopItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderSwitchBasic } from './Basic/index.js'
import { default as renderSwitchDisabled } from './Disabled/index.js'
import { default as renderSwitchLoading } from './Loading/index.js'
import { default as renderSwitchSize } from './Size/index.js'
import { default as renderSwitchText } from './Text/index.js'

const Panel = Collapse.Panel

class SwitchItems extends React.Component {
  componentDidMount() {
    renderSwitchBasic(ReactDOM, document.getElementById('SwitchBasic'))
    renderSwitchDisabled(ReactDOM, document.getElementById('SwitchDisabled'))
    renderSwitchLoading(ReactDOM, document.getElementById('SwitchLoading'))
    renderSwitchSize(ReactDOM, document.getElementById('SwitchSize'))
    renderSwitchText(ReactDOM, document.getElementById('SwitchText'))
  }

  render() {
    return (
      <div className="SwitchDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Switch</strong>
                  <a
                    href="https://ant.design/components/switch/"
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
                    <div className="card card--example" id="components-switch-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The most basic usage.</div>
                      <div className="card-body pb-0">
                        <div id="SwitchBasic" />
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
                              {`import \{ Switch \} from 'antd';

function onChange(checked) \{
  console.log(\`switch to \$\{checked\}\`);
\}

ReactDOM.render(
  <Switch defaultChecked onChange=\{onChange\} />,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-switch-demo-loading">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Loading</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Mark a pending state of switch.</div>
                      <div className="card-body pb-0">
                        <div id="SwitchLoading" />
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
                              {`import \{ Switch \} from 'antd';

ReactDOM.render(
  <div>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-switch-demo-text">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Text</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">With text and icon.</div>
                      <div className="card-body pb-0">
                        <div id="SwitchText" />
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
                              {`import \{ Switch, Icon \} from 'antd';

ReactDOM.render(
  <div>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch checkedChildren=\{<Icon type="check" />\} unCheckedChildren=\{<Icon type="cross" />\} defaultChecked />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-switch-demo-disabled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Disabled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Disabled state of <code>{'Switch'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SwitchDisabled" />
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
                              {`import \{ Switch, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    disabled\: true,
  \}
  toggle = () => \{
    this.setState(\{
      disabled\: !this.state.disabled,
    \});
  \}
  render() \{
    return (
      <div>
        <Switch disabled=\{this.state.disabled\} defaultChecked />
        <br />
        <Button type="primary" onClick=\{this.toggle\}>Toggle disabled</Button>
      </div>
    );
  \}
\}

ReactDOM.render(<App />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-switch-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Two sizes</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'size="small"'}</code> represents a small sized switch.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SwitchSize" />
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
                              {`import \{ Switch \} from 'antd';

ReactDOM.render(
  <div>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
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

export default SwitchItems

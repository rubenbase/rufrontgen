import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderSpinBasic } from './Basic/index.js'
import { default as renderSpinCustomindicator } from './Customindicator/index.js'
import { default as renderSpinDelayAndDebounce } from './DelayAndDebounce/index.js'
import { default as renderSpinInside } from './Inside/index.js'
import { default as renderSpinNested } from './Nested/index.js'
import { default as renderSpinSize } from './Size/index.js'
import { default as renderSpinTip } from './Tip/index.js'

const Panel = Collapse.Panel

class SpinItems extends React.Component {
  componentDidMount() {
    renderSpinBasic(ReactDOM, document.getElementById('SpinBasic'))
    renderSpinCustomindicator(ReactDOM, document.getElementById('SpinCustomindicator'))
    renderSpinDelayAndDebounce(ReactDOM, document.getElementById('SpinDelayAndDebounce'))
    renderSpinInside(ReactDOM, document.getElementById('SpinInside'))
    renderSpinNested(ReactDOM, document.getElementById('SpinNested'))
    renderSpinSize(ReactDOM, document.getElementById('SpinSize'))
    renderSpinTip(ReactDOM, document.getElementById('SpinTip'))
  }

  render() {
    return (
      <div className="SpinDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Spin</strong>
                  <a
                    href="https://ant.design/components/spin/"
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
                    <div className="card card--example" id="components-spin-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">basic Usage</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">A simple loading status.</div>
                      <div className="card-body pb-0">
                        <div id="SpinBasic" />
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
                              {`import \{ Spin \} from 'antd';

ReactDOM.render(<Spin />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-spin-demo-delayAndDebounce">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">delay</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Specifies a delay for loading state. If <code>{'spinning'}</code> ends
                        during delay, loading status won't appear.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SpinDelayAndDebounce" />
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
                              {`import \{ Spin, Alert, Switch \} from 'antd';

class Card extends React.Component \{
  state = \{ loading\: false \}
  toggle = (value) => \{
    this.setState(\{ loading\: value \});
  \}
  render() \{
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning=\{this.state.loading\} delay=\{500\} >\{container\}</Spin>
        <div style=\{\{ marginTop\: 16 \}\}>
          Loading state：<Switch checked=\{this.state.loading\} onChange=\{this.toggle\} />
        </div>
      </div>
    );
  \}
\}

ReactDOM.render(<Card />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-spin-demo-nested">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Embedded mode</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Embedding content into <code>{'Spin'}</code> will alter it into loading
                        state.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SpinNested" />
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
                              {`import \{ Spin, Switch, Alert \} from 'antd';

class Card extends React.Component \{
  state = \{ loading\: false \}
  toggle = (value) => \{
    this.setState(\{ loading\: value \});
  \}
  render() \{
    return (
      <div>
        <Spin spinning=\{this.state.loading\}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style=\{\{ marginTop\: 16 \}\}>
          Loading state：<Switch checked=\{this.state.loading\} onChange=\{this.toggle\} />
        </div>
      </div>
    );
  \}
\}

ReactDOM.render(<Card />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-spin-demo-tip">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized description</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Customized description content.</div>
                      <div className="card-body pb-0">
                        <div id="SpinTip" />
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
                              {`import \{ Spin, Alert \} from 'antd';

ReactDOM.render(
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-spin-demo-custom-indicator">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom spinning indicator</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Use custom loading indicator.</div>
                      <div className="card-body pb-0">
                        <div id="SpinCustomindicator" />
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
                              {`import \{ Spin, Icon \} from 'antd';

const antIcon = <Icon type="loading" style=\{\{ fontSize\: 24 \}\} spin />;

ReactDOM.render(<Spin indicator=\{antIcon\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-spin-demo-inside">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Inside a container</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Spin in a container.</div>
                      <div className="card-body pb-0">
                        <div id="SpinInside" />
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
                              {`import \{ Spin \} from 'antd';

ReactDOM.render(
  <div className="example">
    <Spin />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-spin-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A small <code>{'Spin'}</code> use in loading text, default{' '}
                        <code>{'Spin'}</code> use in loading card-level block, and large{' '}
                        <code>{'Spin'}</code> use in loading **page**.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SpinSize" />
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
                              {`import \{ Spin \} from 'antd';

ReactDOM.render(
  <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
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

export default SpinItems

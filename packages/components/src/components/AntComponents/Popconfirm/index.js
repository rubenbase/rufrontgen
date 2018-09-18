import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderPopconfirmBasic } from './Basic/index.js'
import { default as renderPopconfirmDynamictrigger } from './Dynamictrigger/index.js'
import { default as renderPopconfirmLocale } from './Locale/index.js'
import { default as renderPopconfirmPlacement } from './Placement/index.js'

const Panel = Collapse.Panel

class PopconfirmItems extends React.Component {
  componentDidMount() {
    renderPopconfirmBasic(ReactDOM, document.getElementById('PopconfirmBasic'))
    renderPopconfirmDynamictrigger(ReactDOM, document.getElementById('PopconfirmDynamictrigger'))
    renderPopconfirmLocale(ReactDOM, document.getElementById('PopconfirmLocale'))
    renderPopconfirmPlacement(ReactDOM, document.getElementById('PopconfirmPlacement'))
  }

  render() {
    return (
      <div className="PopconfirmDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Popconfirm</strong>
                  <a
                    href="https://ant.design/components/popconfirm/"
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
                    <div className="card card--example" id="components-popconfirm-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The basic example.</div>
                      <div className="card-body pb-0">
                        <div id="PopconfirmBasic" />
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
                              {`import \{ Popconfirm, message \} from 'antd';

function confirm(e) \{
  console.log(e);
  message.success('Click on Yes');
\}

function cancel(e) \{
  console.log(e);
  message.error('Click on No');
\}

ReactDOM.render(
  <Popconfirm title="Are you sure delete this task?" onConfirm=\{confirm\} onCancel=\{cancel\} okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-popconfirm-demo-locale">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Locale text</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Set <code>{'okText'}</code> and <code>{'cancelText'}</code> props to
                        customise the button's labels.
                      </div>
                      <div className="card-body pb-0">
                        <div id="PopconfirmLocale" />
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
                              {`import \{ Popconfirm \} from 'antd';

ReactDOM.render(
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div
                      className="card card--example"
                      id="components-popconfirm-demo-dynamic-trigger"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Conditional trigger</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Make it pop up under some conditions.</div>
                      <div className="card-body pb-0">
                        <div id="PopconfirmDynamictrigger" />
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
                              {`import \{ Popconfirm, Switch, message \} from 'antd';

class App extends React.Component \{
  state = \{
    visible\: false,
    condition\: true, // Whether meet the condition, if not show popconfirm.
  \}
  changeCondition = (value) => \{
    this.setState(\{ condition\: value \});
  \}
  confirm = () => \{
    this.setState(\{ visible\: false \});
    message.success('Next step.');
  \}
  cancel = () => \{
    this.setState(\{ visible\: false \});
    message.error('Click on cancel.');
  \}
  handleVisibleChange = (visible) => \{
    if (!visible) \{
      this.setState(\{ visible \});
      return;
    \}
    // Determining condition before show the popconfirm.
    console.log(this.state.condition);
    if (this.state.condition) \{
      this.confirm(); // next step
    \} else \{
      this.setState(\{ visible \}); // show the popconfirm
    \}
  \}
  render() \{
    return (
      <div>
        <Popconfirm
          title="Are you sure delete this task?"
          visible=\{this.state.visible\}
          onVisibleChange=\{this.handleVisibleChange\}
          onConfirm=\{this.confirm\}
          onCancel=\{this.cancel\}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete a task</a>
        </Popconfirm>
        <br />
        <br />
        Whether directly execute：<Switch defaultChecked onChange=\{this.changeCondition\} />
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
                    <div className="card card--example" id="components-popconfirm-demo-placement">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Placement</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        There are 12 <code>{'placement'}</code> options available. Use{' '}
                        <code>{'arrowPointAtCenter'}</code> if you want arrow point at the center of
                        target.
                      </div>
                      <div className="card-body pb-0">
                        <div id="PopconfirmPlacement" />
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
                              {`import \{ Popconfirm, message, Button \} from 'antd';

const text = 'Are you sure delete this task?';

function confirm() \{
  message.info('Click on Yes.');
\}

ReactDOM.render(
  <div className="demo">
    <div style=\{\{ marginLeft\: 70, whiteSpace\: 'nowrap' \}\}>
      <Popconfirm placement="topLeft" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm placement="top" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm placement="topRight" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div style=\{\{ width\: 70, float\: 'left' \}\}>
      <Popconfirm placement="leftTop" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm placement="left" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm placement="leftBottom" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div style=\{\{ width\: 70, marginLeft\: 304 \}\}>
      <Popconfirm placement="rightTop" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm placement="right" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm placement="rightBottom" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div style=\{\{ marginLeft\: 70, clear\: 'both', whiteSpace\: 'nowrap' \}\}>
      <Popconfirm placement="bottomLeft" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm placement="bottomRight" title=\{text\} onConfirm=\{confirm\} okText="Yes" cancelText="No">
        <Button>BR</Button>
      </Popconfirm>
    </div>
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

export default PopconfirmItems

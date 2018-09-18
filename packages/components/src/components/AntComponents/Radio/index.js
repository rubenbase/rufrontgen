import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderRadioBasic } from './Basic/index.js'
import { default as renderRadioDisable } from './Disable/index.js'
import { default as renderRadioRadiobutton } from './Radiobutton/index.js'
import { default as renderRadioRadiogroupmore } from './Radiogroupmore/index.js'
import { default as renderRadioRadiogroupoptions } from './Radiogroupoptions/index.js'
import { default as renderRadioRadiogroupwithname } from './Radiogroupwithname/index.js'
import { default as renderRadioRadiogroup } from './Radiogroup/index.js'
import { default as renderRadioSize } from './Size/index.js'

const Panel = Collapse.Panel

class RadioItems extends React.Component {
  componentDidMount() {
    renderRadioBasic(ReactDOM, document.getElementById('RadioBasic'))
    renderRadioDisable(ReactDOM, document.getElementById('RadioDisable'))
    renderRadioRadiobutton(ReactDOM, document.getElementById('RadioRadiobutton'))
    renderRadioRadiogroupmore(ReactDOM, document.getElementById('RadioRadiogroupmore'))
    renderRadioRadiogroupoptions(ReactDOM, document.getElementById('RadioRadiogroupoptions'))
    renderRadioRadiogroupwithname(ReactDOM, document.getElementById('RadioRadiogroupwithname'))
    renderRadioRadiogroup(ReactDOM, document.getElementById('RadioRadiogroup'))
    renderRadioSize(ReactDOM, document.getElementById('RadioSize'))
  }

  render() {
    return (
      <div className="RadioDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Radio</strong>
                  <a
                    href="https://ant.design/components/radio/"
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
                    <div className="card card--example" id="components-radio-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The simplest use.</div>
                      <div className="card-body pb-0">
                        <div id="RadioBasic" />
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
                              {`import \{ Radio \} from 'antd';

ReactDOM.render(<Radio>Radio</Radio>, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-radio-demo-radiobutton">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">radio style</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The combination of radio button style.</div>
                      <div className="card-body pb-0">
                        <div id="RadioRadiobutton" />
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
                              {`import \{ Radio \} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) \{
  console.log(\`radio checked\:\$\{e.target.value\}\`);
\}

ReactDOM.render(
  <div>
    <div>
      <RadioGroup onChange=\{onChange\} defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style=\{\{ marginTop\: 16 \}\}>
      <RadioGroup onChange=\{onChange\} defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b" disabled>Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style=\{\{ marginTop\: 16 \}\}>
      <RadioGroup disabled onChange=\{onChange\} defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-radio-demo-radiogroup-options"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">RadioGroup group</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Render radios by configuring <code>{'options'}</code>. > support after{' '}
                        <code>{'2.9.0'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="RadioRadiogroupoptions" />
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
                              {`import \{ Radio \} from 'antd';
const RadioGroup = Radio.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  \{ label\: 'Apple', value\: 'Apple' \},
  \{ label\: 'Pear', value\: 'Pear' \},
  \{ label\: 'Orange', value\: 'Orange' \},
];
const optionsWithDisabled = [
  \{ label\: 'Apple', value\: 'Apple' \},
  \{ label\: 'Pear', value\: 'Pear' \},
  \{ label\: 'Orange', value\: 'Orange', disabled\: false \},
];

class App extends React.Component \{
  state = \{
    value1\: 'Apple',
    value2\: 'Apple',
    value3\: 'Apple',
  \}
  onChange1 = (e) => \{
    console.log('radio1 checked', e.target.value);
    this.setState(\{
      value1\: e.target.value,
    \});
  \}
  onChange2 = (e) => \{
    console.log('radio2 checked', e.target.value);
    this.setState(\{
      value2\: e.target.value,
    \});
  \}
  onChange3 = (e) => \{
    console.log('radio3 checked', e.target.value);
    this.setState(\{
      value3\: e.target.value,
    \});
  \}
  render() \{
    return (
      <div>
        <RadioGroup options=\{plainOptions\} onChange=\{this.onChange1\} value=\{this.state.value1\} />
        <RadioGroup options=\{options\} onChange=\{this.onChange2\} value=\{this.state.value2\} />
        <RadioGroup options=\{optionsWithDisabled\} onChange=\{this.onChange3\} value=\{this.state.value3\} />
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
                    <div className="card card--example" id="components-radio-demo-radiogroup">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Radio Group</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">A group of radio components.</div>
                      <div className="card-body pb-0">
                        <div id="RadioRadiogroup" />
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
                              {`import \{ Radio \} from 'antd';
const RadioGroup = Radio.Group;

class App extends React.Component \{
  state = \{
    value\: 1,
  \}
  onChange = (e) => \{
    console.log('radio checked', e.target.value);
    this.setState(\{
      value\: e.target.value,
    \});
  \}
  render() \{
    return (
      <RadioGroup onChange=\{this.onChange\} value=\{this.state.value\}>
        <Radio value=\{1\}>A</Radio>
        <Radio value=\{2\}>B</Radio>
        <Radio value=\{3\}>C</Radio>
        <Radio value=\{4\}>D</Radio>
      </RadioGroup>
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
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-radio-demo-disable">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">disabled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Radio unavailable.</div>
                      <div className="card-body pb-0">
                        <div id="RadioDisable" />
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
                              {`import \{ Radio, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    disabled\: true,
  \}
  toggleDisabled = () => \{
    this.setState(\{
      disabled\: !this.state.disabled,
    \});
  \}
  render() \{
    return (
      <div>
        <Radio defaultChecked=\{false\} disabled=\{this.state.disabled\}>Disabled</Radio>
        <br />
        <Radio defaultChecked disabled=\{this.state.disabled\}>Disabled</Radio>
        <div style=\{\{ marginTop\: 20 \}\}>
          <Button type="primary" onClick=\{this.toggleDisabled\}>
            Toggle disabled
          </Button>
        </div>
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
                    <div className="card card--example" id="components-radio-demo-radiogroup-more">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Vertical RadioGroup</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Vertical RadioGroup, with more radios.</div>
                      <div className="card-body pb-0">
                        <div id="RadioRadiogroupmore" />
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
                              {`import \{ Radio, Input \} from 'antd';
const RadioGroup = Radio.Group;

class App extends React.Component \{
  state = \{
    value\: 1,
  \}
  onChange = (e) => \{
    console.log('radio checked', e.target.value);
    this.setState(\{
      value\: e.target.value,
    \});
  \}
  render() \{
    const radioStyle = \{
      display\: 'block',
      height\: '30px',
      lineHeight\: '30px',
    \};
    return (
      <RadioGroup onChange=\{this.onChange\} value=\{this.state.value\}>
        <Radio style=\{radioStyle\} value=\{1\}>Option A</Radio>
        <Radio style=\{radioStyle\} value=\{2\}>Option B</Radio>
        <Radio style=\{radioStyle\} value=\{3\}>Option C</Radio>
        <Radio style=\{radioStyle\} value=\{4\}>
          More...
          \{this.state.value === 4 ? <Input style=\{\{ width\: 100, marginLeft\: 10 \}\} /> \: null\}
        </Radio>
      </RadioGroup>
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
                    <div
                      className="card card--example"
                      id="components-radio-demo-radiogroup-with-name"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">RadioGroup with name</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Passing the <code>{'name'}</code> property to all{' '}
                        <code>{'input[type="radio"]'}</code> that are in the same RadioGroup. It is
                        usually used to let the browser see your RadioGroup as a real "group" and
                        keep the default behavior. For example, using left/right keyboard arrow to
                        change your selection that in the same RadioGroup.
                      </div>
                      <div className="card-body pb-0">
                        <div id="RadioRadiogroupwithname" />
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
                              {`import \{ Radio \} from 'antd';
const RadioGroup = Radio.Group;

function App() \{
  return (
    <RadioGroup name="radiogroup" defaultValue=\{1\}>
      <Radio value=\{1\}>A</Radio>
      <Radio value=\{2\}>B</Radio>
      <Radio value=\{3\}>C</Radio>
      <Radio value=\{4\}>D</Radio>
    </RadioGroup>
  );
\}

ReactDOM.render(<App />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-radio-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        There are three sizes available: large, medium, and small. It can coordinate
                        with input box.
                      </div>
                      <div className="card-body pb-0">
                        <div id="RadioSize" />
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
                              {`import \{ Radio \} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

ReactDOM.render(
  <div>
    <div>
      <RadioGroup defaultValue="a" size="large">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style=\{\{ marginTop\: 16 \}\}>
      <RadioGroup defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style=\{\{ marginTop\: 16 \}\}>
      <RadioGroup defaultValue="a" size="small">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
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

export default RadioItems

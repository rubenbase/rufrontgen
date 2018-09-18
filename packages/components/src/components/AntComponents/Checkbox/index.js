import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderCheckboxBasic } from './Basic/index.js'
import { default as renderCheckboxCheckall } from './Checkall/index.js'
import { default as renderCheckboxController } from './Controller/index.js'
import { default as renderCheckboxDisabled } from './Disabled/index.js'
import { default as renderCheckboxGroup } from './Group/index.js'
import { default as renderCheckboxLayout } from './Layout/index.js'

const Panel = Collapse.Panel

class CheckboxItems extends React.Component {
  componentDidMount() {
    renderCheckboxBasic(ReactDOM, document.getElementById('CheckboxBasic'))
    renderCheckboxCheckall(ReactDOM, document.getElementById('CheckboxCheckall'))
    renderCheckboxController(ReactDOM, document.getElementById('CheckboxController'))
    renderCheckboxDisabled(ReactDOM, document.getElementById('CheckboxDisabled'))
    renderCheckboxGroup(ReactDOM, document.getElementById('CheckboxGroup'))
    renderCheckboxLayout(ReactDOM, document.getElementById('CheckboxLayout'))
  }

  render() {
    return (
      <div className="CheckboxDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Checkbox</strong>
                  <a
                    href="https://ant.design/components/checkbox/"
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
                    <div className="card card--example" id="components-checkbox-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic usage of checkbox.</div>
                      <div className="card-body pb-0">
                        <div id="CheckboxBasic" />
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
                              {`import \{ Checkbox \} from 'antd';

function onChange(e) \{
  console.log(\`checked = \$\{e.target.checked\}\`);
\}

ReactDOM.render(
  <Checkbox onChange=\{onChange\}>Checkbox</Checkbox>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-checkbox-demo-controller">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Controlled Checkbox</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Communicated with other components.</div>
                      <div className="card-body pb-0">
                        <div id="CheckboxController" />
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
                              {`import \{ Checkbox, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    checked\: true,
    disabled\: false,
  \};
  render() \{
    const label = \`\$\{this.state.checked ? 'Checked' \: 'Unchecked'\}-\$\{this.state.disabled ? 'Disabled' \: 'Enabled'\}\`;
    return (
      <div>
        <p style=\{\{ marginBottom\: '20px' \}\}>
          <Checkbox
            checked=\{this.state.checked\}
            disabled=\{this.state.disabled\}
            onChange=\{this.onChange\}
          >
            \{label\}
          </Checkbox>
        </p>
        <p>
          <Button
            type="primary"
            size="small"
            onClick=\{this.toggleChecked\}
          >
            \{!this.state.checked ? 'Check' \: 'Uncheck'\}
          </Button>
          <Button
            style=\{\{ marginLeft\: '10px' \}\}
            type="primary"
            size="small"
            onClick=\{this.toggleDisable\}
          >
            \{!this.state.disabled ? 'Disable' \: 'Enable'\}
          </Button>
        </p>
      </div>
    );
  \}
  toggleChecked = () => \{
    this.setState(\{ checked\: !this.state.checked \});
  \}
  toggleDisable = () => \{
    this.setState(\{ disabled\: !this.state.disabled \});
  \}
  onChange = (e) => \{
    console.log('checked = ', e.target.checked);
    this.setState(\{
      checked\: e.target.checked,
    \});
  \}
\}

ReactDOM.render(<App />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-checkbox-demo-group">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Checkbox Group</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Generate a group of checkboxes from an array.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CheckboxGroup" />
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
                              {`import \{ Checkbox \} from 'antd';
const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) \{
  console.log('checked = ', checkedValues);
\}

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

ReactDOM.render(
  <div>
    <CheckboxGroup options=\{plainOptions\} defaultValue=\{['Apple']\} onChange=\{onChange\} />
    <br /><br />
    <CheckboxGroup options=\{options\} defaultValue=\{['Pear']\} onChange=\{onChange\} />
    <br /><br />
    <CheckboxGroup options=\{optionsWithDisabled\} disabled defaultValue=\{['Apple']\} onChange=\{onChange\} />
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
                    <div className="card card--example" id="components-checkbox-demo-check-all">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Check all</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The <code>{'indeterminate'}</code> property can help you to achieve a 'check
                        all' effect.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CheckboxCheckall" />
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
                              {`import \{ Checkbox \} from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class App extends React.Component \{
  state = \{
    checkedList\: defaultCheckedList,
    indeterminate\: true,
    checkAll\: false,
  \};
  render() \{
    return (
      <div>
        <div style=\{\{ borderBottom\: '1px solid #E9E9E9' \}\}>
          <Checkbox
            indeterminate=\{this.state.indeterminate\}
            onChange=\{this.onCheckAllChange\}
            checked=\{this.state.checkAll\}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options=\{plainOptions\} value=\{this.state.checkedList\} onChange=\{this.onChange\} />
      </div>
    );
  \}
  onChange = (checkedList) => \{
    this.setState(\{
      checkedList,
      indeterminate\: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll\: checkedList.length === plainOptions.length,
    \});
  \}
  onCheckAllChange = (e) => \{
    this.setState(\{
      checkedList\: e.target.checked ? plainOptions \: [],
      indeterminate\: false,
      checkAll\: e.target.checked,
    \});
  \}
\}

ReactDOM.render(<App />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-checkbox-demo-disabled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Disabled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Disabled checkbox.</div>
                      <div className="card-body pb-0">
                        <div id="CheckboxDisabled" />
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
                              {`import \{ Checkbox \} from 'antd';

ReactDOM.render(
  <div>
    <Checkbox defaultChecked=\{false\} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>
  , mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-checkbox-demo-layout">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Use with Grid</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CheckboxLayout" />
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
                              {`import \{ Checkbox, Row, Col \} from 'antd';

function onChange(checkedValues) \{
  console.log('checked = ', checkedValues);
\}

ReactDOM.render(
  <Checkbox.Group style=\{\{ width\: '100%' \}\} onChange=\{onChange\}>
    <Row>
      <Col span=\{8\}><Checkbox value="A">A</Checkbox></Col>
      <Col span=\{8\}><Checkbox value="B">B</Checkbox></Col>
      <Col span=\{8\}><Checkbox value="C">C</Checkbox></Col>
      <Col span=\{8\}><Checkbox value="D">D</Checkbox></Col>
      <Col span=\{8\}><Checkbox value="E">E</Checkbox></Col>
    </Row>
  </Checkbox.Group>,
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

export default CheckboxItems

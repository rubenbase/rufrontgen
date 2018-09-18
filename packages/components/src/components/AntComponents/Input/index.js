import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderInputAddon } from './Addon/index.js'
import { default as renderInputAutosizetextarea } from './Autosizetextarea/index.js'
import { default as renderInputBasic } from './Basic/index.js'
import { default as renderInputGroup } from './Group/index.js'
import { default as renderInputPresuffix } from './Presuffix/index.js'
import { default as renderInputSearchinput } from './Searchinput/index.js'
import { default as renderInputSize } from './Size/index.js'
import { default as renderInputTextarea } from './Textarea/index.js'
import { default as renderInputTooltip } from './Tooltip/index.js'

const Panel = Collapse.Panel

class InputItems extends React.Component {
  componentDidMount() {
    renderInputAddon(ReactDOM, document.getElementById('InputAddon'))
    renderInputAutosizetextarea(ReactDOM, document.getElementById('InputAutosizetextarea'))
    renderInputBasic(ReactDOM, document.getElementById('InputBasic'))
    renderInputGroup(ReactDOM, document.getElementById('InputGroup'))
    renderInputPresuffix(ReactDOM, document.getElementById('InputPresuffix'))
    renderInputSearchinput(ReactDOM, document.getElementById('InputSearchinput'))
    renderInputSize(ReactDOM, document.getElementById('InputSize'))
    renderInputTextarea(ReactDOM, document.getElementById('InputTextarea'))
    renderInputTooltip(ReactDOM, document.getElementById('InputTooltip'))
  }

  render() {
    return (
      <div className="InputDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Input</strong>
                  <a
                    href="https://ant.design/components/input/"
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
                    <div className="card card--example" id="components-input-demo-addon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Pre</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Using pre & post tabs example.</div>
                      <div className="card-body pb-0">
                        <div id="InputAddon" />
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
                              {`import \{ Input, Select, Icon \} from 'antd';
const Option = Select.Option;

const selectBefore = (
  <Select defaultValue="Http\://" style=\{\{ width\: 90 \}\}>
    <Option value="Http\://">Http\://</Option>
    <Option value="Https\://">Https\://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style=\{\{ width\: 80 \}\}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

ReactDOM.render(
  <div>
    <div style=\{\{ marginBottom\: 16 \}\}>
      <Input addonBefore="Http\://" addonAfter=".com" defaultValue="mysite" />
    </div>
    <div style=\{\{ marginBottom\: 16 \}\}>
      <Input addonBefore=\{selectBefore\} addonAfter=\{selectAfter\} defaultValue="mysite" />
    </div>
    <div style=\{\{ marginBottom\: 16 \}\}>
      <Input addonAfter=\{<Icon type="setting" />\} defaultValue="mysite" />
    </div>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-input-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic usage</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic usage example.</div>
                      <div className="card-body pb-0">
                        <div id="InputBasic" />
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
                              {`import \{ Input \} from 'antd';

ReactDOM.render(<Input placeholder="Basic usage" />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-input-demo-presuffix">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">prefix and suffix</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Add prefix or suffix icons inside input.</div>
                      <div className="card-body pb-0">
                        <div id="InputPresuffix" />
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
                              {`import \{ Input, Icon \} from 'antd';

class App extends React.Component \{
  constructor(props) \{
    super(props);
    this.state = \{
      userName\: '',
    \};
  \}
  emitEmpty = () => \{
    this.userNameInput.focus();
    this.setState(\{ userName\: '' \});
  \}
  onChangeUserName = (e) => \{
    this.setState(\{ userName\: e.target.value \});
  \}
  render() \{
    const \{ userName \} = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick=\{this.emitEmpty\} /> \: null;
    return (
      <Input
        placeholder="Enter your username"
        prefix=\{<Icon type="user" style=\{\{ color\: 'rgba(0,0,0,.25)' \}\} />\}
        suffix=\{suffix\}
        value=\{userName\}
        onChange=\{this.onChangeUserName\}
        ref=\{node => this.userNameInput = node\}
      />
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
                    <div className="card card--example" id="components-input-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Three sizes of Input</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        There are three sizes of an Input box: <code>{'large'}</code> (40px)、<code>
                          {'default'}
                        </code>{' '}
                        (32px) and <code>{'small'}</code> (24px). Note: Inside of forms, only the
                        large size is used.
                      </div>
                      <div className="card-body pb-0">
                        <div id="InputSize" />
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
                              {`import \{ Input \} from 'antd';

ReactDOM.render(
  <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-input-demo-tooltip">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Format Tooltip Input</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can use the Input in conjunction with [Tooltip](/components/tooltip)
                        component to create a Numeric Input, which can provide a good experience for
                        extra-long content display.
                      </div>
                      <div className="card-body pb-0">
                        <div id="InputTooltip" />
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
                              {`import \{ Input, Tooltip \} from 'antd';

function formatNumber(value) \{
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' \: '';
  let num = prefix ? list[0].slice(1) \: list[0];
  let result = '';
  while (num.length > 3) \{
    result = \`,\$\{num.slice(-3)\}\$\{result\}\`;
    num = num.slice(0, num.length - 3);
  \}
  if (num) \{
    result = num + result;
  \}
  return \`\$\{prefix\}\$\{result\}\$\{list[1] ? \`.\$\{list[1]\}\` \: ''\}\`;
\}

class NumericInput extends React.Component \{
  onChange = (e) => \{
    const \{ value \} = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?\$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') \{
      this.props.onChange(value);
    \}
  \}
  // '.' at the end or only '-' in the input box.
  onBlur = () => \{
    const \{ value, onBlur, onChange \} = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') \{
      onChange(\{ value\: value.slice(0, -1) \});
    \}
    if (onBlur) \{
      onBlur();
    \}
  \}
  render() \{
    const \{ value \} = this.props;
    const title = value ? (
      <span className="numeric-input-title">
        \{value !== '-' ? formatNumber(value) \: '-'\}
      </span>
    ) \: 'Input a number';
    return (
      <Tooltip
        trigger=\{['focus']\}
        title=\{title\}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          \{...this.props\}
          onChange=\{this.onChange\}
          onBlur=\{this.onBlur\}
          placeholder="Input a number"
          maxLength="25"
        />
      </Tooltip>
    );
  \}
\}

class NumericInputDemo extends React.Component \{
  constructor(props) \{
    super(props);
    this.state = \{ value\: '' \};
  \}
  onChange = (value) => \{
    this.setState(\{ value \});
  \}
  render() \{
    return <NumericInput style=\{\{ width\: 120 \}\} value=\{this.state.value\} onChange=\{this.onChange\} />;
  \}
\}

ReactDOM.render(<NumericInputDemo />, mountNode);
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
                      id="components-input-demo-autosize-textarea"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">
                            Autosizing the height to fit the content
                          </strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'autosize'}</code> prop for a <code>{'textarea'}</code> type of{' '}
                        <code>{'Input'}</code> makes the height to automatically adjust based on the
                        content. An options object can be provided to <code>{'autosize'}</code> to
                        specify the minimum and maximum number of lines the textarea will
                        automatically adjust.
                      </div>
                      <div className="card-body pb-0">
                        <div id="InputAutosizetextarea" />
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
                              {`import \{ Input \} from 'antd';
const \{ TextArea \} = Input;

ReactDOM.render(
  <div>
    <TextArea placeholder="Autosize height based on content lines" autosize />
    <div style=\{\{ margin\: '24px 0' \}\} />
    <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize=\{\{ minRows\: 2, maxRows\: 6 \}\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-input-demo-group">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Input Group</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Input.Group example Note: You don't need <code>{'Col'}</code> to control the
                        width in the <code>{'compact'}</code> mode.
                      </div>
                      <div className="card-body pb-0">
                        <div id="InputGroup" />
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
                              {`import \{ Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader \} from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

const options = [\{
  value\: 'zhejiang',
  label\: 'Zhejiang',
  children\: [\{
    value\: 'hangzhou',
    label\: 'Hangzhou',
    children\: [\{
      value\: 'xihu',
      label\: 'West Lake',
    \}],
  \}],
\}, \{
  value\: 'jiangsu',
  label\: 'Jiangsu',
  children\: [\{
    value\: 'nanjing',
    label\: 'Nanjing',
    children\: [\{
      value\: 'zhonghuamen',
      label\: 'Zhong Hua Men',
    \}],
  \}],
\}];

class CompactDemo extends React.Component \{
  state = \{
    dataSource\: [],
  \}
  handleChange = (value) => \{
    this.setState(\{
      dataSource\: !value || value.indexOf('@') >= 0 ? [] \: [
        \`\$\{value\}@gmail.com\`,
        \`\$\{value\}@163.com\`,
        \`\$\{value\}@qq.com\`,
      ],
    \});
  \}
  render() \{
    return (
      <div>
        <InputGroup size="large">
          <Col span=\{5\}>
            <Input defaultValue="0571" />
          </Col>
          <Col span=\{8\}>
            <Input defaultValue="26888888" />
          </Col>
        </InputGroup>
        <br />
        <InputGroup compact>
          <Input style=\{\{ width\: '20%' \}\} defaultValue="0571" />
          <Input style=\{\{ width\: '30%' \}\} defaultValue="26888888" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Zhejiang">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input style=\{\{ width\: '50%' \}\} defaultValue="Xihu District, Hangzhou" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <Input style=\{\{ width\: '50%' \}\} defaultValue="input content" />
          <InputNumber />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Input style=\{\{ width\: '50%' \}\} defaultValue="input content" />
          <DatePicker />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Option1-1">
            <Option value="Option1-1">Option1-1</Option>
            <Option value="Option1-2">Option1-2</Option>
          </Select>
          <Select defaultValue="Option2-2">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </Select>
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="1">
            <Option value="1">Between</Option>
            <Option value="2">Except</Option>
          </Select>
          <Input style=\{\{ width\: 100, textAlign\: 'center' \}\} placeholder="Minimum" />
          <Input style=\{\{ width\: 30, borderLeft\: 0, pointerEvents\: 'none', backgroundColor\: '#fff' \}\} placeholder="~" disabled />
          <Input style=\{\{ width\: 100, textAlign\: 'center', borderLeft\: 0 \}\} placeholder="Maximum" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Sign Up">
            <Option value="Sign Up">Sign Up</Option>
            <Option value="Sign In">Sign In</Option>
          </Select>
          <AutoComplete
            dataSource=\{this.state.dataSource\}
            style=\{\{ width\: 200 \}\}
            onChange=\{this.handleChange\}
            placeholder="Email"
          />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select style=\{\{ width\: '30%' \}\} defaultValue="Home">
            <Option value="Home">Home</Option>
            <Option value="Company">Company</Option>
          </Select>
          <Cascader style=\{\{ width\: '70%' \}\} options=\{options\} placeholder="Select Address" />
        </InputGroup>
      </div>
    );
  \}
\}

ReactDOM.render(<CompactDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-input-demo-search-input">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Search box</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Example of creating a search box by grouping a standard input with a search
                        button, added in <code>{'2.5.0'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="InputSearchinput" />
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
                              {`import \{ Input \} from 'antd';
const Search = Input.Search;

ReactDOM.render(
  <div>
    <Search
      placeholder="input search text"
      onSearch=\{value => console.log(value)\}
      style=\{\{ width\: 200 \}\}
    />
    <br /><br />
    <Search
      placeholder="input search text"
      onSearch=\{value => console.log(value)\}
      enterButton
    />
    <br /><br />
    <Search placeholder="input search text" enterButton="Search" size="large" />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-input-demo-textarea">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">TextArea</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">For multi-line input.</div>
                      <div className="card-body pb-0">
                        <div id="InputTextarea" />
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
                              {`import \{ Input \} from 'antd';
const \{ TextArea \} = Input;

ReactDOM.render(<TextArea rows=\{4\} />, mountNode);
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

export default InputItems

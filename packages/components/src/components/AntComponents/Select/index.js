import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderSelectAutomatictokenization } from './Automatictokenization/index.js'
import { default as renderSelectBasic } from './Basic/index.js'
import { default as renderSelectCombobox } from './Combobox/index.js'
import { default as renderSelectCoordinate } from './Coordinate/index.js'
import { default as renderSelectLabelinvalue } from './Labelinvalue/index.js'
import { default as renderSelectMultiple } from './Multiple/index.js'
import { default as renderSelectOptgroup } from './Optgroup/index.js'
import { default as renderSelectSearchbox } from './Searchbox/index.js'
import { default as renderSelectSearch } from './Search/index.js'
import { default as renderSelectSelectusers } from './Selectusers/index.js'
import { default as renderSelectSize } from './Size/index.js'
import { default as renderSelectTags } from './Tags/index.js'

const Panel = Collapse.Panel

class SelectItems extends React.Component {
  componentDidMount() {
    renderSelectAutomatictokenization(
      ReactDOM,
      document.getElementById('SelectAutomatictokenization'),
    )
    renderSelectBasic(ReactDOM, document.getElementById('SelectBasic'))
    renderSelectCombobox(ReactDOM, document.getElementById('SelectCombobox'))
    renderSelectCoordinate(ReactDOM, document.getElementById('SelectCoordinate'))
    renderSelectLabelinvalue(ReactDOM, document.getElementById('SelectLabelinvalue'))
    renderSelectMultiple(ReactDOM, document.getElementById('SelectMultiple'))
    renderSelectOptgroup(ReactDOM, document.getElementById('SelectOptgroup'))
    renderSelectSearchbox(ReactDOM, document.getElementById('SelectSearchbox'))
    renderSelectSearch(ReactDOM, document.getElementById('SelectSearch'))
    renderSelectSelectusers(ReactDOM, document.getElementById('SelectSelectusers'))
    renderSelectSize(ReactDOM, document.getElementById('SelectSize'))
    renderSelectTags(ReactDOM, document.getElementById('SelectTags'))
  }

  render() {
    return (
      <div className="SelectDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Select</strong>
                  <a
                    href="https://ant.design/components/select/"
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
                    <div
                      className="card card--example"
                      id="components-select-demo-automatic-tokenization"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Automatic tokenization</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Try to copy <code>{'Lucy,Jack'}</code> to the input. Only available in tags
                        and multiple mode.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectAutomatictokenization" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) \{
  children.push(<Option key=\{i.toString(36) + i\}>\{i.toString(36) + i\}</Option>);
\}

function handleChange(value) \{
  console.log(\`selected \$\{value\}\`);
\}

ReactDOM.render(
  <Select
    mode="tags"
    style=\{\{ width\: '100%' \}\}
    onChange=\{handleChange\}
    tokenSeparators=\{[',']\}
  >
    \{children\}
  </Select>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-combobox">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Automatic completion</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Automatic completion of select input. Using the
                        [AutoComplete](/components/auto-complete/) component is strongly recommended
                        instead as it is more flexible and capable.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectCombobox" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

class App extends React.Component \{
  state = \{
    options\: [],
  \}
  handleChange = (value) => \{
    let options;
    if (!value || value.indexOf('@') >= 0) \{
      options = [];
    \} else \{
      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => \{
        const email = \`\$\{value\}@\$\{domain\}\`;
        return <Option key=\{email\}>\{email\}</Option>;
      \});
    \}
    this.setState(\{ options \});
  \}
  render() \{
    // filterOption needs to be false，as the value is dynamically generated
    return (
      <Select
        mode="combobox"
        style=\{\{ width\: 200 \}\}
        onChange=\{this.handleChange\}
        filterOption=\{false\}
        placeholder="Enter the account name"
      >
        \{this.state.options\}
      </Select>
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
                    <div className="card card--example" id="components-select-demo-label-in-value">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Get value of selected item</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        As a default behavior, the onChange callback can only get the value of the
                        selected item. The labelInValue prop can be used to get the label property
                        of the selected item. The label of the selected item will be packed as an
                        object for passing to the onChange callback.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectLabelinvalue" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

function handleChange(value) \{
  console.log(value); // \{ key\: "lucy", label\: "Lucy (101)" \}
\}

ReactDOM.render(
  <Select labelInValue defaultValue=\{\{ key\: 'lucy' \}\} style=\{\{ width\: 120 \}\} onChange=\{handleChange\}>
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-optgroup">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Option Group</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Using <code>{'OptGroup'}</code> to group the options.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectOptgroup" />
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
                              {`import \{ Select \} from 'antd';
const \{ Option, OptGroup \} = Select;

function handleChange(value) \{
  console.log(\`selected \$\{value\}\`);
\}

ReactDOM.render(
  <Select
    defaultValue="lucy"
    style=\{\{ width\: 200 \}\}
    onChange=\{handleChange\}
  >
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-search">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Select with search field</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Search the options while expanded.</div>
                      <div className="card-body pb-0">
                        <div id="SelectSearch" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

function handleChange(value) \{
  console.log(\`selected \$\{value\}\`);
\}

function handleBlur() \{
  console.log('blur');
\}

function handleFocus() \{
  console.log('focus');
\}

ReactDOM.render(
  <Select
    showSearch
    style=\{\{ width\: 200 \}\}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange=\{handleChange\}
    onFocus=\{handleFocus\}
    onBlur=\{handleBlur\}
    filterOption=\{(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0\}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Sizes</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The height of the input field for the select defaults to 32px. If size is
                        set to large, the height will be 40px, and if set to small, 24px.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectSize" />
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
                              {`import \{ Select, Radio \} from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) \{
  children.push(<Option key=\{i.toString(36) + i\}>\{i.toString(36) + i\}</Option>);
\}

function handleChange(value) \{
  console.log(\`Selected\: \$\{value\}\`);
\}

class SelectSizesDemo extends React.Component \{
  state = \{
    size\: 'default',
  \};

  handleSizeChange = (e) => \{
    this.setState(\{ size\: e.target.value \});
  \}

  render() \{
    const \{ size \} = this.state;
    return (
      <div>
        <Radio.Group value=\{size\} onChange=\{this.handleSizeChange\}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Select
          size=\{size\}
          defaultValue="a1"
          onChange=\{handleChange\}
          style=\{\{ width\: 200 \}\}
        >
          \{children\}
        </Select>
        <br />
        <Select
          mode="combobox"
          size=\{size\}
          defaultValue="a1"
          onChange=\{handleChange\}
          style=\{\{ width\: 200 \}\}
        >
          \{children\}
        </Select>
        <br />
        <Select
          mode="multiple"
          size=\{size\}
          placeholder="Please select"
          defaultValue=\{['a10', 'c12']\}
          onChange=\{handleChange\}
          style=\{\{ width\: '100%' \}\}
        >
          \{children\}
        </Select>
        <br />
        <Select
          mode="tags"
          size=\{size\}
          placeholder="Please select"
          defaultValue=\{['a10', 'c12']\}
          onChange=\{handleChange\}
          style=\{\{ width\: '100%' \}\}
        >
          \{children\}
        </Select>
      </div>
    );
  \}
\}

ReactDOM.render(<SelectSizesDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-select-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic Usage</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic Usage.</div>
                      <div className="card-body pb-0">
                        <div id="SelectBasic" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

function handleChange(value) \{
  console.log(\`selected \$\{value\}\`);
\}

ReactDOM.render(
  <div>
    <Select defaultValue="lucy" style=\{\{ width\: 120 \}\} onChange=\{handleChange\}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style=\{\{ width\: 120 \}\} allowClear disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-coordinate">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">coordinate</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Coordinating the selection of provinces and cities is a common use case and
                        demonstrates how selection can be coordinated. Using the
                        [Cascader](/components/cascader) component is strongly recommended instead
                        as it is more flexible and capable.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectCoordinate" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = \{
  Zhejiang\: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu\: ['Nanjing', 'Suzhou', 'Zhenjiang'],
\};

class App extends React.Component \{
  state = \{
    cities\: cityData[provinceData[0]],
    secondCity\: cityData[provinceData[0]][0],
  \}
  handleProvinceChange = (value) => \{
    this.setState(\{
      cities\: cityData[value],
      secondCity\: cityData[value][0],
    \});
  \}
  onSecondCityChange = (value) => \{
    this.setState(\{
      secondCity\: value,
    \});
  \}
  render() \{
    const provinceOptions = provinceData.map(province => <Option key=\{province\}>\{province\}</Option>);
    const cityOptions = this.state.cities.map(city => <Option key=\{city\}>\{city\}</Option>);
    return (
      <div>
        <Select defaultValue=\{provinceData[0]\} style=\{\{ width\: 90 \}\} onChange=\{this.handleProvinceChange\}>
          \{provinceOptions\}
        </Select>
        <Select value=\{this.state.secondCity\} style=\{\{ width\: 90 \}\} onChange=\{this.onSecondCityChange\}>
          \{cityOptions\}
        </Select>
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
                    <div className="card card--example" id="components-select-demo-multiple">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">multiple selection</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Multiple selection, selecting from existing items (scroll the menu).
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectMultiple" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) \{
  children.push(<Option key=\{i.toString(36) + i\}>\{i.toString(36) + i\}</Option>);
\}

function handleChange(value) \{
  console.log(\`selected \$\{value\}\`);
\}

ReactDOM.render(
  <Select
    mode="multiple"
    style=\{\{ width\: '100%' \}\}
    placeholder="Please select"
    defaultValue=\{['a10', 'c12']\}
    onChange=\{handleChange\}
  >
    \{children\}
  </Select>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-search-box">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Search Box</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Autocomplete with remote ajax data.</div>
                      <div className="card-body pb-0">
                        <div id="SelectSearchbox" />
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
                              {`import \{ Select \} from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const Option = Select.Option;

let timeout;
let currentValue;

function fetch(value, callback) \{
  if (timeout) \{
    clearTimeout(timeout);
    timeout = null;
  \}
  currentValue = value;

  function fake() \{
    const str = querystring.encode(\{
      code\: 'utf-8',
      q\: value,
    \});
    jsonp(\`https\://suggest.taobao.com/sug?\$\{str\}\`)
      .then(response => response.json())
      .then((d) => \{
        if (currentValue === value) \{
          const result = d.result;
          const data = [];
          result.forEach((r) => \{
            data.push(\{
              value\: r[0],
              text\: r[0],
            \});
          \});
          callback(data);
        \}
      \});
  \}

  timeout = setTimeout(fake, 300);
\}

class SearchInput extends React.Component \{
  state = \{
    data\: [],
    value\: '',
  \}
  handleChange = (value) => \{
    this.setState(\{ value \});
    fetch(value, data => this.setState(\{ data \}));
  \}
  render() \{
    const options = this.state.data.map(d => <Option key=\{d.value\}>\{d.text\}</Option>);
    return (
      <Select
        mode="combobox"
        value=\{this.state.value\}
        placeholder=\{this.props.placeholder\}
        style=\{this.props.style\}
        defaultActiveFirstOption=\{false\}
        showArrow=\{false\}
        filterOption=\{false\}
        onChange=\{this.handleChange\}
      >
        \{options\}
      </Select>
    );
  \}
\}

ReactDOM.render(
  <SearchInput placeholder="input search text" style=\{\{ width\: 200 \}\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-select-users">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Search and Select Users</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A complete multiple select sample with remote search, debounce fetch, ajax
                        callback order flow, and loading state.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectSelectusers" />
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
                              {`import \{ Select, Spin \} from 'antd';
import debounce from 'lodash/debounce';
const Option = Select.Option;

class UserRemoteSelect extends React.Component \{
  constructor(props) \{
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  \}
  state = \{
    data\: [],
    value\: [],
    fetching\: false,
  \}
  fetchUser = (value) => \{
    console.log('fetching user', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState(\{ data\: [], fetching\: true \});
    fetch('https\://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then((body) => \{
        if (fetchId !== this.lastFetchId) \{ // for fetch callback order
          return;
        \}
        const data = body.results.map(user => (\{
          text\: \`\$\{user.name.first\} \$\{user.name.last\}\`,
          value\: user.login.username,
        \}));
        this.setState(\{ data, fetching\: false \});
      \});
  \}
  handleChange = (value) => \{
    this.setState(\{
      value,
      data\: [],
      fetching\: false,
    \});
  \}
  render() \{
    const \{ fetching, data, value \} = this.state;
    return (
      <Select
        mode="multiple"
        labelInValue
        value=\{value\}
        placeholder="Select users"
        notFoundContent=\{fetching ? <Spin size="small" /> \: null\}
        filterOption=\{false\}
        onSearch=\{this.fetchUser\}
        onChange=\{this.handleChange\}
        style=\{\{ width\: '100%' \}\}
      >
        \{data.map(d => <Option key=\{d.value\}>\{d.text\}</Option>)\}
      </Select>
    );
  \}
\}

ReactDOM.render(<UserRemoteSelect />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-select-demo-tags">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Tags</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Select with tags, transform input to tag (scroll the menu)
                      </div>
                      <div className="card-body pb-0">
                        <div id="SelectTags" />
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
                              {`import \{ Select \} from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) \{
  children.push(<Option key=\{i.toString(36) + i\}>\{i.toString(36) + i\}</Option>);
\}

function handleChange(value) \{
  console.log(\`selected \$\{value\}\`);
\}

ReactDOM.render(
  <Select
    mode="tags"
    style=\{\{ width\: '100%' \}\}
    placeholder="Tags Mode"
    onChange=\{handleChange\}
  >
    \{children\}
  </Select>
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

export default SelectItems

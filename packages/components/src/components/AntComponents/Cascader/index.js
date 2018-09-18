import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderCascaderBasic } from './Basic/index.js'
import { default as renderCascaderChangeonselect } from './Changeonselect/index.js'
import { default as renderCascaderCustomrender } from './Customrender/index.js'
import { default as renderCascaderCustomtrigger } from './Customtrigger/index.js'
import { default as renderCascaderDefaultvalue } from './Defaultvalue/index.js'
import { default as renderCascaderDisabledoption } from './Disabledoption/index.js'
import { default as renderCascaderHover } from './Hover/index.js'
import { default as renderCascaderLazy } from './Lazy/index.js'
import { default as renderCascaderSearch } from './Search/index.js'
import { default as renderCascaderSize } from './Size/index.js'

const Panel = Collapse.Panel

class CascaderItems extends React.Component {
  componentDidMount() {
    renderCascaderBasic(ReactDOM, document.getElementById('CascaderBasic'))
    renderCascaderChangeonselect(ReactDOM, document.getElementById('CascaderChangeonselect'))
    renderCascaderCustomrender(ReactDOM, document.getElementById('CascaderCustomrender'))
    renderCascaderCustomtrigger(ReactDOM, document.getElementById('CascaderCustomtrigger'))
    renderCascaderDefaultvalue(ReactDOM, document.getElementById('CascaderDefaultvalue'))
    renderCascaderDisabledoption(ReactDOM, document.getElementById('CascaderDisabledoption'))
    renderCascaderHover(ReactDOM, document.getElementById('CascaderHover'))
    renderCascaderLazy(ReactDOM, document.getElementById('CascaderLazy'))
    renderCascaderSearch(ReactDOM, document.getElementById('CascaderSearch'))
    renderCascaderSize(ReactDOM, document.getElementById('CascaderSize'))
  }

  render() {
    return (
      <div className="CascaderDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Cascader</strong>
                  <a
                    href="https://ant.design/components/cascader/"
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
                    <div className="card card--example" id="components-cascader-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Cascade selection box for selecting province/city/district.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CascaderBasic" />
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
                              {`import \{ Cascader \} from 'antd';

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

function onChange(value) \{
  console.log(value);
\}

ReactDOM.render(
  <Cascader options=\{options\} onChange=\{onChange\} placeholder="Please select" />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-cascader-demo-custom-render">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom render</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        For instance, add an external link after the selected value.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CascaderCustomrender" />
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
                              {`import \{ Cascader \} from 'antd';

const options = [\{
  value\: 'zhejiang',
  label\: 'Zhejiang',
  children\: [\{
    value\: 'hangzhou',
    label\: 'Hangzhou',
    children\: [\{
      value\: 'xihu',
      label\: 'West Lake',
      code\: 752100,
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
      code\: 453400,
    \}],
  \}],
\}];

function handleAreaClick(e, label, option) \{
  e.stopPropagation();
  console.log('clicked', label, option);
\}

const displayRender = (labels, selectedOptions) => labels.map((label, i) => \{
  const option = selectedOptions[i];
  if (i === labels.length - 1) \{
    return (
      <span key=\{option.value\}>
        \{label\} (<a onClick=\{e => handleAreaClick(e, label, option)\}>\{option.code\}</a>)
      </span>
    );
  \}
  return <span key=\{option.value\}>\{label\} / </span>;
\});

ReactDOM.render(
  <Cascader
    options=\{options\}
    defaultValue=\{['zhejiang', 'hangzhou', 'xihu']\}
    displayRender=\{displayRender\}
    style=\{\{ width\: '100%' \}\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-cascader-demo-default-value">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Default value</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Specifies default value by an array.</div>
                      <div className="card-body pb-0">
                        <div id="CascaderDefaultvalue" />
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
                              {`import \{ Cascader \} from 'antd';

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

function onChange(value) \{
  console.log(value);
\}

ReactDOM.render(
  <Cascader defaultValue=\{['zhejiang', 'hangzhou', 'xihu']\} options=\{options\} onChange=\{onChange\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-cascader-demo-hover">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Hover</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Hover to expand sub menu, click to select option.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CascaderHover" />
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
                              {`import \{ Cascader \} from 'antd';

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

function onChange(value) \{
  console.log(value);
\}

// Just show the latest item.
function displayRender(label) \{
  return label[label.length - 1];
\}

ReactDOM.render(
  <Cascader
    options=\{options\}
    expandTrigger="hover"
    displayRender=\{displayRender\}
    onChange=\{onChange\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-cascader-demo-search">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Search</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Search and select options directly. > Now,{' '}
                        <code>{'Cascader[showSearch]'}</code> doesn't support search on server, more
                        info [#5547](https://github.com/ant-design/ant-design/issues/5547)
                      </div>
                      <div className="card-body pb-0">
                        <div id="CascaderSearch" />
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
                              {`import \{ Cascader \} from 'antd';

const options = [\{
  value\: 'zhejiang',
  label\: 'Zhejiang',
  children\: [\{
    value\: 'hangzhou',
    label\: 'Hangzhou',
    children\: [\{
      value\: 'xihu',
      label\: 'West Lake',
    \}, \{
      value\: 'xiasha',
      label\: 'Xia Sha',
      disabled\: true,
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
      label\: 'Zhong Hua men',
    \}],
  \}],
\}];

function onChange(value, selectedOptions) \{
  console.log(value, selectedOptions);
\}

function filter(inputValue, path) \{
  return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
\}

ReactDOM.render(
  <Cascader
    options=\{options\}
    onChange=\{onChange\}
    placeholder="Please select"
    showSearch=\{\{ filter \}\}
  />,
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
                    <div
                      className="card card--example"
                      id="components-cascader-demo-change-on-select"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Change on select</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Allow only select parent options.</div>
                      <div className="card-body pb-0">
                        <div id="CascaderChangeonselect" />
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
                              {`import \{ Cascader \} from 'antd';

const options = [\{
  value\: 'zhejiang',
  label\: 'Zhejiang',
  children\: [\{
    value\: 'hangzhou',
    label\: 'Hanzhou',
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

function onChange(value) \{
  console.log(value);
\}

ReactDOM.render(
  <Cascader options=\{options\} onChange=\{onChange\} changeOnSelect />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-cascader-demo-custom-trigger"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom trigger</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Separate trigger button and result.</div>
                      <div className="card-body pb-0">
                        <div id="CascaderCustomtrigger" />
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
                              {`import \{ Cascader \} from 'antd';

const options = [\{
  value\: 'zhejiang',
  label\: 'Zhejiang',
  children\: [\{
    value\: 'hangzhou',
    label\: 'Hangzhou',
  \}],
\}, \{
  value\: 'jiangsu',
  label\: 'Jiangsu',
  children\: [\{
    value\: 'nanjing',
    label\: 'Nanjing',
  \}],
\}];

class CitySwitcher extends React.Component \{
  state = \{
    text\: 'Unselect',
  \};

  onChange = (value, selectedOptions) => \{
    this.setState(\{
      text\: selectedOptions.map(o => o.label).join(', '),
    \});
  \}
  render() \{
    return (
      <span>
        \{this.state.text\}
        &nbsp;
        <Cascader options=\{options\} onChange=\{this.onChange\}>
          <a href="#">Change city</a>
        </Cascader>
      </span>
    );
  \}
\}

ReactDOM.render(<CitySwitcher />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-cascader-demo-disabled-option"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Disabled option</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Disable option by specifying the <code>{'disabled'}</code> property in{' '}
                        <code>{'options'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CascaderDisabledoption" />
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
                              {`import \{ Cascader \} from 'antd';

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
  disabled\: true,
  children\: [\{
    value\: 'nanjing',
    label\: 'Nanjing',
    children\: [\{
      value\: 'zhonghuamen',
      label\: 'Zhong Hua Men',
    \}],
  \}],
\}];

function onChange(value) \{
  console.log(value);
\}

ReactDOM.render(
  <Cascader options=\{options\} onChange=\{onChange\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-cascader-demo-lazy">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Load Options Lazily</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Load options lazily with <code>{'loadData'}</code>. > Note:{' '}
                        <code>{'loadData'}</code> cannot work with <code>{'showSearch'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CascaderLazy" />
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
                              {`import \{ Cascader \} from 'antd';

const options = [\{
  value\: 'zhejiang',
  label\: 'Zhejiang',
  isLeaf\: false,
\}, \{
  value\: 'jiangsu',
  label\: 'Jiangsu',
  isLeaf\: false,
\}];

class LazyOptions extends React.Component \{
  state = \{
    options,
  \};
  onChange = (value, selectedOptions) => \{
    console.log(value, selectedOptions);
  \}
  loadData = (selectedOptions) => \{
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => \{
      targetOption.loading = false;
      targetOption.children = [\{
        label\: \`\$\{targetOption.label\} Dynamic 1\`,
        value\: 'dynamic1',
      \}, \{
        label\: \`\$\{targetOption.label\} Dynamic 2\`,
        value\: 'dynamic2',
      \}];
      this.setState(\{
        options\: [...this.state.options],
      \});
    \}, 1000);
  \}
  render() \{
    return (
      <Cascader
        options=\{this.state.options\}
        loadData=\{this.loadData\}
        onChange=\{this.onChange\}
        changeOnSelect
      />
    );
  \}
\}

ReactDOM.render(<LazyOptions />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-cascader-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Cascade selection box of different sizes.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CascaderSize" />
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
                              {`import \{ Cascader \} from 'antd';

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

function onChange(value) \{
  console.log(value);
\}

ReactDOM.render(
  <div>
    <Cascader size="large" options=\{options\} onChange=\{onChange\} /><br /><br />
    <Cascader options=\{options\} onChange=\{onChange\} /><br /><br />
    <Cascader size="small" options=\{options\} onChange=\{onChange\} /><br /><br />
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

export default CascaderItems

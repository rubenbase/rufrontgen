import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTransferAdvanced } from './Advanced/index.js'
import { default as renderTransferBasic } from './Basic/index.js'
import { default as renderTransferCustomitem } from './Customitem/index.js'
import { default as renderTransferLargedata } from './Largedata/index.js'
import { default as renderTransferSearch } from './Search/index.js'

const Panel = Collapse.Panel

class TransferItems extends React.Component {
  componentDidMount() {
    renderTransferAdvanced(ReactDOM, document.getElementById('TransferAdvanced'))
    renderTransferBasic(ReactDOM, document.getElementById('TransferBasic'))
    renderTransferCustomitem(ReactDOM, document.getElementById('TransferCustomitem'))
    renderTransferLargedata(ReactDOM, document.getElementById('TransferLargedata'))
    renderTransferSearch(ReactDOM, document.getElementById('TransferSearch'))
  }

  render() {
    return (
      <div className="TransferDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Transfer</strong>
                  <a
                    href="https://ant.design/components/transfer/"
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
                    <div className="card card--example" id="components-transfer-demo-advanced">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Advanced</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Advanced Usage of Transfer. You can customize the labels of the transfer
                        buttons, the width and height of the columns, and what should be displayed
                        in the footer.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TransferAdvanced" />
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
                              {`import \{ Transfer, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    mockData\: [],
    targetKeys\: [],
  \}
  componentDidMount() \{
    this.getMock();
  \}
  getMock = () => \{
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) \{
      const data = \{
        key\: i.toString(),
        title\: \`content\$\{i + 1\}\`,
        description\: \`description of content\$\{i + 1\}\`,
        chosen\: Math.random() * 2 > 1,
      \};
      if (data.chosen) \{
        targetKeys.push(data.key);
      \}
      mockData.push(data);
    \}
    this.setState(\{ mockData, targetKeys \});
  \}
  handleChange = (targetKeys) => \{
    this.setState(\{ targetKeys \});
  \}
  renderFooter = () => \{
    return (
      <Button
        size="small"
        style=\{\{ float\: 'right', margin\: 5 \}\}
        onClick=\{this.getMock\}
      >
        reload
      </Button>
    );
  \}
  render() \{
    return (
      <Transfer
        dataSource=\{this.state.mockData\}
        showSearch
        listStyle=\{\{
          width\: 250,
          height\: 300,
        \}\}
        operations=\{['to right', 'to left']\}
        targetKeys=\{this.state.targetKeys\}
        onChange=\{this.handleChange\}
        render=\{item => \`\$\{item.title\}-\$\{item.description\}\`\}
        footer=\{this.renderFooter\}
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
                    <div className="card card--example" id="components-transfer-demo-custom-item">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom datasource</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Custom each Transfer Item, and in this way you can render a complex
                        datasource.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TransferCustomitem" />
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
                              {`import \{ Transfer \} from 'antd';

class App extends React.Component \{
  state = \{
    mockData\: [],
    targetKeys\: [],
  \}
  componentDidMount() \{
    this.getMock();
  \}
  getMock = () => \{
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) \{
      const data = \{
        key\: i.toString(),
        title\: \`content\$\{i + 1\}\`,
        description\: \`description of content\$\{i + 1\}\`,
        chosen\: Math.random() * 2 > 1,
      \};
      if (data.chosen) \{
        targetKeys.push(data.key);
      \}
      mockData.push(data);
    \}
    this.setState(\{ mockData, targetKeys \});
  \}
  handleChange = (targetKeys, direction, moveKeys) => \{
    console.log(targetKeys, direction, moveKeys);
    this.setState(\{ targetKeys \});
  \}
  renderItem = (item) => \{
    const customLabel = (
      <span className="custom-item">
        \{item.title\} - \{item.description\}
      </span>
    );

    return \{
      label\: customLabel, // for displayed item
      value\: item.title, // for title and filter matching
    \};
  \}
  render() \{
    return (
      <Transfer
        dataSource=\{this.state.mockData\}
        listStyle=\{\{
          width\: 300,
          height\: 300,
        \}\}
        targetKeys=\{this.state.targetKeys\}
        onChange=\{this.handleChange\}
        render=\{this.renderItem\}
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
                    <div className="card card--example" id="components-transfer-demo-search">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Search</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Transfer with a search box.</div>
                      <div className="card-body pb-0">
                        <div id="TransferSearch" />
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
                              {`import \{ Transfer \} from 'antd';

class App extends React.Component \{
  state = \{
    mockData\: [],
    targetKeys\: [],
  \}
  componentDidMount() \{
    this.getMock();
  \}
  getMock = () => \{
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) \{
      const data = \{
        key\: i.toString(),
        title\: \`content\$\{i + 1\}\`,
        description\: \`description of content\$\{i + 1\}\`,
        chosen\: Math.random() * 2 > 1,
      \};
      if (data.chosen) \{
        targetKeys.push(data.key);
      \}
      mockData.push(data);
    \}
    this.setState(\{ mockData, targetKeys \});
  \}
  filterOption = (inputValue, option) => \{
    return option.description.indexOf(inputValue) > -1;
  \}
  handleChange = (targetKeys) => \{
    this.setState(\{ targetKeys \});
  \}
  render() \{
    return (
      <Transfer
        dataSource=\{this.state.mockData\}
        showSearch
        filterOption=\{this.filterOption\}
        targetKeys=\{this.state.targetKeys\}
        onChange=\{this.handleChange\}
        render=\{item => item.title\}
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
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-transfer-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The most basic usage of <code>{'Transfer'}</code> involves providing the
                        source data and target keys arrays, plus the rendering and some callback
                        functions.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TransferBasic" />
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
                              {`import \{ Transfer \} from 'antd';

const mockData = [];
for (let i = 0; i < 20; i++) \{
  mockData.push(\{
    key\: i.toString(),
    title\: \`content\$\{i + 1\}\`,
    description\: \`description of content\$\{i + 1\}\`,
    disabled\: i % 3 < 1,
  \});
\}

const targetKeys = mockData
        .filter(item => +item.key % 3 > 1)
        .map(item => item.key);

class App extends React.Component \{
  state = \{
    targetKeys,
    selectedKeys\: [],
  \}

  handleChange = (nextTargetKeys, direction, moveKeys) => \{
    this.setState(\{ targetKeys\: nextTargetKeys \});

    console.log('targetKeys\: ', targetKeys);
    console.log('direction\: ', direction);
    console.log('moveKeys\: ', moveKeys);
  \}

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => \{
    this.setState(\{ selectedKeys\: [...sourceSelectedKeys, ...targetSelectedKeys] \});

    console.log('sourceSelectedKeys\: ', sourceSelectedKeys);
    console.log('targetSelectedKeys\: ', targetSelectedKeys);
  \}

  handleScroll = (direction, e) => \{
    console.log('direction\:', direction);
    console.log('target\:', e.target);
  \}

  render() \{
    const state = this.state;
    return (
      <Transfer
        dataSource=\{mockData\}
        titles=\{['Source', 'Target']\}
        targetKeys=\{state.targetKeys\}
        selectedKeys=\{state.selectedKeys\}
        onChange=\{this.handleChange\}
        onSelectChange=\{this.handleSelectChange\}
        onScroll=\{this.handleScroll\}
        render=\{item => item.title\}
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
                    <div className="card card--example" id="components-transfer-demo-large-data">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Performance Test</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">2000 items.</div>
                      <div className="card-body pb-0">
                        <div id="TransferLargedata" />
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
                              {`import \{ Transfer \} from 'antd';

class App extends React.Component \{
  state = \{
    mockData\: [],
    targetKeys\: [],
  \}
  componentDidMount() \{
    this.getMock();
  \}
  getMock = () => \{
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 2000; i++) \{
      const data = \{
        key\: i.toString(),
        title\: \`content\$\{i + 1\}\`,
        description\: \`description of content\$\{i + 1\}\`,
        chosen\: Math.random() * 2 > 1,
      \};
      if (data.chosen) \{
        targetKeys.push(data.key);
      \}
      mockData.push(data);
    \}
    this.setState(\{ mockData, targetKeys \});
  \}
  handleChange = (targetKeys, direction, moveKeys) => \{
    console.log(targetKeys, direction, moveKeys);
    this.setState(\{ targetKeys \});
  \}
  render() \{
    return (
      <Transfer
        dataSource=\{this.state.mockData\}
        targetKeys=\{this.state.targetKeys\}
        onChange=\{this.handleChange\}
        render=\{item => item.title\}
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

export default TransferItems

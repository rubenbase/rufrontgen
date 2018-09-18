import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTabsBasic } from './Basic/index.js'
import { default as renderTabsCardtop } from './Cardtop/index.js'
import { default as renderTabsCard } from './Card/index.js'
import { default as renderTabsCustomaddtrigger } from './Customaddtrigger/index.js'
import { default as renderTabsDisabled } from './Disabled/index.js'
import { default as renderTabsEditablecard } from './Editablecard/index.js'
import { default as renderTabsExtra } from './Extra/index.js'
import { default as renderTabsIcon } from './Icon/index.js'
import { default as renderTabsPosition } from './Position/index.js'
import { default as renderTabsSize } from './Size/index.js'
import { default as renderTabsSlide } from './Slide/index.js'

const Panel = Collapse.Panel

class TabsItems extends React.Component {
  componentDidMount() {
    renderTabsBasic(ReactDOM, document.getElementById('TabsBasic'))
    renderTabsCardtop(ReactDOM, document.getElementById('TabsCardtop'))
    renderTabsCard(ReactDOM, document.getElementById('TabsCard'))
    renderTabsCustomaddtrigger(ReactDOM, document.getElementById('TabsCustomaddtrigger'))
    renderTabsDisabled(ReactDOM, document.getElementById('TabsDisabled'))
    renderTabsEditablecard(ReactDOM, document.getElementById('TabsEditablecard'))
    renderTabsExtra(ReactDOM, document.getElementById('TabsExtra'))
    renderTabsIcon(ReactDOM, document.getElementById('TabsIcon'))
    renderTabsPosition(ReactDOM, document.getElementById('TabsPosition'))
    renderTabsSize(ReactDOM, document.getElementById('TabsSize'))
    renderTabsSlide(ReactDOM, document.getElementById('TabsSlide'))
  }

  render() {
    return (
      <div className="TabsDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Tabs</strong>
                  <a
                    href="https://ant.design/components/tabs/"
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
                    <div className="card card--example" id="components-tabs-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Default activate first tab.</div>
                      <div className="card-body pb-0">
                        <div id="TabsBasic" />
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
                              {`import \{ Tabs \} from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) \{
  console.log(key);
\}

ReactDOM.render(
  <Tabs defaultActiveKey="1" onChange=\{callback\}>
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-card">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Card type tab</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Another type Tabs, which doesn't support vertical mode.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsCard" />
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
                              {`import \{ Tabs \} from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) \{
  console.log(key);
\}

ReactDOM.render(
  <Tabs onChange=\{callback\} type="card">
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-disabled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Disabled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Disabled a tab.</div>
                      <div className="card-body pb-0">
                        <div id="TabsDisabled" />
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
                              {`import \{ Tabs \} from 'antd';
const TabPane = Tabs.TabPane;

ReactDOM.render(
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
    <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
  </Tabs>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-extra">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Extra content</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can add extra actions to the right of Tabs.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsExtra" />
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
                              {`import \{ Tabs, Button \} from 'antd';
const TabPane = Tabs.TabPane;

const operations = <Button>Extra Action</Button>;

ReactDOM.render(
  <Tabs tabBarExtraContent=\{operations\}>
    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
  </Tabs>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-position">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Position</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Tab's position: left, right, top or bottom.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsPosition" />
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
                              {`import \{ Tabs, Select \} from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;


class Demo extends React.Component \{
  state = \{
    tabPosition\: 'top',
  \}
  changeTabPosition = (tabPosition) => \{
    this.setState(\{ tabPosition \});
  \}
  render() \{
    return (
      <div>
        <div style=\{\{ marginBottom\: 16 \}\}>
          Tab position：
          <Select
            value=\{this.state.tabPosition\}
            onChange=\{this.changeTabPosition\}
            dropdownMatchSelectWidth=\{false\}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </div>
        <Tabs tabPosition=\{this.state.tabPosition\}>
          <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
        </Tabs>
      </div>
    );
  \}
\}

ReactDOM.render(<Demo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-slide">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Slide</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Tab can be slide to left or right(up or down), which is used for a lot of
                        tabs.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsSlide" />
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
                              {`import \{ Tabs, Radio \} from 'antd';
const TabPane = Tabs.TabPane;

class SlidingTabsDemo extends React.Component \{
  constructor(props) \{
    super(props);
    this.state = \{
      mode\: 'top',
    \};
  \}
  handleModeChange = (e) => \{
    const mode = e.target.value;
    this.setState(\{ mode \});
  \}
  render() \{
    const \{ mode \} = this.state;
    return (
      <div>
        <Radio.Group onChange=\{this.handleModeChange\} value=\{mode\} style=\{\{ marginBottom\: 8 \}\}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition=\{mode\}
          style=\{\{ height\: 220 \}\}
        >
          <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
          <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
          <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
          <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
          <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
          <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
          <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
          <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
          <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
        </Tabs>
      </div>
    );
  \}
\}

ReactDOM.render(<SlidingTabsDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-tabs-demo-card-top">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Container of card type Tab</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Should be used at the top of container, needs to override styles.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsCardtop" />
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
                              {`import \{ Tabs \} from 'antd';
const TabPane = Tabs.TabPane;

ReactDOM.render(
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
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
                      id="components-tabs-demo-custom-add-trigger"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized trigger of new tab</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Hide default plus icon, and bind event for customized trigger.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsCustomaddtrigger" />
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
                              {`import \{ Tabs, Button \} from 'antd';
const TabPane = Tabs.TabPane;

class Demo extends React.Component \{
  constructor(props) \{
    super(props);
    this.newTabIndex = 0;
    const panes = [
      \{ title\: 'Tab 1', content\: 'Content of Tab Pane 1', key\: '1' \},
      \{ title\: 'Tab 2', content\: 'Content of Tab Pane 2', key\: '2' \},
    ];
    this.state = \{
      activeKey\: panes[0].key,
      panes,
    \};
  \}

  onChange = (activeKey) => \{
    this.setState(\{ activeKey \});
  \}
  onEdit = (targetKey, action) => \{
    this[action](targetKey);
  \}
  add = () => \{
    const panes = this.state.panes;
    const activeKey = \`newTab\$\{this.newTabIndex++\}\`;
    panes.push(\{ title\: 'New Tab', content\: 'New Tab Pane', key\: activeKey \});
    this.setState(\{ panes, activeKey \});
  \}
  remove = (targetKey) => \{
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => \{
      if (pane.key === targetKey) \{
        lastIndex = i - 1;
      \}
    \});
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) \{
      activeKey = panes[lastIndex].key;
    \}
    this.setState(\{ panes, activeKey \});
  \}
  render() \{
    return (
      <div>
        <div style=\{\{ marginBottom\: 16 \}\}>
          <Button onClick=\{this.add\}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange=\{this.onChange\}
          activeKey=\{this.state.activeKey\}
          type="editable-card"
          onEdit=\{this.onEdit\}
        >
          \{this.state.panes.map(pane => <TabPane tab=\{pane.title\} key=\{pane.key\}>\{pane.content\}</TabPane>)\}
        </Tabs>
      </div>
    );
  \}
\}

ReactDOM.render(<Demo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-editable-card">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Add</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Only card type Tabs support adding & closable. +Use{' '}
                        <code>{'closable={false}'}</code> to disable close.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsEditablecard" />
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
                              {`import \{ Tabs \} from 'antd';
const TabPane = Tabs.TabPane;

class Demo extends React.Component \{
  constructor(props) \{
    super(props);
    this.newTabIndex = 0;
    const panes = [
      \{ title\: 'Tab 1', content\: 'Content of Tab 1', key\: '1' \},
      \{ title\: 'Tab 2', content\: 'Content of Tab 2', key\: '2' \},
      \{ title\: 'Tab 3', content\: 'Content of Tab 3', key\: '3', closable\: false \},
    ];
    this.state = \{
      activeKey\: panes[0].key,
      panes,
    \};
  \}

  onChange = (activeKey) => \{
    this.setState(\{ activeKey \});
  \}
  onEdit = (targetKey, action) => \{
    this[action](targetKey);
  \}
  add = () => \{
    const panes = this.state.panes;
    const activeKey = \`newTab\$\{this.newTabIndex++\}\`;
    panes.push(\{ title\: 'New Tab', content\: 'Content of new Tab', key\: activeKey \});
    this.setState(\{ panes, activeKey \});
  \}
  remove = (targetKey) => \{
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => \{
      if (pane.key === targetKey) \{
        lastIndex = i - 1;
      \}
    \});
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) \{
      activeKey = panes[lastIndex].key;
    \}
    this.setState(\{ panes, activeKey \});
  \}
  render() \{
    return (
      <Tabs
        onChange=\{this.onChange\}
        activeKey=\{this.state.activeKey\}
        type="editable-card"
        onEdit=\{this.onEdit\}
      >
        \{this.state.panes.map(pane => <TabPane tab=\{pane.title\} key=\{pane.key\} closable=\{pane.closable\}>\{pane.content\}</TabPane>)\}
      </Tabs>
    );
  \}
\}

ReactDOM.render(<Demo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-icon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The Tab with Icon.</div>
                      <div className="card-body pb-0">
                        <div id="TabsIcon" />
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
                              {`import \{ Tabs, Icon \} from 'antd';
const TabPane = Tabs.TabPane;

ReactDOM.render(
  <Tabs defaultActiveKey="2">
    <TabPane tab=\{<span><Icon type="apple" />Tab 1</span>\} key="1">
      Tab 1
    </TabPane>
    <TabPane tab=\{<span><Icon type="android" />Tab 2</span>\} key="2">
      Tab 2
    </TabPane>
  </Tabs>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tabs-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Large size tabs are usally used in page header, and small size could be used
                        in Modal.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TabsSize" />
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
                              {`import \{ Tabs, Radio \} from 'antd';
const \{ TabPane \} = Tabs;

class Demo extends React.Component \{
  state = \{ size\: 'small' \};
  onChange = (e) => \{
    this.setState(\{ size\: e.target.value \});
  \}
  render() \{
    const \{ size \} = this.state;
    return (
      <div>
        <Radio.Group value=\{size\} onChange=\{this.onChange\} style=\{\{ marginBottom\: 16 \}\}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" size=\{size\}>
          <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
        </Tabs>
      </div>
    );
  \}
\}

ReactDOM.render(<Demo />, mountNode);
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

export default TabsItems

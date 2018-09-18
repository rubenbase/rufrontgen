import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderMenuHorizontal } from './Horizontal/index.js'
import { default as renderMenuInlinecollapsed } from './Inlinecollapsed/index.js'
import { default as renderMenuInline } from './Inline/index.js'
import { default as renderMenuSidercurrent } from './Sidercurrent/index.js'
import { default as renderMenuSwitchmode } from './Switchmode/index.js'
import { default as renderMenuTheme } from './Theme/index.js'
import { default as renderMenuVertical } from './Vertical/index.js'

const Panel = Collapse.Panel

class MenuItems extends React.Component {
  componentDidMount() {
    renderMenuHorizontal(ReactDOM, document.getElementById('MenuHorizontal'))
    renderMenuInlinecollapsed(ReactDOM, document.getElementById('MenuInlinecollapsed'))
    renderMenuInline(ReactDOM, document.getElementById('MenuInline'))
    renderMenuSidercurrent(ReactDOM, document.getElementById('MenuSidercurrent'))
    renderMenuSwitchmode(ReactDOM, document.getElementById('MenuSwitchmode'))
    renderMenuTheme(ReactDOM, document.getElementById('MenuTheme'))
    renderMenuVertical(ReactDOM, document.getElementById('MenuVertical'))
  }

  render() {
    return (
      <div className="MenuDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Menu</strong>
                  <a
                    href="https://ant.design/components/menu/"
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
                    <div className="card card--example" id="components-menu-demo-horizontal">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Top Navigation</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Horizontal top navigation menu.</div>
                      <div className="card-body pb-0">
                        <div id="MenuHorizontal" />
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
                              {`import \{ Menu, Icon \} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component \{
  state = \{
    current\: 'mail',
  \}
  handleClick = (e) => \{
    console.log('click ', e);
    this.setState(\{
      current\: e.key,
    \});
  \}
  render() \{
    return (
      <Menu
        onClick=\{this.handleClick\}
        selectedKeys=\{[this.state.current]\}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title=\{<span><Icon type="setting" />Navigation Three - Submenu</span>\}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting\:1">Option 1</Menu.Item>
            <Menu.Item key="setting\:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting\:3">Option 3</Menu.Item>
            <Menu.Item key="setting\:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https\://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
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
                    <div className="card card--example" id="components-menu-demo-inline">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Inline menu</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Vertical menu with inline submenus.</div>
                      <div className="card-body pb-0">
                        <div id="MenuInline" />
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
                              {`import \{ Menu, Icon \} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component \{
  handleClick = (e) => \{
    console.log('click ', e);
  \}
  render() \{
    return (
      <Menu
        onClick=\{this.handleClick\}
        style=\{\{ width\: 256 \}\}
        defaultSelectedKeys=\{['1']\}
        defaultOpenKeys=\{['sub1']\}
        mode="inline"
      >
        <SubMenu key="sub1" title=\{<span><Icon type="mail" /><span>Navigation One</span></span>\}>
          <MenuItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title=\{<span><Icon type="appstore" /><span>Navigation Two</span></span>\}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title=\{<span><Icon type="setting" /><span>Navigation Three</span></span>\}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  \}
\}

ReactDOM.render(<Sider />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-menu-demo-switch-mode">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Switch the menu type</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Show the dynamic switching mode (between 'inline' and 'vertical').
                      </div>
                      <div className="card-body pb-0">
                        <div id="MenuSwitchmode" />
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
                              {`import \{ Menu, Icon, Switch \} from 'antd';
const \{ SubMenu \} = Menu;

class Sider extends React.Component \{
  state = \{
    mode\: 'inline',
    theme\: 'light',
  \}
  changeMode = (value) => \{
    this.setState(\{
      mode\: value ? 'vertical' \: 'inline',
    \});
  \}
  changeTheme = (value) => \{
    this.setState(\{
      theme\: value ? 'dark' \: 'light',
    \});
  \}
  render() \{
    return (
      <div>
        <Switch onChange=\{this.changeMode\} /> Change Mode
        <span className="ant-divider" style=\{\{ margin\: '0 1em' \}\} />
        <Switch onChange=\{this.changeTheme\} /> Change Theme
        <br />
        <br />
        <Menu
          style=\{\{ width\: 256 \}\}
          defaultSelectedKeys=\{['1']\}
          defaultOpenKeys=\{['sub1']\}
          mode=\{this.state.mode\}
          theme=\{this.state.theme\}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
          <SubMenu key="sub1" title=\{<span><Icon type="appstore" /><span>Navigation Three</span></span>\}>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" title=\{<span><Icon type="setting" /><span>Navigation Four</span></span>\}>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  \}
\}

ReactDOM.render(<Sider />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-menu-demo-vertical">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Vertical menu</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Submenus open as pop-ups.</div>
                      <div className="card-body pb-0">
                        <div id="MenuVertical" />
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
                              {`import \{ Menu, Icon \} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) \{
  console.log('click', e);
\}

ReactDOM.render(
  <Menu onClick=\{handleClick\} style=\{\{ width\: 256 \}\} mode="vertical">
    <SubMenu key="sub1" title=\{<span><Icon type="mail" /><span>Navigation One</span></span>\}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Iteom 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <SubMenu key="sub2" title=\{<span><Icon type="appstore" /><span>Navigation Two</span></span>\}>
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" title=\{<span><Icon type="setting" /><span>Navigation Three</span></span>\}>
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-menu-demo-inline-collapsed">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Collapsed inline menu</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Inline menu could be collapsed. Here is [a complete
                        demo](/components/layout/#components-layout-demo-side) with sider layout.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MenuInlinecollapsed" />
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
                              {`import \{ Menu, Icon, Button \} from 'antd';
const SubMenu = Menu.SubMenu;

class App extends React.Component \{
  state = \{
    collapsed\: false,
  \}
  toggleCollapsed = () => \{
    this.setState(\{
      collapsed\: !this.state.collapsed,
    \});
  \}
  render() \{
    return (
      <div style=\{\{ width\: 256 \}\}>
        <Button type="primary" onClick=\{this.toggleCollapsed\} style=\{\{ marginBottom\: 16 \}\}>
          <Icon type=\{this.state.collapsed ? 'menu-unfold' \: 'menu-fold'\} />
        </Button>
        <Menu
          defaultSelectedKeys=\{['1']\}
          defaultOpenKeys=\{['sub1']\}
          mode="inline"
          theme="dark"
          inlineCollapsed=\{this.state.collapsed\}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title=\{<span><Icon type="mail" /><span>Navigation One</span></span>\}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title=\{<span><Icon type="appstore" /><span>Navigation Two</span></span>\}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
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
                    <div className="card card--example" id="components-menu-demo-sider-current">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Open current submenu only</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Click the menu and you will see that all the other menus gets collapsed to
                        keep the entire menu compact.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MenuSidercurrent" />
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
                              {`import \{ Menu, Icon \} from 'antd';
const SubMenu = Menu.SubMenu;

class Sider extends React.Component \{
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = \{
    openKeys\: ['sub1'],
  \};
  onOpenChange = (openKeys) => \{
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) \{
      this.setState(\{ openKeys \});
    \} else \{
      this.setState(\{
        openKeys\: latestOpenKey ? [latestOpenKey] \: [],
      \});
    \}
  \}
  render() \{
    return (
      <Menu
        mode="inline"
        openKeys=\{this.state.openKeys\}
        onOpenChange=\{this.onOpenChange\}
        style=\{\{ width\: 256 \}\}
      >
        <SubMenu key="sub1" title=\{<span><Icon type="mail" /><span>Navigation One</span></span>\}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title=\{<span><Icon type="appstore" /><span>Navigation Two</span></span>\}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title=\{<span><Icon type="setting" /><span>Navigation Three</span></span>\}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  \}
\}

ReactDOM.render(<Sider />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-menu-demo-theme">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Menu Themes</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        There are two built-in themes: 'light' and 'dark'. The default value is
                        'light'.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MenuTheme" />
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
                              {`import \{ Menu, Icon, Switch \} from 'antd';
const SubMenu = Menu.SubMenu;

class Sider extends React.Component \{
  state = \{
    theme\: 'dark',
    current\: '1',
  \}
  changeTheme = (value) => \{
    this.setState(\{
      theme\: value ? 'dark' \: 'light',
    \});
  \}
  handleClick = (e) => \{
    console.log('click ', e);
    this.setState(\{
      current\: e.key,
    \});
  \}
  render() \{
    return (
      <div>
        <Switch
          checked=\{this.state.theme === 'dark'\}
          onChange=\{this.changeTheme\}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme=\{this.state.theme\}
          onClick=\{this.handleClick\}
          style=\{\{ width\: 256 \}\}
          defaultOpenKeys=\{['sub1']\}
          selectedKeys=\{[this.state.current]\}
          mode="inline"
        >
          <SubMenu key="sub1" title=\{<span><Icon type="mail" /><span>Navigation One</span></span>\}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title=\{<span><Icon type="appstore" /><span>Navigtion Two</span></span>\}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title=\{<span><Icon type="setting" /><span>Navigation Three</span></span>\}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  \}
\}

ReactDOM.render(<Sider />, mountNode);
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

export default MenuItems

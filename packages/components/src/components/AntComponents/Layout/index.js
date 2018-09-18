import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderLayoutBasic } from './Basic/index.js'
import { default as renderLayoutCustomtrigger } from './Customtrigger/index.js'
import { default as renderLayoutFixedsider } from './Fixedsider/index.js'
import { default as renderLayoutFixed } from './Fixed/index.js'
import { default as renderLayoutResponsive } from './Responsive/index.js'
import { default as renderLayoutSide } from './Side/index.js'
import { default as renderLayoutTopside2 } from './Topside2/index.js'
import { default as renderLayoutTopside } from './Topside/index.js'
import { default as renderLayoutTop } from './Top/index.js'

const Panel = Collapse.Panel

class LayoutItems extends React.Component {
  componentDidMount() {
    renderLayoutBasic(ReactDOM, document.getElementById('LayoutBasic'))
    renderLayoutCustomtrigger(ReactDOM, document.getElementById('LayoutCustomtrigger'))
    renderLayoutFixedsider(ReactDOM, document.getElementById('LayoutFixedsider'))
    renderLayoutFixed(ReactDOM, document.getElementById('LayoutFixed'))
    renderLayoutResponsive(ReactDOM, document.getElementById('LayoutResponsive'))
    renderLayoutSide(ReactDOM, document.getElementById('LayoutSide'))
    renderLayoutTopside2(ReactDOM, document.getElementById('LayoutTopside2'))
    renderLayoutTopside(ReactDOM, document.getElementById('LayoutTopside'))
    renderLayoutTop(ReactDOM, document.getElementById('LayoutTop'))
  }

  render() {
    return (
      <div className="LayoutDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Layout</strong>
                  <a
                    href="https://ant.design/components/layout/"
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
                    <div className="card card--example" id="components-layout-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic Structure</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Classic page layouts.</div>
                      <div className="card-body pb-0">
                        <div id="LayoutBasic" />
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
                              {`import \{ Layout \} from 'antd';
const \{ Header, Footer, Sider, Content \} = Layout;

ReactDOM.render(
  <div>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-layout-demo-fixed-sider">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Fixed Sider</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        When dealing with long content, a fixed sider can provide a better user
                        experience.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutFixedsider" />
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
                              {`import \{ Layout, Menu, Icon \} from 'antd';
const \{ Header, Content, Footer, Sider \} = Layout;

ReactDOM.render(
  <Layout>
    <Sider style=\{\{ overflow\: 'auto', height\: '100vh', position\: 'fixed', left\: 0 \}\}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys=\{['4']\}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="bar-chart" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="appstore-o" />
          <span className="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="team" />
          <span className="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="shop" />
          <span className="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style=\{\{ marginLeft\: 200 \}\}>
      <Header style=\{\{ background\: '#fff', padding\: 0 \}\} />
      <Content style=\{\{ margin\: '24px 16px 0', overflow\: 'initial' \}\}>
        <div style=\{\{ padding\: 24, background\: '#fff', textAlign\: 'center' \}\}>
          ...
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          content
        </div>
      </Content>
      <Footer style=\{\{ textAlign\: 'center' \}\}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-layout-demo-responsive">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Responsive</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Layout.Sider supports responsive layout. > Note: You can get a responsive
                        layout by setting <code>{'breakpoint'}</code>, the Sider will collapse to
                        the width of <code>{'collapsedWidth'}</code> when window width is below the{' '}
                        <code>{'breakpoint'}</code>. And a special trigger will appear if the{' '}
                        <code>{'collapsedWidth'}</code> is set to <code>{'0'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutResponsive" />
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
                              {`import \{ Layout, Menu, Icon \} from 'antd';
const \{ Header, Content, Footer, Sider \} = Layout;

ReactDOM.render(
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse=\{(collapsed, type) => \{ console.log(collapsed, type); \}\}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys=\{['4']\}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style=\{\{ background\: '#fff', padding\: 0 \}\} />
      <Content style=\{\{ margin\: '24px 16px 0' \}\}>
        <div style=\{\{ padding\: 24, background\: '#fff', minHeight\: 360 \}\}>
          content
        </div>
      </Content>
      <Footer style=\{\{ textAlign\: 'center' \}\}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-layout-demo-top-side-2">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Header Sider 2</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Both the top navigation and the sidebar, commonly used in application site.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutTopside2" />
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
                              {`import \{ Layout, Menu, Breadcrumb, Icon \} from 'antd';
const \{ SubMenu \} = Menu;
const \{ Header, Content, Sider \} = Layout;

ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys=\{['2']\}
        style=\{\{ lineHeight\: '64px' \}\}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width=\{200\} style=\{\{ background\: '#fff' \}\}>
        <Menu
          mode="inline"
          defaultSelectedKeys=\{['1']\}
          defaultOpenKeys=\{['sub1']\}
          style=\{\{ height\: '100%', borderRight\: 0 \}\}
        >
          <SubMenu key="sub1" title=\{<span><Icon type="user" />subnav 1</span>\}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title=\{<span><Icon type="laptop" />subnav 2</span>\}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title=\{<span><Icon type="notification" />subnav 3</span>\}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style=\{\{ padding\: '0 24px 24px' \}\}>
        <Breadcrumb style=\{\{ margin\: '16px 0' \}\}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style=\{\{ background\: '#fff', padding\: 24, margin\: 0, minHeight\: 280 \}\}>
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-layout-demo-top">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The most basic "header-content-footer" layout. Generally, the mainnav is
                        placed at the top of the page, and includes the logo, the first level
                        navigation, and the secondary menu (users, settings, notifications) from
                        left to right in it. We always put contents in a fixed size navigation (eg:{' '}
                        <code>{'1200px'}</code>), the layout of the whole page is stable, it's not
                        affected by viewing area. Top-bottom structure is conform with the
                        top-bottom viewing habit, it's a classical navigation pattern of websites.
                        This pattern demonstrates efficiency in the main workarea, while using some
                        vertical space. And because the horizontal space of the navigation is
                        limited, this pattern is not suitable for cases when the first level
                        navigation contains many elements or links
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutTop" />
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
                              {`import \{ Layout, Menu, Breadcrumb \} from 'antd';
const \{ Header, Content, Footer \} = Layout;

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys=\{['2']\}
        style=\{\{ lineHeight\: '64px' \}\}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style=\{\{ padding\: '0 50px' \}\}>
      <Breadcrumb style=\{\{ margin\: '16px 0' \}\}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style=\{\{ background\: '#fff', padding\: 24, minHeight\: 280 \}\}>Content</div>
    </Content>
    <Footer style=\{\{ textAlign\: 'center' \}\}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-layout-demo-custom-trigger">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom trigger</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        If you want to use a customized trigger, you can hide the default one by
                        setting <code>{'trigger={null}'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutCustomtrigger" />
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
                              {`import \{ Layout, Menu, Icon \} from 'antd';
const \{ Header, Sider, Content \} = Layout;

class SiderDemo extends React.Component \{
  state = \{
    collapsed\: false,
  \};
  toggle = () => \{
    this.setState(\{
      collapsed\: !this.state.collapsed,
    \});
  \}
  render() \{
    return (
      <Layout>
        <Sider
          trigger=\{null\}
          collapsible
          collapsed=\{this.state.collapsed\}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys=\{['1']\}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style=\{\{ background\: '#fff', padding\: 0 \}\}>
            <Icon
              className="trigger"
              type=\{this.state.collapsed ? 'menu-unfold' \: 'menu-fold'\}
              onClick=\{this.toggle\}
            />
          </Header>
          <Content style=\{\{ margin\: '24px 16px', padding\: 24, background\: '#fff', minHeight\: 280 \}\}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  \}
\}

ReactDOM.render(<SiderDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-layout-demo-fixed">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Fixed Header</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Fixed Header is generally used to fix the top navigation to facilitate page
                        switching.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutFixed" />
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
                              {`import \{ Layout, Menu, Breadcrumb \} from 'antd';
const \{ Header, Content, Footer \} = Layout;

ReactDOM.render(
  <Layout>
    <Header style=\{\{ position\: 'fixed', width\: '100%' \}\}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys=\{['2']\}
        style=\{\{ lineHeight\: '64px' \}\}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style=\{\{ padding\: '0 50px', marginTop\: 64 \}\}>
      <Breadcrumb style=\{\{ margin\: '16px 0' \}\}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style=\{\{ background\: '#fff', padding\: 24, minHeight\: 380 \}\}>Content</div>
    </Content>
    <Footer style=\{\{ textAlign\: 'center' \}\}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-layout-demo-side">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Sider</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Two-columns layout. The sider menu can be collapsed when horizontal space is
                        limited. Generally, the mainnav is placed on the left side of the page, and
                        the secondary menu is placed on the top of the working area. Contents will
                        adapt the layout to the viewing area to improve the horizontal space usage,
                        while the layout of the whole page is not stable. The level of the aisde
                        navigation is scalable. The first, second, and third level navigations could
                        be present more fluently and relevantly, and aside navigation can be fixed,
                        allowing the user to quickly switch and spot the current position, improving
                        the user experience. However, this navigation occupies some horizontal space
                        of the contents
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutSide" />
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
                              {`import \{ Layout, Menu, Breadcrumb, Icon \} from 'antd';
const \{ Header, Content, Footer, Sider \} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component \{
  state = \{
    collapsed\: false,
  \};
  onCollapse = (collapsed) => \{
    console.log(collapsed);
    this.setState(\{ collapsed \});
  \}
  render() \{
    return (
      <Layout style=\{\{ minHeight\: '100vh' \}\}>
        <Sider
          collapsible
          collapsed=\{this.state.collapsed\}
          onCollapse=\{this.onCollapse\}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys=\{['1']\} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title=\{<span><Icon type="user" /><span>User</span></span>\}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title=\{<span><Icon type="team" /><span>Team</span></span>\}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style=\{\{ background\: '#fff', padding\: 0 \}\} />
          <Content style=\{\{ margin\: '0 16px' \}\}>
            <Breadcrumb style=\{\{ margin\: '16px 0' \}\}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style=\{\{ padding\: 24, background\: '#fff', minHeight\: 360 \}\}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style=\{\{ textAlign\: 'center' \}\}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  \}
\}

ReactDOM.render(<SiderDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-layout-demo-top-side">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Both the top navigation and the sidebar, commonly used in documentation
                        site.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LayoutTopside" />
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
                              {`import \{ Layout, Menu, Breadcrumb, Icon \} from 'antd';
const \{ SubMenu \} = Menu;
const \{ Header, Content, Footer, Sider \} = Layout;

ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys=\{['2']\}
        style=\{\{ lineHeight\: '64px' \}\}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style=\{\{ padding\: '0 50px' \}\}>
      <Breadcrumb style=\{\{ margin\: '16px 0' \}\}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style=\{\{ padding\: '24px 0', background\: '#fff' \}\}>
        <Sider width=\{200\} style=\{\{ background\: '#fff' \}\}>
          <Menu
            mode="inline"
            defaultSelectedKeys=\{['1']\}
            defaultOpenKeys=\{['sub1']\}
            style=\{\{ height\: '100%' \}\}
          >
            <SubMenu key="sub1" title=\{<span><Icon type="user" />subnav 1</span>\}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title=\{<span><Icon type="laptop" />subnav 2</span>\}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title=\{<span><Icon type="notification" />subnav 3</span>\}>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style=\{\{ padding\: '0 24px', minHeight\: 280 \}\}>
          Content
        </Content>
      </Layout>
    </Content>
    <Footer style=\{\{ textAlign\: 'center' \}\}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
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

export default LayoutItems

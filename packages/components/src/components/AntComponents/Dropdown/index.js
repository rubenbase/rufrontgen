import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderDropdownBasic } from './Basic/index.js'
import { default as renderDropdownContextmenu } from './Contextmenu/index.js'
import { default as renderDropdownDropdownbutton } from './Dropdownbutton/index.js'
import { default as renderDropdownEvent } from './Event/index.js'
import { default as renderDropdownItem } from './Item/index.js'
import { default as renderDropdownOverlayvisible } from './Overlayvisible/index.js'
import { default as renderDropdownPlacement } from './Placement/index.js'
import { default as renderDropdownSubmenu } from './Submenu/index.js'
import { default as renderDropdownTrigger } from './Trigger/index.js'

const Panel = Collapse.Panel

class DropdownItems extends React.Component {
  componentDidMount() {
    renderDropdownBasic(ReactDOM, document.getElementById('DropdownBasic'))
    renderDropdownContextmenu(ReactDOM, document.getElementById('DropdownContextmenu'))
    renderDropdownDropdownbutton(ReactDOM, document.getElementById('DropdownDropdownbutton'))
    renderDropdownEvent(ReactDOM, document.getElementById('DropdownEvent'))
    renderDropdownItem(ReactDOM, document.getElementById('DropdownItem'))
    renderDropdownOverlayvisible(ReactDOM, document.getElementById('DropdownOverlayvisible'))
    renderDropdownPlacement(ReactDOM, document.getElementById('DropdownPlacement'))
    renderDropdownSubmenu(ReactDOM, document.getElementById('DropdownSubmenu'))
    renderDropdownTrigger(ReactDOM, document.getElementById('DropdownTrigger'))
  }

  render() {
    return (
      <div className="DropdownDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Dropdown</strong>
                  <a
                    href="https://ant.design/components/dropdown/"
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
                    <div className="card card--example" id="components-dropdown-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The most basic dropdown menu.</div>
                      <div className="card-body pb-0">
                        <div id="DropdownBasic" />
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
                              {`import \{ Menu, Dropdown, Icon \} from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http\://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http\://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http\://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay=\{menu\}>
    <a className="ant-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-dropdown-demo-dropdown-button"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Button with dropdown menu</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A button is on the left, and a related functional menu is on the right.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DropdownDropdownbutton" />
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
                              {`import \{ Menu, Dropdown, Button, Icon, message \} from 'antd';

function handleButtonClick(e) \{
  message.info('Click on left button.');
  console.log('click left button', e);
\}

function handleMenuClick(e) \{
  message.info('Click on menu item.');
  console.log('click', e);
\}

const menu = (
  <Menu onClick=\{handleMenuClick\}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div>
    <Dropdown.Button onClick=\{handleButtonClick\} overlay=\{menu\}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      onClick=\{handleButtonClick\}
      overlay=\{menu\}
      disabled
      style=\{\{ marginLeft\: 8 \}\}
    >
      Dropdown
    </Dropdown.Button>
    <Dropdown overlay=\{menu\}>
      <Button style=\{\{ marginLeft\: 8 \}\}>
        Button <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-dropdown-demo-item">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Other elements</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Divider and disabled menu item.</div>
                      <div className="card-body pb-0">
                        <div id="DropdownItem" />
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
                              {`import \{ Menu, Dropdown, Icon \} from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http\://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http\://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay=\{menu\}>
    <a className="ant-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-dropdown-demo-placement">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Placement</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Support 6 placements.</div>
                      <div className="card-body pb-0">
                        <div id="DropdownPlacement" />
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
                              {`import \{ Menu, Dropdown, Button \} from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http\://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http\://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http\://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div>
    <Dropdown overlay=\{menu\} placement="bottomLeft">
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay=\{menu\} placement="bottomCenter">
      <Button>bottomCenter</Button>
    </Dropdown>
    <Dropdown overlay=\{menu\} placement="bottomRight">
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown overlay=\{menu\} placement="topLeft">
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay=\{menu\} placement="topCenter">
      <Button>topCenter</Button>
    </Dropdown>
    <Dropdown overlay=\{menu\} placement="topRight">
      <Button>topRight</Button>
    </Dropdown>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-dropdown-demo-trigger">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Trigger mode</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The default trigger mode is <code>{'hover'}</code>, you can change it to{' '}
                        <code>{'click'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DropdownTrigger" />
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
                              {`import \{ Menu, Dropdown, Icon \} from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http\://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http\://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay=\{menu\} trigger=\{['click']\}>
    <a className="ant-dropdown-link" href="#">
      Click me <Icon type="down" />
    </a>
  </Dropdown>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-dropdown-demo-context-menu">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Context Menu</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The default trigger mode is <code>{'hover'}</code>, you can change it to{' '}
                        <code>{'click'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DropdownContextmenu" />
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
                              {`import \{ Menu, Dropdown \} from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay=\{menu\} trigger=\{['contextMenu']\}>
    <span style=\{\{ userSelect\: 'none' \}\}>Right Click on Me</span>
  </Dropdown>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-dropdown-demo-event">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Click event</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        An event will be triggered when you click menu items, in which you can make
                        different operations according to item's key.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DropdownEvent" />
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
                              {`import \{ Menu, Dropdown, Icon, message \} from 'antd';
const onClick = function (\{ key \}) \{
  message.info(\`Click on item \$\{key\}\`);
\};

const menu = (
  <Menu onClick=\{onClick\}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay=\{menu\}>
    <a className="ant-dropdown-link" href="#">
      Hover me, Click menu item <Icon type="down" />
    </a>
  </Dropdown>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-dropdown-demo-overlay-visible"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">The way of hiding</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The default is to close the menu when you click on menu items, this feature
                        can be turned off.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DropdownOverlayvisible" />
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
                              {`import \{ Menu, Dropdown, Icon \} from 'antd';

class OverlayVisible extends React.Component \{
  state = \{
    visible\: false,
  \};
  handleMenuClick = (e) => \{
    if (e.key === '3') \{
      this.setState(\{ visible\: false \});
    \}
  \}
  handleVisibleChange = (flag) => \{
    this.setState(\{ visible\: flag \});
  \}
  render() \{
    const menu = (
      <Menu onClick=\{this.handleMenuClick\}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay=\{menu\}
        onVisibleChange=\{this.handleVisibleChange\}
        visible=\{this.state.visible\}
      >
        <a className="ant-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    );
  \}
\}

ReactDOM.render(<OverlayVisible />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-dropdown-demo-sub-menu">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Cascading menu</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The menu has multiple levels.</div>
                      <div className="card-body pb-0">
                        <div id="DropdownSubmenu" />
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
                              {`import \{ Menu, Dropdown, Icon \} from 'antd';
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay=\{menu\}>
    <a className="ant-dropdown-link" href="#">
      Cascading menu <Icon type="down" />
    </a>
  </Dropdown>
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

export default DropdownItems

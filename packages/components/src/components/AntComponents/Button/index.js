import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderButtonBasic } from './Basic/index.js'
import { default as renderButtonButtongroup } from './Buttongroup/index.js'
import { default as renderButtonDisabled } from './Disabled/index.js'
import { default as renderButtonGhost } from './Ghost/index.js'
import { default as renderButtonIcon } from './Icon/index.js'
import { default as renderButtonLoading } from './Loading/index.js'
import { default as renderButtonMultiple } from './Multiple/index.js'
import { default as renderButtonSize } from './Size/index.js'

const Panel = Collapse.Panel

class ButtonItems extends React.Component {
  componentDidMount() {
    renderButtonBasic(ReactDOM, document.getElementById('ButtonBasic'))
    renderButtonButtongroup(ReactDOM, document.getElementById('ButtonButtongroup'))
    renderButtonDisabled(ReactDOM, document.getElementById('ButtonDisabled'))
    renderButtonGhost(ReactDOM, document.getElementById('ButtonGhost'))
    renderButtonIcon(ReactDOM, document.getElementById('ButtonIcon'))
    renderButtonLoading(ReactDOM, document.getElementById('ButtonLoading'))
    renderButtonMultiple(ReactDOM, document.getElementById('ButtonMultiple'))
    renderButtonSize(ReactDOM, document.getElementById('ButtonSize'))
  }

  render() {
    return (
      <div className="ButtonDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Button</strong>
                  <a
                    href="https://ant.design/components/button/"
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
                    <div className="card card--example" id="components-button-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Type</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        There are <code>{'primary'}</code> button, <code>{'default'}</code> button,{' '}
                        <code>{'dashed'}</code> button and <code>{'danger'}</code> button in antd. >{' '}
                        <code>{'danger'}</code> is supported after <code>{'antd@2.7'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonBasic" />
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
                              {`import \{ Button \} from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-button-demo-disabled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Disabled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To mark a button as disabled, add the <code>{'disabled'}</code> property to
                        the <code>{'Button'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonDisabled" />
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
                              {`import \{ Button \} from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(disabled)</Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button>Ghost</Button>
    <Button disabled>Ghost(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(disabled)</Button>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-button-demo-icon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'Button'}</code> components can contain an <code>{'Icon'}</code>.
                        This is done by setting the <code>{'icon'}</code> property or placing an{' '}
                        <code>{'Icon'}</code> component within the <code>{'Button'}</code>
                        If you want specific control over the positioning and placement of the{' '}
                        <code>{'Icon'}</code>, then that should be done by placing the{' '}
                        <code>{'Icon'}</code> component within the <code>{'Button'}</code> rather
                        than using the <code>{'icon'}</code> property.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonIcon" />
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
                              {`import \{ Button \} from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">Search</Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">Search</Button>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-button-demo-multiple">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Multiple Buttons</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        If you need several buttons, we recommend that you use 1 primary button + n
                        secondary buttons, and if there are more than three operations, you can
                        group some of them into <code>{'Dropdown.Button'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonMultiple" />
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
                              {`import \{ Button, Menu, Dropdown, Icon \} from 'antd';

function handleMenuClick(e) \{
  console.log('click', e);
\}

const menu = (
  <Menu onClick=\{handleMenuClick\}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown overlay=\{menu\}>
      <Button>
        Actions <Icon type="down" />
      </Button>
    </Dropdown>
  </div>,
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
                    <div className="card card--example" id="components-button-demo-button-group">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Button Group</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Buttons can be grouped by placing multiple <code>{'Button'}</code>{' '}
                        components into a <code>{'Button.Group'}</code>. The <code>{'size'}</code>{' '}
                        can be set to <code>{'large'}</code>, <code>{'small'}</code> or left unset
                        resulting in a default size.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonButtongroup" />
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
                              {`import \{ Button, Icon \} from 'antd';
const ButtonGroup = Button.Group;

ReactDOM.render(
  <div>
    <h4>Basic</h4>
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button disabled>L</Button>
      <Button disabled>M</Button>
      <Button disabled>R</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>

    <h4>With Icon</h4>
    <ButtonGroup>
      <Button type="primary">
        <Icon type="left" />Go back
      </Button>
      <Button type="primary">
        Go forward<Icon type="right" />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" icon="cloud" />
      <Button type="primary" icon="cloud-download" />
    </ButtonGroup>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-button-demo-ghost">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Ghost Button</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'ghost'}</code> property will make button's background transparent,
                        it is common used in colored background.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonGhost" />
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
                              {`import \{ Button \} from 'antd';

ReactDOM.render(
  <div style=\{\{ background\: 'rgb(190, 200, 200)', padding\: '26px 16px 16px' \}\}>
    <Button type="primary" ghost>Primary</Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="danger" ghost>danger</Button>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-button-demo-loading">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Loading</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A loading indicator can be added to a button by setting the{' '}
                        <code>{'loading'}</code> property on the <code>{'Button'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonLoading" />
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
                              {`import \{ Button \} from 'antd';

class App extends React.Component \{
  state = \{
    loading\: false,
    iconLoading\: false,
  \}

  enterLoading = () => \{
    this.setState(\{ loading\: true \});
  \}

  enterIconLoading = () => \{
    this.setState(\{ iconLoading\: true \});
  \}

  render() \{
    return (
      <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading=\{this.state.loading\} onClick=\{this.enterLoading\}>
          Click me!
        </Button>
        <Button type="primary" icon="poweroff" loading=\{this.state.iconLoading\} onClick=\{this.enterIconLoading\}>
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </span>
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
                    <div className="card card--example" id="components-button-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Ant Design supports a default button size as well as a large and small size.
                        If a large or small button is desired, set the <code>{'size'}</code>{' '}
                        property to either <code>{'large'}</code> or <code>{'small'}</code>{' '}
                        respectively. Omit the <code>{'size'}</code> property for a button with the
                        default size.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ButtonSize" />
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
                              {`import \{ Button, Radio, Icon \} from 'antd';

class ButtonSize extends React.Component \{
  state = \{
    size\: 'large',
  \};

  handleSizeChange = (e) => \{
    this.setState(\{ size\: e.target.value \});
  \}

  render() \{
    const size = this.state.size;
    return (
      <div>
        <Radio.Group value=\{size\} onChange=\{this.handleSizeChange\}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" size=\{size\}>Primary</Button>
        <Button size=\{size\}>Normal</Button>
        <Button type="dashed" size=\{size\}>Dashed</Button>
        <Button type="danger" size=\{size\}>Danger</Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size=\{size\} />
        <Button type="primary" icon="download" size=\{size\}>Download</Button>
        <br />
        <Button.Group size=\{size\}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    );
  \}
\}

ReactDOM.render(<ButtonSize />, mountNode);
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

export default ButtonItems

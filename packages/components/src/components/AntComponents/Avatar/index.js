import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderAvatarBadge } from './Badge/index.js'
import { default as renderAvatarBasic } from './Basic/index.js'
import { default as renderAvatarDynamic } from './Dynamic/index.js'
import { default as renderAvatarType } from './Type/index.js'

const Panel = Collapse.Panel

class AvatarItems extends React.Component {
  componentDidMount() {
    renderAvatarBadge(ReactDOM, document.getElementById('AvatarBadge'))
    renderAvatarBasic(ReactDOM, document.getElementById('AvatarBasic'))
    renderAvatarDynamic(ReactDOM, document.getElementById('AvatarDynamic'))
    renderAvatarType(ReactDOM, document.getElementById('AvatarType'))
  }

  render() {
    return (
      <div className="AvatarDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Avatar</strong>
                  <a
                    href="https://ant.design/components/avatar/"
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
                    <div className="card card--example" id="components-avatar-demo-badge">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">With Badge</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Usually used for messages remind.</div>
                      <div className="card-body pb-0">
                        <div id="AvatarBadge" />
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
                              {`import \{ Avatar, Badge \} from 'antd';

ReactDOM.render(
  <div>
    <span style=\{\{ marginRight\: 24 \}\}>
      <Badge count=\{1\}><Avatar shape="square" icon="user" /></Badge>
    </span>
    <span>
      <Badge dot><Avatar shape="square" icon="user" /></Badge>
    </span>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-avatar-demo-dynamic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Autoset Font Size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        For letter type Avatar, when the letters are too long to display, the font
                        size can be automatically adjusted according to the width of the Avatar.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AvatarDynamic" />
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
                              {`import \{ Avatar, Button \} from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class Autoset extends React.Component \{
  constructor(props) \{
    super(props);
    this.state = \{
      user\: UserList[0],
      color\: colorList[0],
    \};
  \}
  changeUser = () => \{
    const index = UserList.indexOf(this.state.user);
    this.setState(\{
      user\: index < UserList.length - 1 ? UserList[index + 1] \: UserList[0],
      color\: index < colorList.length - 1 ? colorList[index + 1] \: colorList[0],
    \});
  \}
  render() \{
    return (
      <div>
        <Avatar style=\{\{ backgroundColor\: this.state.color, verticalAlign\: 'middle' \}\} size="large">
          \{this.state.user\}
        </Avatar>
        <Button size="small" style=\{\{ marginLeft\: 16, verticalAlign\: 'middle' \}\} onClick=\{this.changeUser\}>
          Change
        </Button>
      </div>
    );
  \}
\}

ReactDOM.render(<Autoset />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-avatar-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Three sizes and two shapes are available.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AvatarBasic" />
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
                              {`import \{ Avatar \} from 'antd';

ReactDOM.render(
  <div>
    <div>
      <Avatar size="large" icon="user" />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-avatar-demo-type">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Type</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Image, Icon and letter are supported, and the latter two kinds avatar can
                        have custom colors and background colors.
                      </div>
                      <div className="card-body pb-0">
                        <div id="AvatarType" />
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
                              {`import \{ Avatar \} from 'antd';

ReactDOM.render(
  <div>
    <Avatar icon="user" />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https\://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar style=\{\{ color\: '#f56a00', backgroundColor\: '#fde3cf' \}\}>U</Avatar>
    <Avatar style=\{\{ backgroundColor\: '#87d068' \}\} icon="user" />
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

export default AvatarItems

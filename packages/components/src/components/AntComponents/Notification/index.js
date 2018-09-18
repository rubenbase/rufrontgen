import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderNotificationBasic } from './Basic/index.js'
import { default as renderNotificationCustomicon } from './Customicon/index.js'
import { default as renderNotificationCustomstyle } from './Customstyle/index.js'
import { default as renderNotificationDuration } from './Duration/index.js'
import { default as renderNotificationPlacement } from './Placement/index.js'
import { default as renderNotificationWithbtn } from './Withbtn/index.js'
import { default as renderNotificationWithicon } from './Withicon/index.js'

const Panel = Collapse.Panel

class NotificationItems extends React.Component {
  componentDidMount() {
    renderNotificationBasic(ReactDOM, document.getElementById('NotificationBasic'))
    renderNotificationCustomicon(ReactDOM, document.getElementById('NotificationCustomicon'))
    renderNotificationCustomstyle(ReactDOM, document.getElementById('NotificationCustomstyle'))
    renderNotificationDuration(ReactDOM, document.getElementById('NotificationDuration'))
    renderNotificationPlacement(ReactDOM, document.getElementById('NotificationPlacement'))
    renderNotificationWithbtn(ReactDOM, document.getElementById('NotificationWithbtn'))
    renderNotificationWithicon(ReactDOM, document.getElementById('NotificationWithicon'))
  }

  render() {
    return (
      <div className="NotificationDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Notification</strong>
                  <a
                    href="https://ant.design/components/notification/"
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
                    <div className="card card--example" id="components-notification-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The simplest usage that close the notification box after 4.5s.
                      </div>
                      <div className="card-body pb-0">
                        <div id="NotificationBasic" />
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
                              {`import \{ Button, notification \} from 'antd';

const openNotification = () => \{
  notification.open(\{
    message\: 'Notification Title',
    description\: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  \});
\};

ReactDOM.render(
  <Button type="primary" onClick=\{openNotification\}>Open the notification box</Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-notification-demo-custom-style"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized style</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The style and className are available to customize Notification.
                      </div>
                      <div className="card-body pb-0">
                        <div id="NotificationCustomstyle" />
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
                              {`import \{ Button, notification \} from 'antd';

const openNotification = () => \{
  notification.open(\{
    message\: 'Notification Title',
    description\: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style\: \{
      width\: 600,
      marginLeft\: 335 - 600,
    \},
  \});
\};

ReactDOM.render(
  <Button type="primary" onClick=\{openNotification\}>Open the notification box</Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-notification-demo-placement">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Placement</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A notification box can pop up from <code>{'topRight'}</code> or{' '}
                        <code>{'bottomRight'}</code> or <code>{'bottomLeft'}</code> or{' '}
                        <code>{'topLeft'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="NotificationPlacement" />
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
                              {`import \{ Button, Select, notification \} from 'antd';

const \{ Option \} = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification = () => \{
  notification.open(\{
    message\: 'Notification Title',
    description\: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  \});
\};

ReactDOM.render(
  <div>
    <Select
      defaultValue="topRight"
      style=\{\{ width\: 120, marginRight\: 10 \}\}
      onChange=\{(val) => \{
        notification.config(\{
          placement\: val,
        \});
      \}\}
    >
      \{options.map(val => <Option key=\{val\} value=\{val\}>\{val\}</Option>)\}
    </Select>
    <Button
      type="primary"
      onClick=\{openNotification\}
    >
      Open the notification box
    </Button>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-notification-demo-with-icon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Notification with icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A notification box with a icon at the left side.
                      </div>
                      <div className="card-body pb-0">
                        <div id="NotificationWithicon" />
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
                              {`import \{ Button, notification \} from 'antd';

const openNotificationWithIcon = (type) => \{
  notification[type](\{
    message\: 'Notification Title',
    description\: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  \});
\};

ReactDOM.render(
  <div>
    <Button onClick=\{() => openNotificationWithIcon('success')\}>Success</Button>
    <Button onClick=\{() => openNotificationWithIcon('info')\}>Info</Button>
    <Button onClick=\{() => openNotificationWithIcon('warning')\}>Warning</Button>
    <Button onClick=\{() => openNotificationWithIcon('error')\}>Error</Button>
  </div>
, mountNode);
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
                      id="components-notification-demo-custom-icon"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The icon can be customized to any react node.
                      </div>
                      <div className="card-body pb-0">
                        <div id="NotificationCustomicon" />
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
                              {`import \{ Button, notification, Icon \} from 'antd';

const openNotification = () => \{
  notification.open(\{
    message\: 'Notification Title',
    description\: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon\: <Icon type="smile-circle" style=\{\{ color\: '#108ee9' \}\} />,
  \});
\};

ReactDOM.render(
  <Button type="primary" onClick=\{openNotification\}>Open the notification box</Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-notification-demo-duration">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">
                            Duration after which the notification box is closed
                          </strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'Duration'}</code> can be used to specify how long the notification
                        stays open. After the duration time elapses, the notification closes
                        automatically. If not specified, default value is 4.5 seconds. If you set
                        the value to 0, the notification box will never close automatically.
                      </div>
                      <div className="card-body pb-0">
                        <div id="NotificationDuration" />
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
                              {`import \{ Button, notification \} from 'antd';

const openNotification = () => \{
  const args = \{
    message\: 'Notification Title',
    description\: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration\: 0,
  \};
  notification.open(args);
\};

ReactDOM.render(
  <Button type="primary" onClick=\{openNotification\}>Open the notification box</Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-notification-demo-with-btn">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom close button</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To customize the style or font of the close button.
                      </div>
                      <div className="card-body pb-0">
                        <div id="NotificationWithbtn" />
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
                              {`import \{ Button, notification \} from 'antd';

const close = () => \{
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
\};

const openNotification = () => \{
  const key = \`open\$\{Date.now()\}\`;
  const btn = (
    <Button type="primary" size="small" onClick=\{() => notification.close(key)\}>
      Confirm
    </Button>
  );
  notification.open(\{
    message\: 'Notification Title',
    description\: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose\: close,
  \});
\};

ReactDOM.render(
  <Button type="primary" onClick=\{openNotification\}>
    Open the notification box
  </Button>
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

export default NotificationItems

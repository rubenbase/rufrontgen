import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderBreadcrumbBasic } from './Basic/index.js'
import { default as renderBreadcrumbSeparator } from './Separator/index.js'
import { default as renderBreadcrumbWithIcon } from './WithIcon/index.js'

const Panel = Collapse.Panel

class BreadcrumbItems extends React.Component {
  componentDidMount() {
    renderBreadcrumbBasic(ReactDOM, document.getElementById('BreadcrumbBasic'))
    renderBreadcrumbSeparator(ReactDOM, document.getElementById('BreadcrumbSeparator'))
    renderBreadcrumbWithIcon(ReactDOM, document.getElementById('BreadcrumbWithIcon'))
  }

  render() {
    return (
      <div className="BreadcrumbDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Breadcrumb</strong>
                  <a
                    href="https://ant.design/components/breadcrumb/"
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
                    <div className="card card--example" id="components-breadcrumb-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic Usage</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The simplest use</div>
                      <div className="card-body pb-0">
                        <div id="BreadcrumbBasic" />
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
                              {`import \{ Breadcrumb \} from 'antd';

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-breadcrumb-demo-router">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">React Router Integration</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Used together with <code>{'react-router@2'}</code>{' '}
                        <code>{'react-router@3'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="BreadcrumbRouter" />
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
                              {`import \{ Router, Route, Link, hashHistory \} from 'react-router';
import \{ Breadcrumb, Alert \} from 'antd';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const Home = (\{ routes, params, children \}) => (
  <div className="demo">
    <div className="demo-nav">
      <Link to="/">Home</Link>
      <Link to="/apps">Application List</Link>
    </div>
    \{children || 'Home Page'\}
    <Alert style=\{\{ margin\: '16px 0' \}\} message="Click the navigation above to switch\:" />
    <Breadcrumb routes=\{routes\} params=\{params\} />
  </div>
);

ReactDOM.render(
  <Router history=\{hashHistory\}>
    <Route name="home" breadcrumbName="Home" path="/" component=\{Home\}>
      <Route name="apps" breadcrumbName="Application List" path="apps" component=\{Apps\}>
        <Route name="app" breadcrumbName="Application\:id" path="\:id">
          <Route name="detail" breadcrumbName="Detail" path="detail" />
        </Route>
      </Route>
    </Route>
  </Router>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-breadcrumb-demo-withIcon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">With an Icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The icon should be placed in front of the text.
                      </div>
                      <div className="card-body pb-0">
                        <div id="BreadcrumbWithIcon" />
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
                              {`import \{ Breadcrumb, Icon \} from 'antd';

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      Application
    </Breadcrumb.Item>
  </Breadcrumb>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-breadcrumb-demo-router-4">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Other Router Integration</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Used together with <code>{'react-router@4'}</code> or other router.
                      </div>
                      <div className="card-body pb-0">
                        <div id="BreadcrumbRouter4" />
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
                              {`import \{ HashRouter as Router, Route, Switch, Link, withRouter \} from 'react-router-dom';
import \{ Breadcrumb, Alert \} from 'antd';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = \{
  '/apps'\: 'Application List',
  '/apps/1'\: 'Application1',
  '/apps/2'\: 'Application2',
  '/apps/1/detail'\: 'Detail',
  '/apps/2/detail'\: 'Detail',
\};
const Home = withRouter((props) => \{
  const \{ location \} = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => \{
    const url = \`/\$\{pathSnippets.slice(0, index + 1).join('/')\}\`;
    return (
      <Breadcrumb.Item key=\{url\}>
        <Link to=\{url\}>
          \{breadcrumbNameMap[url]\}
        </Link>
      </Breadcrumb.Item>
    );
  \});
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Switch>
        <Route path="/apps" component=\{Apps\} />
        <Route render=\{() => <span>Home Page</span>\} />
      </Switch>
      <Alert style=\{\{ margin\: '16px 0' \}\} message="Click the navigation above to switch\:" />
      <Breadcrumb>
        \{breadcrumbItems\}
      </Breadcrumb>
    </div>
  );
\});

ReactDOM.render(
  <Router>
    <Home />
  </Router>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-breadcrumb-demo-separator">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Configuring the Separator</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The separator can be customized by setting the separator property:
                        separator=">"
                      </div>
                      <div className="card-body pb-0">
                        <div id="BreadcrumbSeparator" />
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
                              {`import \{ Breadcrumb \} from 'antd';

ReactDOM.render(
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
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

export default BreadcrumbItems

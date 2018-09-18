import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderAffixBasic } from './Basic/index.js'
import { default as renderAffixOnchange } from './Onchange/index.js'
import { default as renderAffixTarget } from './Target/index.js'

const Panel = Collapse.Panel

class AffixItems extends React.Component {
  componentDidMount() {
    renderAffixBasic(ReactDOM, document.getElementById('AffixBasic'))
    renderAffixOnchange(ReactDOM, document.getElementById('AffixOnchange'))
    renderAffixTarget(ReactDOM, document.getElementById('AffixTarget'))
  }

  render() {
    return (
      <div className="AffixDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Affix</strong>
                  <a
                    href="https://ant.design/components/affix/"
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
                    <div className="card card--example" id="components-affix-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The simplest usage.</div>
                      <div className="card-body pb-0">
                        <div id="AffixBasic" />
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
                              {`import \{ Affix, Button \} from 'antd';

ReactDOM.render(
  <div>
    <Affix>
      <Button type="primary">Affix top</Button>
    </Affix>
    <br />
    <Affix offsetBottom=\{0\}>
      <Button type="primary">Affix bottom</Button>
    </Affix>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-affix-demo-target">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Container to</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Set a <code>{'target'}</code> for 'Affix', which is listen to scroll event
                        of target element (default is <code>{'window'}</code>).
                      </div>
                      <div className="card-body pb-0">
                        <div id="AffixTarget" />
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
                              {`import \{ Affix, Button \} from 'antd';

class Demo extends React.Component \{
  render() \{
    return (
      <div className="scrollable-container" ref=\{(node) => \{ this.container = node; \}\}>
        <div className="background">
          <Affix target=\{() => this.container\}>
            <Button type="primary">
              Fixed at the top of container
            </Button>
          </Affix>
        </div>
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
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-affix-demo-on-change">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Callback</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Callback with affixed state.</div>
                      <div className="card-body pb-0">
                        <div id="AffixOnchange" />
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
                              {`import \{ Affix, Button \} from 'antd';

ReactDOM.render(
  <Affix offsetTop=\{120\} onChange=\{affixed => console.log(affixed)\}>
    <Button>120px to affix top</Button>
  </Affix>,
  mountNode
);
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

export default AffixItems

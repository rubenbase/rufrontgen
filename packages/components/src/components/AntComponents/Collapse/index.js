import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderCollapseAccordion } from './Accordion/index.js'
import { default as renderCollapseBasic } from './Basic/index.js'
import { default as renderCollapseBorderless } from './Borderless/index.js'
import { default as renderCollapseCustom } from './Custom/index.js'
import { default as renderCollapseMix } from './Mix/index.js'
import { default as renderCollapseNoarrow } from './Noarrow/index.js'

const Panel = Collapse.Panel

class CollapseItems extends React.Component {
  componentDidMount() {
    renderCollapseAccordion(ReactDOM, document.getElementById('CollapseAccordion'))
    renderCollapseBasic(ReactDOM, document.getElementById('CollapseBasic'))
    renderCollapseBorderless(ReactDOM, document.getElementById('CollapseBorderless'))
    renderCollapseCustom(ReactDOM, document.getElementById('CollapseCustom'))
    renderCollapseMix(ReactDOM, document.getElementById('CollapseMix'))
    renderCollapseNoarrow(ReactDOM, document.getElementById('CollapseNoarrow'))
  }

  render() {
    return (
      <div className="CollapseDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Collapse</strong>
                  <a
                    href="https://ant.design/components/collapse/"
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
                    <div className="card card--example" id="components-collapse-demo-accordion">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Accordion</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Accordion mode, only one panel can be expanded at a time. The first panel
                        will be expanded by default.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CollapseAccordion" />
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
                              {`import \{ Collapse \} from 'antd';
const Panel = Collapse.Panel;

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

ReactDOM.render(
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>\{text\}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>\{text\}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>\{text\}</p>
    </Panel>
  </Collapse>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-collapse-demo-borderless">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Borderless</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">A borderless style of Collapse.</div>
                      <div className="card-body pb-0">
                        <div id="CollapseBorderless" />
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
                              {`import \{ Collapse \} from 'antd';
const Panel = Collapse.Panel;

const text = (
  <p style=\{\{ paddingLeft\: 24 \}\}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  </p>
);

ReactDOM.render(
  <Collapse bordered=\{false\} defaultActiveKey=\{['1']\}>
    <Panel header="This is panel header 1" key="1">
      \{text\}
    </Panel>
    <Panel header="This is panel header 2" key="2">
      \{text\}
    </Panel>
    <Panel header="This is panel header 3" key="3">
      \{text\}
    </Panel>
  </Collapse>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-collapse-demo-mix">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Nested panel</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'Collapse'}</code> is nested inside the <code>{'Collapse'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CollapseMix" />
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
                              {`import \{ Collapse \} from 'antd';
const Panel = Collapse.Panel;

function callback(key) \{
  console.log(key);
\}

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

ReactDOM.render(
  <Collapse onChange=\{callback\}>
    <Panel header="This is panel header 1" key="1">
      <Collapse defaultActiveKey="1">
        <Panel header="This is panel nest panel" key="1">
          <p>\{text\}</p>
        </Panel>
      </Collapse>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>\{text\}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>\{text\}</p>
    </Panel>
  </Collapse>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-collapse-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Collapse</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        More than one panel can be expanded at a time, the first panel is
                        initialized to be active in this case.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CollapseBasic" />
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
                              {`import \{ Collapse \} from 'antd';
const Panel = Collapse.Panel;

function callback(key) \{
  console.log(key);
\}

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

ReactDOM.render(
  <Collapse defaultActiveKey=\{['1']\} onChange=\{callback\}>
    <Panel header="This is panel header 1" key="1">
      <p>\{text\}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>\{text\}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" disabled>
      <p>\{text\}</p>
    </Panel>
  </Collapse>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-collapse-demo-custom">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom Panel</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Customize the background, border and margin styles for each panel.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CollapseCustom" />
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
                              {`import \{ Collapse \} from 'antd';
const Panel = Collapse.Panel;

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

const customPanelStyle = \{
  background\: '#f7f7f7',
  borderRadius\: 4,
  marginBottom\: 24,
  border\: 0,
  overflow\: 'hidden',
\};

ReactDOM.render(
  <Collapse bordered=\{false\} defaultActiveKey=\{['1']\}>
    <Panel header="This is panel header 1" key="1" style=\{customPanelStyle\}>
      <p>\{text\}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2" style=\{customPanelStyle\}>
      <p>\{text\}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" style=\{customPanelStyle\}>
      <p>\{text\}</p>
    </Panel>
  </Collapse>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-collapse-demo-noarrow">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">No arrow</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can disable showing arrow icon by passing{' '}
                        <code>{'showArrow={false}'}</code> to <code>{'CollapsePanel'}</code>{' '}
                        component.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CollapseNoarrow" />
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
                              {`import \{ Collapse \} from 'antd';
const Panel = Collapse.Panel;

function callback(key) \{
  console.log(key);
\}

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;

ReactDOM.render(
  <Collapse defaultActiveKey=\{['1']\} onChange=\{callback\}>
    <Panel header="This is panel header with arrow icon" key="1">
      <p>\{text\}</p>
    </Panel>
    <Panel showArrow=\{false\} header="This is panel header with no arrow icon" key="2">
      <p>\{text\}</p>
    </Panel>
  </Collapse>
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

export default CollapseItems

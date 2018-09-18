import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTooltipArrowpointatcenter } from './Arrowpointatcenter/index.js'
import { default as renderTooltipAutoadjustoverflow } from './Autoadjustoverflow/index.js'
import { default as renderTooltipBasic } from './Basic/index.js'
import { default as renderTooltipPlacement } from './Placement/index.js'

const Panel = Collapse.Panel

class TooltipItems extends React.Component {
  componentDidMount() {
    renderTooltipArrowpointatcenter(ReactDOM, document.getElementById('TooltipArrowpointatcenter'))
    renderTooltipAutoadjustoverflow(ReactDOM, document.getElementById('TooltipAutoadjustoverflow'))
    renderTooltipBasic(ReactDOM, document.getElementById('TooltipBasic'))
    renderTooltipPlacement(ReactDOM, document.getElementById('TooltipPlacement'))
  }

  render() {
    return (
      <div className="TooltipDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Tooltip</strong>
                  <a
                    href="https://ant.design/components/tooltip/"
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
                    <div
                      className="card card--example"
                      id="components-tooltip-demo-arrow-point-at-center"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Arrow pointing at the center</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        By specifying <code>{'arrowPointAtCenter'}</code> prop, the arrow will point
                        to the center of the target element.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TooltipArrowpointatcenter" />
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
                              {`import \{ Tooltip, Button \} from 'antd';

ReactDOM.render(
  <div>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tooltip-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The simplest usage.</div>
                      <div className="card-body pb-0">
                        <div id="TooltipBasic" />
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
                              {`import \{ Tooltip \} from 'antd';

ReactDOM.render(
  <Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
  </Tooltip>
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
                      id="components-tooltip-demo-auto-adjust-overflow"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">
                            Adjust placement automatically
                          </strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Adjust popup placement automatically when popup is invisible
                      </div>
                      <div className="card-body pb-0">
                        <div id="TooltipAutoadjustoverflow" />
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
                              {`import \{ Tooltip, Button \} from 'antd';

const wrapStyles = \{
  overflow\: 'hidden',
  position\: 'relative',
  padding\: '24px',
  border\: '1px solid #e9e9e9',
\};

ReactDOM.render(
  <div style=\{wrapStyles\}>
    <Tooltip placement="left" title="Prompt Text" getPopupContainer=\{trigger => trigger.parentElement\}>
      <Button>Adjust automatically / 自动调整</Button>
    </Tooltip>
    <br />
    <Tooltip placement="left" title="Prompt Text" getPopupContainer=\{trigger => trigger.parentElement\} autoAdjustOverflow=\{false\}>
      <Button>Ingore / 不处理</Button>
    </Tooltip>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tooltip-demo-placement">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Placement</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The ToolTip has 12 placements choice.</div>
                      <div className="card-body pb-0">
                        <div id="TooltipPlacement" />
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
                              {`import \{ Tooltip, Button \} from 'antd';

const text = <span>prompt text</span>;

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style=\{\{ marginLeft\: buttonWidth, whiteSpace\: 'nowrap' \}\}>
      <Tooltip placement="topLeft" title=\{text\}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title=\{text\}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title=\{text\}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div style=\{\{ width\: buttonWidth, float\: 'left' \}\}>
      <Tooltip placement="leftTop" title=\{text\}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title=\{text\}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title=\{text\}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div style=\{\{ width\: buttonWidth, marginLeft\: (buttonWidth * 4) + 24 \}\}>
      <Tooltip placement="rightTop" title=\{text\}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title=\{text\}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title=\{text\}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div style=\{\{ marginLeft\: buttonWidth, clear\: 'both', whiteSpace\: 'nowrap' \}\}>
      <Tooltip placement="bottomLeft" title=\{text\}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title=\{text\}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title=\{text\}>
        <Button>BR</Button>
      </Tooltip>
    </div>
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

export default TooltipItems

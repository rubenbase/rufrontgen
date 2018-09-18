import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTimelineBasic } from './Basic/index.js'
import { default as renderTimelineColor } from './Color/index.js'
import { default as renderTimelineCustom } from './Custom/index.js'
import { default as renderTimelinePending } from './Pending/index.js'

const Panel = Collapse.Panel

class TimelineItems extends React.Component {
  componentDidMount() {
    renderTimelineBasic(ReactDOM, document.getElementById('TimelineBasic'))
    renderTimelineColor(ReactDOM, document.getElementById('TimelineColor'))
    renderTimelineCustom(ReactDOM, document.getElementById('TimelineCustom'))
    renderTimelinePending(ReactDOM, document.getElementById('TimelinePending'))
  }

  render() {
    return (
      <div className="TimelineDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Timeline</strong>
                  <a
                    href="https://ant.design/components/timeline/"
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
                    <div className="card card--example" id="components-timeline-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic timeline.</div>
                      <div className="card-body pb-0">
                        <div id="TimelineBasic" />
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
                              {`import \{ Timeline \} from 'antd';

ReactDOM.render(
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-timeline-demo-custom">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Set a node as an icon or other custom element.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimelineCustom" />
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
                              {`import \{ Timeline, Icon \} from 'antd';

ReactDOM.render(
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot=\{<Icon type="clock-circle-o" style=\{\{ fontSize\: '16px' \}\} />\} color="red">Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-timeline-demo-color">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Color</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Set the color of circles. <code>{'green'}</code> means completed or success
                        status, <code>{'red'}</code> means warning or error, and{' '}
                        <code>{'blue'}</code> means ongoing or other default status.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimelineColor" />
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
                              {`import \{ Timeline \} from 'antd';

ReactDOM.render(
  <Timeline>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
  </Timeline>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-timeline-demo-pending">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Last node</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        When the timeline is incomplete and ongoing, put a ghost node at last. set{' '}
                        <code>{'pending={true}'}</code> or{' '}
                        <code>{'pending={a React Element}'}</code>. Used in ascend chronological
                        order. When <code>{'pending'}</code> is not false, set{' '}
                        <code>{'pendingDot={a React Element}'}</code> to replace the default pending
                        dot.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimelinePending" />
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
                              {`import \{ Timeline \} from 'antd';

ReactDOM.render(
  <Timeline pending="Recording...">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
  </Timeline>
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

export default TimelineItems

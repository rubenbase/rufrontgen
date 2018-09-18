import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderRateBasic } from './Basic/index.js'
import { default as renderRateCharacter } from './Character/index.js'
import { default as renderRateClear } from './Clear/index.js'
import { default as renderRateDisabled } from './Disabled/index.js'
import { default as renderRateHalf } from './Half/index.js'
import { default as renderRateText } from './Text/index.js'

const Panel = Collapse.Panel

class RateItems extends React.Component {
  componentDidMount() {
    renderRateBasic(ReactDOM, document.getElementById('RateBasic'))
    renderRateCharacter(ReactDOM, document.getElementById('RateCharacter'))
    renderRateClear(ReactDOM, document.getElementById('RateClear'))
    renderRateDisabled(ReactDOM, document.getElementById('RateDisabled'))
    renderRateHalf(ReactDOM, document.getElementById('RateHalf'))
    renderRateText(ReactDOM, document.getElementById('RateText'))
  }

  render() {
    return (
      <div className="RateDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Rate</strong>
                  <a
                    href="https://ant.design/components/rate/"
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
                    <div className="card card--example" id="components-rate-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The simplest usage.</div>
                      <div className="card-body pb-0">
                        <div id="RateBasic" />
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
                              {`import \{ Rate \} from 'antd';

ReactDOM.render(<Rate />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-rate-demo-clear">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Clear star</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Support set allow to clear star when click again.
                      </div>
                      <div className="card-body pb-0">
                        <div id="RateClear" />
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
                              {`import \{ Rate \} from 'antd';

ReactDOM.render(
  <div>
    <Rate defaultValue=\{3\} /> allowClear\: true
    <br />
    <Rate allowClear=\{false\} defaultValue=\{3\} /> allowClear\: false
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-rate-demo-half">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Half star</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Support select half star.</div>
                      <div className="card-body pb-0">
                        <div id="RateHalf" />
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
                              {`import \{ Rate \} from 'antd';

ReactDOM.render(<Rate allowHalf defaultValue=\{2.5\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-rate-demo-character">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Other Character</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Replace the default star to other character like alphabet, digit, iconfont
                        or even Chinese word.
                      </div>
                      <div className="card-body pb-0">
                        <div id="RateCharacter" />
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
                              {`import \{ Rate, Icon \} from 'antd';

ReactDOM.render(
  <div>
    <Rate character=\{<Icon type="heart" />\} allowHalf />
    <br />
    <Rate character="A" allowHalf style=\{\{ fontSize\: 36 \}\} />
    <br />
    <Rate character="好" allowHalf />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-rate-demo-disabled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Read only</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Read only, can't use mouse to interact.</div>
                      <div className="card-body pb-0">
                        <div id="RateDisabled" />
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
                              {`import \{ Rate \} from 'antd';

ReactDOM.render(<Rate disabled defaultValue=\{2\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-rate-demo-text">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Show copywriting</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Add copywriting in rate components.</div>
                      <div className="card-body pb-0">
                        <div id="RateText" />
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
                              {`import \{ Rate \} from 'antd';

class Rater extends React.Component \{
  state = \{
    value\: 3,
  \}
  handleChange = (value) => \{
    this.setState(\{ value \});
  \}
  render() \{
    const \{ value \} = this.state;
    return (
      <span>
        <Rate onChange=\{this.handleChange\} value=\{value\} />
        \{value && <span className="ant-rate-text">\{value\} stars</span>\}
      </span>
    );
  \}
\}

ReactDOM.render(<Rater />, mountNode);
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

export default RateItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderPaginationBasic } from './Basic/index.js'
import { default as renderPaginationChanger } from './Changer/index.js'
import { default as renderPaginationControlled } from './Controlled/index.js'
import { default as renderPaginationItemRender } from './ItemRender/index.js'
import { default as renderPaginationJump } from './Jump/index.js'
import { default as renderPaginationMini } from './Mini/index.js'
import { default as renderPaginationMore } from './More/index.js'
import { default as renderPaginationSimple } from './Simple/index.js'
import { default as renderPaginationTotal } from './Total/index.js'

const Panel = Collapse.Panel

class PaginationItems extends React.Component {
  componentDidMount() {
    renderPaginationBasic(ReactDOM, document.getElementById('PaginationBasic'))
    renderPaginationChanger(ReactDOM, document.getElementById('PaginationChanger'))
    renderPaginationControlled(ReactDOM, document.getElementById('PaginationControlled'))
    renderPaginationItemRender(ReactDOM, document.getElementById('PaginationItemRender'))
    renderPaginationJump(ReactDOM, document.getElementById('PaginationJump'))
    renderPaginationMini(ReactDOM, document.getElementById('PaginationMini'))
    renderPaginationMore(ReactDOM, document.getElementById('PaginationMore'))
    renderPaginationSimple(ReactDOM, document.getElementById('PaginationSimple'))
    renderPaginationTotal(ReactDOM, document.getElementById('PaginationTotal'))
  }

  render() {
    return (
      <div className="PaginationDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Pagination</strong>
                  <a
                    href="https://ant.design/components/pagination/"
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
                    <div className="card card--example" id="components-pagination-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic pagination.</div>
                      <div className="card-body pb-0">
                        <div id="PaginationBasic" />
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
                              {`import \{ Pagination \} from 'antd';

ReactDOM.render(<Pagination defaultCurrent=\{1\} total=\{50\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-pagination-demo-controlled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Controlled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Controlled page number.</div>
                      <div className="card-body pb-0">
                        <div id="PaginationControlled" />
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
                              {`import \{ Pagination \} from 'antd';

class App extends React.Component \{
  state = \{
    current\: 3,
  \}
  onChange = (page) => \{
    console.log(page);
    this.setState(\{
      current\: page,
    \});
  \}
  render() \{
    return <Pagination current=\{this.state.current\} onChange=\{this.onChange\} total=\{50\} />;
  \}
\}

ReactDOM.render(<App />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-pagination-demo-jump">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Jumper</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Jump to a page directly.</div>
                      <div className="card-body pb-0">
                        <div id="PaginationJump" />
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
                              {`import \{ Pagination \} from 'antd';

function onChange(pageNumber) \{
  console.log('Page\: ', pageNumber);
\}

ReactDOM.render(
  <Pagination showQuickJumper defaultCurrent=\{2\} total=\{500\} onChange=\{onChange\} />,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-pagination-demo-more">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">More</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">More pages.</div>
                      <div className="card-body pb-0">
                        <div id="PaginationMore" />
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
                              {`import \{ Pagination \} from 'antd';

ReactDOM.render(
  <Pagination defaultCurrent=\{6\} total=\{500\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-pagination-demo-total">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Total number</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can show the total number of data by setting <code>{'showTotal'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="PaginationTotal" />
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
                              {`import \{ Pagination \} from 'antd';

ReactDOM.render(
  <div>
    <Pagination
      total=\{85\}
      showTotal=\{total => \`Total \$\{total\} items\`\}
      pageSize=\{20\}
      defaultCurrent=\{1\}
    />
    <br />
    <Pagination
      total=\{85\}
      showTotal=\{(total, range) => \`\$\{range[0]\}-\$\{range[1]\} of \$\{total\} items\`\}
      pageSize=\{20\}
      defaultCurrent=\{1\}
    />
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
                    <div className="card card--example" id="components-pagination-demo-changer">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Changer</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Change <code>{'pageSize'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="PaginationChanger" />
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
                              {`import \{ Pagination \} from 'antd';

function onShowSizeChange(current, pageSize) \{
  console.log(current, pageSize);
\}

ReactDOM.render(
  <Pagination showSizeChanger onShowSizeChange=\{onShowSizeChange\} defaultCurrent=\{3\} total=\{500\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-pagination-demo-itemRender">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Prev and next</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Use text link for prev and next button.</div>
                      <div className="card-body pb-0">
                        <div id="PaginationItemRender" />
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
                              {`import \{ Pagination \} from 'antd';

function itemRender(current, type, originalElement) \{
  if (type === 'prev') \{
    return <a>Previous</a>;
  \} else if (type === 'next') \{
    return <a>Next</a>;
  \}
  return originalElement;
\}

ReactDOM.render(
  <Pagination total=\{500\} itemRender=\{itemRender\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-pagination-demo-mini">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Mini size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Mini size pagination.</div>
                      <div className="card-body pb-0">
                        <div id="PaginationMini" />
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
                              {`import \{ Pagination \} from 'antd';

function showTotal(total) \{
  return \`Total \$\{total\} items\`;
\}

ReactDOM.render(
  <div>
    <Pagination size="small" total=\{50\} />
    <Pagination size="small" total=\{50\} showSizeChanger showQuickJumper />
    <Pagination size="small" total=\{50\} showTotal=\{showTotal\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-pagination-demo-simple">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Simple mode</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Simple mode.</div>
                      <div className="card-body pb-0">
                        <div id="PaginationSimple" />
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
                              {`import \{ Pagination \} from 'antd';

ReactDOM.render(
  <Pagination simple defaultCurrent=\{2\} total=\{50\} />
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

export default PaginationItems

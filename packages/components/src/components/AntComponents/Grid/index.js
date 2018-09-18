import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderGridBasic } from './Basic/index.js'
import { default as renderGridFlexalign } from './Flexalign/index.js'
import { default as renderGridFlexorder } from './Flexorder/index.js'
import { default as renderGridFlex } from './Flex/index.js'
import { default as renderGridGutter } from './Gutter/index.js'
import { default as renderGridOffset } from './Offset/index.js'
import { default as renderGridPlayground } from './Playground/index.js'
import { default as renderGridResponsivemore } from './Responsivemore/index.js'
import { default as renderGridResponsive } from './Responsive/index.js'
import { default as renderGridSort } from './Sort/index.js'

const Panel = Collapse.Panel

class GridItems extends React.Component {
  componentDidMount() {
    renderGridBasic(ReactDOM, document.getElementById('GridBasic'))
    renderGridFlexalign(ReactDOM, document.getElementById('GridFlexalign'))
    renderGridFlexorder(ReactDOM, document.getElementById('GridFlexorder'))
    renderGridFlex(ReactDOM, document.getElementById('GridFlex'))
    renderGridGutter(ReactDOM, document.getElementById('GridGutter'))
    renderGridOffset(ReactDOM, document.getElementById('GridOffset'))
    renderGridPlayground(ReactDOM, document.getElementById('GridPlayground'))
    renderGridResponsivemore(ReactDOM, document.getElementById('GridResponsivemore'))
    renderGridResponsive(ReactDOM, document.getElementById('GridResponsive'))
    renderGridSort(ReactDOM, document.getElementById('GridSort'))
  }

  render() {
    return (
      <div className="GridDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Grid</strong>
                  <a
                    href="https://ant.design/components/grid/"
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
                    <div className="card card--example" id="components-grid-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic Grid</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        From the stack to the horizontal arrangement. You can create a basic grid
                        system by using a single set of <code>{'Row'}</code> and{' '}
                        <code>{'Col'}</code> grid assembly, all of the columns (Col) must be placed
                        in <code>{'Row'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridBasic" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span=\{12\}>col-12</Col>
      <Col span=\{12\}>col-12</Col>
    </Row>
    <Row>
      <Col span=\{8\}>col-8</Col>
      <Col span=\{8\}>col-8</Col>
      <Col span=\{8\}>col-8</Col>
    </Row>
    <Row>
      <Col span=\{6\}>col-6</Col>
      <Col span=\{6\}>col-6</Col>
      <Col span=\{6\}>col-6</Col>
      <Col span=\{6\}>col-6</Col>
    </Row>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-grid-demo-flex-order">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Flex Order</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To change the element sort by Flex layout order.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridFlexorder" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <div>
    <Row type="flex">
      <Col span=\{6\} order=\{4\}>1 col-order-4</Col>
      <Col span=\{6\} order=\{3\}>2 col-order-3</Col>
      <Col span=\{6\} order=\{2\}>3 col-order-2</Col>
      <Col span=\{6\} order=\{1\}>4 col-order-1</Col>
    </Row>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-grid-demo-gutter">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Grid Gutter</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can use the <code>{'gutter'}</code> property of <code>{'Row'}</code> as
                        grid spacing, we recommend set it to <code>{'(16 + 8n) px'}</code>. (<code>
                          {'n'}
                        </code>{' '}
                        stands for natural number.) You can set it to a object like{' '}
                        <code>{'{ xs: 8, sm: 16, md: 24, lg: 32 }'}</code> for responsive design.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridGutter" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <div className="gutter-example">
    <Row gutter=\{16\}>
      <Col className="gutter-row" span=\{6\}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span=\{6\}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span=\{6\}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span=\{6\}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-grid-demo-playground">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Playground</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A simple playground for column count and gutter.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridPlayground" />
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
                              {`import \{ Row, Col, Slider \} from 'antd';

class App extends React.Component \{
  gutters = \{\};
  colCounts = \{\};
  constructor() \{
    super();
    this.state = \{
      gutterKey\: 1,
      colCountKey\: 2,
    \};
    [8, 16, 24, 32, 40, 48].forEach((value, i) => \{ this.gutters[i] = value; \});
    [2, 3, 4, 6, 8, 12].forEach((value, i) => \{ this.colCounts[i] = value; \});
  \}
  onGutterChange = (gutterKey) => \{
    this.setState(\{ gutterKey \});
  \}
  onColCountChange = (colCountKey) => \{
    this.setState(\{ colCountKey \});
  \}
  render() \{
    const \{ gutterKey, colCountKey \} = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    let colCode = '';
    for (let i = 0; i < colCount; i++) \{
      cols.push(
        <Col key=\{i.toString()\} span=\{24 / colCount\}>
          <div>Column</div>
        </Col>
      );
      colCode += \`  <Col span=\{\$\{24 / colCount\}\} />\n\`;
    \}
    return (
      <div>
        <div style=\{\{ marginBottom\: 16 \}\}>
          <span style=\{\{ marginRight\: 6 \}\}>Gutter (px)\: </span>
          <div style=\{\{ width\: '50%' \}\}>
            <Slider
              min=\{0\}
              max=\{Object.keys(this.gutters).length - 1\}
              value=\{gutterKey\}
              onChange=\{this.onGutterChange\}
              marks=\{this.gutters\}
              step=\{null\}
            />
          </div>
          <span style=\{\{ marginRight\: 6 \}\}>Column Count\:</span>
          <div style=\{\{ width\: '50%' \}\}>
            <Slider
              min=\{0\}
              max=\{Object.keys(this.colCounts).length - 1\}
              value=\{colCountKey\}
              onChange=\{this.onColCountChange\}
              marks=\{this.colCounts\}
              step=\{null\}
            />
          </div>
        </div>
        <Row gutter=\{this.gutters[gutterKey]\}>\{cols\}</Row>
        <pre>\{\`<Row gutter=\{\$\{this.gutters[gutterKey]\}\}>\n\$\{colCode\}</Row>\`\}</pre>
      </div>
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
                    <div className="card card--example" id="components-grid-demo-responsive">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Responsive</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Referring to the Bootstrap [responsive design]
                        (http://getbootstrap.com/css/#grid-media-queries), here preset five
                        dimensions: <code>{'xs'}</code> <code>{'sm'}</code> <code>{'md'}</code>{' '}
                        <code>{'lg'}</code> <code>{'xl'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridResponsive" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <Row>
    <Col xs=\{2\} sm=\{4\} md=\{6\} lg=\{8\} xl=\{10\}>Col</Col>
    <Col xs=\{20\} sm=\{16\} md=\{12\} lg=\{8\} xl=\{4\}>Col</Col>
    <Col xs=\{2\} sm=\{4\} md=\{6\} lg=\{8\} xl=\{10\}>Col</Col>
  </Row>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-grid-demo-flex-align">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Flex Alignment</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Flex child elements vertically aligned.</div>
                      <div className="card-body pb-0">
                        <div id="GridFlexalign" />
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
                              {`import \{ Row, Col \} from 'antd';

const DemoBox = props => <p className=\{\`height-\$\{props.value\}\`\}>\{props.children\}</p>;

ReactDOM.render(
  <div>
    <p>Align Top</p>
    <Row type="flex" justify="center" align="top">
      <Col span=\{4\}><DemoBox value=\{100\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{50\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{120\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{80\}>col-4</DemoBox></Col>
    </Row>

    <p>Align Center</p>
    <Row type="flex" justify="space-around" align="middle">
      <Col span=\{4\}><DemoBox value=\{100\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{50\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{120\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{80\}>col-4</DemoBox></Col>
    </Row>

    <p>Align Bottom</p>
    <Row type="flex" justify="space-between" align="bottom">
      <Col span=\{4\}><DemoBox value=\{100\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{50\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{120\}>col-4</DemoBox></Col>
      <Col span=\{4\}><DemoBox value=\{80\}>col-4</DemoBox></Col>
    </Row>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-grid-demo-flex">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Flex Layout</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Use <code>{'row-flex'}</code> define <code>{'flex'}</code> layout, its child
                        elements depending on the value of the <code>{'start'}</code>,<code>
                          {' center'}
                        </code>, <code>{'end'}</code>,<code>{' space-between'}</code>,{' '}
                        <code>{'space-around'}</code>, which are defined in its parent node layout
                        mode.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridFlex" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <div>
    <p>sub-element align left</p>
    <Row type="flex" justify="start">
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
    </Row>

    <p>sub-element align center</p>
    <Row type="flex" justify="center">
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
    </Row>

    <p>sub-element align right</p>
    <Row type="flex" justify="end">
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
    </Row>

    <p>sub-element monospaced arrangement</p>
    <Row type="flex" justify="space-between">
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
    </Row>

    <p>sub-element align full</p>
    <Row type="flex" justify="space-around">
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
      <Col span=\{4\}>col-4</Col>
    </Row>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-grid-demo-offset">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Column offset</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'Offset'}</code> can set the column to the right side. For example,
                        using <code>{'offset = {4}'}</code> can set the element shifted to the right
                        four columns width.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridOffset" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span=\{8\}>col-8</Col>
      <Col span=\{8\} offset=\{8\}>col-8</Col>
    </Row>
    <Row>
      <Col span=\{6\} offset=\{6\}>col-6 col-offset-6</Col>
      <Col span=\{6\} offset=\{6\}>col-6 col-offset-6</Col>
    </Row>
    <Row>
      <Col span=\{12\} offset=\{6\}>col-12 col-offset-6</Col>
    </Row>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-grid-demo-responsive-more">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">More responsive</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'span'}</code> <code>{'pull'}</code> <code>{'push'}</code>{' '}
                        <code>{'offset'}</code> <code>{'order'}</code> property can be embedded into{' '}
                        <code>{'xs'}</code> <code>{'sm'}</code> <code>{'md'}</code>{' '}
                        <code>{'lg'}</code> <code>{'xl'}</code> properties to use, where{' '}
                        <code>{'xs = {6}'}</code> is equivalent to <code>{'xs = {{span: 6}}'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridResponsivemore" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <Row>
    <Col xs=\{\{ span\: 5, offset\: 1 \}\} lg=\{\{ span\: 6, offset\: 2 \}\}>Col</Col>
    <Col xs=\{\{ span\: 11, offset\: 1 \}\} lg=\{\{ span\: 6, offset\: 2 \}\}>Col</Col>
    <Col xs=\{\{ span\: 5, offset\: 1 \}\} lg=\{\{ span\: 6, offset\: 2 \}\}>Col</Col>
  </Row>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-grid-demo-sort">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Grid sort</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        By using <code>{'push'}</code> and<code>{' pull'}</code> class you can
                        easily change column order.
                      </div>
                      <div className="card-body pb-0">
                        <div id="GridSort" />
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
                              {`import \{ Row, Col \} from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span=\{18\} push=\{6\}>col-18 col-push-6</Col>
      <Col span=\{6\} pull=\{18\}>col-6 col-pull-18</Col>
    </Row>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GridItems

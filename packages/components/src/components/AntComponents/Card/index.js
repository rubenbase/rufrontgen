import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderCardBasic } from './Basic/index.js'
import { default as renderCardBorderless } from './Borderless/index.js'
import { default as renderCardFlexiblecontent } from './Flexiblecontent/index.js'
import { default as renderCardGridcard } from './Gridcard/index.js'
import { default as renderCardIncolumn } from './Incolumn/index.js'
import { default as renderCardInner } from './Inner/index.js'
import { default as renderCardLoading } from './Loading/index.js'
import { default as renderCardMeta } from './Meta/index.js'
import { default as renderCardSimple } from './Simple/index.js'
import { default as renderCardTabs } from './Tabs/index.js'

const Panel = Collapse.Panel

class CardItems extends React.Component {
  componentDidMount() {
    renderCardBasic(ReactDOM, document.getElementById('CardBasic'))
    renderCardBorderless(ReactDOM, document.getElementById('CardBorderless'))
    renderCardFlexiblecontent(ReactDOM, document.getElementById('CardFlexiblecontent'))
    renderCardGridcard(ReactDOM, document.getElementById('CardGridcard'))
    renderCardIncolumn(ReactDOM, document.getElementById('CardIncolumn'))
    renderCardInner(ReactDOM, document.getElementById('CardInner'))
    renderCardLoading(ReactDOM, document.getElementById('CardLoading'))
    renderCardMeta(ReactDOM, document.getElementById('CardMeta'))
    renderCardSimple(ReactDOM, document.getElementById('CardSimple'))
    renderCardTabs(ReactDOM, document.getElementById('CardTabs'))
  }

  render() {
    return (
      <div className="CardDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Card</strong>
                  <a
                    href="https://ant.design/components/card/"
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
                    <div className="card card--example" id="components-card-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic card</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A basic card containing a title, content and an extra corner content.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CardBasic" />
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
                              {`import \{ Card \} from 'antd';

ReactDOM.render(
  <Card title="Card title" extra=\{<a href="#">More</a>\} style=\{\{ width\: 300 \}\}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-card-demo-flexible-content">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized content</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can use <code>{'Card.Meta'}</code> to support more flexible content.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CardFlexiblecontent" />
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
                              {`import \{ Card \} from 'antd';
const \{ Meta \} = Card;

ReactDOM.render(
  <Card
    hoverable
    style=\{\{ width\: 240 \}\}
    cover=\{<img alt="example" src="https\://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />\}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-card-demo-in-column">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Card in column</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Cards usually cooperate with grid column layout in overview page.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CardIncolumn" />
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
                              {`import \{ Card, Col, Row \} from 'antd';

ReactDOM.render(
  <div style=\{\{ background\: '#ECECEC', padding\: '30px' \}\}>
    <Row gutter=\{16\}>
      <Col span=\{8\}>
        <Card title="Card title" bordered=\{false\}>Card content</Card>
      </Col>
      <Col span=\{8\}>
        <Card title="Card title" bordered=\{false\}>Card content</Card>
      </Col>
      <Col span=\{8\}>
        <Card title="Card title" bordered=\{false\}>Card content</Card>
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
                    <div className="card card--example" id="components-card-demo-loading">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Loading card</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Shows a loading indicator while the contents of the card is being fetched.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CardLoading" />
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
                              {`import \{ Card \} from 'antd';

ReactDOM.render(
  <Card loading title="Card title" style=\{\{ width\: '34%' \}\}>
    Whatever content
  </Card>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-card-demo-simple">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Simple card</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A simple card only containing a content area.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CardSimple" />
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
                              {`import \{ Card \} from 'antd';

ReactDOM.render(
  <Card style=\{\{ width\: 300 \}\}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-card-demo-border-less">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">No border</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">A borderless card on a gray background.</div>
                      <div className="card-body pb-0">
                        <div id="CardBorderless" />
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
                              {`import \{ Card \} from 'antd';

ReactDOM.render(
  <div style=\{\{ background\: '#ECECEC', padding\: '30px' \}\}>
    <Card title="Card title" bordered=\{false\} style=\{\{ width\: 300 \}\}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-card-demo-grid-card">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Grid card</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Grid style card content.</div>
                      <div className="card-body pb-0">
                        <div id="CardGridcard" />
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
                              {`import \{ Card \} from 'antd';

const gridStyle = \{
  width\: '25%',
  textAlign\: 'center',
\};

ReactDOM.render(
  <Card title="Card Title">
    <Card.Grid style=\{gridStyle\}>Content</Card.Grid>
    <Card.Grid style=\{gridStyle\}>Content</Card.Grid>
    <Card.Grid style=\{gridStyle\}>Content</Card.Grid>
    <Card.Grid style=\{gridStyle\}>Content</Card.Grid>
    <Card.Grid style=\{gridStyle\}>Content</Card.Grid>
    <Card.Grid style=\{gridStyle\}>Content</Card.Grid>
    <Card.Grid style=\{gridStyle\}>Content</Card.Grid>
  </Card>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-card-demo-inner">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Inner card</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        It can be placed inside the ordinary card to display the information of the
                        multilevel structure.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CardInner" />
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
                              {`import \{ Card \} from 'antd';

ReactDOM.render(
  <Card title="Card title">
    <p
      style=\{\{
        fontSize\: 14,
        color\: 'rgba(0, 0, 0, 0.85)',
        marginBottom\: 16,
        fontWeight\: 500,
      \}\}
    >
      Group title
    </p>
    <Card
      type="inner"
      title="Inner Card title"
      extra=\{<a href="#">More</a>\}
    >
      Inner Card content
    </Card>
    <Card
      style=\{\{ marginTop\: 16 \}\}
      type="inner"
      title="Inner Card title"
      extra=\{<a href="#">More</a>\}
    >
      Inner Card content
    </Card>
  </Card>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-card-demo-meta">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">
                            Support more content configuration
                          </strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A Card that supports <code>{'cover'}</code>, <code>{'avatar'}</code>,{' '}
                        <code>{'title'}</code> and <code>{'description'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CardMeta" />
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
                              {`import \{ Card, Icon, Avatar \} from 'antd';
const \{ Meta \} = Card;

ReactDOM.render(
  <Card
    style=\{\{ width\: 300 \}\}
    cover=\{<img alt="example" src="https\://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />\}
    actions=\{[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]\}
  >
    <Meta
      avatar=\{<Avatar src="https\://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\}
      title="Card title"
      description="This is the description"
    />
  </Card>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-card-demo-tabs">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">With tabs</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">More content can be hosted.</div>
                      <div className="card-body pb-0">
                        <div id="CardTabs" />
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
                              {`import \{ Card \} from 'antd';

const tabList = [\{
  key\: 'tab1',
  tab\: 'tab1',
\}, \{
  key\: 'tab2',
  tab\: 'tab2',
\}];

const contentList = \{
  tab1\: <p>content1</p>,
  tab2\: <p>content2</p>,
\};

const tabListNoTitle = [\{
  key\: 'article',
  tab\: 'article',
\}, \{
  key\: 'app',
  tab\: 'app',
\}, \{
  key\: 'project',
  tab\: 'project',
\}];

const contentListNoTitle = \{
  article\: <p>article content</p>,
  app\: <p>app content</p>,
  project\: <p>project content</p>,
\};

class TabsCard extends React.Component \{
  state = \{
    key\: 'tab1',
    noTitleKey\: 'app',
  \}
  onTabChange = (key, type) => \{
    console.log(key, type);
    this.setState(\{ [type]\: key \});
  \}
  render() \{
    return (
      <div>
        <Card
          style=\{\{ width\: '100%' \}\}
          title="Card title"
          extra=\{<a href="#">More</a>\}
          tabList=\{tabList\}
          onTabChange=\{(key) => \{ this.onTabChange(key, 'key'); \}\}
        >
          \{contentList[this.state.key]\}
        </Card>
        <br /><br />
        <Card
          style=\{\{ width\: '100%' \}\}
          tabList=\{tabListNoTitle\}
          activeTabKey=\{this.state.noTitleKey\}
          onTabChange=\{(key) => \{ this.onTabChange(key, 'noTitleKey'); \}\}
        >
          \{contentListNoTitle[this.state.noTitleKey]\}
        </Card>
      </div>
    );
  \}
\}

ReactDOM.render(
  <TabsCard />
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

export default CardItems

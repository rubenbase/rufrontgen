import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderListBasic } from './Basic/index.js'
import { default as renderListGrid } from './Grid/index.js'
import { default as renderListInfiniteload } from './Infiniteload/index.js'
import { default as renderListInfinitevirtualizedload } from './Infinitevirtualizedload/index.js'
import { default as renderListLoadmore } from './Loadmore/index.js'
import { default as renderListResposive } from './Resposive/index.js'
import { default as renderListSimple } from './Simple/index.js'
import { default as renderListVertical } from './Vertical/index.js'

const Panel = Collapse.Panel

class ListItems extends React.Component {
  componentDidMount() {
    renderListBasic(ReactDOM, document.getElementById('ListBasic'))
    renderListGrid(ReactDOM, document.getElementById('ListGrid'))
    renderListInfiniteload(ReactDOM, document.getElementById('ListInfiniteload'))
    renderListInfinitevirtualizedload(
      ReactDOM,
      document.getElementById('ListInfinitevirtualizedload'),
    )
    renderListLoadmore(ReactDOM, document.getElementById('ListLoadmore'))
    renderListResposive(ReactDOM, document.getElementById('ListResposive'))
    renderListSimple(ReactDOM, document.getElementById('ListSimple'))
    renderListVertical(ReactDOM, document.getElementById('ListVertical'))
  }

  render() {
    return (
      <div className="ListDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>List</strong>
                  <a
                    href="https://ant.design/components/list/"
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
                    <div className="card card--example" id="components-list-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic list</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic list.</div>
                      <div className="card-body pb-0">
                        <div id="ListBasic" />
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
                              {`import \{ List, Avatar \} from 'antd';

const data = [
  \{
    title\: 'Ant Design Title 1',
  \},
  \{
    title\: 'Ant Design Title 2',
  \},
  \{
    title\: 'Ant Design Title 3',
  \},
  \{
    title\: 'Ant Design Title 4',
  \},
];

ReactDOM.render(
  <List
    itemLayout="horizontal"
    dataSource=\{data\}
    renderItem=\{item => (
      <List.Item>
        <List.Item.Meta
          avatar=\{<Avatar src="https\://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\}
          title=\{<a href="https\://ant.design">\{item.title\}</a>\}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-list-demo-infinite-load">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Scrolling loaded</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The example of infinite load with
                        [react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller).
                      </div>
                      <div className="card-body pb-0">
                        <div id="ListInfiniteload" />
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
                              {`import \{ List, message, Avatar, Spin \} from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

const fakeDataUrl = 'https\://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component \{
  state = \{
    data\: [],
    loading\: false,
    hasMore\: true,
  \}
  getData = (callback) => \{
    reqwest(\{
      url\: fakeDataUrl,
      type\: 'json',
      method\: 'get',
      contentType\: 'application/json',
      success\: (res) => \{
        callback(res);
      \},
    \});
  \}
  componentWillMount() \{
    this.getData((res) => \{
      this.setState(\{
        data\: res.results,
      \});
    \});
  \}
  handleInfiniteOnLoad = () => \{
    let data = this.state.data;
    this.setState(\{
      loading\: true,
    \});
    if (data.length > 14) \{
      message.warning('Infinite List loaded all');
      this.setState(\{
        hasMore\: false,
        loading\: false,
      \});
      return;
    \}
    this.getData((res) => \{
      data = data.concat(res.results);
      this.setState(\{
        data,
        loading\: false,
      \});
    \});
  \}
  render() \{
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad=\{false\}
          pageStart=\{0\}
          loadMore=\{this.handleInfiniteOnLoad\}
          hasMore=\{!this.state.loading && this.state.hasMore\}
          useWindow=\{false\}
        >
          <List
            dataSource=\{this.state.data\}
            renderItem=\{item => (
              <List.Item key=\{item.id\}>
                <List.Item.Meta
                  avatar=\{<Avatar src="https\://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\}
                  title=\{<a href="https\://ant.design">\{item.name.last\}</a>\}
                  description=\{item.email\}
                />
                <div>Content</div>
              </List.Item>
            )\}
          >
            \{this.state.loading && this.state.hasMore && <Spin className="demo-loading" />\}
          </List>
        </InfiniteScroll>
      </div>
    );
  \}
\}

ReactDOM.render(<InfiniteListExample />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-list-demo-loadmore">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Load more</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Load more list with <code>{'loadMore'}</code> property.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ListLoadmore" />
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
                              {`import \{ List, Avatar, Button, Spin \} from 'antd';

import reqwest from 'reqwest';

const fakeDataUrl = 'https\://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class LoadMoreList extends React.Component \{
  state = \{
    loading\: true,
    loadingMore\: false,
    showLoadingMore\: true,
    data\: [],
  \}
  componentDidMount() \{
    this.getData((res) => \{
      this.setState(\{
        loading\: false,
        data\: res.results,
      \});
    \});
  \}
  getData = (callback) => \{
    reqwest(\{
      url\: fakeDataUrl,
      type\: 'json',
      method\: 'get',
      contentType\: 'application/json',
      success\: (res) => \{
        callback(res);
      \},
    \});
  \}
  onLoadMore = () => \{
    this.setState(\{
      loadingMore\: true,
    \});
    this.getData((res) => \{
      const data = this.state.data.concat(res.results);
      this.setState(\{
        data,
        loadingMore\: false,
      \}, () => \{
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized\:
        // https\://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      \});
    \});
  \}
  render() \{
    const \{ loading, loadingMore, showLoadingMore, data \} = this.state;
    const loadMore = showLoadingMore ? (
      <div style=\{\{ textAlign\: 'center', marginTop\: 12, height\: 32, lineHeight\: '32px' \}\}>
        \{loadingMore && <Spin />\}
        \{!loadingMore && <Button onClick=\{this.onLoadMore\}>loading more</Button>\}
      </div>
    ) \: null;
    return (
      <List
        className="demo-loadmore-list"
        loading=\{loading\}
        itemLayout="horizontal"
        loadMore=\{loadMore\}
        dataSource=\{data\}
        renderItem=\{item => (
          <List.Item actions=\{[<a>edit</a>, <a>more</a>]\}>
            <List.Item.Meta
              avatar=\{<Avatar src="https\://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\}
              title=\{<a href="https\://ant.design">\{item.name.last\}</a>\}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </List.Item>
        )\}
      />
    );
  \}
\}

ReactDOM.render(<LoadMoreList />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-list-demo-simple">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Simple list</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Ant Design supports a default list size as well as a large and small size.
                        If a large or small list is desired, set the size property to either large
                        or small respectively. Omit the size property for a list with the default
                        size. Customizing the header and footer of list by setting{' '}
                        <code>{'header'}</code> and <code>{'footer'}</code> property.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ListSimple" />
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
                              {`import \{ List \} from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

ReactDOM.render(
  <div>
    <h3 style=\{\{ marginBottom\: 16 \}\}>Default Size</h3>
    <List
      header=\{<div>Header</div>\}
      footer=\{<div>Footer</div>\}
      bordered
      dataSource=\{data\}
      renderItem=\{item => (<List.Item>\{item\}</List.Item>)\}
    />
    <h3 style=\{\{ margin\: '16px 0' \}\}>Small Size</h3>
    <List
      size="small"
      header=\{<div>Header</div>\}
      footer=\{<div>Footer</div>\}
      bordered
      dataSource=\{data\}
      renderItem=\{item => (<List.Item>\{item\}</List.Item>)\}
    />
    <h3 style=\{\{ margin\: '16px 0' \}\}>Large Size</h3>
    <List
      size="large"
      header=\{<div>Header</div>\}
      footer=\{<div>Footer</div>\}
      bordered
      dataSource=\{data\}
      renderItem=\{item => (<List.Item>\{item\}</List.Item>)\}
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
                    <div className="card card--example" id="components-list-demo-grid">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Grid</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Creating a grid list by setting the <code>{'grid'}</code> property of List
                      </div>
                      <div className="card-body pb-0">
                        <div id="ListGrid" />
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
                              {`import \{ List, Card \} from 'antd';

const data = [
  \{
    title\: 'Title 1',
  \},
  \{
    title\: 'Title 2',
  \},
  \{
    title\: 'Title 3',
  \},
  \{
    title\: 'Title 4',
  \},
];

ReactDOM.render(
  <List
    grid=\{\{ gutter\: 16, column\: 4 \}\}
    dataSource=\{data\}
    renderItem=\{item => (
      <List.Item>
        <Card title=\{item.title\}>Card content</Card>
      </List.Item>
    )\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-list-demo-infinite-virtualized-load"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Infinite</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        An example of infinite list & virtualized loading using
                        [react-virtualized](https://github.com/bvaughn/react-virtualized). [Learn
                        more](https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/)
                        <code>{'Virtualized'}</code> rendering is a technique to mount big sets of
                        data. It reduces the amount of rendered DOM nodes by tracking and hiding
                        whatever isn't currently visible.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ListInfinitevirtualizedload" />
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
                              {`import \{ List, message, Avatar, Spin \} from 'antd';

import reqwest from 'reqwest';

import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import VList from 'react-virtualized/dist/commonjs/List';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';

const fakeDataUrl = 'https\://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class VirtualizedExample extends React.Component \{
  state = \{
    data\: [],
    loading\: false,
  \}
  loadedRowsMap = \{\}
  getData = (callback) => \{
    reqwest(\{
      url\: fakeDataUrl,
      type\: 'json',
      method\: 'get',
      contentType\: 'application/json',
      success\: (res) => \{
        callback(res);
      \},
    \});
  \}
  componentWillMount() \{
    this.getData((res) => \{
      this.setState(\{
        data\: res.results,
      \});
    \});
  \}
  handleInfiniteOnLoad = (\{ startIndex, stopIndex \}) => \{
    let data = this.state.data;
    this.setState(\{
      loading\: true,
    \});
    for (let i = startIndex; i <= stopIndex; i++) \{
      // 1 means loading
      this.loadedRowsMap[i] = 1;
    \}
    if (data.length > 19) \{
      message.warning('Virtualized List loaded all');
      this.setState(\{
        loading\: false,
      \});
      return;
    \}
    this.getData((res) => \{
      data = data.concat(res.results);
      this.setState(\{
        data,
        loading\: false,
      \});
    \});
  \}
  isRowLoaded = (\{ index \}) => \{
    return !!this.loadedRowsMap[index];
  \}
  renderItem = (\{ index, key, style \}) => \{
    const \{ data \} = this.state;
    const item = data[index];
    return (
      <List.Item key=\{key\} style=\{style\}>
        <List.Item.Meta
          avatar=\{<Avatar src="https\://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\}
          title=\{<a href="https\://ant.design">\{item.name.last\}</a>\}
          description=\{item.email\}
        />
        <div>Content</div>
      </List.Item>
    );
  \}
  render() \{
    const \{ data \} = this.state;
    const vlist = (\{ height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width \}) => (
      <VList
        autoHeight
        height=\{height\}
        isScrolling=\{isScrolling\}
        onScroll=\{onChildScroll\}
        overscanRowCount=\{2\}
        rowCount=\{data.length\}
        rowHeight=\{73\}
        rowRenderer=\{this.renderItem\}
        onRowsRendered=\{onRowsRendered\}
        scrollTop=\{scrollTop\}
        width=\{width\}
      />
    );
    const autoSize = (\{ height, isScrolling, onChildScroll, scrollTop, onRowsRendered \}) => (
      <AutoSizer disableHeight>
        \{(\{ width \}) => vlist(\{ height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width \})\}
      </AutoSizer>
    );
    const infiniteLoader = (\{ height, isScrolling, onChildScroll, scrollTop \}) => (
      <InfiniteLoader
        isRowLoaded=\{this.isRowLoaded\}
        loadMoreRows=\{this.handleInfiniteOnLoad\}
        rowCount=\{data.length\}
      >
        \{(\{ onRowsRendered \}) => autoSize(\{ height, isScrolling, onChildScroll, scrollTop, onRowsRendered \})\}
      </InfiniteLoader>
    );
    return (
      <List>
        \{
          data.length > 0 && (
            <WindowScroller scrollElement=\{null\}>
              \{infiniteLoader\}
            </WindowScroller>
          )
        \}
        \{this.state.loading && <Spin className="demo-loading" />\}
      </List>
    );
  \}
\}

ReactDOM.render(<VirtualizedExample />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-list-demo-resposive">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Responsive grid list</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Responsive grid list. The size property is as same as [Layout
                        Grid](https://ant.design/components/grid/#Col).
                      </div>
                      <div className="card-body pb-0">
                        <div id="ListResposive" />
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
                              {`import \{ List, Card \} from 'antd';

const data = [
  \{
    title\: 'Title 1',
  \},
  \{
    title\: 'Title 2',
  \},
  \{
    title\: 'Title 3',
  \},
  \{
    title\: 'Title 4',
  \},
  \{
    title\: 'Title 5',
  \},
  \{
    title\: 'Title 6',
  \},
];

ReactDOM.render(
  <List
    grid=\{\{ gutter\: 16, xs\: 1, sm\: 2, md\: 4, lg\: 4, xl\: 6, xxl\: 3 \}\}
    dataSource=\{data\}
    renderItem=\{item => (
      <List.Item>
        <Card title=\{item.title\}>Card content</Card>
      </List.Item>
    )\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-list-demo-vertical">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Vertical</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Setting <code>{'itemLayout'}</code> property with <code>{'vertical'}</code>{' '}
                        to create a vertical list.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ListVertical" />
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
                              {`import \{ List, Avatar, Icon \} from 'antd';

const listData = [];
for (let i = 0; i < 5; i++) \{
  listData.push(\{
    href\: 'http\://ant.design',
    title\: \`ant design part \$\{i\}\`,
    avatar\: 'https\://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description\: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content\: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  \});
\}

const pagination = \{
  pageSize\: 10,
  current\: 1,
  total\: listData.length,
  onChange\: (() => \{\}),
\};

const IconText = (\{ type, text \}) => (
  <span>
    <Icon type=\{type\} style=\{\{ marginRight\: 8 \}\} />
    \{text\}
  </span>
);

ReactDOM.render(
  <List
    itemLayout="vertical"
    size="large"
    pagination=\{pagination\}
    dataSource=\{listData\}
    renderItem=\{item => (
      <List.Item
        key=\{item.title\}
        actions=\{[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]\}
        extra=\{<img width=\{272\} alt="logo" src="https\://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />\}
      >
        <List.Item.Meta
          avatar=\{<Avatar src=\{item.avatar\} />\}
          title=\{<a href=\{item.href\}>\{item.title\}</a>\}
          description=\{item.description\}
        />
        \{item.content\}
      </List.Item>
    )\}
  />
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

export default ListItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTableAjax } from './Ajax/index.js'
import { default as renderTableBasic } from './Basic/index.js'
import { default as renderTableBordered } from './Bordered/index.js'
import { default as renderTableColspanrowspan } from './Colspanrowspan/index.js'
import { default as renderTableCustomfilterpanel } from './Customfilterpanel/index.js'
import { default as renderTableDragsorting } from './Dragsorting/index.js'
import { default as renderTableDynamicsettings } from './Dynamicsettings/index.js'
import { default as renderTableEditcell } from './Editcell/index.js'
import { default as renderTableEditrow } from './Editrow/index.js'
import { default as renderTableExpandchildren } from './Expandchildren/index.js'
import { default as renderTableExpand } from './Expand/index.js'
import { default as renderTableFixedcolumnsheader } from './Fixedcolumnsheader/index.js'
import { default as renderTableFixedcolumns } from './Fixedcolumns/index.js'
import { default as renderTableFixedheader } from './Fixedheader/index.js'
import { default as renderTableGroupingcolumns } from './Groupingcolumns/index.js'
import { default as renderTableHead } from './Head/index.js'
import { default as renderTableJsx } from './Jsx/index.js'
import { default as renderTableNestedtable } from './Nestedtable/index.js'
import { default as renderTableResetfilter } from './Resetfilter/index.js'
import { default as renderTableRowselectionandoperation } from './Rowselectionandoperation/index.js'
import { default as renderTableRowselectioncustom } from './Rowselectioncustom/index.js'
import { default as renderTableRowselection } from './Rowselection/index.js'
import { default as renderTableSize } from './Size/index.js'

const Panel = Collapse.Panel

class TableItems extends React.Component {
  componentDidMount() {
    renderTableAjax(ReactDOM, document.getElementById('TableAjax'))
    renderTableBasic(ReactDOM, document.getElementById('TableBasic'))
    renderTableBordered(ReactDOM, document.getElementById('TableBordered'))
    renderTableColspanrowspan(ReactDOM, document.getElementById('TableColspanrowspan'))
    renderTableCustomfilterpanel(ReactDOM, document.getElementById('TableCustomfilterpanel'))
    renderTableDragsorting(ReactDOM, document.getElementById('TableDragsorting'))
    renderTableDynamicsettings(ReactDOM, document.getElementById('TableDynamicsettings'))
    renderTableEditcell(ReactDOM, document.getElementById('TableEditcell'))
    renderTableEditrow(ReactDOM, document.getElementById('TableEditrow'))
    renderTableExpandchildren(ReactDOM, document.getElementById('TableExpandchildren'))
    renderTableExpand(ReactDOM, document.getElementById('TableExpand'))
    renderTableFixedcolumnsheader(ReactDOM, document.getElementById('TableFixedcolumnsheader'))
    renderTableFixedcolumns(ReactDOM, document.getElementById('TableFixedcolumns'))
    renderTableFixedheader(ReactDOM, document.getElementById('TableFixedheader'))
    renderTableGroupingcolumns(ReactDOM, document.getElementById('TableGroupingcolumns'))
    renderTableHead(ReactDOM, document.getElementById('TableHead'))
    renderTableJsx(ReactDOM, document.getElementById('TableJsx'))
    renderTableNestedtable(ReactDOM, document.getElementById('TableNestedtable'))
    renderTableResetfilter(ReactDOM, document.getElementById('TableResetfilter'))
    renderTableRowselectionandoperation(
      ReactDOM,
      document.getElementById('TableRowselectionandoperation'),
    )
    renderTableRowselectioncustom(ReactDOM, document.getElementById('TableRowselectioncustom'))
    renderTableRowselection(ReactDOM, document.getElementById('TableRowselection'))
    renderTableSize(ReactDOM, document.getElementById('TableSize'))
  }

  render() {
    return (
      <div className="TableDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Table</strong>
                  <a
                    href="https://ant.design/components/table/"
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
                    <div className="card card--example" id="components-table-demo-ajax">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Ajax</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        This example shows how to fetch and present data from remote server, and how
                        to implement filtering and sorting in server side by sending related
                        parameters to server. **Note, this example use [Mock
                        API](https://randomuser.me) that you can look up in Network Console.**
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableAjax" />
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
                              {`import \{ Table \} from 'antd';
import reqwest from 'reqwest';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  sorter\: true,
  render\: name => \`\$\{name.first\} \$\{name.last\}\`,
  width\: '20%',
\}, \{
  title\: 'Gender',
  dataIndex\: 'gender',
  filters\: [
    \{ text\: 'Male', value\: 'male' \},
    \{ text\: 'Female', value\: 'female' \},
  ],
  width\: '20%',
\}, \{
  title\: 'Email',
  dataIndex\: 'email',
\}];

class App extends React.Component \{
  state = \{
    data\: [],
    pagination\: \{\},
    loading\: false,
  \};
  handleTableChange = (pagination, filters, sorter) => \{
    const pager = \{ ...this.state.pagination \};
    pager.current = pagination.current;
    this.setState(\{
      pagination\: pager,
    \});
    this.fetch(\{
      results\: pagination.pageSize,
      page\: pagination.current,
      sortField\: sorter.field,
      sortOrder\: sorter.order,
      ...filters,
    \});
  \}
  fetch = (params = \{\}) => \{
    console.log('params\:', params);
    this.setState(\{ loading\: true \});
    reqwest(\{
      url\: 'https\://randomuser.me/api',
      method\: 'get',
      data\: \{
        results\: 10,
        ...params,
      \},
      type\: 'json',
    \}).then((data) => \{
      const pagination = \{ ...this.state.pagination \};
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState(\{
        loading\: false,
        data\: data.results,
        pagination,
      \});
    \});
  \}
  componentDidMount() \{
    this.fetch();
  \}
  render() \{
    return (
      <Table columns=\{columns\}
        rowKey=\{record => record.registered\}
        dataSource=\{this.state.data\}
        pagination=\{this.state.pagination\}
        loading=\{this.state.loading\}
        onChange=\{this.handleTableChange\}
      />
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
                    <div className="card card--example" id="components-table-demo-bordered">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="card-body pb-0">Add border, title and footer for table.</div>
                      <div className="card-body pb-0">
                        <div id="TableBordered" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  render\: text => <a href="#">\{text\}</a>,
\}, \{
  title\: 'Cash Assets',
  className\: 'column-money',
  dataIndex\: 'money',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
\}];

const data = [\{
  key\: '1',
  name\: 'John Brown',
  money\: '￥300,000.00',
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  money\: '￥1,256,000.00',
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Joe Black',
  money\: '￥120,000.00',
  address\: 'Sidney No. 1 Lake Park',
\}];

ReactDOM.render(
  <Table
    columns=\{columns\}
    dataSource=\{data\}
    bordered
    title=\{() => 'Header'\}
    footer=\{() => 'Footer'\}
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
                      id="components-table-demo-custom-filter-panel"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized filter panel</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Implement a customized column search example via{' '}
                        <code>{'filterDropdown'}</code>, <code>{'filterDropdownVisible'}</code> and{' '}
                        <code>{'filterDropdownVisibleChange'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableCustomfilterpanel" />
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
                              {`import \{ Table, Input, Button, Icon \} from 'antd';

const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Joe Black',
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Jim Green',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}, \{
  key\: '4',
  name\: 'Jim Red',
  age\: 32,
  address\: 'London No. 2 Lake Park',
\}];

class App extends React.Component \{
  state = \{
    filterDropdownVisible\: false,
    data,
    searchText\: '',
    filtered\: false,
  \};
  onInputChange = (e) => \{
    this.setState(\{ searchText\: e.target.value \});
  \}
  onSearch = () => \{
    const \{ searchText \} = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState(\{
      filterDropdownVisible\: false,
      filtered\: !!searchText,
      data\: data.map((record) => \{
        const match = record.name.match(reg);
        if (!match) \{
          return null;
        \}
        return \{
          ...record,
          name\: (
            <span>
              \{record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">\{match[0]\}</span>, text] \: text
              ))\}
            </span>
          ),
        \};
      \}).filter(record => !!record),
    \});
  \}
  render() \{
    const columns = [\{
      title\: 'Name',
      dataIndex\: 'name',
      key\: 'name',
      filterDropdown\: (
        <div className="custom-filter-dropdown">
          <Input
            ref=\{ele => this.searchInput = ele\}
            placeholder="Search name"
            value=\{this.state.searchText\}
            onChange=\{this.onInputChange\}
            onPressEnter=\{this.onSearch\}
          />
          <Button type="primary" onClick=\{this.onSearch\}>Search</Button>
        </div>
      ),
      filterIcon\: <Icon type="smile-o" style=\{\{ color\: this.state.filtered ? '#108ee9' \: '#aaa' \}\} />,
      filterDropdownVisible\: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange\: (visible) => \{
        this.setState(\{
          filterDropdownVisible\: visible,
        \}, () => this.searchInput && this.searchInput.focus());
      \},
    \}, \{
      title\: 'Age',
      dataIndex\: 'age',
      key\: 'age',
    \}, \{
      title\: 'Address',
      dataIndex\: 'address',
      key\: 'address',
      filters\: [\{
        text\: 'London',
        value\: 'London',
      \}, \{
        text\: 'New York',
        value\: 'New York',
      \}],
      onFilter\: (value, record) => record.address.indexOf(value) === 0,
    \}];
    return <Table columns=\{columns\} dataSource=\{this.state.data\} />;
  \}
\}

ReactDOM.render(<App />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-dynamic-settings">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Dynamic Settings</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Select different settings to see the result.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableDynamicsettings" />
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
                              {`import \{ Table, Icon, Switch, Radio, Form, Divider \} from 'antd';
const FormItem = Form.Item;

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  key\: 'name',
  width\: 150,
  render\: text => <a href="#">\{text\}</a>,
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
  key\: 'age',
  width\: 70,
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
  key\: 'address',
\}, \{
  title\: 'Action',
  key\: 'action',
  width\: 360,
  render\: (text, record) => (
    <span>
      <a href="#">Action 一 \{record.name\}</a>
      <Divider type="vertical" />
      <a href="#">Delete</a>
      <Divider type="vertical" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
\}];

const data = [];
for (let i = 1; i <= 10; i++) \{
  data.push(\{
    key\: i,
    name\: 'John Brown',
    age\: \`\$\{i\}2\`,
    address\: \`New York No. \$\{i\} Lake Park\`,
    description\: \`My name is John Brown, I am \$\{i\}2 years old, living in New York No. \$\{i\} Lake Park.\`,
  \});
\}

const expandedRowRender = record => <p>\{record.description\}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = \{ y\: 240 \};
const pagination = \{ position\: 'bottom' \};

class Demo extends React.Component \{
  state = \{
    bordered\: false,
    loading\: false,
    pagination,
    size\: 'default',
    expandedRowRender,
    title\: undefined,
    showHeader,
    footer,
    rowSelection\: \{\},
    scroll\: undefined,
  \}

  handleToggle = (prop) => \{
    return (enable) => \{
      this.setState(\{ [prop]\: enable \});
    \};
  \}

  handleSizeChange = (e) => \{
    this.setState(\{ size\: e.target.value \});
  \}

  handleExpandChange = (enable) => \{
    this.setState(\{ expandedRowRender\: enable ? expandedRowRender \: undefined \});
  \}

  handleTitleChange = (enable) => \{
    this.setState(\{ title\: enable ? title \: undefined \});
  \}

  handleHeaderChange = (enable) => \{
    this.setState(\{ showHeader\: enable ? showHeader \: false \});
  \}

  handleFooterChange = (enable) => \{
    this.setState(\{ footer\: enable ? footer \: undefined \});
  \}

  handleRowSelectionChange = (enable) => \{
    this.setState(\{ rowSelection\: enable ? \{\} \: undefined \});
  \}

  handleScollChange = (enable) => \{
    this.setState(\{ scroll\: enable ? scroll \: undefined \});
  \}

  handlePaginationChange = (e) => \{
    const \{ value \} = e.target;
    this.setState(\{
      pagination\: value === 'none' ? false \: \{ position\: value \},
    \});
  \}

  render() \{
    const state = this.state;
    return (
      <div>
        <div className="components-table-demo-control-bar">
          <Form layout="inline">
            <FormItem label="Bordered">
              <Switch checked=\{state.bordered\} onChange=\{this.handleToggle('bordered')\} />
            </FormItem>
            <FormItem label="loading">
              <Switch checked=\{state.loading\} onChange=\{this.handleToggle('loading')\} />
            </FormItem>
            <FormItem label="Title">
              <Switch checked=\{!!state.title\} onChange=\{this.handleTitleChange\} />
            </FormItem>
            <FormItem label="Column Header">
              <Switch checked=\{!!state.showHeader\} onChange=\{this.handleHeaderChange\} />
            </FormItem>
            <FormItem label="Footer">
              <Switch checked=\{!!state.footer\} onChange=\{this.handleFooterChange\} />
            </FormItem>
            <FormItem label="Expandable">
              <Switch checked=\{!!state.expandedRowRender\} onChange=\{this.handleExpandChange\} />
            </FormItem>
            <FormItem label="Checkbox">
              <Switch checked=\{!!state.rowSelection\} onChange=\{this.handleRowSelectionChange\} />
            </FormItem>
            <FormItem label="Fixed Header">
              <Switch checked=\{!!state.scroll\} onChange=\{this.handleScollChange\} />
            </FormItem>
            <FormItem label="Size">
              <Radio.Group size="default" value=\{state.size\} onChange=\{this.handleSizeChange\}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </FormItem>
            <FormItem label="Pagination">
              <Radio.Group
                value=\{state.pagination ? state.pagination.position \: 'none'\}
                onChange=\{this.handlePaginationChange\}
              >
                <Radio.Button value="top">Top</Radio.Button>
                <Radio.Button value="bottom">Bottom</Radio.Button>
                <Radio.Button value="both">Both</Radio.Button>
                <Radio.Button value="none">None</Radio.Button>
              </Radio.Group>
            </FormItem>
          </Form>
        </div>
        <Table \{...this.state\} columns=\{columns\} dataSource=\{data\} />
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
                    <div className="card card--example" id="components-table-demo-edit-row">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Editable Rows</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Table with editable rows.</div>
                      <div className="card-body pb-0">
                        <div id="TableEditrow" />
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
                              {`import \{ Table, Input, Popconfirm \} from 'antd';

const data = [];
for (let i = 0; i < 100; i++) \{
  data.push(\{
    key\: i.toString(),
    name\: \`Edrward \$\{i\}\`,
    age\: 32,
    address\: \`London Park no. \$\{i\}\`,
  \});
\}

const EditableCell = (\{ editable, value, onChange \}) => (
  <div>
    \{editable
      ? <Input style=\{\{ margin\: '-5px 0' \}\} value=\{value\} onChange=\{e => onChange(e.target.value)\} />
      \: value
    \}
  </div>
);

class EditableTable extends React.Component \{
  constructor(props) \{
    super(props);
    this.columns = [\{
      title\: 'name',
      dataIndex\: 'name',
      width\: '25%',
      render\: (text, record) => this.renderColumns(text, record, 'name'),
    \}, \{
      title\: 'age',
      dataIndex\: 'age',
      width\: '15%',
      render\: (text, record) => this.renderColumns(text, record, 'age'),
    \}, \{
      title\: 'address',
      dataIndex\: 'address',
      width\: '40%',
      render\: (text, record) => this.renderColumns(text, record, 'address'),
    \}, \{
      title\: 'operation',
      dataIndex\: 'operation',
      render\: (text, record) => \{
        const \{ editable \} = record;
        return (
          <div className="editable-row-operations">
            \{
              editable ?
                <span>
                  <a onClick=\{() => this.save(record.key)\}>Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm=\{() => this.cancel(record.key)\}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
                \: <a onClick=\{() => this.edit(record.key)\}>Edit</a>
            \}
          </div>
        );
      \},
    \}];
    this.state = \{ data \};
    this.cacheData = data.map(item => (\{ ...item \}));
  \}
  renderColumns(text, record, column) \{
    return (
      <EditableCell
        editable=\{record.editable\}
        value=\{text\}
        onChange=\{value => this.handleChange(value, record.key, column)\}
      />
    );
  \}
  handleChange(value, key, column) \{
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) \{
      target[column] = value;
      this.setState(\{ data\: newData \});
    \}
  \}
  edit(key) \{
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) \{
      target.editable = true;
      this.setState(\{ data\: newData \});
    \}
  \}
  save(key) \{
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) \{
      delete target.editable;
      this.setState(\{ data\: newData \});
      this.cacheData = newData.map(item => (\{ ...item \}));
    \}
  \}
  cancel(key) \{
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) \{
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      delete target.editable;
      this.setState(\{ data\: newData \});
    \}
  \}
  render() \{
    return <Table bordered dataSource=\{this.state.data\} columns=\{this.columns\} />;
  \}
\}

ReactDOM.render(<EditableTable />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-expand">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Expandable Row</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        When there's too much information to show and the table can't display all at
                        once.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableExpand" />
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
                              {`import \{ Table \} from 'antd';

const columns = [
  \{ title\: 'Name', dataIndex\: 'name', key\: 'name' \},
  \{ title\: 'Age', dataIndex\: 'age', key\: 'age' \},
  \{ title\: 'Address', dataIndex\: 'address', key\: 'address' \},
  \{ title\: 'Action', dataIndex\: '', key\: 'x', render\: () => <a href="#">Delete</a> \},
];

const data = [
  \{ key\: 1, name\: 'John Brown', age\: 32, address\: 'New York No. 1 Lake Park', description\: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' \},
  \{ key\: 2, name\: 'Jim Green', age\: 42, address\: 'London No. 1 Lake Park', description\: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' \},
  \{ key\: 3, name\: 'Joe Black', age\: 32, address\: 'Sidney No. 1 Lake Park', description\: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' \},
];

ReactDOM.render(
  <Table
    columns=\{columns\}
    expandedRowRender=\{record => <p style=\{\{ margin\: 0 \}\}>\{record.description\}</p>\}
    dataSource=\{data\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-fixed-columns">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Fixed Columns</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To fix some columns and scroll inside other columns, and you must set{' '}
                        <code>{'scroll.x'}</code> meanwhile. > Specify the width of columns if
                        header and cell do not align properly. > A fixed value which is greater than
                        table width for <code>{'scroll.x'}</code> is recommended. The sum of unfixed
                        columns should not greater than <code>{'scroll.x'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableFixedcolumns" />
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
                              {`import \{ Table \} from 'antd';

const columns = [
  \{ title\: 'Full Name', width\: 100, dataIndex\: 'name', key\: 'name', fixed\: 'left' \},
  \{ title\: 'Age', width\: 100, dataIndex\: 'age', key\: 'age', fixed\: 'left' \},
  \{ title\: 'Column 1', dataIndex\: 'address', key\: '1' \},
  \{ title\: 'Column 2', dataIndex\: 'address', key\: '2' \},
  \{ title\: 'Column 3', dataIndex\: 'address', key\: '3' \},
  \{ title\: 'Column 4', dataIndex\: 'address', key\: '4' \},
  \{ title\: 'Column 5', dataIndex\: 'address', key\: '5' \},
  \{ title\: 'Column 6', dataIndex\: 'address', key\: '6' \},
  \{ title\: 'Column 7', dataIndex\: 'address', key\: '7' \},
  \{ title\: 'Column 8', dataIndex\: 'address', key\: '8' \},
  \{
    title\: 'Action',
    key\: 'operation',
    fixed\: 'right',
    width\: 100,
    render\: () => <a href="#">action</a>,
  \},
];

const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  address\: 'New York Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  age\: 40,
  address\: 'London Park',
\}];

ReactDOM.render(<Table columns=\{columns\} dataSource=\{data\} scroll=\{\{ x\: 1300 \}\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-grouping-columns">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Grouping table head</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Group table head with <code>{'columns[n].children'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableGroupingcolumns" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  key\: 'name',
  width\: 100,
  fixed\: 'left',
  filters\: [\{
    text\: 'Joe',
    value\: 'Joe',
  \}, \{
    text\: 'John',
    value\: 'John',
  \}],
  onFilter\: (value, record) => record.name.indexOf(value) === 0,
\}, \{
  title\: 'Other',
  children\: [\{
    title\: 'Age',
    dataIndex\: 'age',
    key\: 'age',
    width\: 200,
    sorter\: (a, b) => a.age - b.age,
  \}, \{
    title\: 'Address',
    children\: [\{
      title\: 'Street',
      dataIndex\: 'street',
      key\: 'street',
      width\: 200,
    \}, \{
      title\: 'Block',
      children\: [\{
        title\: 'Building',
        dataIndex\: 'building',
        key\: 'building',
        width\: 100,
      \}, \{
        title\: 'Door No.',
        dataIndex\: 'number',
        key\: 'number',
        width\: 100,
      \}],
    \}],
  \}],
\}, \{
  title\: 'Company',
  children\: [\{
    title\: 'Company Address',
    dataIndex\: 'companyAddress',
    key\: 'companyAddress',
  \}, \{
    title\: 'Company Name',
    dataIndex\: 'companyName',
    key\: 'companyName',
  \}],
\}, \{
  title\: 'Gender',
  dataIndex\: 'gender',
  key\: 'gender',
  width\: 60,
  fixed\: 'right',
\}];

const data = [];
for (let i = 0; i < 100; i++) \{
  data.push(\{
    key\: i,
    name\: 'John Brown',
    age\: i + 1,
    street\: 'Lake Park',
    building\: 'C',
    number\: 2035,
    companyAddress\: 'Lake Street 42',
    companyName\: 'SoftLake Co',
    gender\: 'M',
  \});
\}

ReactDOM.render(
  <Table
    columns=\{columns\}
    dataSource=\{data\}
    bordered
    size="middle"
    scroll=\{\{ x\: '130%', y\: 240 \}\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-jsx">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">JSX style API</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Using JSX style API (introduced in 2.5.0) > Since this is just a syntax
                        sugar for the prop <code>{'columns'}</code>, so that you can't compose{' '}
                        <code>{'Column'}</code> and <code>{'ColumnGroup'}</code> with other
                        Components.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableJsx" />
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
                              {`import \{ Table, Icon, Divider \} from 'antd';

const \{ Column, ColumnGroup \} = Table;

const data = [\{
  key\: '1',
  firstName\: 'John',
  lastName\: 'Brown',
  age\: 32,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  firstName\: 'Jim',
  lastName\: 'Green',
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  firstName\: 'Joe',
  lastName\: 'Black',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}];

ReactDOM.render(
  <Table dataSource=\{data\}>
    <ColumnGroup title="Name">
      <Column
        title="First Name"
        dataIndex="firstName"
        key="firstName"
      />
      <Column
        title="Last Name"
        dataIndex="lastName"
        key="lastName"
      />
    </ColumnGroup>
    <Column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <Column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <Column
      title="Action"
      key="action"
      render=\{(text, record) => (
        <span>
          <a href="#">Action 一 \{record.name\}</a>
          <Divider type="vertical" />
          <a href="#">Delete</a>
          <Divider type="vertical" />
          <a href="#" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      )\}
    />
  </Table>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-reset-filter">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Reset filters and sorters</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Control filters and sorters by <code>{'filteredValue'}</code> and{' '}
                        <code>{'sortOrder'}</code>. > 1. Defining <code>{'filteredValue'}</code> or{' '}
                        <code>{'sortOrder'}</code> means that it is in the controlled mode. > 2.
                        Make sure <code>{'sortOrder'}</code> is assigned for only one column. > 3.{' '}
                        <code>{'column.key'}</code> is required.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableResetfilter" />
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
                              {`import \{ Table, Button \} from 'antd';

const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Joe Black',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}, \{
  key\: '4',
  name\: 'Jim Red',
  age\: 32,
  address\: 'London No. 2 Lake Park',
\}];

class App extends React.Component \{
  state = \{
    filteredInfo\: null,
    sortedInfo\: null,
  \};
  handleChange = (pagination, filters, sorter) => \{
    console.log('Various parameters', pagination, filters, sorter);
    this.setState(\{
      filteredInfo\: filters,
      sortedInfo\: sorter,
    \});
  \}
  clearFilters = () => \{
    this.setState(\{ filteredInfo\: null \});
  \}
  clearAll = () => \{
    this.setState(\{
      filteredInfo\: null,
      sortedInfo\: null,
    \});
  \}
  setAgeSort = () => \{
    this.setState(\{
      sortedInfo\: \{
        order\: 'descend',
        columnKey\: 'age',
      \},
    \});
  \}
  render() \{
    let \{ sortedInfo, filteredInfo \} = this.state;
    sortedInfo = sortedInfo || \{\};
    filteredInfo = filteredInfo || \{\};
    const columns = [\{
      title\: 'Name',
      dataIndex\: 'name',
      key\: 'name',
      filters\: [
        \{ text\: 'Joe', value\: 'Joe' \},
        \{ text\: 'Jim', value\: 'Jim' \},
      ],
      filteredValue\: filteredInfo.name || null,
      onFilter\: (value, record) => record.name.includes(value),
      sorter\: (a, b) => a.name.length - b.name.length,
      sortOrder\: sortedInfo.columnKey === 'name' && sortedInfo.order,
    \}, \{
      title\: 'Age',
      dataIndex\: 'age',
      key\: 'age',
      sorter\: (a, b) => a.age - b.age,
      sortOrder\: sortedInfo.columnKey === 'age' && sortedInfo.order,
    \}, \{
      title\: 'Address',
      dataIndex\: 'address',
      key\: 'address',
      filters\: [
        \{ text\: 'London', value\: 'London' \},
        \{ text\: 'New York', value\: 'New York' \},
      ],
      filteredValue\: filteredInfo.address || null,
      onFilter\: (value, record) => record.address.includes(value),
      sorter\: (a, b) => a.address.length - b.address.length,
      sortOrder\: sortedInfo.columnKey === 'address' && sortedInfo.order,
    \}];
    return (
      <div>
        <div className="table-operations">
          <Button onClick=\{this.setAgeSort\}>Sort age</Button>
          <Button onClick=\{this.clearFilters\}>Clear filters</Button>
          <Button onClick=\{this.clearAll\}>Clear filters and sorters</Button>
        </div>
        <Table columns=\{columns\} dataSource=\{data\} onChange=\{this.handleChange\} />
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
                    <div
                      className="card card--example"
                      id="components-table-demo-row-selection-custom"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Custom selection</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Use <code>{'rowSelection.selections'}</code> custom selections, default no
                        select dropdown, show default selections via setting to{' '}
                        <code>{'true'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableRowselectioncustom" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
\}];

const data = [];
for (let i = 0; i < 46; i++) \{
  data.push(\{
    key\: i,
    name\: \`Edward King \$\{i\}\`,
    age\: 32,
    address\: \`London, Park Lane no. \$\{i\}\`,
  \});
\}

class App extends React.Component \{
  state = \{
    selectedRowKeys\: [], // Check here to configure the default column
  \};
  onSelectChange = (selectedRowKeys) => \{
    console.log('selectedRowKeys changed\: ', selectedRowKeys);
    this.setState(\{ selectedRowKeys \});
  \}
  render() \{
    const \{ selectedRowKeys \} = this.state;
    const rowSelection = \{
      selectedRowKeys,
      onChange\: this.onSelectChange,
      hideDefaultSelections\: true,
      selections\: [\{
        key\: 'all-data',
        text\: 'Select All Data',
        onSelect\: () => \{
          this.setState(\{
            selectedRowKeys\: [...Array(46).keys()], // 0...45
          \});
        \},
      \}, \{
        key\: 'odd',
        text\: 'Select Odd Row',
        onSelect\: (changableRowKeys) => \{
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => \{
            if (index % 2 !== 0) \{
              return false;
            \}
            return true;
          \});
          this.setState(\{ selectedRowKeys\: newSelectedRowKeys \});
        \},
      \}, \{
        key\: 'even',
        text\: 'Select Even Row',
        onSelect\: (changableRowKeys) => \{
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => \{
            if (index % 2 !== 0) \{
              return true;
            \}
            return false;
          \});
          this.setState(\{ selectedRowKeys\: newSelectedRowKeys \});
        \},
      \}],
      onSelection\: this.onSelection,
    \};
    return (
      <Table rowSelection=\{rowSelection\} columns=\{columns\} dataSource=\{data\} />
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
                    <div className="card card--example" id="components-table-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">size</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Two compacted table size: <code>{'middle'}</code> and <code>{'small'}</code>,{' '}
                        <code>{'small'}</code> size is used in Modal only.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableSize" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
\}];
const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Joe Black',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}];

ReactDOM.render(
  <div>
    <h4>Middle size table</h4>
    <Table columns=\{columns\} dataSource=\{data\} size="middle" />
    <h4>Small size table</h4>
    <Table columns=\{columns\} dataSource=\{data\} size="small" />
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
                    <div className="card card--example" id="components-table-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic Usage</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Simple table with actions.</div>
                      <div className="card-body pb-0">
                        <div id="TableBasic" />
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
                              {`import \{ Table, Icon, Divider \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  key\: 'name',
  render\: text => <a href="#">\{text\}</a>,
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
  key\: 'age',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
  key\: 'address',
\}, \{
  title\: 'Action',
  key\: 'action',
  render\: (text, record) => (
    <span>
      <a href="#">Action 一 \{record.name\}</a>
      <Divider type="vertical" />
      <a href="#">Delete</a>
      <Divider type="vertical" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
\}];

const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Joe Black',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}];

ReactDOM.render(<Table columns=\{columns\} dataSource=\{data\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-colspan-rowspan">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">colSpan and rowSpan</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Table column title supports <code>{'colSpan'}</code> that set in{' '}
                        <code>{'column'}</code>. Table cell supports <code>{'colSpan'}</code> and{' '}
                        <code>{'rowSpan'}</code> that set in render return object. When each of them
                        is set to <code>{'0'}</code>, the cell will not be rendered.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableColspanrowspan" />
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
                              {`import \{ Table \} from 'antd';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => \{
  const obj = \{
    children\: value,
    props\: \{\},
  \};
  if (index === 4) \{
    obj.props.colSpan = 0;
  \}
  return obj;
\};

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  render\: (text, row, index) => \{
    if (index < 4) \{
      return <a href="#">\{text\}</a>;
    \}
    return \{
      children\: <a href="#">\{text\}</a>,
      props\: \{
        colSpan\: 5,
      \},
    \};
  \},
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
  render\: renderContent,
\}, \{
  title\: 'Home phone',
  colSpan\: 2,
  dataIndex\: 'tel',
  render\: (value, row, index) => \{
    const obj = \{
      children\: value,
      props\: \{\},
    \};
    if (index === 2) \{
      obj.props.rowSpan = 2;
    \}
    // These two are merged into above cell
    if (index === 3) \{
      obj.props.rowSpan = 0;
    \}
    if (index === 4) \{
      obj.props.colSpan = 0;
    \}
    return obj;
  \},
\}, \{
  title\: 'Phone',
  colSpan\: 0,
  dataIndex\: 'phone',
  render\: renderContent,
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
  render\: renderContent,
\}];

const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  tel\: '0571-22098909',
  phone\: 18889898989,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  tel\: '0571-22098333',
  phone\: 18889898888,
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Joe Black',
  age\: 32,
  tel\: '0575-22098909',
  phone\: 18900010002,
  address\: 'Sidney No. 1 Lake Park',
\}, \{
  key\: '4',
  name\: 'Jim Red',
  age\: 18,
  tel\: '0575-22098909',
  phone\: 18900010002,
  address\: 'London No. 2 Lake Park',
\}, \{
  key\: '5',
  name\: 'Jake White',
  age\: 18,
  tel\: '0575-22098909',
  phone\: 18900010002,
  address\: 'Dublin No. 2 Lake Park',
\}];

ReactDOM.render(<Table columns=\{columns\} dataSource=\{data\} bordered />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-drag-sorting">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Drag sorting</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        By using custom components, we can integrate table with react-dnd to
                        implement drag sorting.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableDragsorting" />
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
                              {`import \{ Table \} from 'antd';
import \{ DragDropContext, DragSource, DropTarget \} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

function dragDirection(
  dragIndex,
  hoverIndex,
  initialClientOffset,
  clientOffset,
  sourceClientOffset,
) \{
  const hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2;
  const hoverClientY = clientOffset.y - sourceClientOffset.y;
  if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) \{
    return 'downward';
  \}
  if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) \{
    return 'upward';
  \}
\}

let BodyRow = (props) => \{
  const \{
    isOver,
    connectDragSource,
    connectDropTarget,
    moveRow,
    dragRow,
    clientOffset,
    sourceClientOffset,
    initialClientOffset,
    ...restProps
  \} = props;
  const style = \{ ...restProps.style, cursor\: 'move' \};

  let className = restProps.className;
  if (isOver && initialClientOffset) \{
    const direction = dragDirection(
      dragRow.index,
      restProps.index,
      initialClientOffset,
      clientOffset,
      sourceClientOffset
    );
    if (direction === 'downward') \{
      className += ' drop-over-downward';
    \}
    if (direction === 'upward') \{
      className += ' drop-over-upward';
    \}
  \}

  return connectDragSource(
    connectDropTarget(
      <tr
        \{...restProps\}
        className=\{className\}
        style=\{style\}
      />
    )
  );
\};

const rowSource = \{
  beginDrag(props) \{
    return \{
      index\: props.index,
    \};
  \},
\};

const rowTarget = \{
  drop(props, monitor) \{
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) \{
      return;
    \}

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note\: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  \},
\};

BodyRow = DropTarget('row', rowTarget, (connect, monitor) => (\{
  connectDropTarget\: connect.dropTarget(),
  isOver\: monitor.isOver(),
  sourceClientOffset\: monitor.getSourceClientOffset(),
\}))(
  DragSource('row', rowSource, (connect, monitor) => (\{
    connectDragSource\: connect.dragSource(),
    dragRow\: monitor.getItem(),
    clientOffset\: monitor.getClientOffset(),
    initialClientOffset\: monitor.getInitialClientOffset(),
  \}))(BodyRow)
);

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  key\: 'name',
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
  key\: 'age',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
  key\: 'address',
\}];

class DragSortingTable extends React.Component \{
  state = \{
    data\: [\{
      key\: '1',
      name\: 'John Brown',
      age\: 32,
      address\: 'New York No. 1 Lake Park',
    \}, \{
      key\: '2',
      name\: 'Jim Green',
      age\: 42,
      address\: 'London No. 1 Lake Park',
    \}, \{
      key\: '3',
      name\: 'Joe Black',
      age\: 32,
      address\: 'Sidney No. 1 Lake Park',
    \}],
  \}

  components = \{
    body\: \{
      row\: BodyRow,
    \},
  \}

  moveRow = (dragIndex, hoverIndex) => \{
    const \{ data \} = this.state;
    const dragRow = data[dragIndex];

    this.setState(
      update(this.state, \{
        data\: \{
          \$splice\: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
        \},
      \}),
    );
  \}

  render() \{
    return (
      <Table
        columns=\{columns\}
        dataSource=\{this.state.data\}
        components=\{this.components\}
        onRow=\{(record, index) => (\{
          index,
          moveRow\: this.moveRow,
        \})\}
      />
    );
  \}
\}

const Demo = DragDropContext(HTML5Backend)(DragSortingTable);

ReactDOM.render(<Demo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-edit-cell">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Editable Cells</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Table with editable cells.</div>
                      <div className="card-body pb-0">
                        <div id="TableEditcell" />
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
                              {`import \{ Table, Input, Icon, Button, Popconfirm \} from 'antd';

class EditableCell extends React.Component \{
  state = \{
    value\: this.props.value,
    editable\: false,
  \}
  handleChange = (e) => \{
    const value = e.target.value;
    this.setState(\{ value \});
  \}
  check = () => \{
    this.setState(\{ editable\: false \});
    if (this.props.onChange) \{
      this.props.onChange(this.state.value);
    \}
  \}
  edit = () => \{
    this.setState(\{ editable\: true \});
  \}
  render() \{
    const \{ value, editable \} = this.state;
    return (
      <div className="editable-cell">
        \{
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value=\{value\}
                onChange=\{this.handleChange\}
                onPressEnter=\{this.check\}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick=\{this.check\}
              />
            </div>
            \:
            <div className="editable-cell-text-wrapper">
              \{value || ' '\}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick=\{this.edit\}
              />
            </div>
        \}
      </div>
    );
  \}
\}

class EditableTable extends React.Component \{
  constructor(props) \{
    super(props);
    this.columns = [\{
      title\: 'name',
      dataIndex\: 'name',
      width\: '30%',
      render\: (text, record) => (
        <EditableCell
          value=\{text\}
          onChange=\{this.onCellChange(record.key, 'name')\}
        />
      ),
    \}, \{
      title\: 'age',
      dataIndex\: 'age',
    \}, \{
      title\: 'address',
      dataIndex\: 'address',
    \}, \{
      title\: 'operation',
      dataIndex\: 'operation',
      render\: (text, record) => \{
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm=\{() => this.onDelete(record.key)\}>
              <a href="#">Delete</a>
            </Popconfirm>
          ) \: null
        );
      \},
    \}];

    this.state = \{
      dataSource\: [\{
        key\: '0',
        name\: 'Edward King 0',
        age\: '32',
        address\: 'London, Park Lane no. 0',
      \}, \{
        key\: '1',
        name\: 'Edward King 1',
        age\: '32',
        address\: 'London, Park Lane no. 1',
      \}],
      count\: 2,
    \};
  \}
  onCellChange = (key, dataIndex) => \{
    return (value) => \{
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) \{
        target[dataIndex] = value;
        this.setState(\{ dataSource \});
      \}
    \};
  \}
  onDelete = (key) => \{
    const dataSource = [...this.state.dataSource];
    this.setState(\{ dataSource\: dataSource.filter(item => item.key !== key) \});
  \}
  handleAdd = () => \{
    const \{ count, dataSource \} = this.state;
    const newData = \{
      key\: count,
      name\: \`Edward King \$\{count\}\`,
      age\: 32,
      address\: \`London, Park Lane no. \$\{count\}\`,
    \};
    this.setState(\{
      dataSource\: [...dataSource, newData],
      count\: count + 1,
    \});
  \}
  render() \{
    const \{ dataSource \} = this.state;
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick=\{this.handleAdd\}>Add</Button>
        <Table bordered dataSource=\{dataSource\} columns=\{columns\} />
      </div>
    );
  \}
\}

ReactDOM.render(<EditableTable />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-expand-children">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Tree data</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Display tree structure data in Table, control the indent width by setting{' '}
                        <code>{'indentSize'}</code>. > Note, no support for recursive selection of
                        tree structure data table yet.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableExpandchildren" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  key\: 'name',
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
  key\: 'age',
  width\: '12%',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
  width\: '30%',
  key\: 'address',
\}];

const data = [\{
  key\: 1,
  name\: 'John Brown sr.',
  age\: 60,
  address\: 'New York No. 1 Lake Park',
  children\: [\{
    key\: 11,
    name\: 'John Brown',
    age\: 42,
    address\: 'New York No. 2 Lake Park',
  \}, \{
    key\: 12,
    name\: 'John Brown jr.',
    age\: 30,
    address\: 'New York No. 3 Lake Park',
    children\: [\{
      key\: 121,
      name\: 'Jimmy Brown',
      age\: 16,
      address\: 'New York No. 3 Lake Park',
    \}],
  \}, \{
    key\: 13,
    name\: 'Jim Green sr.',
    age\: 72,
    address\: 'London No. 1 Lake Park',
    children\: [\{
      key\: 131,
      name\: 'Jim Green',
      age\: 42,
      address\: 'London No. 2 Lake Park',
      children\: [\{
        key\: 1311,
        name\: 'Jim Green jr.',
        age\: 25,
        address\: 'London No. 3 Lake Park',
      \}, \{
        key\: 1312,
        name\: 'Jimmy Green sr.',
        age\: 18,
        address\: 'London No. 4 Lake Park',
      \}],
    \}],
  \}],
\}, \{
  key\: 2,
  name\: 'Joe Black',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}];

// rowSelection objects indicates the need for row selection
const rowSelection = \{
  onChange\: (selectedRowKeys, selectedRows) => \{
    console.log(\`selectedRowKeys\: \$\{selectedRowKeys\}\`, 'selectedRows\: ', selectedRows);
  \},
  onSelect\: (record, selected, selectedRows) => \{
    console.log(record, selected, selectedRows);
  \},
  onSelectAll\: (selected, selectedRows, changeRows) => \{
    console.log(selected, selectedRows, changeRows);
  \},
\};

ReactDOM.render(
  <Table columns=\{columns\} rowSelection=\{rowSelection\} dataSource=\{data\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-table-demo-fixed-columns-header"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Fixed Columns and Header</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A Solution for displaying large amounts of data with long columns. > Specify
                        the width of columns if header and cell do not align properly. > A fixed
                        value which is greater than table width for <code>{'scroll.x'}</code> is
                        recommended. The sum of unfixed columns should not greater than{' '}
                        <code>{'scroll.x'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableFixedcolumnsheader" />
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
                              {`import \{ Table \} from 'antd';

const columns = [
  \{ title\: 'Full Name', width\: 100, dataIndex\: 'name', key\: 'name', fixed\: 'left' \},
  \{ title\: 'Age', width\: 100, dataIndex\: 'age', key\: 'age', fixed\: 'left' \},
  \{ title\: 'Column 1', dataIndex\: 'address', key\: '1', width\: 150 \},
  \{ title\: 'Column 2', dataIndex\: 'address', key\: '2', width\: 150 \},
  \{ title\: 'Column 3', dataIndex\: 'address', key\: '3', width\: 150 \},
  \{ title\: 'Column 4', dataIndex\: 'address', key\: '4', width\: 150 \},
  \{ title\: 'Column 5', dataIndex\: 'address', key\: '5', width\: 150 \},
  \{ title\: 'Column 6', dataIndex\: 'address', key\: '6', width\: 150 \},
  \{ title\: 'Column 7', dataIndex\: 'address', key\: '7', width\: 150 \},
  \{ title\: 'Column 8', dataIndex\: 'address', key\: '8' \},
  \{
    title\: 'Action',
    key\: 'operation',
    fixed\: 'right',
    width\: 100,
    render\: () => <a href="#">action</a>,
  \},
];

const data = [];
for (let i = 0; i < 100; i++) \{
  data.push(\{
    key\: i,
    name\: \`Edrward \$\{i\}\`,
    age\: 32,
    address\: \`London Park no. \$\{i\}\`,
  \});
\}

ReactDOM.render(<Table columns=\{columns\} dataSource=\{data\} scroll=\{\{ x\: 1500, y\: 300 \}\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-fixed-header">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Fixed Header</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Display large amounts of data in scrollable view. > Specify the width of
                        each column if header and cell do not align properly.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableFixedheader" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  width\: 150,
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
  width\: 150,
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
\}];

const data = [];
for (let i = 0; i < 100; i++) \{
  data.push(\{
    key\: i,
    name\: \`Edward King \$\{i\}\`,
    age\: 32,
    address\: \`London, Park Lane no. \$\{i\}\`,
  \});
\}

ReactDOM.render(
  <Table columns=\{columns\} dataSource=\{data\} pagination=\{\{ pageSize\: 50 \}\} scroll=\{\{ y\: 240 \}\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-head">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Filter and sorter</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Use <code>{'filters'}</code> to generate filter menu in columns,{' '}
                        <code>{'onFilter'}</code> to determine filtered result, and{' '}
                        <code>{'filterMultiple'}</code> to indicate whether it's multiple or single
                        selection. Use <code>{'sorter'}</code> to make a column sortable.{' '}
                        <code>{'sorter'}</code> can be a function{' '}
                        <code>{'function(a, b) { ... }'}</code> for sorting data locally. Uses{' '}
                        <code>{'defaultSortOrder'}</code> to make a column sorted by default.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableHead" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  filters\: [\{
    text\: 'Joe',
    value\: 'Joe',
  \}, \{
    text\: 'Jim',
    value\: 'Jim',
  \}, \{
    text\: 'Submenu',
    value\: 'Submenu',
    children\: [\{
      text\: 'Green',
      value\: 'Green',
    \}, \{
      text\: 'Black',
      value\: 'Black',
    \}],
  \}],
  // specify the condition of filtering result
  // here is that finding the name started with \`value\`
  onFilter\: (value, record) => record.name.indexOf(value) === 0,
  sorter\: (a, b) => a.name.length - b.name.length,
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
  defaultSortOrder\: 'descend',
  sorter\: (a, b) => a.age - b.age,
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
  filters\: [\{
    text\: 'London',
    value\: 'London',
  \}, \{
    text\: 'New York',
    value\: 'New York',
  \}],
  filterMultiple\: false,
  onFilter\: (value, record) => record.address.indexOf(value) === 0,
  sorter\: (a, b) => a.address.length - b.address.length,
\}];

const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Joe Black',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}, \{
  key\: '4',
  name\: 'Jim Red',
  age\: 32,
  address\: 'London No. 2 Lake Park',
\}];

function onChange(pagination, filters, sorter) \{
  console.log('params', pagination, filters, sorter);
\}

ReactDOM.render(
  <Table columns=\{columns\} dataSource=\{data\} onChange=\{onChange\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-table-demo-nested-table">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Nested tables</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Showing more detailed info of every row.</div>
                      <div className="card-body pb-0">
                        <div id="TableNestedtable" />
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
                              {`
import \{ Table, Badge, Menu, Dropdown, Icon \} from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      Action 1
    </Menu.Item>
    <Menu.Item>
      Action 2
    </Menu.Item>
  </Menu>
);

function NestedTable() \{
  const expandedRowRender = () => \{
    const columns = [
      \{ title\: 'Date', dataIndex\: 'date', key\: 'date' \},
      \{ title\: 'Name', dataIndex\: 'name', key\: 'name' \},
      \{ title\: 'Status', key\: 'state', render\: () => <span><Badge status="success" />Finished</span> \},
      \{ title\: 'Upgrade Status', dataIndex\: 'upgradeNum', key\: 'upgradeNum' \},
      \{
        title\: 'Action',
        dataIndex\: 'operation',
        key\: 'operation',
        render\: () => (
          <span className="table-operation">
            <a href="#">Pause</a>
            <a href="#">Stop</a>
            <Dropdown overlay=\{menu\}>
              <a href="#">
                More <Icon type="down" />
              </a>
            </Dropdown>
          </span>
        ),
      \},
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) \{
      data.push(\{
        key\: i,
        date\: '2014-12-24 23\:12\:00',
        name\: 'This is production name',
        upgradeNum\: 'Upgraded\: 56',
      \});
    \}
    return (
      <Table
        columns=\{columns\}
        dataSource=\{data\}
        pagination=\{false\}
      />
    );
  \};

  const columns = [
    \{ title\: 'Name', dataIndex\: 'name', key\: 'name' \},
    \{ title\: 'Platform', dataIndex\: 'platform', key\: 'platform' \},
    \{ title\: 'Version', dataIndex\: 'version', key\: 'version' \},
    \{ title\: 'Upgraded', dataIndex\: 'upgradeNum', key\: 'upgradeNum' \},
    \{ title\: 'Creator', dataIndex\: 'creator', key\: 'creator' \},
    \{ title\: 'Date', dataIndex\: 'createdAt', key\: 'createdAt' \},
    \{ title\: 'Action', key\: 'operation', render\: () => <a href="#">Publish</a> \},
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) \{
    data.push(\{
      key\: i,
      name\: 'Screem',
      platform\: 'iOS',
      version\: '10.3.4.5654',
      upgradeNum\: 500,
      creator\: 'Jack',
      createdAt\: '2014-12-24 23\:12\:00',
    \});
  \}

  return (
    <Table
      className="components-table-demo-nested"
      columns=\{columns\}
      expandedRowRender=\{expandedRowRender\}
      dataSource=\{data\}
    />
  );
\}

ReactDOM.render(<NestedTable />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-table-demo-row-selection-and-operation"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Selection and operation</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To perform operations and clear selections after selecting some rows, use{' '}
                        <code>{'rowSelection.selectedRowKeys'}</code> to control selected rows.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableRowselectionandoperation" />
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
                              {`import \{ Table, Button \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
\}];

const data = [];
for (let i = 0; i < 46; i++) \{
  data.push(\{
    key\: i,
    name\: \`Edward King \$\{i\}\`,
    age\: 32,
    address\: \`London, Park Lane no. \$\{i\}\`,
  \});
\}

class App extends React.Component \{
  state = \{
    selectedRowKeys\: [], // Check here to configure the default column
    loading\: false,
  \};
  start = () => \{
    this.setState(\{ loading\: true \});
    // ajax request after empty completing
    setTimeout(() => \{
      this.setState(\{
        selectedRowKeys\: [],
        loading\: false,
      \});
    \}, 1000);
  \}
  onSelectChange = (selectedRowKeys) => \{
    console.log('selectedRowKeys changed\: ', selectedRowKeys);
    this.setState(\{ selectedRowKeys \});
  \}
  render() \{
    const \{ loading, selectedRowKeys \} = this.state;
    const rowSelection = \{
      selectedRowKeys,
      onChange\: this.onSelectChange,
    \};
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style=\{\{ marginBottom\: 16 \}\}>
          <Button
            type="primary"
            onClick=\{this.start\}
            disabled=\{!hasSelected\}
            loading=\{loading\}
          >
            Reload
          </Button>
          <span style=\{\{ marginLeft\: 8 \}\}>
            \{hasSelected ? \`Selected \$\{selectedRowKeys.length\} items\` \: ''\}
          </span>
        </div>
        <Table rowSelection=\{rowSelection\} columns=\{columns\} dataSource=\{data\} />
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
                    <div className="card card--example" id="components-table-demo-row-selection">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">selection</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Rows can be selectable by making first column as a selectable column. >
                        selection happens when clicking checkbox defaultly. You can see
                        https://codesandbox.io/s/000vqw38rl if you need row-click selection
                        behavior.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TableRowselection" />
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
                              {`import \{ Table \} from 'antd';

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  render\: text => <a href="#">\{text\}</a>,
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
\}, \{
  title\: 'Address',
  dataIndex\: 'address',
\}];
const data = [\{
  key\: '1',
  name\: 'John Brown',
  age\: 32,
  address\: 'New York No. 1 Lake Park',
\}, \{
  key\: '2',
  name\: 'Jim Green',
  age\: 42,
  address\: 'London No. 1 Lake Park',
\}, \{
  key\: '3',
  name\: 'Joe Black',
  age\: 32,
  address\: 'Sidney No. 1 Lake Park',
\}, \{
  key\: '4',
  name\: 'Disabled User',
  age\: 99,
  address\: 'Sidney No. 1 Lake Park',
\}];

// rowSelection object indicates the need for row selection
const rowSelection = \{
  onChange\: (selectedRowKeys, selectedRows) => \{
    console.log(\`selectedRowKeys\: \$\{selectedRowKeys\}\`, 'selectedRows\: ', selectedRows);
  \},
  getCheckboxProps\: record => (\{
    disabled\: record.name === 'Disabled User', // Column configuration not to be checked
    name\: record.name,
  \}),
\};

ReactDOM.render(
  <Table rowSelection=\{rowSelection\} columns=\{columns\} dataSource=\{data\} />
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

export default TableItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderLocaleproviderAll } from './All/index.js'
import { default as renderLocaleproviderBasic } from './Basic/index.js'

const Panel = Collapse.Panel

class LocaleproviderItems extends React.Component {
  componentDidMount() {
    renderLocaleproviderAll(ReactDOM, document.getElementById('LocaleproviderAll'))
    renderLocaleproviderBasic(ReactDOM, document.getElementById('LocaleproviderBasic'))
  }

  render() {
    return (
      <div className="LocaleproviderDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>LocaleProvider</strong>
                  <a
                    href="https://ant.design/components/locale-provider/"
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
                    <div className="card card--example" id="components-locale-provider-demo-all">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">All components</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Components which need localization support are listed here, you can toggle
                        the language in the demo.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LocaleproviderAll" />
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
                              {`import \{ LocaleProvider, Pagination, DatePicker, TimePicker, Calendar,
         Popconfirm, Table, Modal, Button, Select, Transfer, Radio \} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');

const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const columns = [\{
  title\: 'Name',
  dataIndex\: 'name',
  filters\: [\{
    text\: 'filter1',
    value\: 'filter1',
  \}],
\}, \{
  title\: 'Age',
  dataIndex\: 'age',
\}];

class Page extends React.Component \{
  state = \{
    visible\: false,
  \}
  showModal = () => \{
    this.setState(\{ visible\: true \});
  \}
  hideModal = () => \{
    this.setState(\{ visible\: false \});
  \}
  render() \{
    const info = () => \{
      Modal.info(\{
        title\: 'some info',
        content\: 'some info',
      \});
    \};
    const confirm = () => \{
      Modal.confirm(\{
        title\: 'some info',
        content\: 'some info',
      \});
    \};
    return (
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent=\{1\} total=\{50\} showSizeChanger />
        </div>
        <div className="example">
          <Select showSearch style=\{\{ width\: 200 \}\}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker style=\{\{ width\: 200 \}\} />
        </div>
        <div className="example">
          <Button type="primary" onClick=\{this.showModal\}>Show Modal</Button>
          <Button onClick=\{info\}>Show info</Button>
          <Button onClick=\{confirm\}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </Popconfirm>
        </div>
        <div className="example">
          <Transfer
            dataSource=\{[]\}
            showSearch
            targetKeys=\{[]\}
            render=\{item => item.title\}
          />
        </div>
        <div style=\{\{ width\: 319, border\: '1px solid #d9d9d9', borderRadius\: 4 \}\}>
          <Calendar fullscreen=\{false\} value=\{moment()\} />
        </div>
        <div className="example">
          <Table dataSource=\{[]\} columns=\{columns\} />
        </div>
        <Modal title="Locale Modal" visible=\{this.state.visible\} onCancel=\{this.hideModal\}>
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  \}
\}

let forceRerender = 0;
class App extends React.Component \{
  constructor() \{
    super();
    this.state = \{
      locale\: null,
    \};
  \}
  changeLocale = (e) => \{
    const localeValue = e.target.value;
    this.setState(\{ locale\: localeValue \});
    if (!localeValue) \{
      moment.locale('en');
    \} else \{
      moment.locale('zh-cn');
    \}
  \}
  render() \{
    return (
      <div>
        <div className="change-locale">
          <span style=\{\{ marginRight\: 16 \}\}>Change locale of components\: </span>
          <Radio.Group defaultValue=\{null\} onChange=\{this.changeLocale\}>
            <Radio.Button key="en" value=\{null\}>English</Radio.Button>
            <Radio.Button key="cn" value=\{zhCN\}>中文</Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale=\{this.state.locale\}>
          <Page key=\{forceRerender++ /* HACK\: just refresh in production environment */\} />
        </LocaleProvider>
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
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-locale-provider-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Localization</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Wrap your app with <code>{'LocaleProvider'}</code>, and apply the
                        corresponding language package.
                      </div>
                      <div className="card-body pb-0">
                        <div id="LocaleproviderBasic" />
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
                              {`import \{ Pagination, LocaleProvider \} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const App = () => (
  <div>
    <Pagination defaultCurrent=\{1\} total=\{50\} showSizeChanger />
  </div>
);

ReactDOM.render(
  <LocaleProvider locale=\{enUS\}>
    <App />
  </LocaleProvider>
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

export default LocaleproviderItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderCalendarBasic } from './Basic/index.js'
import { default as renderCalendarCard } from './Card/index.js'
import { default as renderCalendarNoticecalendar } from './Noticecalendar/index.js'
import { default as renderCalendarSelect } from './Select/index.js'

const Panel = Collapse.Panel

class CalendarItems extends React.Component {
  componentDidMount() {
    renderCalendarBasic(ReactDOM, document.getElementById('CalendarBasic'))
    renderCalendarCard(ReactDOM, document.getElementById('CalendarCard'))
    renderCalendarNoticecalendar(ReactDOM, document.getElementById('CalendarNoticecalendar'))
    renderCalendarSelect(ReactDOM, document.getElementById('CalendarSelect'))
  }

  render() {
    return (
      <div className="CalendarDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Calendar</strong>
                  <a
                    href="https://ant.design/components/calendar/"
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
                    <div className="card card--example" id="components-calendar-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A basic calendar component with Year/Month switch.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CalendarBasic" />
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
                              {`import \{ Calendar \} from 'antd';

function onPanelChange(value, mode) \{
  console.log(value, mode);
\}

ReactDOM.render(
  <Calendar onPanelChange=\{onPanelChange\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-calendar-demo-notice-calendar"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Notice Calendar</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        This component can be rendered by using <code>{'dateCellRender'}</code> and{' '}
                        <code>{'monthCellRender'}</code> with the data you need.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CalendarNoticecalendar" />
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
                              {`import \{ Calendar, Badge \} from 'antd';

function getListData(value) \{
  let listData;
  switch (value.date()) \{
    case 8\:
      listData = [
        \{ type\: 'warning', content\: 'This is warning event.' \},
        \{ type\: 'success', content\: 'This is usual event.' \},
      ]; break;
    case 10\:
      listData = [
        \{ type\: 'warning', content\: 'This is warning event.' \},
        \{ type\: 'success', content\: 'This is usual event.' \},
        \{ type\: 'error', content\: 'This is error event.' \},
      ]; break;
    case 15\:
      listData = [
        \{ type\: 'warning', content\: 'This is warning event' \},
        \{ type\: 'success', content\: 'This is very long usual event。。....' \},
        \{ type\: 'error', content\: 'This is error event 1.' \},
        \{ type\: 'error', content\: 'This is error event 2.' \},
        \{ type\: 'error', content\: 'This is error event 3.' \},
        \{ type\: 'error', content\: 'This is error event 4.' \},
      ]; break;
    default\:
  \}
  return listData || [];
\}

function dateCellRender(value) \{
  const listData = getListData(value);
  return (
    <ul className="events">
      \{
        listData.map(item => (
          <li key=\{item.content\}>
            <Badge status=\{item.type\} text=\{item.content\} />
          </li>
        ))
      \}
    </ul>
  );
\}

function getMonthData(value) \{
  if (value.month() === 8) \{
    return 1394;
  \}
\}

function monthCellRender(value) \{
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>\{num\}</section>
      <span>Backlog number</span>
    </div>
  ) \: null;
\}

ReactDOM.render(
  <Calendar dateCellRender=\{dateCellRender\} monthCellRender=\{monthCellRender\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-calendar-demo-card">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Card</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Nested inside a container element for rendering in limited space.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CalendarCard" />
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
                              {`import \{ Calendar \} from 'antd';

function onPanelChange(value, mode) \{
  console.log(value, mode);
\}

ReactDOM.render(
  <div style=\{\{ width\: 300, border\: '1px solid #d9d9d9', borderRadius\: 4 \}\}>
    <Calendar fullscreen=\{false\} onPanelChange=\{onPanelChange\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-calendar-demo-select">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Selectable Calendar</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A basic calendar component with Year/Month switch.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CalendarSelect" />
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
                              {`import \{ Calendar, Alert \} from 'antd';
import moment from 'moment';

class App extends React.Component \{
  state = \{
    value\: moment('2017-01-25'),
    selectedValue\: moment('2017-01-25'),
  \}
  onSelect = (value) => \{
    this.setState(\{
      value,
      selectedValue\: value,
    \});
  \}
  onPanelChange = (value) => \{
    this.setState(\{ value \});
  \}
  render() \{
    const \{ value, selectedValue \} = this.state;
    return (
      <div>
        <Alert message=\{\`You selected date\: \$\{selectedValue && selectedValue.format('YYYY-MM-DD')\}\`\} />
        <Calendar value=\{value\} onSelect=\{this.onSelect\} onPanelChange=\{this.onPanelChange\} />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarItems

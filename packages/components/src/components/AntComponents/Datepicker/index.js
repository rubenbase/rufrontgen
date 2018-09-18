import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderDatepickerBasic } from './Basic/index.js'
import { default as renderDatepickerDaterender } from './Daterender/index.js'
import { default as renderDatepickerDisableddate } from './Disableddate/index.js'
import { default as renderDatepickerDisabled } from './Disabled/index.js'
import { default as renderDatepickerExtrafooter } from './Extrafooter/index.js'
import { default as renderDatepickerFormat } from './Format/index.js'
import { default as renderDatepickerMode } from './Mode/index.js'
import { default as renderDatepickerPresettedranges } from './Presettedranges/index.js'
import { default as renderDatepickerSize } from './Size/index.js'
import { default as renderDatepickerStartend } from './Startend/index.js'
import { default as renderDatepickerTime } from './Time/index.js'

const Panel = Collapse.Panel

class DatepickerItems extends React.Component {
  componentDidMount() {
    renderDatepickerBasic(ReactDOM, document.getElementById('DatepickerBasic'))
    renderDatepickerDaterender(ReactDOM, document.getElementById('DatepickerDaterender'))
    renderDatepickerDisableddate(ReactDOM, document.getElementById('DatepickerDisableddate'))
    renderDatepickerDisabled(ReactDOM, document.getElementById('DatepickerDisabled'))
    renderDatepickerExtrafooter(ReactDOM, document.getElementById('DatepickerExtrafooter'))
    renderDatepickerFormat(ReactDOM, document.getElementById('DatepickerFormat'))
    renderDatepickerMode(ReactDOM, document.getElementById('DatepickerMode'))
    renderDatepickerPresettedranges(ReactDOM, document.getElementById('DatepickerPresettedranges'))
    renderDatepickerSize(ReactDOM, document.getElementById('DatepickerSize'))
    renderDatepickerStartend(ReactDOM, document.getElementById('DatepickerStartend'))
    renderDatepickerTime(ReactDOM, document.getElementById('DatepickerTime'))
  }

  render() {
    return (
      <div className="DatepickerDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>DatePicker</strong>
                  <a
                    href="https://ant.design/components/date-picker/"
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
                    <div className="card card--example" id="components-date-picker-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Basic use case. Users can select or input a date in panel.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerBasic" />
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
                              {`import \{ DatePicker \} from 'antd';
const \{ MonthPicker, RangePicker, WeekPicker \} = DatePicker;

function onChange(date, dateString) \{
  console.log(date, dateString);
\}

ReactDOM.render(
  <div>
    <DatePicker onChange=\{onChange\} />
    <br />
    <MonthPicker onChange=\{onChange\} placeholder="Select month" />
    <br />
    <RangePicker onChange=\{onChange\} />
    <br />
    <WeekPicker onChange=\{onChange\} placeholder="Select week" />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-date-picker-demo-disabled-date"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Disabled Date</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Disabled part of dates and time by <code>{'disabledDate'}</code> and{' '}
                        <code>{'disabledTime'}</code> respectively, and{' '}
                        <code>{'disabledTime'}</code> only works with <code>{'showTime'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerDisableddate" />
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
                              {`import moment from 'moment';
import \{ DatePicker \} from 'antd';
const \{ MonthPicker, RangePicker \} = DatePicker;

function range(start, end) \{
  const result = [];
  for (let i = start; i < end; i++) \{
    result.push(i);
  \}
  return result;
\}

function disabledDate(current) \{
  // Can not select days before today and today
  return current && current < moment().endOf('day');
\}

function disabledDateTime() \{
  return \{
    disabledHours\: () => range(0, 24).splice(4, 20),
    disabledMinutes\: () => range(30, 60),
    disabledSeconds\: () => [55, 56],
  \};
\}

function disabledRangeTime(_, type) \{
  if (type === 'start') \{
    return \{
      disabledHours\: () => range(0, 60).splice(4, 20),
      disabledMinutes\: () => range(30, 60),
      disabledSeconds\: () => [55, 56],
    \};
  \}
  return \{
    disabledHours\: () => range(0, 60).splice(20, 4),
    disabledMinutes\: () => range(0, 31),
    disabledSeconds\: () => [55, 56],
  \};
\}

ReactDOM.render(
  <div>
    <DatePicker
      format="YYYY-MM-DD HH\:mm\:ss"
      disabledDate=\{disabledDate\}
      disabledTime=\{disabledDateTime\}
      showTime=\{\{ defaultValue\: moment('00\:00\:00', 'HH\:mm\:ss') \}\}
    />
    <br />
    <MonthPicker disabledDate=\{disabledDate\} placeholder="Select month" />
    <br />
    <RangePicker
      disabledDate=\{disabledDate\}
      disabledTime=\{disabledRangeTime\}
      showTime=\{\{
        hideDisabledOptions\: true,
        defaultValue\: [moment('00\:00\:00', 'HH\:mm\:ss'), moment('11\:59\:59', 'HH\:mm\:ss')],
      \}\}
      format="YYYY-MM-DD HH\:mm\:ss"
    />
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-date-picker-demo-extra-footer"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Extra Footer</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Render extra footer in panel for customized requirements.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerExtrafooter" />
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
                              {`import \{ DatePicker \} from 'antd';
const \{ RangePicker, MonthPicker \} = DatePicker;

ReactDOM.render(
  <div>
    <DatePicker renderExtraFooter=\{() => 'extra footer'\} />
    <DatePicker renderExtraFooter=\{() => 'extra footer'\} showTime />
    <RangePicker renderExtraFooter=\{() => 'extra footer'\} />
    <RangePicker renderExtraFooter=\{() => 'extra footer'\} showTime />
    <MonthPicker renderExtraFooter=\{() => 'extra footer'\} placeholder="Select month" />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-date-picker-demo-mode">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Controlled Panels</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Determing which panel to show with <code>{'mode'}</code> and{' '}
                        <code>{'onPanelChange'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerMode" />
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
                              {`import \{ DatePicker \} from 'antd';
const \{ RangePicker \} = DatePicker;

class ControlledDatePicker extends React.Component \{
  state = \{ mode\: 'time' \};

  handleOpenChange = (open) => \{
    if (open) \{
      this.setState(\{ mode\: 'time' \});
    \}
  \}

  handlePanelChange = (value, mode) => \{
    this.setState(\{ mode \});
  \}

  render() \{
    return (
      <DatePicker
        mode=\{this.state.mode\}
        showTime
        onOpenChange=\{this.handleOpenChange\}
        onPanelChange=\{this.handlePanelChange\}
      />
    );
  \}
\}

class ControlledRangePicker extends React.Component \{
  state = \{
    mode\: ['month', 'month'],
    value\: [],
  \};

  handlePanelChange = (value, mode) => \{
    this.setState(\{
      value,
      mode\: [
        mode[0] === 'date' ? 'month' \: mode[0],
        mode[1] === 'date' ? 'month' \: mode[1],
      ],
    \});
  \}

  render() \{
    const \{ value, mode \} = this.state;
    return (
      <RangePicker
        placeholder=\{['Start month', 'End month']\}
        format="YYYY-MM"
        value=\{value\}
        mode=\{mode\}
        onPanelChange=\{this.handlePanelChange\}
      />
    );
  \}
\}

ReactDOM.render(
  <div>
    <ControlledDatePicker />
    <br />
    <ControlledRangePicker />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-date-picker-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Three Sizes</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The input box comes in three sizes. <code>{'default'}</code> will be used if{' '}
                        <code>{'size'}</code> is omitted.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerSize" />
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
                              {`import \{ DatePicker, Radio \} from 'antd';
const \{ MonthPicker, RangePicker, WeekPicker \} = DatePicker;

class PickerSizesDemo extends React.Component \{
  state = \{
    size\: 'default',
  \};

  handleSizeChange = (e) => \{
    this.setState(\{ size\: e.target.value \});
  \}

  render() \{
    const \{ size \} = this.state;
    return (
      <div>
        <Radio.Group value=\{size\} onChange=\{this.handleSizeChange\}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <DatePicker size=\{size\} />
        <br />
        <MonthPicker size=\{size\} placeholder="Select Month" />
        <br />
        <RangePicker size=\{size\} />
        <br />
        <WeekPicker size=\{size\} placeholder="Select Week" />
      </div>
    );
  \}
\}

ReactDOM.render(<PickerSizesDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-date-picker-demo-time">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Choose Time</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        This property provide an additional time selection. When{' '}
                        <code>{'showTime'}</code> is an Object, its properties will be passed on to
                        built-in <code>{'TimePicker'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerTime" />
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
                              {`import \{ DatePicker \} from 'antd';
const \{ RangePicker \} = DatePicker;

function onChange(value, dateString) \{
  console.log('Selected Time\: ', value);
  console.log('Formatted Selected Time\: ', dateString);
\}

function onOk(value) \{
  console.log('onOk\: ', value);
\}

ReactDOM.render(
  <div>
    <DatePicker
      showTime
      format="YYYY-MM-DD HH\:mm\:ss"
      placeholder="Select Time"
      onChange=\{onChange\}
      onOk=\{onOk\}
    />
    <br />
    <RangePicker
      showTime=\{\{ format\: 'HH\:mm' \}\}
      format="YYYY-MM-DD HH\:mm"
      placeholder=\{['Start Time', 'End Time']\}
      onChange=\{onChange\}
      onOk=\{onOk\}
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
                    <div
                      className="card card--example"
                      id="components-date-picker-demo-date-render"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Date Rendering</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        We can customize the rendering of date cells in the calendar by providing a{' '}
                        <code>{'dateRender'}</code> function to <code>{'DatePicker'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerDaterender" />
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
                              {`import \{ DatePicker \} from 'antd';
const \{ RangePicker \} = DatePicker;

ReactDOM.render(
  <div>
    <DatePicker
      dateRender=\{(current) => \{
        const style = \{\};
        if (current.date() === 1) \{
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        \}
        return (
          <div className="ant-calendar-date" style=\{style\}>
            \{current.date()\}
          </div>
        );
      \}\}
    />
    <RangePicker
      dateRender=\{(current) => \{
        const style = \{\};
        if (current.date() === 1) \{
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        \}
        return (
          <div className="ant-calendar-date" style=\{style\}>
            \{current.date()\}
          </div>
        );
      \}\}
    />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-date-picker-demo-disabled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Disabled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A disabled state of the <code>{'DatePicker'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerDisabled" />
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
                              {`import \{ DatePicker \} from 'antd';
import moment from 'moment';
const \{ MonthPicker, RangePicker \} = DatePicker;

const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
  <div>
    <DatePicker defaultValue=\{moment('2015-06-06', dateFormat)\} disabled />
    <br />
    <MonthPicker defaultValue=\{moment('2015-06', 'YYYY-MM')\} disabled />
    <br />
    <RangePicker
      defaultValue=\{[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]\}
      disabled
    />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-date-picker-demo-format">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Date Format</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        We can set the date format by <code>{'format'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerFormat" />
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
                              {`import \{ DatePicker \} from 'antd';
import moment from 'moment';
const \{ MonthPicker, RangePicker \} = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
ReactDOM.render(
  <div>
    <DatePicker defaultValue=\{moment('2015/01/01', dateFormat)\} format=\{dateFormat\} />
    <br />
    <MonthPicker defaultValue=\{moment('2015/01', monthFormat)\} format=\{monthFormat\} />
    <br />
    <RangePicker
      defaultValue=\{[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]\}
      format=\{dateFormat\}
    />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-date-picker-demo-presetted-ranges"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Presetted Ranges</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        We can set presetted ranges to RangePicker to improve user experience.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerPresettedranges" />
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
                              {`import \{ DatePicker \} from 'antd';
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) \{
  console.log('From\: ', dates[0], ', to\: ', dates[1]);
  console.log('From\: ', dateStrings[0], ', to\: ', dateStrings[1]);
\}

ReactDOM.render(
  <div>
    <RangePicker
      ranges=\{\{ Today\: [moment(), moment()], 'This Month'\: [moment(), moment().endOf('month')] \}\}
      onChange=\{onChange\}
    />
    <br />
    <RangePicker
      ranges=\{\{ Today\: [moment(), moment()], 'This Month'\: [moment(), moment().endOf('month')] \}\}
      showTime
      format="YYYY/MM/DD HH\:mm\:ss"
      onChange=\{onChange\}
    />
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-date-picker-demo-start-end">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Range Picker</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        When <code>{'RangePicker'}</code> does not satisfied your requirements, try
                        to implement similar functionality with two <code>{'DatePicker'}</code>. > *
                        Use the <code>{'disabledDate'}</code> property to limit the start and end
                        dates. > * Improve user experience with <code>{'open'}</code> and{' '}
                        <code>{'onOpenChange'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="DatepickerStartend" />
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
                              {`import \{ DatePicker \} from 'antd';

class DateRange extends React.Component \{
  state = \{
    startValue\: null,
    endValue\: null,
    endOpen\: false,
  \};

  disabledStartDate = (startValue) => \{
    const endValue = this.state.endValue;
    if (!startValue || !endValue) \{
      return false;
    \}
    return startValue.valueOf() > endValue.valueOf();
  \}

  disabledEndDate = (endValue) => \{
    const startValue = this.state.startValue;
    if (!endValue || !startValue) \{
      return false;
    \}
    return endValue.valueOf() <= startValue.valueOf();
  \}

  onChange = (field, value) => \{
    this.setState(\{
      [field]\: value,
    \});
  \}

  onStartChange = (value) => \{
    this.onChange('startValue', value);
  \}

  onEndChange = (value) => \{
    this.onChange('endValue', value);
  \}

  handleStartOpenChange = (open) => \{
    if (!open) \{
      this.setState(\{ endOpen\: true \});
    \}
  \}

  handleEndOpenChange = (open) => \{
    this.setState(\{ endOpen\: open \});
  \}

  render() \{
    const \{ startValue, endValue, endOpen \} = this.state;
    return (
      <div>
        <DatePicker
          disabledDate=\{this.disabledStartDate\}
          showTime
          format="YYYY-MM-DD HH\:mm\:ss"
          value=\{startValue\}
          placeholder="Start"
          onChange=\{this.onStartChange\}
          onOpenChange=\{this.handleStartOpenChange\}
        />
        <DatePicker
          disabledDate=\{this.disabledEndDate\}
          showTime
          format="YYYY-MM-DD HH\:mm\:ss"
          value=\{endValue\}
          placeholder="End"
          onChange=\{this.onEndChange\}
          open=\{endOpen\}
          onOpenChange=\{this.handleEndOpenChange\}
        />
      </div>
    );
  \}
\}

ReactDOM.render(<DateRange />, mountNode);
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

export default DatepickerItems

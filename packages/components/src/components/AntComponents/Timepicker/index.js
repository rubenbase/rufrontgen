import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTimepicker12hours } from './12hours/index.js'
import { default as renderTimepickerAddon } from './Addon/index.js'
import { default as renderTimepickerBasic } from './Basic/index.js'
import { default as renderTimepickerDisabled } from './Disabled/index.js'
import { default as renderTimepickerHidecolumn } from './Hidecolumn/index.js'
import { default as renderTimepickerIntervaloptions } from './Intervaloptions/index.js'
import { default as renderTimepickerSize } from './Size/index.js'
import { default as renderTimepickerValue } from './Value/index.js'

const Panel = Collapse.Panel

class TimepickerItems extends React.Component {
  componentDidMount() {
    renderTimepicker12hours(ReactDOM, document.getElementById('Timepicker12hours'))
    renderTimepickerAddon(ReactDOM, document.getElementById('TimepickerAddon'))
    renderTimepickerBasic(ReactDOM, document.getElementById('TimepickerBasic'))
    renderTimepickerDisabled(ReactDOM, document.getElementById('TimepickerDisabled'))
    renderTimepickerHidecolumn(ReactDOM, document.getElementById('TimepickerHidecolumn'))
    renderTimepickerIntervaloptions(ReactDOM, document.getElementById('TimepickerIntervaloptions'))
    renderTimepickerSize(ReactDOM, document.getElementById('TimepickerSize'))
    renderTimepickerValue(ReactDOM, document.getElementById('TimepickerValue'))
  }

  render() {
    return (
      <div className="TimepickerDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>TimePicker</strong>
                  <a
                    href="https://ant.design/components/time-picker/"
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
                    <div className="card card--example" id="components-time-picker-demo-12hours">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">12 hours</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        TimePicker of 12 hours format, with default format{' '}
                        <code>{'h:mm:ss a'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="Timepicker12hours" />
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
                              {`import \{ TimePicker \} from 'antd';

function onChange(time, timeString) \{
  console.log(time, timeString);
\}

ReactDOM.render(
  <div>
    <TimePicker use12Hours onChange=\{onChange\} />
    <TimePicker use12Hours format="h\:mm\:ss A" onChange=\{onChange\} />
    <TimePicker use12Hours format="h\:mm a" onChange=\{onChange\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-time-picker-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Click <code>{'TimePicker'}</code>, and then we could select or input a time
                        in panel.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimepickerBasic" />
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
                              {`import \{ TimePicker \} from 'antd';
import moment from 'moment';

function onChange(time, timeString) \{
  console.log(time, timeString);
\}

ReactDOM.render(
  <TimePicker onChange=\{onChange\} defaultOpenValue=\{moment('00\:00\:00', 'HH\:mm\:ss')\} />,
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
                      id="components-time-picker-demo-hide-column"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Hour and minute</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        While part of <code>{'format'}</code> is omitted, the corresponding column
                        in panel will disappear, too.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimepickerHidecolumn" />
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
                              {`import \{ TimePicker \} from 'antd';
import moment from 'moment';

const format = 'HH\:mm';

ReactDOM.render(
  <TimePicker defaultValue=\{moment('12\:08', format)\} format=\{format\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-time-picker-demo-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Three Sizes</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The input box comes in three sizes. large is used in the form, while the
                        medium size is the default.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimepickerSize" />
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
                              {`import \{ TimePicker \} from 'antd';
import moment from 'moment';

ReactDOM.render(
  <div>
    <TimePicker defaultValue=\{moment('12\:08\:23', 'HH\:mm\:ss')\} size="large" />
    <TimePicker defaultValue=\{moment('12\:08\:23', 'HH\:mm\:ss')\} />
    <TimePicker defaultValue=\{moment('12\:08\:23', 'HH\:mm\:ss')\} size="small" />
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
                    <div className="card card--example" id="components-time-picker-demo-addon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Addon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Render addon contents to timepicker panel's bottom.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimepickerAddon" />
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
                              {`import \{ TimePicker, Button \} from 'antd';

class TimePickerAddonDemo extends React.Component \{
  state = \{ open\: false \};

  handleOpenChange = (open) => \{
    this.setState(\{ open \});
  \}

  handleClose = () => this.setState(\{ open\: false \})

  render() \{
    return (
      <TimePicker
        open=\{this.state.open\}
        onOpenChange=\{this.handleOpenChange\}
        addon=\{() => (
          <Button size="small" type="primary" onClick=\{this.handleClose\}>
            Ok
          </Button>
        )\}
      />
    );
  \}
\}

ReactDOM.render(<TimePickerAddonDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-time-picker-demo-disabled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">disabled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A disabled state of the <code>{'TimePicker'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimepickerDisabled" />
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
                              {`import \{ TimePicker \} from 'antd';
import moment from 'moment';

ReactDOM.render(
  <TimePicker defaultValue=\{moment('12\:08\:23', 'HH\:mm\:ss')\} disabled />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-time-picker-demo-interval-options"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">interval option</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Show stepped options by <code>{'hourStep'}</code>{' '}
                        <code>{'minuteStep'}</code> <code>{'secondStep'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimepickerIntervaloptions" />
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
                              {`import \{ TimePicker \} from 'antd';

ReactDOM.render(
  <TimePicker minuteStep=\{15\} secondStep=\{10\} />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-time-picker-demo-value">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Under Control</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'value'}</code> and <code>{'onChange'}</code> should be used
                        together,
                      </div>
                      <div className="card-body pb-0">
                        <div id="TimepickerValue" />
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
                              {`import \{ TimePicker \} from 'antd';

class Demo extends React.Component \{
  state = \{
    value\: null,
  \};

  onChange = (time) => \{
    console.log(time);
    this.setState(\{ value\: time \});
  \}

  render() \{
    return <TimePicker value=\{this.state.value\} onChange=\{this.onChange\} />;
  \}
\}

ReactDOM.render(<Demo />, mountNode);
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

export default TimepickerItems

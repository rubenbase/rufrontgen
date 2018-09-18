import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderSliderBasic } from './Basic/index.js'
import { default as renderSliderEvent } from './Event/index.js'
import { default as renderSliderIconslider } from './Iconslider/index.js'
import { default as renderSliderInputnumber } from './Inputnumber/index.js'
import { default as renderSliderMark } from './Mark/index.js'
import { default as renderSliderTipformatter } from './Tipformatter/index.js'
import { default as renderSliderVertical } from './Vertical/index.js'

const Panel = Collapse.Panel

class SliderItems extends React.Component {
  componentDidMount() {
    renderSliderBasic(ReactDOM, document.getElementById('SliderBasic'))
    renderSliderEvent(ReactDOM, document.getElementById('SliderEvent'))
    renderSliderIconslider(ReactDOM, document.getElementById('SliderIconslider'))
    renderSliderInputnumber(ReactDOM, document.getElementById('SliderInputnumber'))
    renderSliderMark(ReactDOM, document.getElementById('SliderMark'))
    renderSliderTipformatter(ReactDOM, document.getElementById('SliderTipformatter'))
    renderSliderVertical(ReactDOM, document.getElementById('SliderVertical'))
  }

  render() {
    return (
      <div className="SliderDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Slider</strong>
                  <a
                    href="https://ant.design/components/slider/"
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
                    <div className="card card--example" id="components-slider-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Basic slider. When <code>{'range'}</code> is <code>{'true'}</code>, display
                        as dual thumb mode. When <code>{'disable'}</code> is <code>{'true'}</code>,
                        the slider will not be interactable.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SliderBasic" />
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
                              {`import \{ Slider, Switch \} from 'antd';

class Demo extends React.Component \{
  state = \{
    disabled\: false,
  \};
  handleDisabledChange = (disabled) => \{
    this.setState(\{ disabled \});
  \}
  render() \{
    const \{ disabled \} = this.state;
    return (
      <div>
        <Slider defaultValue=\{30\} disabled=\{disabled\} />
        <Slider range defaultValue=\{[20, 50]\} disabled=\{disabled\} />
        Disabled\: <Switch size="small" checked=\{disabled\} onChange=\{this.handleDisabledChange\} />
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
                    <div className="card card--example" id="components-slider-demo-icon-slider">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Slider with icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can add an icon beside the slider to make it meaningful.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SliderIconslider" />
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
                              {`import \{ Slider, Icon \} from 'antd';

class IconSlider extends React.Component \{
  state = \{
    value\: 0,
  \}
  handleChange = (value) => \{
    this.setState(\{ value \});
  \}
  render() \{
    const \{ max, min \} = this.props;
    const \{ value \} = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' \: 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' \: '';
    return (
      <div className="icon-wrapper">
        <Icon style=\{\{ color\: preColor \}\} type="frown-o" />
        <Slider \{...this.props\} onChange=\{this.handleChange\} value=\{value\} />
        <Icon style=\{\{ color\: nextColor \}\} type="smile-o" />
      </div>
    );
  \}
\}

ReactDOM.render(<IconSlider min=\{0\} max=\{20\} />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-slider-demo-mark">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Graduated slider</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Using <code>{'marks'}</code> property to mark a graduated slider, use{' '}
                        <code>{'value'}</code> or <code>{'defaultValue'}</code> to specify the
                        position of thumb. When <code>{'included'}</code> is false, means that
                        different thumbs are coordinative. when <code>{'step'}</code> is null, users
                        can only slide the thumbs onto marks.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SliderMark" />
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
                              {`import \{ Slider \} from 'antd';

const marks = \{
  0\: '0°C',
  26\: '26°C',
  37\: '37°C',
  100\: \{
    style\: \{
      color\: '#f50',
    \},
    label\: <strong>100°C</strong>,
  \},
\};

ReactDOM.render(
  <div>
    <h4>included=true</h4>
    <Slider marks=\{marks\} defaultValue=\{37\} />
    <Slider range marks=\{marks\} defaultValue=\{[26, 37]\} />

    <h4>included=false</h4>
    <Slider marks=\{marks\} included=\{false\} defaultValue=\{37\} />

    <h4>marks & step</h4>
    <Slider marks=\{marks\} step=\{10\} defaultValue=\{37\} />

    <h4>step=null</h4>
    <Slider marks=\{marks\} step=\{null\} defaultValue=\{37\} />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-slider-demo-vertical">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Vertical</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The vertical Slider.</div>
                      <div className="card-body pb-0">
                        <div id="SliderVertical" />
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
                              {`import \{ Slider \} from 'antd';

const style = \{
  float\: 'left',
  height\: 300,
  marginLeft\: 70,
\};

const marks = \{
  0\: '0°C',
  26\: '26°C',
  37\: '37°C',
  100\: \{
    style\: \{
      color\: '#f50',
    \},
    label\: <strong>100°C</strong>,
  \},
\};

ReactDOM.render(
  <div style=\{\{ height\: 300 \}\}>
    <div style=\{style\}>
      <Slider vertical defaultValue=\{30\} />
    </div>
    <div style=\{style\}>
      <Slider vertical range step=\{10\} defaultValue=\{[20, 50]\} />
    </div>
    <div style=\{style\}>
      <Slider vertical range marks=\{marks\} defaultValue=\{[26, 37]\} />
    </div>
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
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-slider-demo-event">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Event</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The <code>{'onChange'}</code> callback function will fire when the user
                        changes the slider's value. The <code>{'onAfterChange'}</code> callback
                        function will fire when <code>{'onmouseup'}</code> fired.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SliderEvent" />
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
                              {`import \{ Slider \} from 'antd';

function onChange(value) \{
  console.log('onChange\: ', value);
\}

function onAfterChange(value) \{
  console.log('onAfterChange\: ', value);
\}

ReactDOM.render(
  <div>
    <Slider defaultValue=\{30\} onChange=\{onChange\} onAfterChange=\{onAfterChange\} />
    <Slider range step=\{10\} defaultValue=\{[20, 50]\} onChange=\{onChange\} onAfterChange=\{onAfterChange\} />
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-slider-demo-input-number">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Slider with InputNumber</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Synchronize with [InptNumber](/components/input-number/) component.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SliderInputnumber" />
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
                              {`import \{ Slider, InputNumber, Row, Col \} from 'antd';

class IntegerStep extends React.Component \{
  state = \{
    inputValue\: 1,
  \}
  onChange = (value) => \{
    this.setState(\{
      inputValue\: value,
    \});
  \}
  render() \{
    return (
      <Row>
        <Col span=\{12\}>
          <Slider min=\{1\} max=\{20\} onChange=\{this.onChange\} value=\{this.state.inputValue\} />
        </Col>
        <Col span=\{4\}>
          <InputNumber
            min=\{1\}
            max=\{20\}
            style=\{\{ marginLeft\: 16 \}\}
            value=\{this.state.inputValue\}
            onChange=\{this.onChange\}
          />
        </Col>
      </Row>
    );
  \}
\}

class DecimalStep extends React.Component \{
  state = \{
    inputValue\: 0,
  \}
  onChange = (value) => \{
    this.setState(\{
      inputValue\: value,
    \});
  \}
  render() \{
    return (
      <Row>
        <Col span=\{12\}>
          <Slider min=\{0\} max=\{1\} onChange=\{this.onChange\} value=\{this.state.inputValue\} step=\{0.01\} />
        </Col>
        <Col span=\{4\}>
          <InputNumber
            min=\{0\}
            max=\{1\}
            style=\{\{ marginLeft\: 16 \}\}
            step=\{0.01\}
            value=\{this.state.inputValue\}
            onChange=\{this.onChange\}
          />
        </Col>
      </Row>
    );
  \}
\}

ReactDOM.render(
  <div>
    <IntegerStep />
    <DecimalStep />
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-slider-demo-tip-formatter">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customerize tooltip</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Use <code>{'tipFormatter'}</code> to format content of{' '}
                        <code>{'Toolip'}</code>. If <code>{'tipFormatter'}</code> is null, hide it.
                      </div>
                      <div className="card-body pb-0">
                        <div id="SliderTipformatter" />
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
                              {`import \{ Slider \} from 'antd';

function formatter(value) \{
  return \`\$\{value\}%\`;
\}

ReactDOM.render(
  <div>
    <Slider tipFormatter=\{formatter\} />
    <Slider tipFormatter=\{null\} />
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

export default SliderItems

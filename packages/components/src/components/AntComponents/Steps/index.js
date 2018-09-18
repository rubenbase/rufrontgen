import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderStepsCustomizedprogressdot } from './Customizedprogressdot/index.js'
import { default as renderStepsError } from './Error/index.js'
import { default as renderStepsIcon } from './Icon/index.js'
import { default as renderStepsProgressdot } from './Progressdot/index.js'
import { default as renderStepsSimple } from './Simple/index.js'
import { default as renderStepsSmallsize } from './Smallsize/index.js'
import { default as renderStepsStepnext } from './Stepnext/index.js'
import { default as renderStepsVerticalsmall } from './Verticalsmall/index.js'
import { default as renderStepsVertical } from './Vertical/index.js'

const Panel = Collapse.Panel

class StepsItems extends React.Component {
  componentDidMount() {
    renderStepsCustomizedprogressdot(
      ReactDOM,
      document.getElementById('StepsCustomizedprogressdot'),
    )
    renderStepsError(ReactDOM, document.getElementById('StepsError'))
    renderStepsIcon(ReactDOM, document.getElementById('StepsIcon'))
    renderStepsProgressdot(ReactDOM, document.getElementById('StepsProgressdot'))
    renderStepsSimple(ReactDOM, document.getElementById('StepsSimple'))
    renderStepsSmallsize(ReactDOM, document.getElementById('StepsSmallsize'))
    renderStepsStepnext(ReactDOM, document.getElementById('StepsStepnext'))
    renderStepsVerticalsmall(ReactDOM, document.getElementById('StepsVerticalsmall'))
    renderStepsVertical(ReactDOM, document.getElementById('StepsVertical'))
  }

  render() {
    return (
      <div className="StepsDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Steps</strong>
                  <a
                    href="https://ant.design/components/steps/"
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
                    <div
                      className="card card--example"
                      id="components-steps-demo-customized-progress-dot"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Dot Style</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can customize the display for Steps with progress dot style.
                      </div>
                      <div className="card-body pb-0">
                        <div id="StepsCustomizedprogressdot" />
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
                              {`import \{ Steps, Popover \} from 'antd';
const Step = Steps.Step;

const customDot = (dot, \{ status, index \}) => (
  <Popover content=\{<span>step \{index\} status\: \{status\}</span>\}>
    \{dot\}
  </Popover>
);

ReactDOM.render(
  <Steps current=\{1\} progressDot=\{customDot\}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-steps-demo-icon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">With icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can use your own custom icons by setting the property{' '}
                        <code>{'icon'}</code> for <code>{'Steps.Step'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="StepsIcon" />
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
                              {`import \{ Steps, Icon \} from 'antd';
const Step = Steps.Step;

ReactDOM.render(
  <Steps>
    <Step status="finish" title="Login" icon=\{<Icon type="user" />\} />
    <Step status="finish" title="Verification" icon=\{<Icon type="solution" />\} />
    <Step status="process" title="Pay" icon=\{<Icon type="loading" />\} />
    <Step status="wait" title="Done" icon=\{<Icon type="smile-o" />\} />
  </Steps>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-steps-demo-simple">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The most basic step bar.</div>
                      <div className="card-body pb-0">
                        <div id="StepsSimple" />
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
                              {`import \{ Steps \} from 'antd';
const Step = Steps.Step;

ReactDOM.render(
  <Steps current=\{1\}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-steps-demo-step-next">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Switch Step</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Cooperate with the content and buttons, to represent the progress of a
                        process.
                      </div>
                      <div className="card-body pb-0">
                        <div id="StepsStepnext" />
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
                              {`import \{ Steps, Button, message \} from 'antd';
const Step = Steps.Step;

const steps = [\{
  title\: 'First',
  content\: 'First-content',
\}, \{
  title\: 'Second',
  content\: 'Second-content',
\}, \{
  title\: 'Last',
  content\: 'Last-content',
\}];

class App extends React.Component \{
  constructor(props) \{
    super(props);
    this.state = \{
      current\: 0,
    \};
  \}
  next() \{
    const current = this.state.current + 1;
    this.setState(\{ current \});
  \}
  prev() \{
    const current = this.state.current - 1;
    this.setState(\{ current \});
  \}
  render() \{
    const \{ current \} = this.state;
    return (
      <div>
        <Steps current=\{current\}>
          \{steps.map(item => <Step key=\{item.title\} title=\{item.title\} />)\}
        </Steps>
        <div className="steps-content">\{steps[this.state.current].content\}</div>
        <div className="steps-action">
          \{
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick=\{() => this.next()\}>Next</Button>
          \}
          \{
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick=\{() => message.success('Processing complete!')\}>Done</Button>
          \}
          \{
            this.state.current > 0
            &&
            <Button style=\{\{ marginLeft\: 8 \}\} onClick=\{() => this.prev()\}>
              Previous
            </Button>
          \}
        </div>
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
                    <div className="card card--example" id="components-steps-demo-vertical">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Vertical</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A simple step bar in the vertical direction.
                      </div>
                      <div className="card-body pb-0">
                        <div id="StepsVertical" />
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
                              {`import \{ Steps \} from 'antd';
const Step = Steps.Step;

ReactDOM.render(
  <Steps direction="vertical" current=\{1\}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-steps-demo-error">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Error status</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        By using <code>{'status'}</code> of <code>{'Steps'}</code>, you can specify
                        the state for current step.
                      </div>
                      <div className="card-body pb-0">
                        <div id="StepsError" />
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
                              {`import \{ Steps \} from 'antd';
const Step = Steps.Step;

ReactDOM.render(
  <Steps current=\{1\} status="error">
    <Step title="Finished" description="This is a description" />
    <Step title="In Process" description="This is a description" />
    <Step title="Waiting" description="This is a description" />
  </Steps>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-steps-demo-progress-dot">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Dot Style</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Steps with progress dot style.</div>
                      <div className="card-body pb-0">
                        <div id="StepsProgressdot" />
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
                              {`import \{ Steps \} from 'antd';
const Step = Steps.Step;

ReactDOM.render(
  <Steps progressDot current=\{1\}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-steps-demo-small-size">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Mini version</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        By setting like this: <code>{'<Steps size="small">'}</code>, you can get a
                        mini version.
                      </div>
                      <div className="card-body pb-0">
                        <div id="StepsSmallsize" />
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
                              {`import \{ Steps \} from 'antd';
const Step = Steps.Step;

ReactDOM.render(
  <Steps size="small" current=\{1\}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-steps-demo-vertical-small">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Vertical mini version</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A simple mini version step bar in the vertical direction.
                      </div>
                      <div className="card-body pb-0">
                        <div id="StepsVerticalsmall" />
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
                              {`import \{ Steps \} from 'antd';
const Step = Steps.Step;

ReactDOM.render(
  <Steps direction="vertical" size="small" current=\{1\}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
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

export default StepsItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderMentionAsync } from './Async/index.js'
import { default as renderMentionAvatar } from './Avatar/index.js'
import { default as renderMentionBasic } from './Basic/index.js'
import { default as renderMentionControlldersimple } from './Controlldersimple/index.js'
import { default as renderMentionControlled } from './Controlled/index.js'
import { default as renderMentionCustomtag } from './Customtag/index.js'
import { default as renderMentionMultilines } from './Multilines/index.js'
import { default as renderMentionMultipletrigger } from './Multipletrigger/index.js'
import { default as renderMentionPlacement } from './Placement/index.js'
import { default as renderMentionPopupContainer } from './PopupContainer/index.js'
import { default as renderMentionReadonly } from './Readonly/index.js'

const Panel = Collapse.Panel

class MentionItems extends React.Component {
  componentDidMount() {
    renderMentionAsync(ReactDOM, document.getElementById('MentionAsync'))
    renderMentionAvatar(ReactDOM, document.getElementById('MentionAvatar'))
    renderMentionBasic(ReactDOM, document.getElementById('MentionBasic'))
    renderMentionControlldersimple(ReactDOM, document.getElementById('MentionControlldersimple'))
    renderMentionControlled(ReactDOM, document.getElementById('MentionControlled'))
    renderMentionCustomtag(ReactDOM, document.getElementById('MentionCustomtag'))
    renderMentionMultilines(ReactDOM, document.getElementById('MentionMultilines'))
    renderMentionMultipletrigger(ReactDOM, document.getElementById('MentionMultipletrigger'))
    renderMentionPlacement(ReactDOM, document.getElementById('MentionPlacement'))
    renderMentionPopupContainer(ReactDOM, document.getElementById('MentionPopupContainer'))
    renderMentionReadonly(ReactDOM, document.getElementById('MentionReadonly'))
  }

  render() {
    return (
      <div className="MentionDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Mention</strong>
                  <a
                    href="https://ant.design/components/mention/"
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
                    <div className="card card--example" id="components-mention-demo-async">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Asynchronous loading</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">async</div>
                      <div className="card-body pb-0">
                        <div id="MentionAsync" />
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
                              {`import \{ Mention \} from 'antd';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class AsyncMention extends React.Component \{
  state = \{
    suggestions\: [],
    loading\: false,
  \}
  fetchSuggestions = (value, callback) => \{
    setTimeout(() => \{
      callback(users.filter(item => item.indexOf(value) !== -1));
    \}, 500);
  \}
  onSearchChange = (value) => \{
    this.fetchSuggestions(value, (suggestions) => \{
      this.setState(\{
        suggestions,
        loading\: false,
      \});
    \});
    this.setState(\{
      loading\: true,
    \});
  \}
  render() \{
    const \{ suggestions, loading \} = this.state;
    return (
      <Mention
        style=\{\{ width\: '100%' \}\}
        loading=\{loading\}
        suggestions=\{suggestions\}
        onSearchChange=\{this.onSearchChange\}
      />
    );
  \}
\}

ReactDOM.render(<AsyncMention />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-mention-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic usage.</div>
                      <div className="card-body pb-0">
                        <div id="MentionBasic" />
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
                              {`import \{ Mention \} from 'antd';
const \{ toString, toContentState \} = Mention;

function onChange(contentState) \{
  console.log(toString(contentState));
\}

function onSelect(suggestion) \{
  console.log('onSelect', suggestion);
\}

ReactDOM.render(
  <Mention
    style=\{\{ width\: '100%' \}\}
    onChange=\{onChange\}
    defaultValue=\{toContentState('@afc163')\}
    suggestions=\{['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']\}
    onSelect=\{onSelect\}
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-mention-demo-controlled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">With Form</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Controlled mode, for example, to work with <code>{'Form'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MentionControlled" />
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
                              {`import \{ Mention, Form, Button \} from 'antd';
const \{ toContentState, getMentions \} = Mention;
const FormItem = Form.Item;

class App extends React.Component \{
  state = \{
    initValue\: toContentState('@afc163'),
  \}
  handleReset = (e) => \{
    e.preventDefault();
    this.props.form.resetFields();
  \}
  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((errors, values) => \{
      if (errors) \{
        console.log('Errors in form!!!');
        return;
      \}
      console.log('Submit!!!');
      console.log(values);
    \});
  \}
  checkMention = (rule, value, callback) => \{
    const \{ getFieldValue \} = this.props.form;
    const mentions = getMentions(getFieldValue('mention'));
    if (mentions.length < 2) \{
      callback(new Error('More than one must be selected!'));
    \} else \{
      callback();
    \}
  \}
  render() \{
    const \{ getFieldDecorator, getFieldValue \} = this.props.form;
    console.log('>> render', getFieldValue('mention') === this.state.initValue);
    return (
      <Form layout="horizontal">
        <FormItem
          id="control-mention"
          label="Top coders"
          labelCol=\{\{ span\: 6 \}\}
          wrapperCol=\{\{ span\: 16 \}\}
        >
          \{getFieldDecorator('mention', \{
            rules\: [
              \{ validator\: this.checkMention \},
            ],
            initialValue\: this.state.initValue,
          \})(
            <Mention
              suggestions=\{['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']\}
            />
          )\}
        </FormItem>
        <FormItem wrapperCol=\{\{ span\: 14, offset\: 6 \}\}>
          <Button type="primary" onClick=\{this.handleSubmit\}>Submit</Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick=\{this.handleReset\}>Reset</Button>
        </FormItem>
      </Form>
    );
  \}
\}

const FormDemo = Form.create()(App);

ReactDOM.render(<FormDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-mention-demo-multilines">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="card-body pb-0">Multi lines mode.</div>
                      <div className="card-body pb-0">
                        <div id="MentionMultilines" />
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
                              {`import \{ Mention \} from 'antd';
const \{ toString \} = Mention;

function onChange(editorState) \{
  console.log(toString(editorState));
\}

ReactDOM.render(
  <Mention
    style=\{\{ width\: '100%', height\: 100 \}\}
    onChange=\{onChange\}
    suggestions=\{['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']\}
    multiLines
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-mention-demo-placement">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Placement</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Change the suggestions placement.</div>
                      <div className="card-body pb-0">
                        <div id="MentionPlacement" />
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
                              {`import \{ Mention \} from 'antd';
const \{ toString \} = Mention;

function onChange(contentState) \{
  console.log(toString(contentState));
\}

function onSelect(suggestion) \{
  console.log('onSelect', suggestion);
\}

ReactDOM.render(
  <Mention
    style=\{\{ width\: '100%' \}\}
    onChange=\{onChange\}
    suggestions=\{['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']\}
    onSelect=\{onSelect\}
    placement="top"
  />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-mention-demo-readonly">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">disabled or readOnly</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Configurate <code>{'disabled'}</code> and <code>{'readOnly'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MentionReadonly" />
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
                              {`import \{ Mention \} from 'antd';
const \{ toString \} = Mention;

function onChange(editorState) \{
  console.log(toString(editorState));
\}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

function App() \{
  return (
    <div>
      <div style=\{\{ marginBottom\: 10 \}\}>
        <Mention
          style=\{\{ width\: '100%' \}\}
          onChange=\{onChange\}
          placeholder="this is disabled Mention"
          suggestions=\{users\}
          disabled
        />
      </div>
      <Mention
        style=\{\{ width\: '100%' \}\}
        onChange=\{onChange\}
        placeholder="this is readOnly Mention"
        suggestions=\{users\}
        readOnly
      />
    </div>
  );
\}


ReactDOM.render(
  <App />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-mention-demo-avatar">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Icon Image</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Customize suggestions.</div>
                      <div className="card-body pb-0">
                        <div id="MentionAvatar" />
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
                              {`import \{ Mention, Avatar \} from 'antd';
const Nav = Mention.Nav;

const webFrameworks = [
  \{ name\: 'React', type\: 'JavaScript', icon\: 'https\://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' \},
  \{ name\: 'Angular', type\: 'JavaScript', icon\: 'https\://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' \},
  \{ name\: 'Dva', type\: 'Javascript', icon\: 'https\://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' \},
  \{ name\: 'Flask', type\: 'Python', icon\: 'https\://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' \},
];

class CustomNavMention extends React.Component \{
  state = \{
    suggestions\: [],
  \}
  onSearchChange = (value) => \{
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value=\{suggestion.name\}
        data=\{suggestion\}
        disabled=\{suggestion.disabled\}
      >
        <Avatar
          src=\{suggestion.icon\}
          size="small"
          style=\{\{ width\: 14, height\: 14, marginRight\: 8, top\: 2, position\: 'relative' \}\}
        />
        \{suggestion.name\} - \{suggestion.type\}
      </Nav>
    ));
    this.setState(\{ suggestions \});
  \}
  render() \{
    const \{ suggestions \} = this.state;
    return (
      <Mention
        style=\{\{ width\: '100%' \}\}
        suggestions=\{suggestions\}
        onSearchChange=\{this.onSearchChange\}
      />
    );
  \}
\}

ReactDOM.render(<CustomNavMention />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-mention-demo-controllder-simple"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Controlled</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Controlled mode.</div>
                      <div className="card-body pb-0">
                        <div id="MentionControlldersimple" />
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
                              {`import \{ Mention \} from 'antd';
const \{ toContentState \} = Mention;

class App extends React.Component \{
  state = \{
    value\: toContentState('@afc163'),
  \}
  componentDidMount() \{
    this.mention.focus();
  \}
  handleChange = (editorState) => \{
    this.setState(\{
      value\: editorState,
    \});
  \}
  render() \{
    return (
      <Mention
        ref=\{ele => this.mention = ele\}
        suggestions=\{['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']\}
        value=\{this.state.value\}
        onChange=\{this.handleChange\}
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
                    <div className="card card--example" id="components-mention-demo-custom-tag">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customize Suggestion</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Customize suggestions.</div>
                      <div className="card-body pb-0">
                        <div id="MentionCustomtag" />
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
                              {`import \{ Mention \} from 'antd';
const Nav = Mention.Nav;

const webFrameworks = [
  \{ name\: 'React', type\: 'JavaScript' \},
  \{ name\: 'Angular', type\: 'JavaScript' \},
  \{ name\: 'Laravel', type\: 'PHP', disabled\: true \},
  \{ name\: 'Flask', type\: 'Python' \},
  \{ name\: 'Django', type\: 'Python' \},
];

function onSelect(suggestion, data) \{
  console.log('onSelect', suggestion, data);
\}

class CustomNavMention extends React.Component \{
  state = \{
    suggestions\: [],
  \}
  onSearchChange = (value) => \{
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value=\{suggestion.name\}
        data=\{suggestion\}
      >
        <span>\{suggestion.name\} - \{suggestion.type\}</span>
      </Nav>
    ));
    this.setState(\{ suggestions \});
  \}
  render() \{
    const \{ suggestions \} = this.state;
    return (
      <Mention
        placeholder="@someone"
        style=\{\{ width\: '100%' \}\}
        suggestions=\{suggestions\}
        onSearchChange=\{this.onSearchChange\}
        onSelect=\{onSelect\}
      />
    );
  \}
\}

ReactDOM.render(<CustomNavMention />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-mention-demo-multiple-trigger"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customize Trigger Token</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Customize Trigger Token by <code>{'prefix'}</code> props. Default to{' '}
                        <code>{'@'}</code>, <code>{'Array<string>'}</code> also supported.
                      </div>
                      <div className="card-body pb-0">
                        <div id="MentionMultipletrigger" />
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
                              {`import \{ Mention \} from 'antd';
const \{ toString \} = Mention;

function onChange(editorState) \{
  console.log(toString(editorState));
\}

function onSelect(suggestion) \{
  console.log('onSelect', suggestion);
\}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
const tags = ['1.0', '2.0', '3.0'];

class App extends React.Component \{
  constructor() \{
    super();
    this.state = \{
      suggestions\: [],
    \};
  \}
  onSearchChange = (value, trigger) => \{
    console.log('onSearchChange', value, trigger);
    const dataSource = trigger === '@' ? users \: tags;
    this.setState(\{
      suggestions\: dataSource.filter(item => item.indexOf(value) !== -1),
    \});
  \}
  render() \{
    return (
      <Mention
        style=\{\{ width\: '100%' \}\}
        onChange=\{onChange\}
        placeholder="input @ to mention people, # to mention tag"
        prefix=\{['@', '#']\}
        onSearchChange=\{this.onSearchChange\}
        suggestions=\{this.state.suggestions\}
        onSelect=\{onSelect\}
      />
    );
  \}
\}

ReactDOM.render(
  <App />
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-mention-demo-popupContainer">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">SuggestionContainer</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">To set the container of the suggestion.</div>
                      <div className="card-body pb-0">
                        <div id="MentionPopupContainer" />
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
                              {`import \{ Mention, Popover, Button \} from 'antd';
const \{ toString, toContentState \} = Mention;

function onChange(editorState) \{
  console.log(toString(editorState));
\}

function onSelect(suggestion) \{
  console.log('onSelect', suggestion);
\}

class PopoverContainer extends React.Component \{
  getSuggestionContainer = () => \{
    return this.popover.getPopupDomNode();
  \}
  visibleChange = (visible) => \{
    if (visible && this.mention) \{
      this.mention.focus();
    \}
  \}
  render() \{
    const mention = (
      <Mention
        ref=\{ele => this.mention = ele\}
        style=\{\{ width\: '100%' \}\}
        onChange=\{onChange\}
        defaultValue=\{toContentState('@afc163')\}
        suggestions=\{['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']\}
        onSelect=\{onSelect\}
        getSuggestionContainer=\{this.getSuggestionContainer\}
      />
    );
    return (
      <Popover
        trigger="click"
        content=\{mention\}
        title="Title"
        ref=\{popover => this.popover = popover\}
        onVisibleChange=\{this.visibleChange\}
      >
        <Button type="primary">Click Me</Button>
      </Popover>
    );
  \}
\}

ReactDOM.render(<PopoverContainer />, mountNode);
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

export default MentionItems

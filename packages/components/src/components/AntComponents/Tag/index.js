import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTagBasic } from './Basic/index.js'
import { default as renderTagCheckable } from './Checkable/index.js'
import { default as renderTagColorful } from './Colorful/index.js'
import { default as renderTagControl } from './Control/index.js'
import { default as renderTagHottags } from './Hottags/index.js'

const Panel = Collapse.Panel

class TagItems extends React.Component {
  componentDidMount() {
    renderTagBasic(ReactDOM, document.getElementById('TagBasic'))
    renderTagCheckable(ReactDOM, document.getElementById('TagCheckable'))
    renderTagColorful(ReactDOM, document.getElementById('TagColorful'))
    renderTagControl(ReactDOM, document.getElementById('TagControl'))
    renderTagHottags(ReactDOM, document.getElementById('TagHottags'))
  }

  render() {
    return (
      <div className="TagDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Tag</strong>
                  <a
                    href="https://ant.design/components/tag/"
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
                    <div className="card card--example" id="components-tag-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Usage of basic Tag, and it could be closable by set{' '}
                        <code>{'closable'}</code> property. Closable Tag supports{' '}
                        <code>{'onClose'}</code> <code>{'afterClose'}</code> events.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TagBasic" />
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
                              {`import \{ Tag \} from 'antd';

function log(e) \{
  console.log(e);
\}

function preventDefault(e) \{
  e.preventDefault();
  console.log('Clicked! But prevent default.');
\}

ReactDOM.render(
  <div>
    <Tag>Tag 1</Tag>
    <Tag><a href="https\://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
    <Tag closable onClose=\{log\}>Tag 2</Tag>
    <Tag closable onClose=\{preventDefault\}>Prevent Default</Tag>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tag-demo-colorful">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Colorful Tag</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        We preset a series of colorful tag style for different situation usage. And
                        you can always set it to a hex color string for custom color.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TagColorful" />
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
                              {`import \{ Tag \} from 'antd';

ReactDOM.render(
  <div>
    <h4 style=\{\{ marginBottom\: 16 \}\}>Presets\:</h4>
    <div>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <h4 style=\{\{ margin\: '16px 0' \}\}>Custom\:</h4>
    <div>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tag-demo-hot-tags">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Hot Tags</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Select your favourite topics.</div>
                      <div className="card-body pb-0">
                        <div id="TagHottags" />
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
                              {`import \{ Tag \} from 'antd';
const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

class HotTags extends React.Component \{
  state = \{
    selectedTags\: [],
  \};

  handleChange(tag, checked) \{
    const \{ selectedTags \} = this.state;
    const nextSelectedTags = checked ?
            [...selectedTags, tag] \:
            selectedTags.filter(t => t !== tag);
    console.log('You are interested in\: ', nextSelectedTags);
    this.setState(\{ selectedTags\: nextSelectedTags \});
  \}

  render() \{
    const \{ selectedTags \} = this.state;
    return (
      <div>
        <h6 style=\{\{ marginRight\: 8, display\: 'inline' \}\}>Categories\:</h6>
        \{tagsFromServer.map(tag => (
          <CheckableTag
            key=\{tag\}
            checked=\{selectedTags.indexOf(tag) > -1\}
            onChange=\{checked => this.handleChange(tag, checked)\}
          >
            \{tag\}
          </CheckableTag>
        ))\}
      </div>
    );
  \}
\}

ReactDOM.render(<HotTags />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-tag-demo-checkable">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Checkable</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'CheckableTag'}</code> works like Checkbox, click it to toggle
                        checked state. > it is an absolute controlled component and has no
                        uncontrolled mode.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TagCheckable" />
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
                              {`import \{ Tag \} from 'antd';
const \{ CheckableTag \} = Tag;

class MyTag extends React.Component \{
  state = \{ checked\: true \};
  handleChange = (checked) => \{
    this.setState(\{ checked \});
  \}
  render() \{
    return <CheckableTag \{...this.props\} checked=\{this.state.checked\} onChange=\{this.handleChange\} />;
  \}
\}

ReactDOM.render(
  <div>
    <MyTag>Tag1</MyTag>
    <MyTag>Tag2</MyTag>
    <MyTag>Tag3</MyTag>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tag-demo-control">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Add</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Generating a set of Tags by array, you can add and remove dynamically. It's
                        based on <code>{'afterClose'}</code> event, which will be triggered while
                        the close animation end.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TagControl" />
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
                              {`import \{ Tag, Input, Tooltip, Icon \} from 'antd';

class EditableTagGroup extends React.Component \{
  state = \{
    tags\: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible\: false,
    inputValue\: '',
  \};

  handleClose = (removedTag) => \{
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState(\{ tags \});
  \}

  showInput = () => \{
    this.setState(\{ inputVisible\: true \}, () => this.input.focus());
  \}

  handleInputChange = (e) => \{
    this.setState(\{ inputValue\: e.target.value \});
  \}

  handleInputConfirm = () => \{
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) \{
      tags = [...tags, inputValue];
    \}
    console.log(tags);
    this.setState(\{
      tags,
      inputVisible\: false,
      inputValue\: '',
    \});
  \}

  saveInputRef = input => this.input = input

  render() \{
    const \{ tags, inputVisible, inputValue \} = this.state;
    return (
      <div>
        \{tags.map((tag, index) => \{
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key=\{tag\} closable=\{index !== 0\} afterClose=\{() => this.handleClose(tag)\}>
              \{isLongTag ? \`\$\{tag.slice(0, 20)\}...\` \: tag\}
            </Tag>
          );
          return isLongTag ? <Tooltip title=\{tag\} key=\{tag\}>\{tagElem\}</Tooltip> \: tagElem;
        \})\}
        \{inputVisible && (
          <Input
            ref=\{this.saveInputRef\}
            type="text"
            size="small"
            style=\{\{ width\: 78 \}\}
            value=\{inputValue\}
            onChange=\{this.handleInputChange\}
            onBlur=\{this.handleInputConfirm\}
            onPressEnter=\{this.handleInputConfirm\}
          />
        )\}
        \{!inputVisible && (
          <Tag
            onClick=\{this.showInput\}
            style=\{\{ background\: '#fff', borderStyle\: 'dashed' \}\}
          >
            <Icon type="plus" /> New Tag
          </Tag>
        )\}
      </div>
    );
  \}
\}

ReactDOM.render(<EditableTagGroup />, mountNode);
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

export default TagItems

import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTreeselectBasic } from './Basic/index.js'
import { default as renderTreeselectCheckable } from './Checkable/index.js'
import { default as renderTreeselectMultiple } from './Multiple/index.js'
import { default as renderTreeselectTreeData } from './TreeData/index.js'

const Panel = Collapse.Panel

class TreeselectItems extends React.Component {
  componentDidMount() {
    renderTreeselectBasic(ReactDOM, document.getElementById('TreeselectBasic'))
    renderTreeselectCheckable(ReactDOM, document.getElementById('TreeselectCheckable'))
    renderTreeselectMultiple(ReactDOM, document.getElementById('TreeselectMultiple'))
    renderTreeselectTreeData(ReactDOM, document.getElementById('TreeselectTreeData'))
  }

  render() {
    return (
      <div className="TreeselectDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>TreeSelect</strong>
                  <a
                    href="https://ant.design/components/tree-select/"
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
                    <div className="card card--example" id="components-tree-select-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">The most basic usage.</div>
                      <div className="card-body pb-0">
                        <div id="TreeselectBasic" />
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
                              {`import \{ TreeSelect \} from 'antd';
const TreeNode = TreeSelect.TreeNode;

class Demo extends React.Component \{
  state = \{
    value\: undefined,
  \}
  onChange = (value) => \{
    console.log(arguments);
    this.setState(\{ value \});
  \}
  render() \{
    return (
      <TreeSelect
        showSearch
        style=\{\{ width\: 300 \}\}
        value=\{this.state.value\}
        dropdownStyle=\{\{ maxHeight\: 400, overflow\: 'auto' \}\}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange=\{this.onChange\}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title=\{<b style=\{\{ color\: '#08c' \}\}>sss</b>\} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
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
                    <div className="card card--example" id="components-tree-select-demo-multiple">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Multiple Selection</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Multiple selection usage.</div>
                      <div className="card-body pb-0">
                        <div id="TreeselectMultiple" />
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
                              {`import \{ TreeSelect \} from 'antd';
const TreeNode = TreeSelect.TreeNode;

class Demo extends React.Component \{
  state = \{
    value\: undefined,
  \}
  onChange = (value) => \{
    console.log(arguments);
    this.setState(\{ value \});
  \}
  render() \{
    return (
      <TreeSelect
        showSearch
        style=\{\{ width\: 300 \}\}
        value=\{this.state.value\}
        dropdownStyle=\{\{ maxHeight\: 400, overflow\: 'auto' \}\}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange=\{this.onChange\}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title=\{<b style=\{\{ color\: '#08c' \}\}>sss</b>\} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
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
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-tree-select-demo-checkable">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Checkable</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Multiple and checkable.</div>
                      <div className="card-body pb-0">
                        <div id="TreeselectCheckable" />
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
                              {`import \{ TreeSelect \} from 'antd';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [\{
  label\: 'Node1',
  value\: '0-0',
  key\: '0-0',
  children\: [\{
    label\: 'Child Node1',
    value\: '0-0-0',
    key\: '0-0-0',
  \}],
\}, \{
  label\: 'Node2',
  value\: '0-1',
  key\: '0-1',
  children\: [\{
    label\: 'Child Node3',
    value\: '0-1-0',
    key\: '0-1-0',
  \}, \{
    label\: 'Child Node4',
    value\: '0-1-1',
    key\: '0-1-1',
  \}, \{
    label\: 'Child Node5',
    value\: '0-1-2',
    key\: '0-1-2',
  \}],
\}];

class Demo extends React.Component \{
  state = \{
    value\: ['0-0-0'],
  \}
  onChange = (value) => \{
    console.log('onChange ', value, arguments);
    this.setState(\{ value \});
  \}
  render() \{
    const tProps = \{
      treeData,
      value\: this.state.value,
      onChange\: this.onChange,
      treeCheckable\: true,
      showCheckedStrategy\: SHOW_PARENT,
      searchPlaceholder\: 'Please select',
      style\: \{
        width\: 300,
      \},
    \};
    return <TreeSelect \{...tProps\} />;
  \}
\}

ReactDOM.render(<Demo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-tree-select-demo-treeData">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Generate form tree data</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The tree structure can be populated using <code>{'treeData'}</code>{' '}
                        property. This is a quick and easy way to provide the tree content.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TreeselectTreeData" />
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
                              {`import \{ TreeSelect \} from 'antd';

const treeData = [\{
  label\: 'Node1',
  value\: '0-0',
  key\: '0-0',
  children\: [\{
    label\: 'Child Node1',
    value\: '0-0-1',
    key\: '0-0-1',
  \}, \{
    label\: 'Child Node2',
    value\: '0-0-2',
    key\: '0-0-2',
  \}],
\}, \{
  label\: 'Node2',
  value\: '0-1',
  key\: '0-1',
\}];

class Demo extends React.Component \{
  state = \{
    value\: undefined,
  \}
  onChange = (value) => \{
    console.log(arguments);
    this.setState(\{ value \});
  \}
  render() \{
    return (
      <TreeSelect
        style=\{\{ width\: 300 \}\}
        value=\{this.state.value\}
        dropdownStyle=\{\{ maxHeight\: 400, overflow\: 'auto' \}\}
        treeData=\{treeData\}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange=\{this.onChange\}
      />
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

export default TreeselectItems

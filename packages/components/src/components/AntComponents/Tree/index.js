import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderTreeBasiccontrolled } from './Basiccontrolled/index.js'
import { default as renderTreeBasic } from './Basic/index.js'
import { default as renderTreeCustomizedicon } from './Customizedicon/index.js'
import { default as renderTreeDraggable } from './Draggable/index.js'
import { default as renderTreeDynamic } from './Dynamic/index.js'
import { default as renderTreeLine } from './Line/index.js'
import { default as renderTreeSearch } from './Search/index.js'

const Panel = Collapse.Panel

class TreeItems extends React.Component {
  componentDidMount() {
    renderTreeBasiccontrolled(ReactDOM, document.getElementById('TreeBasiccontrolled'))
    renderTreeBasic(ReactDOM, document.getElementById('TreeBasic'))
    renderTreeCustomizedicon(ReactDOM, document.getElementById('TreeCustomizedicon'))
    renderTreeDraggable(ReactDOM, document.getElementById('TreeDraggable'))
    renderTreeDynamic(ReactDOM, document.getElementById('TreeDynamic'))
    renderTreeLine(ReactDOM, document.getElementById('TreeLine'))
    renderTreeSearch(ReactDOM, document.getElementById('TreeSearch'))
  }

  render() {
    return (
      <div className="TreeDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Tree</strong>
                  <a
                    href="https://ant.design/components/tree/"
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
                    <div className="card card--example" id="components-tree-demo-basic-controlled">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">basic controlled example</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">basic controlled example</div>
                      <div className="card-body pb-0">
                        <div id="TreeBasiccontrolled" />
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
                              {`import \{ Tree \} from 'antd';
const TreeNode = Tree.TreeNode;

const treeData = [\{
  title\: '0-0',
  key\: '0-0',
  children\: [\{
    title\: '0-0-0',
    key\: '0-0-0',
    children\: [
      \{ title\: '0-0-0-0', key\: '0-0-0-0' \},
      \{ title\: '0-0-0-1', key\: '0-0-0-1' \},
      \{ title\: '0-0-0-2', key\: '0-0-0-2' \},
    ],
  \}, \{
    title\: '0-0-1',
    key\: '0-0-1',
    children\: [
      \{ title\: '0-0-1-0', key\: '0-0-1-0' \},
      \{ title\: '0-0-1-1', key\: '0-0-1-1' \},
      \{ title\: '0-0-1-2', key\: '0-0-1-2' \},
    ],
  \}, \{
    title\: '0-0-2',
    key\: '0-0-2',
  \}],
\}, \{
  title\: '0-1',
  key\: '0-1',
  children\: [
    \{ title\: '0-1-0-0', key\: '0-1-0-0' \},
    \{ title\: '0-1-0-1', key\: '0-1-0-1' \},
    \{ title\: '0-1-0-2', key\: '0-1-0-2' \},
  ],
\}, \{
  title\: '0-2',
  key\: '0-2',
\}];

class Demo extends React.Component \{
  state = \{
    expandedKeys\: ['0-0-0', '0-0-1'],
    autoExpandParent\: true,
    checkedKeys\: ['0-0-0'],
    selectedKeys\: [],
  \}
  onExpand = (expandedKeys) => \{
    console.log('onExpand', arguments);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState(\{
      expandedKeys,
      autoExpandParent\: false,
    \});
  \}
  onCheck = (checkedKeys) => \{
    console.log('onCheck', checkedKeys);
    this.setState(\{ checkedKeys \});
  \}
  onSelect = (selectedKeys, info) => \{
    console.log('onSelect', info);
    this.setState(\{ selectedKeys \});
  \}
  renderTreeNodes = (data) => \{
    return data.map((item) => \{
      if (item.children) \{
        return (
          <TreeNode title=\{item.title\} key=\{item.key\} dataRef=\{item\}>
            \{this.renderTreeNodes(item.children)\}
          </TreeNode>
        );
      \}
      return <TreeNode \{...item\} />;
    \});
  \}
  render() \{
    return (
      <Tree
        checkable
        onExpand=\{this.onExpand\}
        expandedKeys=\{this.state.expandedKeys\}
        autoExpandParent=\{this.state.autoExpandParent\}
        onCheck=\{this.onCheck\}
        checkedKeys=\{this.state.checkedKeys\}
        onSelect=\{this.onSelect\}
        selectedKeys=\{this.state.selectedKeys\}
      >
        \{this.renderTreeNodes(treeData)\}
      </Tree>
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
                    <div className="card card--example" id="components-tree-demo-customized-icon">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customize Icon</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can customize icons for different nodes by styles override.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TreeCustomizedicon" />
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
                              {`import \{ Tree \} from 'antd';
const TreeNode = Tree.TreeNode;

class Demo extends React.Component \{
  onSelect = (selectedKeys, info) => \{
    console.log('selected', selectedKeys, info);
  \}
  render() \{
    return (
      <Tree
        showIcon
        showLine
        defaultExpandedKeys=\{['0-0-0', '0-0-1']\}
        defaultSelectedKeys=\{['0-0-0', '0-0-1']\}
        onSelect=\{this.onSelect\}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="leaf" key="0-0-2" />
        </TreeNode>
      </Tree>
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
                    <div className="card card--example" id="components-tree-demo-dynamic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">load data asynchronously</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To load data asynchronously when click to expand a treeNode.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TreeDynamic" />
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
                              {`import \{ Tree \} from 'antd';
const TreeNode = Tree.TreeNode;

class Demo extends React.Component \{
  state = \{
    treeData\: [
      \{ title\: 'Expand to load', key\: '0' \},
      \{ title\: 'Expand to load', key\: '1' \},
      \{ title\: 'Tree Node', key\: '2', isLeaf\: true \},
    ],
  \}
  onLoadData = (treeNode) => \{
    return new Promise((resolve) => \{
      if (treeNode.props.children) \{
        resolve();
        return;
      \}
      setTimeout(() => \{
        treeNode.props.dataRef.children = [
          \{ title\: 'Child Node', key\: \`\$\{treeNode.props.eventKey\}-0\` \},
          \{ title\: 'Child Node', key\: \`\$\{treeNode.props.eventKey\}-1\` \},
        ];
        this.setState(\{
          treeData\: [...this.state.treeData],
        \});
        resolve();
      \}, 1000);
    \});
  \}
  renderTreeNodes = (data) => \{
    return data.map((item) => \{
      if (item.children) \{
        return (
          <TreeNode title=\{item.title\} key=\{item.key\} dataRef=\{item\}>
            \{this.renderTreeNodes(item.children)\}
          </TreeNode>
        );
      \}
      return <TreeNode \{...item\} dataRef=\{item\} />;
    \});
  \}
  render() \{
    return (
      <Tree loadData=\{this.onLoadData\}>
        \{this.renderTreeNodes(this.state.treeData)\}
      </Tree>
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
                    <div className="card card--example" id="components-tree-demo-search">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Searchable</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Searchable Tree.</div>
                      <div className="card-body pb-0">
                        <div id="TreeSearch" />
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
                              {`import \{ Tree, Input \} from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => \{
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) \{
    const key = \`\$\{preKey\}-\$\{i\}\`;
    tns.push(\{ title\: key, key \});
    if (i < y) \{
      children.push(key);
    \}
  \}
  if (_level < 0) \{
    return tns;
  \}
  const level = _level - 1;
  children.forEach((key, index) => \{
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  \});
\};
generateData(z);

const dataList = [];
const generateList = (data) => \{
  for (let i = 0; i < data.length; i++) \{
    const node = data[i];
    const key = node.key;
    dataList.push(\{ key, title\: key \});
    if (node.children) \{
      generateList(node.children, node.key);
    \}
  \}
\};
generateList(gData);

const getParentKey = (key, tree) => \{
  let parentKey;
  for (let i = 0; i < tree.length; i++) \{
    const node = tree[i];
    if (node.children) \{
      if (node.children.some(item => item.key === key)) \{
        parentKey = node.key;
      \} else if (getParentKey(key, node.children)) \{
        parentKey = getParentKey(key, node.children);
      \}
    \}
  \}
  return parentKey;
\};

class SearchTree extends React.Component \{
  state = \{
    expandedKeys\: [],
    searchValue\: '',
    autoExpandParent\: true,
  \}
  onExpand = (expandedKeys) => \{
    this.setState(\{
      expandedKeys,
      autoExpandParent\: false,
    \});
  \}
  onChange = (e) => \{
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => \{
      if (item.key.indexOf(value) > -1) \{
        return getParentKey(item.key, gData);
      \}
      return null;
    \}).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState(\{
      expandedKeys,
      searchValue\: value,
      autoExpandParent\: true,
    \});
  \}
  render() \{
    const \{ searchValue, expandedKeys, autoExpandParent \} = this.state;
    const loop = data => data.map((item) => \{
      const index = item.key.indexOf(searchValue);
      const beforeStr = item.key.substr(0, index);
      const afterStr = item.key.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          \{beforeStr\}
          <span style=\{\{ color\: '#f50' \}\}>\{searchValue\}</span>
          \{afterStr\}
        </span>
      ) \: <span>\{item.key\}</span>;
      if (item.children) \{
        return (
          <TreeNode key=\{item.key\} title=\{title\}>
            \{loop(item.children)\}
          </TreeNode>
        );
      \}
      return <TreeNode key=\{item.key\} title=\{title\} />;
    \});
    return (
      <div>
        <Search style=\{\{ marginBottom\: 8 \}\} placeholder="Search" onChange=\{this.onChange\} />
        <Tree
          onExpand=\{this.onExpand\}
          expandedKeys=\{expandedKeys\}
          autoExpandParent=\{autoExpandParent\}
        >
          \{loop(gData)\}
        </Tree>
      </div>
    );
  \}
\}

ReactDOM.render(<SearchTree />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-tree-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        The most basic usage, tell you how to use checkable, selectable, disabled,
                        defaultExpandKeys, and etc.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TreeBasic" />
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
                              {`import \{ Tree \} from 'antd';
const TreeNode = Tree.TreeNode;

class Demo extends React.Component \{
  onSelect = (selectedKeys, info) => \{
    console.log('selected', selectedKeys, info);
  \}
  onCheck = (checkedKeys, info) => \{
    console.log('onCheck', checkedKeys, info);
  \}
  render() \{
    return (
      <Tree
        checkable
        defaultExpandedKeys=\{['0-0-0', '0-0-1']\}
        defaultSelectedKeys=\{['0-0-0', '0-0-1']\}
        defaultCheckedKeys=\{['0-0-0', '0-0-1']\}
        onSelect=\{this.onSelect\}
        onCheck=\{this.onCheck\}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title=\{<span style=\{\{ color\: '#1890ff' \}\}>sss</span>\} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
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
                    <div className="card card--example" id="components-tree-demo-draggable">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">draggable</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Drag treeNode to insert after the other treeNode or insert into the other
                        parent TreeNode.
                      </div>
                      <div className="card-body pb-0">
                        <div id="TreeDraggable" />
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
                              {`import \{ Tree \} from 'antd';
const TreeNode = Tree.TreeNode;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => \{
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) \{
    const key = \`\$\{preKey\}-\$\{i\}\`;
    tns.push(\{ title\: key, key \});
    if (i < y) \{
      children.push(key);
    \}
  \}
  if (_level < 0) \{
    return tns;
  \}
  const level = _level - 1;
  children.forEach((key, index) => \{
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  \});
\};
generateData(z);

class Demo extends React.Component \{
  state = \{
    gData,
    expandedKeys\: ['0-0', '0-0-0', '0-0-0-0'],
  \}
  onDragEnter = (info) => \{
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState(\{
    //   expandedKeys\: info.expandedKeys,
    // \});
  \}
  onDrop = (info) => \{
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => \{
      data.forEach((item, index, arr) => \{
        if (item.key === key) \{
          return callback(item, index, arr);
        \}
        if (item.children) \{
          return loop(item.children, key, callback);
        \}
      \});
    \};
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => \{
      arr.splice(index, 1);
      dragObj = item;
    \});
    if (info.dropToGap) \{
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => \{
        ar = arr;
        i = index;
      \});
      if (dropPosition === -1) \{
        ar.splice(i, 0, dragObj);
      \} else \{
        ar.splice(i + 1, 0, dragObj);
      \}
    \} else \{
      loop(data, dropKey, (item) => \{
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      \});
    \}
    this.setState(\{
      gData\: data,
    \});
  \}
  render() \{
    const loop = data => data.map((item) => \{
      if (item.children && item.children.length) \{
        return <TreeNode key=\{item.key\} title=\{item.key\}>\{loop(item.children)\}</TreeNode>;
      \}
      return <TreeNode key=\{item.key\} title=\{item.key\} />;
    \});
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys=\{this.state.expandedKeys\}
        draggable
        onDragEnter=\{this.onDragEnter\}
        onDrop=\{this.onDrop\}
      >
        \{loop(this.state.gData)\}
      </Tree>
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
                    <div className="card card--example" id="components-tree-demo-line">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Tree With Line</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Tree With Line</div>
                      <div className="card-body pb-0">
                        <div id="TreeLine" />
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
                              {`import \{ Tree \} from 'antd';
const TreeNode = Tree.TreeNode;

class Demo extends React.Component \{
  onSelect = (selectedKeys, info) => \{
    console.log('selected', selectedKeys, info);
  \}
  render() \{
    return (
      <Tree
        showLine
        defaultExpandedKeys=\{['0-0-0']\}
        onSelect=\{this.onSelect\}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
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

export default TreeItems

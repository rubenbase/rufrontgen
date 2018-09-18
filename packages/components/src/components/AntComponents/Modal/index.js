import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderModalAsync } from './Async/index.js'
import { default as renderModalBasic } from './Basic/index.js'
import { default as renderModalConfirmpromise } from './Confirmpromise/index.js'
import { default as renderModalConfirm } from './Confirm/index.js'
import { default as renderModalFooter } from './Footer/index.js'
import { default as renderModalInfo } from './Info/index.js'
import { default as renderModalLocale } from './Locale/index.js'
import { default as renderModalManual } from './Manual/index.js'
import { default as renderModalPosition } from './Position/index.js'

const Panel = Collapse.Panel

class ModalItems extends React.Component {
  componentDidMount() {
    renderModalAsync(ReactDOM, document.getElementById('ModalAsync'))
    renderModalBasic(ReactDOM, document.getElementById('ModalBasic'))
    renderModalConfirmpromise(ReactDOM, document.getElementById('ModalConfirmpromise'))
    renderModalConfirm(ReactDOM, document.getElementById('ModalConfirm'))
    renderModalFooter(ReactDOM, document.getElementById('ModalFooter'))
    renderModalInfo(ReactDOM, document.getElementById('ModalInfo'))
    renderModalLocale(ReactDOM, document.getElementById('ModalLocale'))
    renderModalManual(ReactDOM, document.getElementById('ModalManual'))
    renderModalPosition(ReactDOM, document.getElementById('ModalPosition'))
  }

  render() {
    return (
      <div className="ModalDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Modal</strong>
                  <a
                    href="https://ant.design/components/modal/"
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
                    <div className="card card--example" id="components-modal-demo-async">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Asynchronously close</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Asynchronously close a modal dialog when a user clicked OK button, for
                        example, you can use this pattern when you submit a form.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ModalAsync" />
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
                              {`import \{ Modal, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    ModalText\: 'Content of the modal',
    visible\: false,
    confirmLoading\: false,
  \}
  showModal = () => \{
    this.setState(\{
      visible\: true,
    \});
  \}
  handleOk = () => \{
    this.setState(\{
      ModalText\: 'The modal will be closed after two seconds',
      confirmLoading\: true,
    \});
    setTimeout(() => \{
      this.setState(\{
        visible\: false,
        confirmLoading\: false,
      \});
    \}, 2000);
  \}
  handleCancel = () => \{
    console.log('Clicked cancel button');
    this.setState(\{
      visible\: false,
    \});
  \}
  render() \{
    const \{ visible, confirmLoading, ModalText \} = this.state;
    return (
      <div>
        <Button type="primary" onClick=\{this.showModal\}>Open</Button>
        <Modal title="Title"
          visible=\{visible\}
          onOk=\{this.handleOk\}
          confirmLoading=\{confirmLoading\}
          onCancel=\{this.handleCancel\}
        >
          <p>\{ModalText\}</p>
        </Modal>
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
                    <div className="card card--example" id="components-modal-demo-confirm-promise">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Confirmation modal dialog</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To use <code>{'confirm()'}</code> to popup confirmation modal dialog. Let
                        onCancel/onOk function return a promise object to delay closing the dialog.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ModalConfirmpromise" />
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
                              {`import \{ Modal, Button \} from 'antd';
const confirm = Modal.confirm;

function showConfirm() \{
  confirm(\{
    title\: 'Do you want to delete these items?',
    content\: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() \{
      return new Promise((resolve, reject) => \{
        setTimeout(Math.random() > 0.5 ? resolve \: reject, 1000);
      \}).catch(() => console.log('Oops errors!'));
    \},
    onCancel() \{\},
  \});
\}

ReactDOM.render(
  <Button onClick=\{showConfirm\}>
    Confirm
  </Button>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-modal-demo-footer">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Footer</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        A more complex example which define a customized footer button bar, the
                        dialog will change to loading state after clicking submit button, when the
                        loading is over, the modal dialog will be closed. You could set{' '}
                        <code>{'footer'}</code> to <code>{'null'}</code> if you don't need default
                        footer buttons.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ModalFooter" />
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
                              {`import \{ Modal, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    loading\: false,
    visible\: false,
  \}
  showModal = () => \{
    this.setState(\{
      visible\: true,
    \});
  \}
  handleOk = () => \{
    this.setState(\{ loading\: true \});
    setTimeout(() => \{
      this.setState(\{ loading\: false, visible\: false \});
    \}, 3000);
  \}
  handleCancel = () => \{
    this.setState(\{ visible\: false \});
  \}
  render() \{
    const \{ visible, loading \} = this.state;
    return (
      <div>
        <Button type="primary" onClick=\{this.showModal\}>
          Open
        </Button>
        <Modal
          visible=\{visible\}
          title="Title"
          onOk=\{this.handleOk\}
          onCancel=\{this.handleCancel\}
          footer=\{[
            <Button key="back" onClick=\{this.handleCancel\}>Return</Button>,
            <Button key="submit" type="primary" loading=\{loading\} onClick=\{this.handleOk\}>
              Submit
            </Button>,
          ]\}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
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
                    <div className="card card--example" id="components-modal-demo-locale">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Internationalization</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To customize the text of the buttons, you need to set{' '}
                        <code>{'okText'}</code> and <code>{'cancelText'}</code> props.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ModalLocale" />
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
                              {`import \{ Modal, Button \} from 'antd';

class LocalizedModal extends React.Component \{
  state = \{ visible\: false \}
  showModal = () => \{
    this.setState(\{
      visible\: true,
    \});
  \}
  hideModal = () => \{
    this.setState(\{
      visible\: false,
    \});
  \}
  render() \{
    return (
      <div>
        <Button type="primary" onClick=\{this.showModal\}>Modal</Button>
        <Modal
          title="Modal"
          visible=\{this.state.visible\}
          onOk=\{this.hideModal\}
          onCancel=\{this.hideModal\}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  \}
\}

function confirm() \{
  Modal.confirm(\{
    title\: 'Confirm',
    content\: 'Bla bla ...',
    okText\: '确认',
    cancelText\: '取消',
  \});
\}

ReactDOM.render(
  <div>
    <LocalizedModal />
    <br />
    <Button onClick=\{confirm\}>Confirm</Button>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-modal-demo-position">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">
                            To customize the position of modal
                          </strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        After release <code>{'1.0'}</code>, Modal's <code>{'align'}</code> prop was
                        removed. You can use <code>{'style.top'}</code> or other styles to set
                        position of modal dialog.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ModalPosition" />
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
                              {`import \{ Modal, Button \} from 'antd';

class App extends React.Component \{
  state = \{
    modal1Visible\: false,
    modal2Visible\: false,
  \}
  setModal1Visible(modal1Visible) \{
    this.setState(\{ modal1Visible \});
  \}
  setModal2Visible(modal2Visible) \{
    this.setState(\{ modal2Visible \});
  \}
  render() \{
    return (
      <div>
        <Button type="primary" onClick=\{() => this.setModal1Visible(true)\}>Display a modal dialog at 20px to Top</Button>
        <Modal
          title="20px to Top"
          style=\{\{ top\: 20 \}\}
          visible=\{this.state.modal1Visible\}
          onOk=\{() => this.setModal1Visible(false)\}
          onCancel=\{() => this.setModal1Visible(false)\}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <br /><br />
        <Button type="primary" onClick=\{() => this.setModal2Visible(true)\}>Vertically centered modal dialog</Button>
        <Modal
          title="Vertically centered modal dialog"
          wrapClassName="vertical-center-modal"
          visible=\{this.state.modal2Visible\}
          onOk=\{() => this.setModal2Visible(false)\}
          onCancel=\{() => this.setModal2Visible(false)\}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
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
                    <div className="card card--example" id="components-modal-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic modal.</div>
                      <div className="card-body pb-0">
                        <div id="ModalBasic" />
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
                              {`import \{ Modal, Button \} from 'antd';

class App extends React.Component \{
  state = \{ visible\: false \}
  showModal = () => \{
    this.setState(\{
      visible\: true,
    \});
  \}
  handleOk = (e) => \{
    console.log(e);
    this.setState(\{
      visible\: false,
    \});
  \}
  handleCancel = (e) => \{
    console.log(e);
    this.setState(\{
      visible\: false,
    \});
  \}
  render() \{
    return (
      <div>
        <Button type="primary" onClick=\{this.showModal\}>Open</Button>
        <Modal
          title="Basic Modal"
          visible=\{this.state.visible\}
          onOk=\{this.handleOk\}
          onCancel=\{this.handleCancel\}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
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
                    <div className="card card--example" id="components-modal-demo-confirm">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Confirmation modal dialog</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        To use <code>{'confirm()'}</code> to popup a confirmation modal dialog.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ModalConfirm" />
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
                              {`import \{ Modal, Button \} from 'antd';
const confirm = Modal.confirm;

function showConfirm() \{
  confirm(\{
    title\: 'Do you Want to delete these items?',
    content\: 'Some descriptions',
    onOk() \{
      console.log('OK');
    \},
    onCancel() \{
      console.log('Cancel');
    \},
  \});
\}

function showDeleteConfirm() \{
  confirm(\{
    title\: 'Are you sure delete this task?',
    content\: 'Some descriptions',
    okText\: 'Yes',
    okType\: 'danger',
    cancelText\: 'No',
    onOk() \{
      console.log('OK');
    \},
    onCancel() \{
      console.log('Cancel');
    \},
  \});
\}

ReactDOM.render(
  <div>
    <Button onClick=\{showConfirm\}>
      Confirm
    </Button>
    <Button onClick=\{showDeleteConfirm\} type="dashed">
      Delete
    </Button>
  </div>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-modal-demo-info">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Information modal dialog</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        In the various types of information modal dialog, only one button to close
                        dialog is provided.
                      </div>
                      <div className="card-body pb-0">
                        <div id="ModalInfo" />
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
                              {`import \{ Modal, Button \} from 'antd';

function info() \{
  Modal.info(\{
    title\: 'This is a notification message',
    content\: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() \{\},
  \});
\}

function success() \{
  Modal.success(\{
    title\: 'This is a success message',
    content\: 'some messages...some messages...',
  \});
\}

function error() \{
  Modal.error(\{
    title\: 'This is an error message',
    content\: 'some messages...some messages...',
  \});
\}

function warning() \{
  Modal.warning(\{
    title\: 'This is a warning message',
    content\: 'some messages...some messages...',
  \});
\}

ReactDOM.render(
  <div>
    <Button onClick=\{info\}>Info</Button>
    <Button onClick=\{success\}>Success</Button>
    <Button onClick=\{error\}>Error</Button>
    <Button onClick=\{warning\}>Warning</Button>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-modal-demo-manual">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Manual to destroy</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Manually destroying a modal.</div>
                      <div className="card-body pb-0">
                        <div id="ModalManual" />
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
                              {`import \{ Modal, Button \} from 'antd';

function success() \{
  const modal = Modal.success(\{
    title\: 'This is a notification message',
    content\: 'This modal will be destroyed after 1 second',
  \});
  setTimeout(() => modal.destroy(), 1000);
\}


ReactDOM.render(
  <Button onClick=\{success\}>Success</Button>,
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

export default ModalItems

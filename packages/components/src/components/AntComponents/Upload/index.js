import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderUploadAvatar } from './Avatar/index.js'
import { default as renderUploadBasic } from './Basic/index.js'
import { default as renderUploadDefaultFileList } from './DefaultFileList/index.js'
import { default as renderUploadDrag } from './Drag/index.js'
import { default as renderUploadFileList } from './FileList/index.js'
import { default as renderUploadPicturecard } from './Picturecard/index.js'
import { default as renderUploadPicturestyle } from './Picturestyle/index.js'
import { default as renderUploadUploadmanually } from './Uploadmanually/index.js'

const Panel = Collapse.Panel

class UploadItems extends React.Component {
  componentDidMount() {
    renderUploadAvatar(ReactDOM, document.getElementById('UploadAvatar'))
    renderUploadBasic(ReactDOM, document.getElementById('UploadBasic'))
    renderUploadDefaultFileList(ReactDOM, document.getElementById('UploadDefaultFileList'))
    renderUploadDrag(ReactDOM, document.getElementById('UploadDrag'))
    renderUploadFileList(ReactDOM, document.getElementById('UploadFileList'))
    renderUploadPicturecard(ReactDOM, document.getElementById('UploadPicturecard'))
    renderUploadPicturestyle(ReactDOM, document.getElementById('UploadPicturestyle'))
    renderUploadUploadmanually(ReactDOM, document.getElementById('UploadUploadmanually'))
  }

  render() {
    return (
      <div className="UploadDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Upload</strong>
                  <a
                    href="https://ant.design/components/upload/"
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
                    <div className="card card--example" id="components-upload-demo-avatar">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Avatar</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Click to upload user's avatar, and validate size and format of picture with{' '}
                        <code>{'beforeUpload'}</code>. > The return value of function{' '}
                        <code>{'beforeUpload'}</code> can be a Promise to check asynchronously.
                        [demo](http://react-component.github.io/upload/examples/beforeUpload.html)
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadAvatar" />
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
                              {`import \{ Upload, Icon, message \} from 'antd';

function getBase64(img, callback) \{
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
\}

function beforeUpload(file) \{
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) \{
    message.error('You can only upload JPG file!');
  \}
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) \{
    message.error('Image must smaller than 2MB!');
  \}
  return isJPG && isLt2M;
\}

class Avatar extends React.Component \{
  state = \{
    loading\: false,
  \};
  handleChange = (info) => \{
    if (info.file.status === 'uploading') \{
      this.setState(\{ loading\: true \});
      return;
    \}
    if (info.file.status === 'done') \{
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState(\{
        imageUrl,
        loading\: false,
      \}));
    \}
  \}
  render() \{
    const uploadButton = (
      <div>
        <Icon type=\{this.state.loading ? 'loading' \: 'plus'\} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList=\{false\}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload=\{beforeUpload\}
        onChange=\{this.handleChange\}
      >
        \{imageUrl ? <img src=\{imageUrl\} alt="" /> \: uploadButton\}
      </Upload>
    );
  \}
\}

ReactDOM.render(<Avatar />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-upload-demo-defaultFileList">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Default Files</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Use <code>{'defaultFileList'}</code> for uploaded files when page init.
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadDefaultFileList" />
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
                              {`import \{ Upload, Button, Icon \} from 'antd';

const props = \{
  action\: '//jsonplaceholder.typicode.com/posts/',
  onChange(\{ file, fileList \}) \{
    if (file.status !== 'uploading') \{
      console.log(file, fileList);
    \}
  \},
  defaultFileList\: [\{
    uid\: 1,
    name\: 'xxx.png',
    status\: 'done',
    reponse\: 'Server Error 500', // custom error message to show
    url\: 'http\://www.baidu.com/xxx.png',
  \}, \{
    uid\: 2,
    name\: 'yyy.png',
    status\: 'done',
    url\: 'http\://www.baidu.com/yyy.png',
  \}, \{
    uid\: 3,
    name\: 'zzz.png',
    status\: 'error',
    reponse\: 'Server Error 500', // custom error message to show
    url\: 'http\://www.baidu.com/zzz.png',
  \}],
\};

ReactDOM.render(
  <Upload \{...props\}>
    <Button>
      <Icon type="upload" /> Upload
    </Button>
  </Upload>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-upload-demo-fileList">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">
                            Complete control over file list
                          </strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can gain full control over filelist by configuring{' '}
                        <code>{'fileList'}</code>. You can accomplish all kinds of customed
                        functions. The following shows three circumstances: 1) limit the number of
                        uploaded files. 2) read from response and show file link. 3) filter
                        successfully uploaded files according to response from server.
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadFileList" />
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
                              {`import \{ Upload, Button, Icon \} from 'antd';

class MyUpload extends React.Component \{
  state = \{
    fileList\: [\{
      uid\: -1,
      name\: 'xxx.png',
      status\: 'done',
      url\: 'http\://www.baidu.com/xxx.png',
    \}],
  \}
  handleChange = (info) => \{
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. read from response and show file link
    fileList = fileList.map((file) => \{
      if (file.response) \{
        // Component will show file.url as link
        file.url = file.response.url;
      \}
      return file;
    \});

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => \{
      if (file.response) \{
        return file.response.status === 'success';
      \}
      return true;
    \});

    this.setState(\{ fileList \});
  \}
  render() \{
    const props = \{
      action\: '//jsonplaceholder.typicode.com/posts/',
      onChange\: this.handleChange,
      multiple\: true,
    \};
    return (
      <Upload \{...props\} fileList=\{this.state.fileList\}>
        <Button>
          <Icon type="upload" /> upload
        </Button>
      </Upload>
    );
  \}
\}

ReactDOM.render(<MyUpload />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-upload-demo-picture-style">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Pictures with list style</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        If uploaded file is a picture, the thumbnail can be shown.{' '}
                        <code>{'IE8/9'}</code> do not support local thumbnail show. Please use{' '}
                        <code>{'thumbUrl'}</code> instead.
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadPicturestyle" />
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
                              {`import \{ Upload, Button, Icon \} from 'antd';

const fileList = [\{
  uid\: -1,
  name\: 'xxx.png',
  status\: 'done',
  url\: 'https\://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl\: 'https\://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
\}, \{
  uid\: -2,
  name\: 'yyy.png',
  status\: 'done',
  url\: 'https\://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl\: 'https\://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
\}];

const props = \{
  action\: '//jsonplaceholder.typicode.com/posts/',
  listType\: 'picture',
  defaultFileList\: [...fileList],
\};

const props2 = \{
  action\: '//jsonplaceholder.typicode.com/posts/',
  listType\: 'picture',
  defaultFileList\: [...fileList],
  className\: 'upload-list-inline',
\};

ReactDOM.render(
  <div>
    <Upload \{...props\}>
      <Button>
        <Icon type="upload" /> upload
      </Button>
    </Upload>
    <br />
    <br />
    <Upload \{...props2\}>
      <Button>
        <Icon type="upload" /> upload
      </Button>
    </Upload>
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
                    <div className="card card--example" id="components-upload-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Upload by clicking</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Classic mode. File selection dialog pops up when upload button is clicked.
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadBasic" />
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
                              {`import \{ Upload, message, Button, Icon \} from 'antd';

const props = \{
  name\: 'file',
  action\: '//jsonplaceholder.typicode.com/posts/',
  headers\: \{
    authorization\: 'authorization-text',
  \},
  onChange(info) \{
    if (info.file.status !== 'uploading') \{
      console.log(info.file, info.fileList);
    \}
    if (info.file.status === 'done') \{
      message.success(\`\$\{info.file.name\} file uploaded successfully\`);
    \} else if (info.file.status === 'error') \{
      message.error(\`\$\{info.file.name\} file upload failed.\`);
    \}
  \},
\};

ReactDOM.render(
  <Upload \{...props\}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-upload-demo-drag">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Drag and Drop</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        You can drag files to a specific area, to upload. Alternatively, you can
                        also upload by selecting. We can upload serveral files at once in modern
                        browsers by giving the input the <code>{'multiple'}</code> attribute.
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadDrag" />
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
                              {`import \{ Upload, Icon, message \} from 'antd';
const Dragger = Upload.Dragger;

const props = \{
  name\: 'file',
  multiple\: true,
  action\: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) \{
    const status = info.file.status;
    if (status !== 'uploading') \{
      console.log(info.file, info.fileList);
    \}
    if (status === 'done') \{
      message.success(\`\$\{info.file.name\} file uploaded successfully.\`);
    \} else if (status === 'error') \{
      message.error(\`\$\{info.file.name\} file upload failed.\`);
    \}
  \},
\};

ReactDOM.render(
  <Dragger \{...props\}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </Dragger>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-upload-demo-picture-card">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Pictures Wall</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        After users upload picture, the thumbnail will be shown in list. The upload
                        button will disappear when count meets limitation.
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadPicturecard" />
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
                              {`import \{ Upload, Icon, Modal \} from 'antd';

class PicturesWall extends React.Component \{
  state = \{
    previewVisible\: false,
    previewImage\: '',
    fileList\: [\{
      uid\: -1,
      name\: 'xxx.png',
      status\: 'done',
      url\: 'https\://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    \}],
  \};

  handleCancel = () => this.setState(\{ previewVisible\: false \})

  handlePreview = (file) => \{
    this.setState(\{
      previewImage\: file.url || file.thumbUrl,
      previewVisible\: true,
    \});
  \}

  handleChange = (\{ fileList \}) => this.setState(\{ fileList \})

  render() \{
    const \{ previewVisible, previewImage, fileList \} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList=\{fileList\}
          onPreview=\{this.handlePreview\}
          onChange=\{this.handleChange\}
        >
          \{fileList.length >= 3 ? null \: uploadButton\}
        </Upload>
        <Modal visible=\{previewVisible\} footer=\{null\} onCancel=\{this.handleCancel\}>
          <img alt="example" style=\{\{ width\: '100%' \}\} src=\{previewImage\} />
        </Modal>
      </div>
    );
  \}
\}

ReactDOM.render(<PicturesWall />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-upload-demo-upload-manually">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Upload manually</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Upload files manually after <code>{'beforeUpload'}</code> returns{' '}
                        <code>{'false'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="UploadUploadmanually" />
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
                              {`import \{ Upload, Button, Icon, message \} from 'antd';
import reqwest from 'reqwest';

class Demo extends React.Component \{
  state = \{
    fileList\: [],
    uploading\: false,
  \}

  handleUpload = () => \{
    const \{ fileList \} = this.state;
    const formData = new FormData();
    fileList.forEach((file) => \{
      formData.append('files[]', file);
    \});

    this.setState(\{
      uploading\: true,
    \});

    // You can use any AJAX library you like
    reqwest(\{
      url\: '//jsonplaceholder.typicode.com/posts/',
      method\: 'post',
      processData\: false,
      data\: formData,
      success\: () => \{
        this.setState(\{
          fileList\: [],
          uploading\: false,
        \});
        message.success('upload successfully.');
      \},
      error\: () => \{
        this.setState(\{
          uploading\: false,
        \});
        message.error('upload failed.');
      \},
    \});
  \}

  render() \{
    const \{ uploading \} = this.state;
    const props = \{
      action\: '//jsonplaceholder.typicode.com/posts/',
      onRemove\: (file) => \{
        this.setState((\{ fileList \}) => \{
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return \{
            fileList\: newFileList,
          \};
        \});
      \},
      beforeUpload\: (file) => \{
        this.setState((\{ fileList \}) => (\{
          fileList\: [...fileList, file],
        \}));
        return false;
      \},
      fileList\: this.state.fileList,
    \};

    return (
      <div>
        <Upload \{...props\}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button
          className="upload-demo-start"
          type="primary"
          onClick=\{this.handleUpload\}
          disabled=\{this.state.fileList.length === 0\}
          loading=\{uploading\}
        >
          \{uploading ? 'Uploading' \: 'Start Upload' \}
        </Button>
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

export default UploadItems

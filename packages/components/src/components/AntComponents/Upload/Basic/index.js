import React from 'react'
import './style.scss'
import { Upload, message, Button, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  ReactDOM.render(
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>,
    mountNode,
  )
}

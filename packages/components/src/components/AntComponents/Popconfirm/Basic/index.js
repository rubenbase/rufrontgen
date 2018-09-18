import React from 'react'
import './style.scss'
import { Popconfirm, message } from 'antd'

export default function(ReactDOM, mountNode) {
  function confirm(e) {
    console.log(e)
    message.success('Click on Yes')
  }

  function cancel(e) {
    console.log(e)
    message.error('Click on No')
  }

  ReactDOM.render(
    <Popconfirm
      title="Are you sure delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <a href="javascript: void(0);">Delete</a>
    </Popconfirm>,
    mountNode,
  )
}

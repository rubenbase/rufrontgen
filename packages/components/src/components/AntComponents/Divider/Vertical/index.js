import React from 'react'
import './style.scss'
import { Divider } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      Text
      <Divider type="vertical" />
      <a href="javascript: void(0);">Link</a>
      <Divider type="vertical" />
      <a href="javascript: void(0);">Link</a>
    </div>,
    mountNode,
  )
}

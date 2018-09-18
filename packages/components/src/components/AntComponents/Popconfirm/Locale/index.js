import React from 'react'
import './style.scss'
import { Popconfirm } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
      <a href="javascript: void(0);">Delete</a>
    </Popconfirm>,
    mountNode,
  )
}

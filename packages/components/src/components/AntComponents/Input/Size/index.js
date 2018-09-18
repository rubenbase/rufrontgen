import React from 'react'
import './style.scss'
import { Input } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div className="example-input">
      <Input size="large" placeholder="large size" />
      <Input placeholder="default size" />
      <Input size="small" placeholder="small size" />
    </div>,
    mountNode,
  )
}

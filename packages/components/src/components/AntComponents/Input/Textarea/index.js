import React from 'react'
import './style.scss'
import { Input } from 'antd'

export default function(ReactDOM, mountNode) {
  const { TextArea } = Input

  ReactDOM.render(<TextArea rows={4} />, mountNode)
}

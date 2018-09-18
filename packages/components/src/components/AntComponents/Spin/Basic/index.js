import React from 'react'
import './style.scss'
import { Spin } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Spin />, mountNode)
}

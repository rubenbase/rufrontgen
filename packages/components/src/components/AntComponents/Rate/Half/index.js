import React from 'react'
import './style.scss'
import { Rate } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Rate allowHalf defaultValue={2.5} />, mountNode)
}

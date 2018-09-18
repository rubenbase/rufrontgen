import React from 'react'
import './style.scss'
import { InputNumber } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(value) {
    console.log('changed', value)
  }

  ReactDOM.render(<InputNumber min={0} max={10} step={0.1} onChange={onChange} />, mountNode)
}

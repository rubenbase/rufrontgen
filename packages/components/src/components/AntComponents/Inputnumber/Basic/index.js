import React from 'react'
import './style.scss'
import { InputNumber } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(value) {
    console.log('changed', value)
  }

  ReactDOM.render(<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />, mountNode)
}

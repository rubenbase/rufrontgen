import React from 'react'
import './style.scss'
import { InputNumber } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(value) {
    console.log('changed', value)
  }

  ReactDOM.render(
    <div>
      <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
    </div>,
    mountNode,
  )
}

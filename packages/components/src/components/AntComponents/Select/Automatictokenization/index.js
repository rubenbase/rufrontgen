import React from 'react'
import './style.scss'
import { Select } from 'antd'

export default function(ReactDOM, mountNode) {
  const Option = Select.Option

  const children = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  ReactDOM.render(
    <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
      {children}
    </Select>,
    mountNode,
  )
}

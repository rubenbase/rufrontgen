import React from 'react'
import './style.scss'
import { Select } from 'antd'

export default function(ReactDOM, mountNode) {
  const { Option, OptGroup } = Select

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  ReactDOM.render(
    <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
      <OptGroup label="Manager">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </OptGroup>
      <OptGroup label="Engineer">
        <Option value="Yiminghe">yiminghe</Option>
      </OptGroup>
    </Select>,
    mountNode,
  )
}

import React from 'react'
import './style.scss'
import { InputNumber } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(value) {
    console.log('changed', value)
  }

  ReactDOM.render(
    <div>
      <InputNumber
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
      <InputNumber
        defaultValue={100}
        min={0}
        max={100}
        formatter={value => `${value}%`}
        parser={value => value.replace('%', '')}
        onChange={onChange}
      />
    </div>,
    mountNode,
  )
}

import React from 'react'
import './style.scss'
import { Slider } from 'antd'

export default function(ReactDOM, mountNode) {
  function formatter(value) {
    return `${value}%`
  }

  ReactDOM.render(
    <div>
      <Slider tipFormatter={formatter} />
      <Slider tipFormatter={null} />
    </div>,
    mountNode,
  )
}

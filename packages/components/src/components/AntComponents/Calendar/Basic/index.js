import React from 'react'
import './style.scss'
import { Calendar } from 'antd'

export default function(ReactDOM, mountNode) {
  function onPanelChange(value, mode) {
    console.log(value, mode)
  }

  ReactDOM.render(<Calendar onPanelChange={onPanelChange} />, mountNode)
}

import React from 'react'
import './style.scss'
import { Calendar } from 'antd'

export default function(ReactDOM, mountNode) {
  function onPanelChange(value, mode) {
    console.log(value, mode)
  }

  ReactDOM.render(
    <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>,
    mountNode,
  )
}

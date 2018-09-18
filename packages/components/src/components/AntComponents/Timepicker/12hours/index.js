import React from 'react'
import './style.scss'
import { TimePicker } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(time, timeString) {
    console.log(time, timeString)
  }

  ReactDOM.render(
    <div>
      <TimePicker use12Hours onChange={onChange} />
      <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
      <TimePicker use12Hours format="h:mm a" onChange={onChange} />
    </div>,
    mountNode,
  )
}

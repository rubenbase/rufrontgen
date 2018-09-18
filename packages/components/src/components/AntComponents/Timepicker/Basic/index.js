import React from 'react'
import './style.scss'
import { TimePicker } from 'antd'

import moment from 'moment'

export default function(ReactDOM, mountNode) {
  function onChange(time, timeString) {
    console.log(time, timeString)
  }

  ReactDOM.render(
    <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
    mountNode,
  )
}

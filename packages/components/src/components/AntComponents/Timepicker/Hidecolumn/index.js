import React from 'react'
import './style.scss'
import { TimePicker } from 'antd'

import moment from 'moment'

export default function(ReactDOM, mountNode) {
  const format = 'HH:mm'

  ReactDOM.render(<TimePicker defaultValue={moment('12:08', format)} format={format} />, mountNode)
}

import React from 'react'
import './style.scss'
import { TimePicker } from 'antd'

import moment from 'moment'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />, mountNode)
}

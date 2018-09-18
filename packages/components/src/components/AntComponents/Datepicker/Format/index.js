import React from 'react'
import './style.scss'
import { DatePicker } from 'antd'

import moment from 'moment'

export default function(ReactDOM, mountNode) {
  const { MonthPicker, RangePicker } = DatePicker

  const dateFormat = 'YYYY/MM/DD'
  const monthFormat = 'YYYY/MM'
  ReactDOM.render(
    <div>
      <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
      <br />
      <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
      <br />
      <RangePicker
        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
        format={dateFormat}
      />
    </div>,
    mountNode,
  )
}

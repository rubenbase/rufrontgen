import React from 'react'
import './style.scss'
import { DatePicker } from 'antd'

export default function(ReactDOM, mountNode) {
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker

  function onChange(date, dateString) {
    console.log(date, dateString)
  }

  ReactDOM.render(
    <div>
      <DatePicker onChange={onChange} />
      <br />
      <MonthPicker onChange={onChange} placeholder="Select month" />
      <br />
      <RangePicker onChange={onChange} />
      <br />
      <WeekPicker onChange={onChange} placeholder="Select week" />
    </div>,
    mountNode,
  )
}

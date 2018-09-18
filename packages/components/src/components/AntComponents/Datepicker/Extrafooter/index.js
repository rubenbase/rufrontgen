import React from 'react'
import './style.scss'
import { DatePicker } from 'antd'

export default function(ReactDOM, mountNode) {
  const { RangePicker, MonthPicker } = DatePicker

  ReactDOM.render(
    <div>
      <DatePicker renderExtraFooter={() => 'extra footer'} />
      <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
      <RangePicker renderExtraFooter={() => 'extra footer'} />
      <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
      <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
    </div>,
    mountNode,
  )
}

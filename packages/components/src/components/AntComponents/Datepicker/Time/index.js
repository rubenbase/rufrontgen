import React from 'react'
import './style.scss'
import { DatePicker } from 'antd'

export default function(ReactDOM, mountNode) {
  const { RangePicker } = DatePicker

  function onChange(value, dateString) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  function onOk(value) {
    console.log('onOk: ', value)
  }

  ReactDOM.render(
    <div>
      <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="Select Time"
        onChange={onChange}
        onOk={onOk}
      />
      <br />
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        placeholder={['Start Time', 'End Time']}
        onChange={onChange}
        onOk={onOk}
      />
    </div>,
    mountNode,
  )
}

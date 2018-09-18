import React from 'react'
import './style.scss'
import { DatePicker } from 'antd'

export default function(ReactDOM, mountNode) {
  const { RangePicker } = DatePicker

  ReactDOM.render(
    <div>
      <DatePicker
        dateRender={current => {
          const style = {}
          if (current.date() === 1) {
            style.border = '1px solid #1890ff'
            style.borderRadius = '50%'
          }
          return (
            <div className="ant-calendar-date" style={style}>
              {current.date()}
            </div>
          )
        }}
      />
      <RangePicker
        dateRender={current => {
          const style = {}
          if (current.date() === 1) {
            style.border = '1px solid #1890ff'
            style.borderRadius = '50%'
          }
          return (
            <div className="ant-calendar-date" style={style}>
              {current.date()}
            </div>
          )
        }}
      />
    </div>,
    mountNode,
  )
}

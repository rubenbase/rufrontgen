import React from 'react'
import './style.scss'
import { Switch } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(checked) {
    console.log(`switch to ${checked}`)
  }

  ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode)
}

import React from 'react'
import './style.scss'
import { Checkbox } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }

  ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode)
}

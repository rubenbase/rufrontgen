import React from 'react'
import './style.scss'
import { message, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  const success = () => {
    const hide = message.loading('Action in progress..', 0)
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500)
  }

  ReactDOM.render(<Button onClick={success}>Display a loading indicator</Button>, mountNode)
}

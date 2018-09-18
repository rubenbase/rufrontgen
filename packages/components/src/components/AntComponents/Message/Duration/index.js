import React from 'react'
import './style.scss'
import { message, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  const success = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10)
  }

  ReactDOM.render(<Button onClick={success}>Customized display duration</Button>, mountNode)
}

import React from 'react'
import './style.scss'
import { Modal, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  function success() {
    const modal = Modal.success({
      title: 'This is a notification message',
      content: 'This modal will be destroyed after 1 second',
    })
    setTimeout(() => modal.destroy(), 1000)
  }

  ReactDOM.render(<Button onClick={success}>Success</Button>, mountNode)
}

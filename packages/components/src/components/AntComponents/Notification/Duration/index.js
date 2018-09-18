import React from 'react'
import './style.scss'
import { Button, notification } from 'antd'

export default function(ReactDOM, mountNode) {
  const openNotification = () => {
    const args = {
      message: 'Notification Title',
      description:
        'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    }
    notification.open(args)
  }

  ReactDOM.render(
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>,
    mountNode,
  )
}

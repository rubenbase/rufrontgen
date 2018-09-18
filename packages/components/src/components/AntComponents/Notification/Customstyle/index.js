import React from 'react'
import './style.scss'
import { Button, notification } from 'antd'

export default function(ReactDOM, mountNode) {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    })
  }

  ReactDOM.render(
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>,
    mountNode,
  )
}

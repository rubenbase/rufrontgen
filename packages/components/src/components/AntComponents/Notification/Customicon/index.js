import React from 'react'
import './style.scss'
import { Button, notification, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    })
  }

  ReactDOM.render(
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>,
    mountNode,
  )
}

import React from 'react'
import './style.scss'
import { Button, notification } from 'antd'

export default function(ReactDOM, mountNode) {
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
  }

  ReactDOM.render(
    <div>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </div>,
    mountNode,
  )
}

import React from 'react'
import './style.scss'
import { message, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  const info = () => {
    message.info('This is a normal message')
  }

  ReactDOM.render(
    <Button type="primary" onClick={info}>
      Display normal message
    </Button>,
    mountNode,
  )
}

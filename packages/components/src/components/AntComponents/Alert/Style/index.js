import React from 'react'
import './style.scss'
import { Alert } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </div>,
    mountNode,
  )
}

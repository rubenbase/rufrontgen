import React from 'react'
import './style.scss'
import { Alert } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Alert
        message="Success Text"
        description="Success Description Success Description Success Description"
        type="success"
      />
      <Alert
        message="Info Text"
        description="Info Description Info Description Info Description Info Description"
        type="info"
      />
      <Alert
        message="Warning Text"
        description="Warning Description Warning Description Warning Description Warning Description"
        type="warning"
      />
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description"
        type="error"
      />
    </div>,
    mountNode,
  )
}

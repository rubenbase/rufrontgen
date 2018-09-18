import React from 'react'
import './style.scss'
import { Alert } from 'antd'

export default function(ReactDOM, mountNode) {
  const onClose = function(e) {
    console.log(e, 'I was closed.')
  }

  ReactDOM.render(
    <div>
      <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}
      />
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        onClose={onClose}
      />
    </div>,
    mountNode,
  )
}

import React from 'react'
import './style.scss'
import { Spin, Alert } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>,
    mountNode,
  )
}

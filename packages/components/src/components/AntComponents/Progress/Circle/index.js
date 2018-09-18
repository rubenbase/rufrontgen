import React from 'react'
import './style.scss'
import { Progress } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </div>,
    mountNode,
  )
}

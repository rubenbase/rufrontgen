import React from 'react'
import './style.scss'
import { Progress } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>,
    mountNode,
  )
}

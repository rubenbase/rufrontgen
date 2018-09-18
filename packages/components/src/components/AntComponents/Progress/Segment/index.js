import React from 'react'
import './style.scss'
import { Tooltip, Progress } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} successPercent={30} />
    </Tooltip>,
    mountNode,
  )
}

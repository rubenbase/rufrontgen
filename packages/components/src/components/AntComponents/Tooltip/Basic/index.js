import React from 'react'
import './style.scss'
import { Tooltip } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Tooltip title="prompt text">
      <span>Tooltip will show when mouse enter.</span>
    </Tooltip>,
    mountNode,
  )
}

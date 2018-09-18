import React from 'react'
import './style.scss'
import { Badge } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <a href="javascript: void(0);">
      <Badge count={5}>
        <span className="head-example" />
      </Badge>
    </a>,
    mountNode,
  )
}

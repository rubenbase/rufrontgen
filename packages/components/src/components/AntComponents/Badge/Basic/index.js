import React from 'react'
import './style.scss'
import { Badge } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Badge count={5}>
        <a href="javascript: void(0);" className="head-example" />
      </Badge>
      <Badge count={0} showZero>
        <a href="javascript: void(0);" className="head-example" />
      </Badge>
    </div>,
    mountNode,
  )
}

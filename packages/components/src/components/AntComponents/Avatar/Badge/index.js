import React from 'react'
import './style.scss'
import { Avatar, Badge } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <span style={{ marginRight: 24 }}>
        <Badge count={1}>
          <Avatar shape="square" icon="user" />
        </Badge>
      </span>
      <span>
        <Badge dot>
          <Avatar shape="square" icon="user" />
        </Badge>
      </span>
    </div>,
    mountNode,
  )
}

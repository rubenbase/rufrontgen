import React from 'react'
import './style.scss'
import { Badge } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Badge count={99}>
        <a href="javascript: void(0);" className="head-example" />
      </Badge>
      <Badge count={100}>
        <a href="javascript: void(0);" className="head-example" />
      </Badge>
      <Badge count={99} overflowCount={10}>
        <a href="javascript: void(0);" className="head-example" />
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <a href="javascript: void(0);" className="head-example" />
      </Badge>
    </div>,
    mountNode,
  )
}

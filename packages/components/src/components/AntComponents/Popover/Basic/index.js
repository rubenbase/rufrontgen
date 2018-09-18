import React from 'react'
import './style.scss'
import { Popover, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  ReactDOM.render(
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>,
    mountNode,
  )
}

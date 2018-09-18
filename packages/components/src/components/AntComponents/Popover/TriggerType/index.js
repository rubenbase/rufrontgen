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
    <div>
      <Popover content={content} title="Title" trigger="hover">
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="focus">
        <Button>Focus me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="click">
        <Button>Click me</Button>
      </Popover>
    </div>,
    mountNode,
  )
}

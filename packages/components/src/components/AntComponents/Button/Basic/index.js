import React from 'react'
import './style.scss'
import { Button } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>,
    mountNode,
  )
}

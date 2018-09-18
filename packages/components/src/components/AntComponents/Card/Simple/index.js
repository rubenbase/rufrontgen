import React from 'react'
import './style.scss'
import { Card } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Card style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>,
    mountNode,
  )
}

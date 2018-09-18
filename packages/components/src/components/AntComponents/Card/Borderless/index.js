import React from 'react'
import './style.scss'
import { Card } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>,
    mountNode,
  )
}

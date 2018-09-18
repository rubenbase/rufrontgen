import React from 'react'
import './style.scss'
import { Card } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Card title="Card title">
      <p
        style={{
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.85)',
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        Group title
      </p>
      <Card type="inner" title="Inner Card title" extra={<a href="javascript: void(0);">More</a>}>
        Inner Card content
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Inner Card title"
        extra={<a href="javascript: void(0);">More</a>}
      >
        Inner Card content
      </Card>
    </Card>,
    mountNode,
  )
}

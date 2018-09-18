import React from 'react'
import './style.scss'
import { List, Card } from 'antd'

export default function(ReactDOM, mountNode) {
  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ]

  ReactDOM.render(
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />,
    mountNode,
  )
}

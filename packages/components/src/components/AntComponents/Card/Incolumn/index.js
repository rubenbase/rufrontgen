import React from 'react'
import './style.scss'
import { Card, Col, Row } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>,
    mountNode,
  )
}

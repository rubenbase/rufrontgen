import React from 'react'
import './style.scss'
import { Row, Col } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div className="gutter-example">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
    </div>,
    mountNode,
  )
}

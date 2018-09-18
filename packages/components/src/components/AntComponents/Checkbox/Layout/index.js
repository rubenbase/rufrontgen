import React from 'react'
import './style.scss'
import { Checkbox, Row, Col } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues)
  }

  ReactDOM.render(
    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
      <Row>
        <Col span={8}>
          <Checkbox value="A">A</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="B">B</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="C">C</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="D">D</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="E">E</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>,
    mountNode,
  )
}

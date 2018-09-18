import React from 'react'
import './style.scss'
import { Card } from 'antd'

export default function(ReactDOM, mountNode) {
  const { Meta } = Card

  ReactDOM.render(
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>,
    mountNode,
  )
}

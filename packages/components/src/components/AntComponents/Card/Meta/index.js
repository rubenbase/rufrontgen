import React from 'react'
import './style.scss'
import { Card, Icon, Avatar } from 'antd'

export default function(ReactDOM, mountNode) {
  const { Meta } = Card

  ReactDOM.render(
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>,
    mountNode,
  )
}

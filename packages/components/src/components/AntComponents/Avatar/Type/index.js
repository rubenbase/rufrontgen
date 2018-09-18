import React from 'react'
import './style.scss'
import { Avatar } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Avatar icon="user" />
      <Avatar>U</Avatar>
      <Avatar>USER</Avatar>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
    </div>,
    mountNode,
  )
}

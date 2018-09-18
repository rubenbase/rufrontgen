import React from 'react'
import './style.scss'
import { Rate, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Rate character={<Icon type="heart" />} allowHalf />
      <br />
      <Rate character="A" allowHalf style={{ fontSize: 36 }} />
      <br />
      <Rate character="好" allowHalf />
    </div>,
    mountNode,
  )
}

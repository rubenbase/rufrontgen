import React from 'react'
import './style.scss'
import { Spin, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

  ReactDOM.render(<Spin indicator={antIcon} />, mountNode)
}

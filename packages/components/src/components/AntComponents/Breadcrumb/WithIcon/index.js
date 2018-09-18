import React from 'react'
import './style.scss'
import { Breadcrumb, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <Icon type="home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <Icon type="user" />
        <span>Application List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>,
    mountNode,
  )
}

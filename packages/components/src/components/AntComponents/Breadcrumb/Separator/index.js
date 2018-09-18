import React from 'react'
import './style.scss'
import { Breadcrumb } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Breadcrumb separator=">">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
      <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>,
    mountNode,
  )
}

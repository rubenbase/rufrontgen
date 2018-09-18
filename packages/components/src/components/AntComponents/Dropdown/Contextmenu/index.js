import React from 'react'
import './style.scss'
import { Menu, Dropdown } from 'antd'

export default function(ReactDOM, mountNode) {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

  ReactDOM.render(
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <span style={{ userSelect: 'none' }}>Right Click on Me</span>
    </Dropdown>,
    mountNode,
  )
}

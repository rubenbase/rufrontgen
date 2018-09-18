import React from 'react'
import './style.scss'
import { Menu, Dropdown, Icon, message } from 'antd'

export default function(ReactDOM, mountNode) {
  const onClick = function({ key }) {
    message.info(`Click on item ${key}`)
  }

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

  ReactDOM.render(
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="javascript: void(0);">
        Hover me, Click menu item <Icon type="down" />
      </a>
    </Dropdown>,
    mountNode,
  )
}

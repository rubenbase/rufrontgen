import React from 'react'
import './style.scss'
import { Menu, Dropdown, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>
        3rd menu item（disabled）
      </Menu.Item>
    </Menu>
  )

  ReactDOM.render(
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="javascript: void(0);">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>,
    mountNode,
  )
}

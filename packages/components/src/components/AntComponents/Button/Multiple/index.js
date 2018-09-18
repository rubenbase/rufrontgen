import React from 'react'
import './style.scss'
import { Button, Menu, Dropdown, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  function handleMenuClick(e) {
    console.log('click', e)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  )

  ReactDOM.render(
    <div>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown overlay={menu}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    </div>,
    mountNode,
  )
}

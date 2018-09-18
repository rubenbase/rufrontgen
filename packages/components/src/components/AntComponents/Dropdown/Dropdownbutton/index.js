import React from 'react'
import './style.scss'
import { Menu, Dropdown, Button, Icon, message } from 'antd'

export default function(ReactDOM, mountNode) {
  function handleButtonClick(e) {
    message.info('Click on left button.')
    console.log('click left button', e)
  }

  function handleMenuClick(e) {
    message.info('Click on menu item.')
    console.log('click', e)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  )

  ReactDOM.render(
    <div>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        onClick={handleButtonClick}
        overlay={menu}
        disabled
        style={{ marginLeft: 8 }}
      >
        Dropdown
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    </div>,
    mountNode,
  )
}

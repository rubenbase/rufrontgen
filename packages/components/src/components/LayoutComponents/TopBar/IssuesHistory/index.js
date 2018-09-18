import React from 'react'
import { Menu, Dropdown } from 'antd'

class IssuesHistory extends React.Component {
  render() {
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <a href="javascript: void(0);">Current search</a>
        </Menu.Item>
        <Menu.Item>
          <a href="javascript: void(0);">Search for issues</a>
        </Menu.Item>
        <Menu.Divider />
        <span className="topbar__dropdownTitle">
          <strong>Opened</strong>
        </span>
        <Menu.Item>
          <a href="javascript: void(0);">
            <i className="topbar__dropdownMenuIcon icmn-checkmark" /> CLNUI-253 Project implemen...
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="javascript: void(0);">
            <i className="topbar__dropdownMenuIcon icmn-checkmark" /> CLNUI-234 Active history
            iss...
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="javascript: void(0);">
            <i className="topbar__dropdownMenuIcon icmn-clock" /> CLNUI-424 Ionicons intergrat...
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="javascript: void(0);">More...</a>
        </Menu.Item>
        <Menu.Divider />
        <span className="topbar__dropdownTitle">
          <strong>Filters</strong>
        </span>
        <Menu.Item>
          <a href="javascript: void(0);">My open issues</a>
        </Menu.Item>
        <Menu.Item>
          <a href="javascript: void(0);">Reported by me</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="javascript: void(0);">
            <i className="topbar__dropdownMenuIcon icmn-cog" /> Settings
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="topbar__dropdown d-inline-block mr-4">
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
          <a className="ant-dropdown-link" href="/">
            <i className="icmn-folder-open mr-2 topbar__dropdownIcon" />
            <span className="d-none d-xl-inline">
              <strong>Issues History</strong>
            </span>
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default IssuesHistory

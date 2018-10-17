import React from 'react'
import { Menu, Dropdown } from 'antd'

class HomeMenu extends React.Component {
  render() {
    const menu = (
      <Menu selectable={false}>
        <div className="topbar__activity">
          <div className="topbar__activity__item">
            <i className="topbar__activity__icon icmn-star-full" />
            <div className="topbar__activity__inner">
              <div className="topbar__activity__title">
                <span className="pull-right">now</span>
                <a href="javascript: void(0);">
                  Update Status: <span className="badge badge-danger">New</span>
                </a>
              </div>
              <div className="topbar__activity__descr">
                Failed to get available update data. To ensure the proper functioning of your
                application, update now.
              </div>
            </div>
          </div>
          <div className="topbar__activity__item">
            <i className="topbar__activity__icon icmn-stack" />
            <div className="topbar__activity__inner">
              <div className="topbar__activity__title">
                <span className="pull-right">24 min ago</span>
                <a href="javascript: void(0);">
                  Income: <span className="badge badge-default">$299.00</span>
                </a>
              </div>
              <div className="topbar__activity__descr">
                Failed to get available update data. To ensure the proper functioning of your
                application, update now.
              </div>
            </div>
          </div>
          <div className="topbar__activity__item">
            <i className="topbar__activity__icon icmn-list" />
            <div className="topbar__activity__inner">
              <div className="topbar__activity__title">
                <span className="pull-right">30 min ago</span>
                <a href="javascript: void(0);">Inbox Message</a>
              </div>
              <div className="topbar__activity__descr">
                From: <a href="javascript: void(0);">David Bowie</a>
              </div>
            </div>
          </div>
          <div className="topbar__activity__item">
            <i className="topbar__activity__icon icmn-home" />
            <div className="topbar__activity__inner">
              <div className="topbar__activity__title">
                <span className="pull-right">now</span>
                <a href="javascript: void(0);">
                  Update Status: <span className="badge badge-primary">New</span>
                </a>
              </div>
              <div className="topbar__activity__descr">
                Failed to get available update data. To ensure the proper functioning of your
                application, update now.
              </div>
            </div>
          </div>
          <div className="topbar__activity__item">
            <i className="topbar__activity__icon icmn-loop" />
            <div className="topbar__activity__inner">
              <div className="topbar__activity__title">
                <span className="pull-right">24 min ago</span>
                <a href="javascript: void(0);">
                  Income: <span className="badge badge-warning">$299.00</span>
                </a>
              </div>
              <div className="topbar__activity__descr">
                Failed to get available update data. To ensure the proper functioning of your
                application, update now.
              </div>
            </div>
          </div>
          <div className="topbar__activity__item">
            <i className="topbar__activity__icon icmn-cog utils__spin-delayed--pseudo-selector" />
            <div className="topbar__activity__inner">
              <div className="topbar__activity__title">
                <span className="pull-right">30 min ago</span>
                <a href="javascript: void(0);">Inbox Message</a>
              </div>
              <div className="topbar__activity__descr">
                From: <a href="javascript: void(0);">David Bowie</a>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    )
    return (
      <div className="topbar__dropdown d-inline-block mr-4">
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <a className="ant-dropdown-link" href="/">
            <i className="icmn-home topbar__dropdownIcon" />
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default HomeMenu

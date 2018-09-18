import React from 'react'
import { Button } from 'antd'
import ProfileMenu from './ProfileMenu'
import IssuesHistory from './IssuesHistory'
import ProjectManagement from './ProjectManagement'
import BitcoinPrice from './BitcoinPrice'
import HomeMenu from './HomeMenu'
import LiveSearch from './LiveSearch'
import './style.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar__left">
          <IssuesHistory />
          <ProjectManagement />
          <LiveSearch />
        </div>
        <div className="topbar__right">
          <a
            href="https://themeforest.net/item/clean-ui-admin-template-react-redux-ant-design-fully-responsive-freebies/21938700"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 d-none d-sm-inline"
          >
            <Button type="danger">Buy Now 25$</Button>
          </a>
          <BitcoinPrice />
          <HomeMenu />
          <ProfileMenu />
        </div>
      </div>
    )
  }
}

export default TopBar

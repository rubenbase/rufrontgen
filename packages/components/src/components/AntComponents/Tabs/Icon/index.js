import React from 'react'
import './style.scss'
import { Tabs, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  const TabPane = Tabs.TabPane

  ReactDOM.render(
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <Icon type="apple" />Tab 1
          </span>
        }
        key="1"
      >
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="android" />Tab 2
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
    </Tabs>,
    mountNode,
  )
}

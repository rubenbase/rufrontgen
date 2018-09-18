import React from 'react'
import './style.scss'
import { Switch, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <Switch
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="cross" />}
        defaultChecked
      />
    </div>,
    mountNode,
  )
}

import React from 'react'
import './style.scss'
import { Switch } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Switch loading defaultChecked />
      <br />
      <Switch size="small" loading />
    </div>,
    mountNode,
  )
}

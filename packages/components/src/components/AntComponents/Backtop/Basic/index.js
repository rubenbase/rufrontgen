import React from 'react'
import './style.scss'
import { BackTop } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <BackTop />
      Scroll down to see the bottom-right
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
      button.
    </div>,
    mountNode,
  )
}

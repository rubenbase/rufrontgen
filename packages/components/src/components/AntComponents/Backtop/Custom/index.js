import React from 'react'
import './style.scss'
import { BackTop } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <BackTop>
        <div className="ant-back-top-inner">UP</div>
      </BackTop>
      Scroll down to see the bottom-right
      <strong style={{ color: '#1088e9' }}> blue </strong>
      button.
    </div>,
    mountNode,
  )
}

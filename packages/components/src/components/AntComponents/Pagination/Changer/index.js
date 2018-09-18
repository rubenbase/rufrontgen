import React from 'react'
import './style.scss'
import { Pagination } from 'antd'

export default function(ReactDOM, mountNode) {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize)
  }

  ReactDOM.render(
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />,
    mountNode,
  )
}

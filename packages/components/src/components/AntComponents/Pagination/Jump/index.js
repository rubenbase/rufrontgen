import React from 'react'
import './style.scss'
import { Pagination } from 'antd'

export default function(ReactDOM, mountNode) {
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber)
  }

  ReactDOM.render(
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />,
    mountNode,
  )
}

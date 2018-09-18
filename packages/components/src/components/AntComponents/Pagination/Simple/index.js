import React from 'react'
import './style.scss'
import { Pagination } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Pagination simple defaultCurrent={2} total={50} />, mountNode)
}

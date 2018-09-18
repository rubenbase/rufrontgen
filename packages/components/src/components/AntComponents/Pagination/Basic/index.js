import React from 'react'
import './style.scss'
import { Pagination } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Pagination defaultCurrent={1} total={50} />, mountNode)
}

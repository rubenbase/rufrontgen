import React from 'react'
import './style.scss'
import { Pagination } from 'antd'

export default function(ReactDOM, mountNode) {
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>
    } else if (type === 'next') {
      return <a>Next</a>
    }
    return originalElement
  }

  ReactDOM.render(<Pagination total={500} itemRender={itemRender} />, mountNode)
}

import React from 'react'
import './style.scss'
import { Input } from 'antd'

export default function(ReactDOM, mountNode) {
  const { TextArea } = Input

  ReactDOM.render(
    <div>
      <TextArea placeholder="Autosize height based on content lines" autosize />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autosize={{ minRows: 2, maxRows: 6 }}
      />
    </div>,
    mountNode,
  )
}

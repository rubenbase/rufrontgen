import React from 'react'
import './style.scss'
import { Mention } from 'antd'

export default function(ReactDOM, mountNode) {
  const { toString } = Mention

  function onChange(editorState) {
    console.log(toString(editorState))
  }

  ReactDOM.render(
    <Mention
      style={{ width: '100%', height: 100 }}
      onChange={onChange}
      suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
      multiLines
    />,
    mountNode,
  )
}

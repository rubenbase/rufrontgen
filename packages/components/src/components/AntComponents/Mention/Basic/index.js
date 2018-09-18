import React from 'react'
import './style.scss'
import { Mention } from 'antd'

export default function(ReactDOM, mountNode) {
  const { toString, toContentState } = Mention

  function onChange(contentState) {
    console.log(toString(contentState))
  }

  function onSelect(suggestion) {
    console.log('onSelect', suggestion)
  }

  ReactDOM.render(
    <Mention
      style={{ width: '100%' }}
      onChange={onChange}
      defaultValue={toContentState('@afc163')}
      suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
      onSelect={onSelect}
    />,
    mountNode,
  )
}

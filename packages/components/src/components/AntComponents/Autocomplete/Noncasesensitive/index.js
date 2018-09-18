import React from 'react'
import './style.scss'
import { AutoComplete } from 'antd'

export default function(ReactDOM, mountNode) {
  const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street']

  function Complete() {
    return (
      <AutoComplete
        style={{ width: 200 }}
        dataSource={dataSource}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    )
  }

  ReactDOM.render(<Complete />, mountNode)
}

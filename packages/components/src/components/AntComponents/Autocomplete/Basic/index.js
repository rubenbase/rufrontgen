import React from 'react'
import './style.scss'
import { AutoComplete } from 'antd'

export default function(ReactDOM, mountNode) {
  function onSelect(value) {
    console.log('onSelect', value)
  }

  class Complete extends React.Component {
    state = {
      dataSource: [],
    }

    handleSearch = value => {
      this.setState({
        dataSource: !value ? [] : [value, value + value, value + value + value],
      })
    }

    render() {
      const { dataSource } = this.state
      return (
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
        />
      )
    }
  }

  ReactDOM.render(<Complete />, mountNode)
}

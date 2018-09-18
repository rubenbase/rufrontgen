import React from 'react'
import './style.scss'
import { Tag } from 'antd'

export default function(ReactDOM, mountNode) {
  const { CheckableTag } = Tag

  class MyTag extends React.Component {
    state = { checked: true }
    handleChange = checked => {
      this.setState({ checked })
    }
    render() {
      return (
        <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
      )
    }
  }

  ReactDOM.render(
    <div>
      <MyTag>Tag1</MyTag>
      <MyTag>Tag2</MyTag>
      <MyTag>Tag3</MyTag>
    </div>,
    mountNode,
  )
}

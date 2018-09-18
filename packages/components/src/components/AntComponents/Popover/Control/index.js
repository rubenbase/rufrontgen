import React from 'react'
import './style.scss'
import { Popover, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  class App extends React.Component {
    state = {
      visible: false,
    }
    hide = () => {
      this.setState({
        visible: false,
      })
    }
    handleVisibleChange = visible => {
      this.setState({ visible })
    }
    render() {
      return (
        <Popover
          content={<a onClick={this.hide}>Close</a>}
          title="Title"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="primary">Click me</Button>
        </Popover>
      )
    }
  }

  ReactDOM.render(<App />, mountNode)
}

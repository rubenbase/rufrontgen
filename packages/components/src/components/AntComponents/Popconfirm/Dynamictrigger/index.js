import React from 'react'
import './style.scss'
import { Popconfirm, Switch, message } from 'antd'

export default function(ReactDOM, mountNode) {
  class App extends React.Component {
    state = {
      visible: false,
      condition: true, // Whether meet the condition, if not show popconfirm.
    }
    changeCondition = value => {
      this.setState({ condition: value })
    }
    confirm = () => {
      this.setState({ visible: false })
      message.success('Next step.')
    }
    cancel = () => {
      this.setState({ visible: false })
      message.error('Click on cancel.')
    }
    handleVisibleChange = visible => {
      if (!visible) {
        this.setState({ visible })
        return
      }
      // Determining condition before show the popconfirm.
      console.log(this.state.condition)
      if (this.state.condition) {
        this.confirm() // next step
      } else {
        this.setState({ visible }) // show the popconfirm
      }
    }
    render() {
      return (
        <div>
          <Popconfirm
            title="Are you sure delete this task?"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="javascript: void(0);">Delete a task</a>
          </Popconfirm>
          <br />
          <br />
          Whether directly execute：<Switch defaultChecked onChange={this.changeCondition} />
        </div>
      )
    }
  }

  ReactDOM.render(<App />, mountNode)
}

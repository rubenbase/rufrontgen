import React from 'react'
import './style.scss'
import { TimePicker } from 'antd'

export default function(ReactDOM, mountNode) {
  class Demo extends React.Component {
    state = {
      value: null,
    }

    onChange = time => {
      console.log(time)
      this.setState({ value: time })
    }

    render() {
      return <TimePicker value={this.state.value} onChange={this.onChange} />
    }
  }

  ReactDOM.render(<Demo />, mountNode)
}

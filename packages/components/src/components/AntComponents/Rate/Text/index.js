import React from 'react'
import './style.scss'
import { Rate } from 'antd'

export default function(ReactDOM, mountNode) {
  class Rater extends React.Component {
    state = {
      value: 3,
    }
    handleChange = value => {
      this.setState({ value })
    }
    render() {
      const { value } = this.state
      return (
        <span>
          <Rate onChange={this.handleChange} value={value} />
          {value && <span className="ant-rate-text">{value} stars</span>}
        </span>
      )
    }
  }

  ReactDOM.render(<Rater />, mountNode)
}

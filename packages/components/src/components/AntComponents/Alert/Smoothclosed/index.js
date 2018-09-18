import React from 'react'
import './style.scss'
import { Alert } from 'antd'

export default function(ReactDOM, mountNode) {
  class App extends React.Component {
    state = {
      visiable: true,
    }
    handleClose = () => {
      this.setState({ visiable: false })
    }
    render() {
      return (
        <div>
          {this.state.visiable ? (
            <Alert
              message="Alert Message Text"
              type="success"
              closable
              afterClose={this.handleClose}
            />
          ) : null}
          <p>placeholder text here</p>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, mountNode)
}

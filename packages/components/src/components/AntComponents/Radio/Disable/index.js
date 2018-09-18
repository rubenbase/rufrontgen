import React from 'react'
import './style.scss'
import { Radio, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  class App extends React.Component {
    state = {
      disabled: true,
    }
    toggleDisabled = () => {
      this.setState({
        disabled: !this.state.disabled,
      })
    }
    render() {
      return (
        <div>
          <Radio defaultChecked={false} disabled={this.state.disabled}>
            Disabled
          </Radio>
          <br />
          <Radio defaultChecked disabled={this.state.disabled}>
            Disabled
          </Radio>
          <div style={{ marginTop: 20 }}>
            <Button type="primary" onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, mountNode)
}

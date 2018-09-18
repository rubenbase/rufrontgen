import React from 'react'
import './style.scss'
import { Affix, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  class Demo extends React.Component {
    render() {
      return (
        <div
          className="scrollable-container"
          ref={node => {
            this.container = node
          }}
        >
          <div className="background">
            <Affix target={() => this.container}>
              <Button type="primary">Fixed at the top of container</Button>
            </Affix>
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(<Demo />, mountNode)
}

import React from 'react'
import './style.scss'
import { Steps, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  const Step = Steps.Step

  ReactDOM.render(
    <Steps>
      <Step status="finish" title="Login" icon={<Icon type="user" />} />
      <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
      <Step status="process" title="Pay" icon={<Icon type="loading" />} />
      <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>,
    mountNode,
  )
}

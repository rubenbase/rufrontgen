import React from 'react'
import './style.scss'
import { Steps } from 'antd'

export default function(ReactDOM, mountNode) {
  const Step = Steps.Step

  ReactDOM.render(
    <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>,
    mountNode,
  )
}

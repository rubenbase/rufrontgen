import React from 'react'
import './style.scss'
import { Steps } from 'antd'

export default function(ReactDOM, mountNode) {
  const Step = Steps.Step

  ReactDOM.render(
    <Steps direction="vertical" current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>,
    mountNode,
  )
}

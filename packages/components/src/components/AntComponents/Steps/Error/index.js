import React from 'react'
import './style.scss'
import { Steps } from 'antd'

export default function(ReactDOM, mountNode) {
  const Step = Steps.Step

  ReactDOM.render(
    <Steps current={1} status="error">
      <Step title="Finished" description="This is a description" />
      <Step title="In Process" description="This is a description" />
      <Step title="Waiting" description="This is a description" />
    </Steps>,
    mountNode,
  )
}

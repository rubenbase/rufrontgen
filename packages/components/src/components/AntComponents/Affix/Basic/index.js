import React from 'react'
import './style.scss'
import { Affix, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Affix>
        <Button type="primary">Affix top</Button>
      </Affix>
      <br />
      <Affix offsetBottom={0}>
        <Button type="primary">Affix bottom</Button>
      </Affix>
    </div>,
    mountNode,
  )
}

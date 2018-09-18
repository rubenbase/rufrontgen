import React from 'react'
import './style.scss'
import { Affix, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
      <Button>120px to affix top</Button>
    </Affix>,
    mountNode,
  )
}

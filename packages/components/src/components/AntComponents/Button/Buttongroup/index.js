import React from 'react'
import './style.scss'
import { Button, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  const ButtonGroup = Button.Group

  ReactDOM.render(
    <div>
      <h4>Basic</h4>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>OK</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>L</Button>
        <Button disabled>M</Button>
        <Button disabled>R</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>L</Button>
        <Button>M</Button>
        <Button>R</Button>
      </ButtonGroup>

      <h4>With Icon</h4>
      <ButtonGroup>
        <Button type="primary">
          <Icon type="left" />Go back
        </Button>
        <Button type="primary">
          Go forward<Icon type="right" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="cloud" />
        <Button type="primary" icon="cloud-download" />
      </ButtonGroup>
    </div>,
    mountNode,
  )
}

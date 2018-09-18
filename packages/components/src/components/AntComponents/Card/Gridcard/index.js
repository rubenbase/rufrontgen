import React from 'react'
import './style.scss'
import { Card } from 'antd'

export default function(ReactDOM, mountNode) {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  }

  ReactDOM.render(
    <Card title="Card Title">
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>,
    mountNode,
  )
}

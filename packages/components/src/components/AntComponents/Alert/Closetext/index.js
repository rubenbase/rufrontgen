import React from 'react'
import './style.scss'
import { Alert } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Alert message="Info Text" type="info" closeText="Close Now" />, mountNode)
}

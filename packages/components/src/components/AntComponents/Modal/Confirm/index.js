import React from 'react'
import './style.scss'
import { Modal, Button } from 'antd'

export default function(ReactDOM, mountNode) {
  const confirm = Modal.confirm

  function showConfirm() {
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  ReactDOM.render(
    <div>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showDeleteConfirm} type="dashed">
        Delete
      </Button>
    </div>,
    mountNode,
  )
}

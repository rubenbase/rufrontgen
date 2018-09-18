import React from 'react'
import { connect } from 'react-redux'
import { setActiveDialog, deleteDialogForm } from 'ducks/app'
import { Modal } from 'antd'

const mapStateToProps = (state, props) => ({
  isOpen: state.app.activeDialog === props.id,
  isDialogForm: state.app.dialogForms[props.id],
})

let nextDialog = ''

const mapDispatchToProps = (dispatch, props) => ({
  show: dialog => event => {
    event && event.preventDefault()
    nextDialog = dialog
    dispatch(setActiveDialog(''))
  },
  close: event => {
    event && event.preventDefault()
    dispatch(setActiveDialog(''))
  },
  afterClose: () => {
    if (nextDialog) {
      dispatch(setActiveDialog(nextDialog))
      nextDialog = ''
    }
    dispatch(deleteDialogForm(props.id))
    if (props.onAfterClose) {
      props.onAfterClose()
    }
  },
})

@connect(mapStateToProps, mapDispatchToProps)
class Dialog extends React.Component {
  props: {
    // own props
    id?: string,
    onAfterClose?: Function,
    title?: string,
    dialogForm: any,
    // from connect
    isOpen?: boolean,
    isDialogForm?: boolean,
    show?: Function,
    close?: Function,
    afterClose?: Function,
  }

  render() {
    const {
      // own props
      title,
      dialogForm: DialogForm,
      // from connect
      isOpen,
      isDialogForm,
      show,
      close,
      afterClose,
    } = this.props
    return (
      <Modal
        key={isDialogForm}
        title={title}
        wrapClassName="ant-modal-centered"
        visible={isOpen}
        onCancel={close}
        footer={null}
        afterClose={afterClose}
        width={null}
      >
        {isDialogForm && <DialogForm {...{ show, close }} />}
      </Modal>
    )
  }
}

export default Dialog

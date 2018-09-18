import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import qs from 'querystring'
import { setLayoutState } from 'ducks/app'
import { merge } from 'lodash'
import classNames from 'classnames'

const mapStateToProps = (state, props) => ({
  layoutState: state.app.layoutState,
})

@connect(mapStateToProps)
@withRouter
class LayoutState extends React.PureComponent {
  bootstrapLayoutSettings() {
    const { dispatch } = this.props
    const urlParams = qs.parse(this.props.location.search.replace('?', ''))
    const storageParams = JSON.parse(window.localStorage.getItem('app.layoutState'))
    if (storageParams) {
      delete storageParams.settingsOpened
    }
    const mergedParams = merge({}, storageParams, urlParams)
    const booleanMergedParams = JSON.parse(
      JSON.stringify(mergedParams),
      (key, value) => (value === 'true' ? true : value === 'false' ? false : value),
    )
    dispatch(setLayoutState({ ...booleanMergedParams }))
  }

  componentWillReceiveProps(newProps) {
    this.updateBodyClass(newProps.layoutState)
  }

  componentWillMount() {
    this.bootstrapLayoutSettings()
  }

  updateBodyClass(layoutState) {
    document.body.className = classNames(layoutState)
  }

  render() {
    return null
  }
}

export default LayoutState

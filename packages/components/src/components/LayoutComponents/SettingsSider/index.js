import React from 'react'
import { connect } from 'react-redux'
import { setLayoutState } from 'ducks/app'
import { Scrollbars } from 'react-custom-scrollbars'
import { Switch } from 'antd'
import './style.scss'

const mapStateToProps = (state, props) => ({
  layoutState: state.app.layoutState,
})

@connect(mapStateToProps)
class SettingsSider extends React.Component {
  state = {
    layoutState: this.props.layoutState,
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      layoutState: newProps.layoutState,
    })
  }

  closeSettings = () => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ settingsOpened: false }))
  }

  setMenuCollapsed = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ menuCollapsed: state }))
  }

  setMenuShadow = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ menuShadow: state }))
  }

  setThemeLight = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ themeLight: state }))
  }

  setSquaredBorders = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ squaredBorders: state }))
  }

  setFixedWidth = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ fixedWidth: state }))
  }

  setBorderLess = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ borderLess: state }))
  }

  setIsMenuTop = state => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ isMenuTop: state }))
  }

  render() {
    const { layoutState } = this.state
    return (
      <div
        className={'settingsSider ' + (layoutState.settingsOpened ? 'settingsSider--opened' : '')}
      >
        <Scrollbars style={{ height: '100vh' }}>
          <div className="settingsSider__container">
            <div className="settingsSider__title">
              Theme Settings
              <span className="fa fa-times" onClick={this.closeSettings} />
            </div>
            <div className="settingsSider__description">
              This component "SettingsSider" gives possibility to construct custom blocks with any
              widgets, components and elements inside, like this theme settings
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.isMenuTop} onChange={this.setIsMenuTop} />
              <span className="settingsSider__itemLabel">Menu Top (Horizontal)</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.menuCollapsed} onChange={this.setMenuCollapsed} />
              <span className="settingsSider__itemLabel">Collapsed Menu</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.menuShadow} onChange={this.setMenuShadow} />
              <span className="settingsSider__itemLabel">Menu Shadow</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.themeLight} onChange={this.setThemeLight} />
              <span className="settingsSider__itemLabel">Light Theme</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.borderLess} onChange={this.setBorderLess} />
              <span className="settingsSider__itemLabel">Borderless Cards</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.squaredBorders} onChange={this.setSquaredBorders} />
              <span className="settingsSider__itemLabel">Squared Borders</span>
            </div>
            <div className="settingsSider__item">
              <Switch checked={layoutState.fixedWidth} onChange={this.setFixedWidth} />
              <span className="settingsSider__itemLabel">Fixed Width</span>
            </div>
          </div>
        </Scrollbars>
      </div>
    )
  }
}

export default SettingsSider

import React from 'react'
import './style.scss'

class Avatar extends React.Component {
  static defaultProps = {
    size: false,
    border: false,
    borderColor: '#d2d9e5',
    src: '',
  }

  render() {
    const { size, borderColor, src, border } = this.props
    return (
      <a
        className={`d-block mx-auto ${size > 0 ? 'avatar avatar--' + size : ''} ${
          border ? ' avatar--border' : ''
        }`}
        href="javascript: void(0);"
        style={{
          borderColor: borderColor,
        }}
      >
        <img src={src} alt="User" />
      </a>
    )
  }
}

export default Avatar

import React from 'react'
import './style.scss'

class Donut extends React.Component {
  static defaultProps = {
    name: 'Donut',
    type: 'default',
    color: undefined,
  }

  render() {
    const { name, color, type } = this.props

    return (
      <span className="mr-2 nowrap">
        <span
          className={color === undefined ? 'donut donut--' + type : 'donut'}
          style={color !== undefined ? { borderColor: color } : {}}
        />
        {name}
      </span>
    )
  }
}

export default Donut

import React from 'react'
import Sparkline from '@rowno/sparkline'
import './style.scss'

class ChartCard extends React.Component {
  static defaultProps = {
    chartProps: {},
    title: '',
    amount: '',
  }

  render() {
    const { chartProps, title, amount } = this.props

    return (
      <div className="card chartCard">
        {chartProps && (
          <div className="chartCard__chart">
            <Sparkline {...chartProps} />
          </div>
        )}
        {amount && <div className="chartCard__amount">{amount}</div>}
        {title && <div className="chartCard__title">{title}</div>}
      </div>
    )
  }
}

export default ChartCard

import React from 'react'
import { Line } from 'peity-react'
import './style.scss'

class BitcoinPrice extends React.Component {
  state = {
    chartsData: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
  }

  render() {
    const { chartsData } = this.state
    return (
      <div className="bitcoinPrice d-inline-block mr-4">
        Bitcoin Price:
        <span style={{ margin: '0 8px', position: 'relative', top: '3px' }}>
          <Line values={chartsData} />
        </span>
        +20%
      </div>
    )
  }
}

export default BitcoinPrice

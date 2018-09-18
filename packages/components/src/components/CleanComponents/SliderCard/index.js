import React from 'react'
import { Carousel } from 'antd'
import './style.scss'

class SliderCard extends React.Component {
  static defaultProps = {
    inverse: false,
  }

  render() {
    const { inverse } = this.props
    return (
      <div className={`sliderCard ${inverse ? 'sliderCard--inverse' : ''}`}>
        <Carousel autoplay>
          <div className="sliderCard__item">
            <a href="javascript: void(0);" className="sliderCard__body">
              <div className="sliderCard__icon">
                <i className="icmn-accessibility" />
              </div>
              <h2>Sales Growth</h2>
              <p>View Report</p>
            </a>
          </div>
          <div className="sliderCard__item">
            <a href="javascript: void(0);" className="sliderCard__body">
              <div className="sliderCard__icon">
                <i className="icmn-download" />
              </div>
              <h2>All Reports</h2>
              <p>Pdf Download</p>
            </a>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default SliderCard

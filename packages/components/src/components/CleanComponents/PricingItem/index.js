import React from 'react'
import item from './data.json'
import './style.scss'

class PricingItem extends React.Component {
  static defaultProps = {
    data: item.item,
    type: '',
    extended: false,
  }

  render() {
    const { data, extended, type } = this.props

    return (
      <div
        className={`pricing-table__item  ${extended > 0 ? ' pricing-table__item--extended' : ''} ${
          type ? ' pricing-table__item--' + type : ''
        }`}
      >
        <div className="pricing-table__header">
          <div className="pricing-table__pricing__price">
            <span className="pricing-table__pricing__currency">{data.currency}</span>
            <span className="pricing-table__pricing__amount">{data.amount}</span>
            <span className="pricing-table__pricing__period">{data.period}</span>
          </div>
          <div className="pricing-table__header__title">{data.title}</div>
        </div>
        <ul className="pricing-table__features">
          {data.features.map((feature, index) => (
            <li key={index}>
              <strong>{feature.main}</strong>
              {' ' + feature.descr}
            </li>
          ))}
        </ul>
        <div className="pricing-table__footer">
          <a href="javascript: void(0);" className="btn" role="button">
            <i className="icmn-download mr-3" aria-hidden="true" />
            {data.btnText}
          </a>
        </div>
      </div>
    )
  }
}

export default PricingItem

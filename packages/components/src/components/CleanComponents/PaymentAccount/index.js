import React from 'react'
import './style.scss'

class PaymentAccount extends React.Component {
  state = {
    icon: '',
    number: '',
    sum: '',
    footer: '',
  }

  getParams = () => {
    let params = this.props
    this.setState({
      ...params,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    const { icon, number, footer, sum } = this.state

    return (
      <a href={'javascript: void(0);'} className="card card--withShadow paymentAccount">
        {icon && (
          <div className="paymentAccount__icon">
            <i className={icon} />
          </div>
        )}
        {number && <span className="paymentAccount__number">{number}</span>}
        {sum && <span className="paymentAccount__sum">{sum}</span>}
        {footer && <div className="paymentAccount__footer">{footer}</div>}
      </a>
    )
  }
}

export default PaymentAccount

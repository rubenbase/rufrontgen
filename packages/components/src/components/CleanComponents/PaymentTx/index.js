import React from 'react'
import './style.scss'

class PaymentTx extends React.Component {
  state = {
    income: false,
    amount: '',
    info: '',
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
    const { income, amount, footer, info } = this.state

    return (
      <a
        href={'javascript: void(0);'}
        className={
          income
            ? 'card card--withShadow paymentTx paymentTx--income'
            : 'card card--withShadow paymentTx'
        }
      >
        <div className="paymentTx__icon">
          <i className={income ? 'lnr lnr-arrow-left' : 'lnr lnr-arrow-right'} />
        </div>
        {amount && (
          <div>
            <span className="paymentTx__amount">{amount}</span>
            {info && <sup className="paymentTx__info">{info}</sup>}
          </div>
        )}
        {footer && <div className="paymentTx__footer">{footer}</div>}
      </a>
    )
  }
}

export default PaymentTx

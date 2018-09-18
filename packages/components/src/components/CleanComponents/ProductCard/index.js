import React from 'react'
import './style.scss'
import data from './data.json'
import { Tooltip } from 'antd'

class ProductCard extends React.Component {
  state = {
    productImg: data.productImg,
    productName: data.productName,
    productPrice: data.productPrice,
    productOldPrice: data.productOldPrice,
    productNote: data.productNote,
    productStatus: data.productStatus,
  }

  render() {
    const {
      productImg,
      productName,
      productPrice,
      productOldPrice,
      productNote,
      productStatus,
    } = this.state
    return (
      <div className="productCard">
        <div className="productCard__img">
          {productStatus === 'new' && (
            <div className="productCard__status">
              <span className="productCard__status__title">New</span>
            </div>
          )}
          <div className="productCard__like">
            <i className="icmn-heart" />
          </div>
          <a href="javascript: void(0);">
            <img src={productImg} alt="" />
          </a>
        </div>
        <div className="productCard__title">
          <a href="javascript: void(0);">{productName}</a>
          <div className="productCard__price">
            {productPrice}
            <div className="productCard__price--old">{productOldPrice}</div>
          </div>
        </div>
        <div className="productCard__descr">
          <div className="productCard__descr__sizes">
            <Tooltip placement="top" title="Size S">
              <span>S</span>
            </Tooltip>
            <Tooltip placement="top" title="Size M">
              <span title="Size M">M</span>
            </Tooltip>
            <Tooltip placement="top" title="Size XL">
              <span>XL</span>
            </Tooltip>
          </div>
          {productNote}
        </div>
      </div>
    )
  }
}

export default ProductCard

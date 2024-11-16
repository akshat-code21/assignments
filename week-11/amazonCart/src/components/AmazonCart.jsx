import React from 'react'
import { cartTotalSelector } from "../store/cartTotalSelector.js"
import { useRecoilValue } from "recoil"
import styles from "../modules/AmazonCart.module.css"
import ShoppingCart from './ShoppingCart.jsx'
import OrderSummary from './OrderSummary.jsx'
const AmazonCart = () => {
  const { total,itemCount } = useRecoilValue(cartTotalSelector)
  return (
    <div className={styles.body}>
      <div style={{
        width : "90vw",
        margin : 0,
        padding : "20px 20px 20px 0px"
      }}>
        <ShoppingCart></ShoppingCart>
      </div>
      <div style={{
        width : "30vw",
        margin : 0,
        padding : 20
      }}>
        <OrderSummary></OrderSummary>
      </div>
    </div>
  )
}

export default AmazonCart

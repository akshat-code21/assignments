import React from "react";
import styles from "../modules/OrderSummary.module.css";
import { cartTotalSelector } from "../store/cartTotalSelector";
import { useRecoilValue } from "recoil";
const OrderSummary = () => {
  const { total, itemCount } = useRecoilValue(cartTotalSelector);
  return (
    <div className={styles.parentCard}>
      <div className="heading">
        <h1>Order Summary</h1>
      </div>
      <div className={styles.order}>
        <div className={styles.numberOfItems}>Items ({itemCount}) :</div>
        <div className={styles.itemTotal}>₹{total}</div>
      </div>
      <div className={styles.total}>
        <div className={styles.orderTotal}>
          <h2>Order Total : </h2>
        </div>
        <div className={styles.totalPrice}>
          <h2>₹{total}</h2>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.button}>Proceed to Buy</button>
      </div>
    </div>
  );
};

export default OrderSummary;

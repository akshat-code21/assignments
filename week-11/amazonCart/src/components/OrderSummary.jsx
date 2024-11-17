import React, { useState } from "react";
import styles from "../modules/OrderSummary.module.css";
import { cartTotalSelector } from "../store/cartTotalSelector";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Modal } from "../components/Modal";
import { cartItemsState } from "../store/cartItemsState";
const OrderSummary = () => {
  const { total, itemCount } = useRecoilValue(cartTotalSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useRecoilValue(cartItemsState)
  const setCartItems = useSetRecoilState(cartItemsState)
  return (
    <>
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
          <button className={styles.button} onClick={() => {
            setIsModalOpen(true)
          }}>
            Proceed to Buy
          </button>
        </div>
      </div>
      {isModalOpen ? <Modal setIsModalOpen= {setIsModalOpen} total = {total} setCartItems={setCartItems}></Modal> : <></>}
    </>
  );
};

export default OrderSummary;

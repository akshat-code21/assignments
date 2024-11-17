import React from "react";
import styles from "../modules/ShoppingCart.module.css";
import { cartItemsState } from "../store/cartItemsState";
import { useRecoilValue,useSetRecoilState } from "recoil";
const ShoppingCart = () => {
  const cartItems = useRecoilValue(cartItemsState);
  const setCartItems = useSetRecoilState(cartItemsState)
  const updateQty = (id,change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };
  const removeItem = (id) =>{
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }
  return (
    <div className={styles.parent}>
      <div className={styles.heading}>
        <h1>Shopping Cart</h1>
      </div>
      {cartItems.map((item) => {
        return (
          <div className={styles.itemCard} key={item.image}>
            <div className={styles.itemImage}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.itemTitle}>{item.name}</div>
              <div className={styles.itemStatus}>In Stock</div>
              <div className={styles.itemOperations}>
                <button
                  className={styles.opn}
                  onClick={() => updateQty(item.id,-1)}
                >
                  -
                </button>
                <div className={styles.value}>{item.quantity}</div>
                <button
                  className={styles.opn}
                  onClick={() => updateQty(item.id,1)}
                >
                  +
                </button>
                <div className={styles.delete} onClick={()=>removeItem(item.id)}>Delete</div>
              </div>
            </div>
            <div className={styles.itemPrice}>₹{item.price}.00</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;

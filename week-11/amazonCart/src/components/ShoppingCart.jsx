import React from 'react'
import styles from "../modules/ShoppingCart.module.css"
import { cartItemsState } from "../store/cartItemsState"
import { useRecoilValue } from 'recoil'
const ShoppingCart = () => {
   const cartItems = useRecoilValue(cartItemsState) 
  return (
    <div className={styles.parent}>
        <div className={styles.heading}>
            <h1>Shopping Cart</h1>
        </div>
        {cartItems.map((item)=>{
            {console.log(item);}
            return(
            <div className={styles.itemCard}>
                <div className={styles.itemImage}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.itemDetails}>
                    <div className={styles.itemTitle}>{item.name}</div>
                    <div className={styles.itemStatus}>In Stock</div>
                    <div className={styles.itemOperations}>
                        <div className={styles.opn}>
                            -
                        </div>
                        <div className={styles.value}>
                            1
                        </div>
                        <div className={styles.opn}>
                            +
                        </div>
                        <div className={styles.delete}>
                            Delete
                        </div>
                    </div>
                </div>
                <div className={styles.itemPrice}>
                    ₹{item.price}.00
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default ShoppingCart

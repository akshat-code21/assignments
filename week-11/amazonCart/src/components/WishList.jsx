import React, { useState } from "react";
import styles from "../modules/WishList.module.css";
import { CiLogin, CiShare2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { LuGrid } from "react-icons/lu";
import { FaListUl } from "react-icons/fa";
import { wishItemsState } from "../store/wishItemsState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartItemsState } from "../store/cartItemsState";
import { useNavigate } from "react-router-dom";
const WishList = () => {
  const navigate = useNavigate();
  const [addedProducts, setAddedProducts] = useState({});
  const wishListItems = useRecoilValue(wishItemsState);
  const cartItems = useRecoilValue(cartItemsState);
  const setCartItems = useSetRecoilState(cartItemsState);
  function handleAddToCart(id, qty) {
    console.log(id);
    let product = wishListItems.find((item) => item.id === id);
    setAddedProducts((prev) => ({ ...prev, [id]: true }));
    setCartItems([
      ...cartItems,
      {
        id: id,
        name: product.name,
        price: product.price,
        image: product.image,
        rating: product.rating,
        reviews: product.reviews,
        oldPrice: product.oldPrice,
        quantity: qty,
      },
    ]);
  }
  return (
    <>
      
      <div className={styles.parent}>
        <div className={styles.sideBar}>
          <div className={styles.box}>
            <div className={styles.boxHeading}>Your Wish List</div>
            <div className={styles.subtitle}>Default List</div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.topBar}>
            <div className={styles.heading}>
              <div className={styles.boxHeading}>Your Wish List</div>
              <div className={styles.subtitle}>Public</div>
            </div>
            <div className={styles.options}>
              <div className={styles.shareOptions}>
                <CiShare2 className={styles.icon} />
                <span>Send List to Others</span>
              </div>
              <div className={styles.ellipses}>
                <BsThreeDots className={styles.dots} />
              </div>
            </div>
          </div>
          <div className={styles.secondBar}>
            <div className={styles.viewingOptions}>
              <LuGrid className={styles.gridIcon} />
              <FaListUl className={styles.listIcon} />
            </div>
            <div className={styles.searchArea}>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Search for an item" />
              </div>
              <div className={styles.filterOption}>
                <select name="" id="" className={styles.selectInput}>
                  <option value="" className={styles.selectOption}>
                    Filter and Sort
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.itemsArea}>
            {wishListItems.map((item) => {
              return (
                <div className={styles.itemCard} key={item.id}>
                  <div className={styles.cardImage}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={styles.itemTitle}>{item.name}</div>
                  <div className={styles.itemPrice}>₹{item.price}.00</div>
                  <div className={styles.buttonHolder}>
                    {addedProducts[item.id] ? (
                      <button
                        className={styles.button}
                        onClick={()=>{
                          navigate('/cart')
                        }}
                      >
                        Proceed to Checkout
                      </button>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={() => handleAddToCart(item.id, 1)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;

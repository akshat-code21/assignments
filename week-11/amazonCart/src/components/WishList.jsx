import React from "react";
import styles from "../modules/WishList.module.css";
import { CiShare2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { LuGrid } from "react-icons/lu";
import { FaListUl } from "react-icons/fa";
import { wishItemsState } from "../store/wishItemsState";
import { useRecoilValue } from "recoil";
const WishList = () => {
  const wishListItems = useRecoilValue(wishItemsState);
  return (
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
              <div className={styles.itemCard}>
                <div className={styles.cardImage}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.itemTitle}>{item.name}</div>
                <div className={styles.itemPrice}>₹{item.price}.00</div>
                <div className={styles.buttonHolder}>
                  <button className={styles.button}>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishList;

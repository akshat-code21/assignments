import React from "react";
import styles from "../modules/NavBar.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { cartTotalSelector }  from "../store/cartTotalSelector"
import { useRecoilValue } from "recoil";
const NavBar = () => {
  const { total, itemCount } = useRecoilValue(cartTotalSelector)
  return (
    <nav className={styles.nav}>
      <div className="logo">
        <Link to="/wishlist" className={styles.h1}>
          Amazon.in
        </Link>
      </div>
      <div className={styles.cart}>
        <Link to={'/'} className={styles.link}>Home</Link>
        <div className="greeting">Hello,User</div>
        <div className={styles.notification}>{itemCount}</div>
        <div className={styles.icon}>
          <Link to={'/cart'} className={styles.link}>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

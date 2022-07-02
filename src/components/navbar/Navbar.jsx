import React from 'react'
import styles from "./navbar.module.css"
import eclipseIcon from "../../assets/icons/eclipseIcon.png"

export const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
        <h3 className={styles.heroText}><img src={eclipseIcon} /><span>Crypto Tracker</span></h3>
        <div className={styles.iconWrapper}>
        <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden="true"></i>
        <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
    </div>
  )
}

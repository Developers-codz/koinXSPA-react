import React from "react";
import styles from "./modal.module.css";
import { useModal } from "../../context/modalContext";

export const Modal = () => {
  const { setOpen, modalData } = useModal();
  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <img className={styles.logo} src={modalData?.image} alt="" />
          <span>{modalData?.name}</span>
        </div>
        <div onClick={() => setOpen(false)}>X</div>
      </div>
      <table>
        <tr>
          <th className={styles.tHead}>PRICE</th>
          <th className={styles.tHead}>24H</th>
          <th className={styles.tHead}>7D</th>
        </tr>
        <tr>
          <td className={styles.tData}>{modalData?.current_price}</td>
          <td className={styles.tData24H}>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
            {modalData?.price_change_percentage_24h?.toFixed(2)}%
          </td>
          <td className={styles.tData7D}>
          <i className="fa fa-caret-up" aria-hidden="true"></i>
            {modalData?.price_change_percentage_7d_in_currency?.toFixed(2)}%
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th className={styles.tHead}>MARKET CAP</th>
        </tr>
        <tr>
          <td className={styles.tData}>${modalData?.market_cap}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th className={styles.tHead}>VOLUME 24H</th>
        </tr>
        <tr>
         <td className={styles.tData}>${modalData?.total_volume}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th className={styles.tHead}>CIRCULATORY SUPPLY</th>
        </tr>
        <tr>
        <td className={styles.tData}>  {modalData?.circulating_supply}BTC
        <div className={styles.statusBar}>
        <div className={styles.status}></div>
      </div>
        </td>
        </tr>
      </table>
    </div>
  );
};

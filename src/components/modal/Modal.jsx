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
          <td className={styles.tData}>
            {modalData?.price_change_percentage_24h?.toFixed(2)}%
          </td>
          <td className={styles.tData}>
            {modalData?.price_change_percentage_7d_in_currency?.toFixed(2)}%
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th>MARKET CAP</th>
        </tr>
        <tr>
          <td>{modalData?.market_cap}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>VOLUME 24H</th>
        </tr>
        <tr>
         <td> {modalData?.total_volume}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>CIRCULATORY SUPPLY</th>
        </tr>
        <tr>
        <td>  {modalData?.circulating_supply}</td>
        </tr>
      </table>
    </div>
  );
};

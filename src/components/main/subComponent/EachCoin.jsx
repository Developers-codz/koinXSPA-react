import React from "react";
import styles from "./currencytable.module.css";
import { useModal } from "../../../context/modalContext";

export const EachCoin = ({ data, sNo }) => {
  const { setModalData, setOpen } = useModal();
  return (
    <tr
      className={styles.thead}
      onClick={() => {
        setModalData(data);
        setOpen(true);
      }}
    >
      <td className={`${styles.sNo} ${styles.getMoreData}`}>
        <i className={`far fa-star ${styles.starLogo}`}></i>
        <span>{sNo + 1}</span>
      </td>
      <td className={styles.name}>
        <img src={data?.image} className={styles.logo} />
        <span>{data?.name}</span>
        <span>{data?.symbol?.toUpperCase()}</span>
      </td>
      <td>{data?.current_price}</td>
      <td className={styles.priceChangePer}>
      <i className="fa fa-caret-down" aria-hidden="true"></i>
        {data?.price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td className={`${styles.getMoreData} ${styles.priceChangePer7D}`}>
      <i className="fa fa-caret-up" aria-hidden="true"></i>
        {data?.price_change_percentage_7d_in_currency?.toFixed(2)}%
      </td>
      <td className={styles.getMoreData}>${data?.market_cap}</td>
      <td className={styles.getMoreData}>${data?.total_volume}</td>
      <td className={styles.getMoreData}>{data?.circulating_supply}BTC
      <div className={styles.statusBar}>
        <div className={styles.status}></div>
      </div>
      </td>
      <td className={styles.getMoreData}><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td>
    </tr>
  );
};

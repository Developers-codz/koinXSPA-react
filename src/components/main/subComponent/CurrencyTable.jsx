import React, { useEffect, useState } from "react";
import styles from "./currencytable.module.css";
import { useCurrency } from "../../../context/currencyContext";
import { EachCoin } from "./EachCoin";

export const CurrencyTable = () => {
const {isLoading,currencyData} = useCurrency()

  return(
    <>
     {isLoading ? <div className={styles.loader}>loading....</div> : 
    <table>
  <tr className={styles.thead}>
    <th  className={styles.getMoreData}>#</th>
    <th>NAME</th>
    <th>PRICE</th>
    <th>
      24H<i className="fa fa-arrow-down"></i>
    </th>
    <th  className={styles.getMoreData}>7D</th>
    <th  className={styles.getMoreData}>MARKET CAP</th>
    <th  className={styles.getMoreData}>VOLUME(24H)</th>
    <th  className={styles.getMoreData}>CIRCULATORY SUPPLY</th>
    <th  className={styles.getMoreData}></th>
  </tr>
  {currencyData.map((data,i) => {
    return (
    <EachCoin data ={data} key={i} sNo={i} />
    )
  })}
</table>}
    </>
  )
};

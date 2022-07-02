import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
import { Categories } from "./subComponent/Categories";
import { CurrencyTable } from "./subComponent/CurrencyTable";


export const Main = () => {


  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Top 100 Cryptocurencies by Market Cap </h3>
      <Categories />
        <CurrencyTable  />


    </div>
  );
};

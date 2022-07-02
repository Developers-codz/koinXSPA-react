import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
import { Categories } from "./subComponent/Categories";
import { CurrencyTable } from "./subComponent/CurrencyTable";
import ReactPaginate from "react-paginate";
import style from  "./pagination.module.css"
import { useCurrency } from "../../context/currencyContext";


export const Main = () => {
  const {getCurrencyData} = useCurrency();
  const handlePageClick = (data) => {
    getCurrencyData(data.selected)
  };

  return (
    <>
    <div className={styles.container}>
      <h3 className={styles.header}>Top 100 Cryptocurencies by Market Cap </h3>
      <Categories />
        <CurrencyTable  />
        

    </div>
    <div className={style.paginationWrapper}>

    <ReactPaginate
            previousLabel={"<previous"}
            breakLabel={"..."}
            nextLabel="next >"
            pageCount={10}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={style.pagination}
            pageClassName={style.pageItem}
            pageLinkClassName={style.pageLink}
            previousClassName={style.pageItem}
            nextClassName={style.pageItem}
            breakClassName={style.pageItem}
            activeClassName={style.active}


            />
    </div>
    </>
  );
};

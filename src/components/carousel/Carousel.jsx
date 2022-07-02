import React, { useState } from "react";
import { carouselData } from "../../data/carouselData";
import styles from "./carousel.module.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const SlideSetter = () => {
    if (activeIndex === carouselData.length) setActiveIndex(0);
    if (activeIndex !== carouselData.length) setActiveIndex(activeIndex + 1);
    if (activeIndex === 2) setActiveIndex(0);
  };
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.container}>
        <i
          className={`fa fa-chevron-left  ${styles.leftBtn}`}
          aria-hidden="true"
          onClick={SlideSetter}
        ></i>
        <i
          className={`fa fa-chevron-right ${styles.rightBtn}`}
          aria-hidden="true"
          onClick={SlideSetter}
        ></i>
        {carouselData.map((item, index) => {
          return (
            <div
              className={
                index === activeIndex
                  ? `${styles.card} ${styles.activeIndex}`
                  : `${styles.card} ${styles.dataInactive}`
              }
              key={index}
            >
              <img src={item.image} />
              <div className={styles.textArea}>
                <p>{item.title}</p>
                <h4>{item.desc}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

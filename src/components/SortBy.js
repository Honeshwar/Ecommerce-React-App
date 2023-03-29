import React, { useState } from "react";
import styles from "../styles/products.module.css";

function SortBy({ products, setSortedProducts, sorted, setSorted }) {
  const sortByPriceHandler = () => {
    //   setSorting(true);
    if (sorted) {
      setSorted(false);
      const sortedProducts = products.sort(function (a, b) {
        return a.id - b.id;
      });
      console.log("unsort", sortedProducts);
      setSortedProducts(sortedProducts);
      return;
    }

    const sortedProducts = products.sort(function (a, b) {
      return a.price - b.price;
    });
    console.log(sortedProducts);
    setSortedProducts(sortedProducts);

    setSorted(true);
  };
  return (
    <div className={styles.sortBy}>
      <h3>All Products</h3>
      <span onClick={sortByPriceHandler}>
        {sorted ? (
          <>
            {"Sorted"}
            <img
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828804.png"
              alt="cross"
            />
          </>
        ) : (
          "Sort By Price"
        )}
      </span>
    </div>
  );
}

export default SortBy;

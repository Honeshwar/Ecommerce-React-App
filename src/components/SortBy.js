import React from "react";
import styles from "../styles/products.module.css";
import {
  sortProductsByPrice,
  unSortProducts,
} from "../state-management/action";
// import { connect } from "react-redux";

function SortBy({ dispatch, sorted }) {
  console.log("sorted", sorted);
  const sortByPriceHandler = () => {
    //   setSorting(true);
    if (sorted) {
      dispatch(unSortProducts()); //get action obj--call dispatch--MW--reducer call by store ,store pass action ,current state in reducer
      return;
    }
    //if not sorted,than do sort
    dispatch(sortProductsByPrice());
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

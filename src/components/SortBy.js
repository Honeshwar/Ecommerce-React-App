import React from "react";
import styles from "../styles/home.module.css";
import {
  sortCartByPrice,
  sortProductsByPrice,
  unSortCart,
  unSortProducts,
} from "../state-management/action";
// import { connect } from "react-redux";

function SortBy({ dispatch, productsSorted, isCart, cartSorted }) {
  console.log("sorted", productsSorted, " cartSorted", cartSorted);

  //for product
  const sortProductsByPriceHandler = () => {
    //   setSorting(true);
    if (productsSorted) {
      dispatch(unSortProducts()); //get action obj--call dispatch--MW--reducer call by store ,store pass action ,current state in reducer
      return;
    }
    //if not sorted,than do sort
    dispatch(sortProductsByPrice());
  };
  //for cart
  const sortCartByPriceHandler = () => {
    //   setSorting(true);
    if (cartSorted) {
      dispatch(unSortCart()); //get action obj--call dispatch--MW--reducer call by store ,store pass action ,current state in reducer
      return;
    }
    //if not sorted,than do sort
    dispatch(sortCartByPrice());
  };
  return (
    <div className={styles.sortBy}>
      <h3>{isCart ? "Cart Products" : "All Products"}</h3>
      <span
        onClick={isCart ? sortCartByPriceHandler : sortProductsByPriceHandler}
      >
        {productsSorted || cartSorted ? (
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

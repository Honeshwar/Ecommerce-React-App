import React from "react";
import { connect } from "react-redux";

import styles from "../styles/home.module.css";
import { SortBy, Cart } from "../components";
import { Link } from "react-router-dom";

function AddToCart({ cart, dispatch }) {
  const { cartProducts, cartSorted } = cart;

  return (
    <div className={styles.products}>
      <SortBy isCart={true} cartSorted={cartSorted} dispatch={dispatch} />
      <div className={styles.listOfProducts}>
        {cartProducts?.map((product, index) => (
          <Cart key={index} product={product} dispatch={dispatch} />
        ))}

        {cartProducts.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white", fontFamily: "cursive" }}>
              No product is add to cart yet...
            </h1>
            <Link to="/" className="btn btn-warning">
              Go Back To Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  //root state = {products:{},cart:{}}
  return {
    cart: state?.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const WrapperCartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart); //return Wrapper around AppComponent
export default WrapperCartComponent;

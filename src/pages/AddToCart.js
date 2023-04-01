import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "../styles/home.module.css";
import { SortBy, Cart } from "../components";
import { getCart } from "../state-management/action";

function AddToCart({ cart, dispatch }) {
  const { cartProducts, cartSorted } = cart;
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className={styles.products}>
      <SortBy isCart={true} cartSorted={cartSorted} dispatch={dispatch} />
      <div className={styles.listOfProducts}>
        {cartProducts?.map((product, index) => (
          <Cart key={index} product={product} dispatch={dispatch} />
        ))}
        {cart?.length === 0 && "No Product is add to add to cart yet..."}
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    // products: state?.products,
    // productsSorted: state?.productsSorted,
    // cart: state?.cart,
    // cartSorted: state?.cartSorted,
    cart: state?.cart,
  }; //root state = {allProduct:{},cart:{}}
}
function mapDispatchToProps(dispatch) {
  // console.log("disp", a);
  return {
    dispatch,
  };
}

// WrapperAppComponent pass an state,dispatch as props to App component(as children of it)
const WrapperCartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart); //return Wrapper around AppComponent
//connect m automatically pass store,enclose connect inside an provider
//connect func also subscribe to store,state change it re-render/pass again props/do callback again
export default WrapperCartComponent;

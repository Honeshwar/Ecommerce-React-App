import React from "react";
import { connect } from "react-redux";

import { SortBy, Product } from "../components";
import styles from "../styles/home.module.css";

function Home({ products, cart, dispatch }) {
  const { allProducts, productsSorted } = products;

  return (
    <div className={styles.products}>
      <SortBy productsSorted={productsSorted} dispatch={dispatch} />
      <div className={styles.listOfProducts}>
        {allProducts?.map((product, index) => (
          <Product
            key={index}
            product={product}
            cart={cart}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    products: state?.products,
    cart: state?.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const WrapperHomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home); //return Wrapper around AppComponent
export default WrapperHomeComponent;

// WrapperAppComponent pass an state,dispatch as props to App component(as children of it)
//connect m automatically pass store,enclose connect inside an provider
//connect func also subscribe to store,state change it re-render/pass again props/do callback again

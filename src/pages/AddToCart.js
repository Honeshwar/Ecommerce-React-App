import React from "react";
import { connect } from "react-redux";
import "../styles/totalPrize.css";
import styles from "../styles/home.module.css";
import { SortBy, Cart, Product, TotalPrize } from "../components";
import { Link } from "react-router-dom";
import { removeAllFromCart, setCartsTotalPrize } from "../state-management/action";

function AddToCart({ products, dispatch}) {
  const { allProducts, isCartProductsSorted } = products;
  let cartProducts = [];let i=0;
  for (const e of allProducts) {
    if(e.isProductInCart){
      cartProducts[i++] = e;
    }
  }

  const proceedToPay = ()=>{
    dispatch(removeAllFromCart());
    dispatch(setCartsTotalPrize(0));
  }
  return (
    <>
    <div className={styles.cartProducts}>
     <div className={styles.a}>
      <TotalPrize totalPrize={products.totalPrize} /> 
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary p-3 mt-3" >
      Proceed To Pay
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Purchased Products</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={proceedToPay}></button>
            </div>
            <div class="modal-body">
              <img  className=" h-100 m-auto d-flex" src="https://st2.depositphotos.com/1688079/11277/i/450/depositphotos_112771578-stock-photo-done-validate-icon-soft-green.jpg"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={proceedToPay}>Close</button>
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className={styles.b}>
              {cartProducts?.map((product, index) => (
                <Cart key={index} product={product} dispatch={dispatch} totalPrize={products.totalPrize} />
              ))}

              {cartProducts.length === 0 && (
                <div
                  style={{
                    width:"100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center",
                  
                  }}
                >
                  <h1 style={{ color: "white", fontFamily: "cursive", textAlign:"center" }}>
                    Added product is purchased, add new products...
                  </h1>
                  <Link to="/" className="btn btn-warning mt-4">
                    Go Back To Home
                  </Link>
                </div>
              )}
      </div>
     </div>
    </>
  );
}

function mapStateToProps(state) {
  //root state = {products:{},cart:{}}
  return {
    products: state?.products,
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


{/*  <SortBy isCart={true} isCartProductsSorted={isCartProductsSorted} dispatch={dispatch} />
     
<div className={styles.listOfCartProducts}>
              {cartProducts?.map((product, index) => (
                <Cart key={index} product={product} dispatch={dispatch} totalPrize={products.totalPrize} />
              ))}

              {cartProducts.length === 0 && (
                <div
                  style={{
                    width:"100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center",
                  
                  }}
                >
                  <h1 style={{ color: "white", fontFamily: "cursive", textAlign:"center" }}>
                    No product is added to cart yet...
                  </h1>
                  <Link to="/" className="btn btn-warning">
                    Go Back To Home
                  </Link>
                </div>
              )}
      </div>
    </div>
    <TotalPrize totalPrize={products.totalPrize} /> */}
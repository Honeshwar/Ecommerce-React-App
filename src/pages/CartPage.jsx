import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/totalPrize.css";
import styles from "../styles/home.module.css";
import { 
  Cart, 
    TotalPrize 
  } from "../components";
import { Link } from "react-router-dom";
import { removeAllFromCart, setCartsTotalPrize } from "../state-management/action";

function CartPage({ products, dispatch}) {
  const { 
    allProducts, 
  } = products;
  let cartProducts = [];
  let i=0, totalPriceInCart = 0;;
  for (const p of allProducts) {
    if(p.isProductInCart){
      cartProducts[i++] = p;
      totalPriceInCart += p.price * p.quantity;
    }
  }
const [totalPrice, setTotalPrice] = useState(totalPriceInCart)
  const proceedToPay = ()=>{
    dispatch(removeAllFromCart());
    setTotalPrice(0);
  }
  return (
    <>
    <div className={styles.cartProducts}>
     <div className={styles.a}>
      <TotalPrize totalPrize={totalPrice} /> 
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary p-3 mt-3" >
      Proceed To Pay
      </button>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Purchased Products</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={proceedToPay}></button>
            </div>
            <div className="modal-body">
              <img alt="purchased done"  className=" h-100 m-auto d-flex" src="https://st2.depositphotos.com/1688079/11277/i/450/depositphotos_112771578-stock-photo-done-validate-icon-soft-green.jpg"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={proceedToPay}>Close</button>
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className={styles.b}>
              {cartProducts?.map((product, index) => (
                <Cart key={index} product={product} dispatch={dispatch} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
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
)(CartPage); //return Wrapper around AppComponent
export default WrapperCartComponent;
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { toggleIsProductInCart } from "../state-management/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart({ product, dispatch,totalPrice,setTotalPrice}) {

  //remove to cart
  const removeProductToCartHandler = () => {
    dispatch(toggleIsProductInCart(product)); 
    setTotalPrice(totalPrice - product.price * qantity);
    toast.success("🔻Successfully Remove Product")
  };



  const [quantity, setQuantity] = useState(product.quantity);

  //increment quantity
  const increaseQuantity = ()=>{
    //set state async calls back run not when call wait in callback queue
    setQuantity(quantity+1);
   setTotalPrice(totalPrice+product.price);
  }

  //decrement quantity
  const decreaseQuantity = ()=>{
    setQuantity(quantity === 0?0:quantity-1);
    if(quantity === 0)return;
    // dispatch(setCartsTotalPrize(totalPrize - product.price));
   setTotalPrice(totalPrice-product.price);

  }



  return (
    <div className="card" style={{width: "18rem", margin:" 20px",boxShadow:"inset 0 0 6px 3px lightgray",padding:"4px", height:"fit-content"}}>
    <Link to={`/product-details/${product.id}`}>
       <img
         style={{ maxHeight: "200px" }}
         src={product.thumbnail}
         className="card-img-top"
         alt={product.title}
       />
     </Link>
     <div className="card-body" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
     <h5 className="card-title">{product.title}</h5>
     <li className="list-group-item " >
       Price:
       <small style={{ color : "red"}}>
         {" Rs "} {product.price}
       </small>
     </li>
    <ul className="pagination" style={{paddingTop:"10px"}}>
        <li className="page-item" onClick={decreaseQuantity}>
          <div className="page-link" aria-label="Previous">
            <span aria-hidden="true"  >-</span> 
          </div>
        </li>
        <li className="page-item">
          <div className="page-link">{quantity}</div>
        </li>
        <li className="page-item"  onClick={increaseQuantity}>
          <div className="page-link" aria-label="Next">
            <span aria-hidden="true" >+</span>
          </div>
        </li>
      </ul> 
    <div >
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary" style={{height:"fit-content",marginRight:"15px"}} >{"Buy "} 
        <img
          style={{
            width: "30px",
            height: "30px",
            marginLeft: "0px",
          }}
          src="https://cdn-icons-png.flaticon.com/128/891/891407.png"
          alt="Remove From Cart"
        />
      </button>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Purchased Products</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={removeProductToCartHandler}></button>
            </div>
            <div className="modal-body">
              <img alt="purchased done"  className=" h-100 m-auto d-flex" src="https://st2.depositphotos.com/1688079/11277/i/450/depositphotos_112771578-stock-photo-done-validate-icon-soft-green.jpg"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={removeProductToCartHandler}>Close</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-danger" style={{height:"fit-content"}} onClick={removeProductToCartHandler}>{"Remove "} 
      <img
        style={{
          width: "30px",
          height: "30px",
          marginLeft: "0px",
        }}
        src="https://cdn-icons-png.flaticon.com/128/891/891407.png"
        alt="Remove From Cart"
      />
    </button>
   </div>
 </div>
   </div>
  );
}

export default Cart;

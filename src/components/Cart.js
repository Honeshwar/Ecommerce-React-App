import React, { useState } from "react";
import { Link } from "react-router-dom";

import { decreaseCartTotalPrize, increaseCartTotalPrize, removeProductFromCart, setCartsTotalPrize, toogleAddToCart } from "../state-management/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart({ product, dispatch,totalPrize}) {

  //remove to cart
  const removeProductToCartHandler = () => {
    dispatch(toogleAddToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    dispatch(setCartsTotalPrize(totalPrize - product.price * quantity));
    toast.success("🔻Successfully Remove Product From Redux Cart😫")
  };

  // //remove to cart
  // const removeProductFromCartHandler = () => {
  //   dispatch(removeProductFromCart(product.id)); //Add Product To Cart In Api And Redux Store Handler
  //   toast.success('🔻Successfully Remove Product From  Cart 😫');
  //   // success("🔻 Successfully Remove Product From  Cart 😫", {
  //   //   title: "Remove Product From  Cart",
  //   //   delay: "7000",
  //   //   autoHide: false,
  //   // });
  // };


  const [quantity, setQuantity] = useState(1);
  //increment quantity
  const increaseQuantity = ()=>{
    setQuantity(quantity+1);
    dispatch(setCartsTotalPrize(totalPrize + product.price));

  }
  //increment quantity
  const decreaseQuantity = ()=>{
    setQuantity(quantity == 0?0:quantity-1);
    if(quantity == 0)return;
    dispatch(setCartsTotalPrize(totalPrize - product.price));
  }


  // //remove to cart
  // const RemoveProductToCartHandler = () => {
  //   dispatch(removeProductFromCart(product.id)); //Add Product To Cart In Api And Redux Store Handler
  //   success("🔻Successfully Remove Product From  Cart 😫", {
  //     title: "Remove Product From  Cart",
  //     delay: "7000",
  //     autoHide: false,
  //   });
  // };



  return (
    <div class="card "   style={{width: "18rem", margin:" 20px",boxShadow:"inset 0 0 6px 3px lightgray",padding:"4px", height:"fit-content"}}>
    <Link to={`/product-details/${product.id}`}>
       <img
         style={{ maxHeight: "200px" }}
         src={product.thumbnail}
         className="card-img-top"
         alt={product.title}
       />
     </Link>
     <div class="card-body" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
     <h5 className="card-title">{product.title}</h5>
   {/* <p className="card-text" style={{ color: "gray" }}>
     {product.description}
   </p> */}
     <li className="list-group-item " >
       Price:
       <small style={{ color : "red"}}>
         {" Rs "} {product.price}
       </small>
     </li>
    <ul class="pagination" style={{paddingTop:"10px"}}>
        <li class="page-item" onClick={decreaseQuantity}>
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true"  >-</span> 
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">{quantity}</a>
        </li>
        <li class="page-item"  onClick={increaseQuantity}>
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">+</span>
          </a>
        </li>
      </ul> 
    <div >
      <button type="button" class="btn btn-primary" style={{height:"fit-content",marginRight:"15px"}} onClick={removeProductFromCart}>{"Buy "} 
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
      <button type="button" class="btn btn-danger" style={{height:"fit-content"}} onClick={removeProductToCartHandler}>{"Remove "} 
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
///////////////////////////
  //   <div class="card" style={{width: "18rem"}}>
  //    <Link to={`/productDetail/${product.id}`}>
  //       <img
  //         style={{ maxHeight: "200px" }}
  //         src={product.thumbnail}
  //         className="card-img-top"
  //         alt={product.title}
  //       />
  //     </Link>
  // <div class="card-body">
  //   <h5 className="card-title">{product.title}</h5>
  //   <p className="card-text" style={{ color: "gray" }}>
  //     {product.description}
  //   </p>
  //   <li className="list-group-item ">
  //     Price:
  //     <small style={{ color: "red" }}>
  //       {" Rs "} {product.price}
  //     </small>
  //   </li>
  // </div>
  //   </div>
////////////////////
// <div
    //   className="card"
    //   style={{
    //     width: "19rem",
    //     marginBottom: "10px",
    //     boxShadow: " 0 0 2px 1px black",
    //   }}
    // >
    //   <Link to={`/productDetail/${product.id}`}>
    //     <img
    //       style={{ maxHeight: "200px" }}
    //       src={product.thumbnail}
    //       className="card-img-top"
    //       alt={product.title}
    //     />
    //   </Link>
    //   <div className="card-body">
    //     <h5 className="card-title">{product.title}</h5>
    //     <p className="card-text" style={{ color: "gray" }}>
    //       {product.description}
    //     </p>
    //   </div>
    //   <ul className="list-group list-group-flush">
    //     <li className="list-group-item ">
    //       Price:
    //       <small style={{ color: "red" }}>
    //         {" Rs "} {product.price}
    //       </small>
    //     </li>
    //     <li className="list-group-item ">
    //       {`Rating: `}
    //       <small className="" style={{ color: "yellowgreen" }}>
    //         {product.rating}
    //       </small>
    //     </li>
    //   </ul>
    //   <div className="card-body" style={{ maxHeight: "50px" }}>
    //     <button
    //       // href={removeProductFromCartHandler}
    //       onClick={removeProductFromCartHandler}
    //       className="card-link"
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         marginRight: "5px",
    //         cursor: "pointer",
    //         backgroundColor: "white",
    //         border: "none",
    //       }}
    //     >
    //       <img
    //         style={{
    //           width: "25px",
    //           height: "25px",
    //           marginLeft: "0px",
    //         }}
    //         src="https://cdn-icons-png.flaticon.com/128/5952/5952781.png"
    //         alt="Add To Cart"
    //       />{" "}
    //       Remove From Cart
    //     </button>
    //   </div>
    // </div>
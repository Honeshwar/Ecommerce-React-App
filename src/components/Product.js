import React from "react";
import { Link } from "react-router-dom";
import {
  AddProductToCart,
  removeProductFromCart,
  setCartsTotalPrize,
  toogleAddToCart,
  toogleAddToCartHandler,
} from "../state-management/action";
import { success } from "react-toast-notification";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ product, cart, dispatch ,totalPrize}) {

  // let isProductPresentInCart = cart.cartProducts?.indexOf(product);
//  const [isProductPresentInCart,setIsProductPresentInCart] = useState((()=>{
//     const findProduct = cart?.cartProducts.filter((e) => e.id === product.id);
//     let isProductPresentInCart = false;
//     if (findProduct?.length === 1) {
//       isProductPresentInCart = true;
//     }
//     return isProductPresentInCart;
//  })());


  const [quantity, setQuantity] = useState(1);

  //add to cart
  // const addToCartHandler = () => {

  //   setIsProductPresentInCart(true);
  //   dispatch(setCartsTotalPrize(totalPrize + product.price * quantity);
  //   dispatch(AddProductToCart({...product,quantity})); //Add Product To Cart In Api And Redux Store Handler
  //   toast.success('⛱️Successfully Added Product To Cart 😛');
  //   // success(" ⛱️Successfully Added Product To Cart 😛", {
  //   //   title: "Add TO Cart",
  //   //   delay: "7000",
  //   //   autoHide: false,
  //   // });
  // };

  // //remove to cart
  // const removeProductFromCartHandler = () => {
  //   setIsProductPresentInCart(false);
  //   setTotalPrize(totalPrize - product.price * quantity);
  //   dispatch(removeProductFromCart(product.id)); //Add Product To Cart In Api And Redux Store Handler
  //   toast.success('🔻Successfully Remove Product From  Cart 😫');
  //   // success("🔻Successfully Remove Product From  Cart 😫", {
  //   //   title: "Remove Product From  Cart",
  //   //   delay: "7000",
  //   //   autoHide: false,
  //   // });

  // };

  const addProductToCartHandler = () => {
    dispatch(toogleAddToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    dispatch(setCartsTotalPrize(totalPrize + product.price * quantity));
    toast.success(" ⛱️Successfully Added Product To Cart 😛");
  };

  //remove to cart
  const removeProductToCartHandler = () => {
    dispatch(toogleAddToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    dispatch(setCartsTotalPrize(totalPrize - product.price * quantity));
    toast.success("🔻Successfully Remove Product From Redux Cart😫")
  };

  //increment quantity
  const increaseQuantity = ()=>setQuantity(quantity+1);

  
  //increment quantity
  const decreaseQuantity = ()=>setQuantity(quantity == 0?0:quantity-1);


  return (
    <div class="card" style={{width: "18rem", margin:" 20px",boxShadow:"inset 0 -10px 6px 3px lightgray",padding:"4px"}}>
      <Link to={`/product-details/${product.id}`}>
        <img
          style={{ height: "150px" }}
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
      <Link to={`/product-details/${product.id}`} style={{width:"fit-content", marginTop:"20px",marginBottom:"10px",marginInline:"auto",textShadow:"0 0 2px black"}} 
      className="btn btn-info text-light">
        <div >
          {` Details  `}
          <img
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "0px",
            }}
            src="https://cdn-icons-png.flaticon.com/128/943/943579.png"
            alt="details"
          />
        </div>
    </Link>
      </div>
    </div>
   

  );
}

export default Product;
//  <div
// className="card"
// style={{
//   width: "19rem",
//   margin: "20px",
//   boxShadow: " 0 0 2px 1px black",
// }}
// >
// <Link to={`/product-details/${product.id}`}>
//   <img
//     style={{ maxHeight: "200px" }}
//     src={product.thumbnail}
//     className="card-img-top"
//     alt={
//       product.title
//     } /*{`${product.title} Photo`} You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop , they want specify word that define image  */
//   />
// </Link>
// <div className="card-body">
//   <h5 className="card-title">{product.title}</h5>
//   <p className="card-text" style={{ color: "gray" }}>
//     {product.description}
//   </p>
// </div>
// <ul className="list-group list-group-flush">
//   <li className="list-group-item ">
//     Price:
//     <small style={{ color: "red" }}>
//       {` Rs `}

//       {product.price}
//     </small>
//   </li>
//   <li className="list-group-item ">
//     {` Rating: `}
//     <small className="" style={{ color: "yellowgreen" }}>
//       {product.rating}
//     </small>
//   </li>
// </ul>
// <div
//   className="card-body"
//   style={{
//     maxHeight: "50px",
//     display: "flex",
//     justifyContent: "space-between",
//   }}
// >
//   {ProductPresentInCart === -1 ? (
//     <button
//       onClick={AddToCartHandler}
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
//           width: "30px",
//           height: "30px",
//           marginLeft: "0px",
//         }}
//         src="https://cdn-icons-png.flaticon.com/128/891/891407.png"
//         alt="Add To Cart"
//       />
//       {` Add  `}
//     </button>
//   ) : (
//     <button
//       onClick={RemoveProductFromCartHandler}
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
//           width: "30px",
//           height: "30px",
//           marginLeft: "0px",
//         }}
//         src="https://cdn-icons-png.flaticon.com/128/5952/5952781.png"
//         alt="Add To Cart"
//       />
//       {` Remove `}
//     </button>
//   )}
//   <Link
//     to={`/product-details/${product.id}`}
//     className="card-link"
//     style={{
//       textDecoration: "none",
//       color: "black",
//       cursor: "pointer",
//     }}
//   >
//     Details
//     <img
//       style={{ width: "30px", height: "30px", marginLeft: "3px" }}
//       src="https://cdn-icons-png.flaticon.com/128/6592/6592963.png"
//       alt="edit product details"
//     />
//   </Link>
// </div>
// </div> 
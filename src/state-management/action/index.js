// action are plane js object with type field (and data that come from UI  {type:"dk",data:data}) that tell about event type(name)/ action type and data that come from UI  {type:"dk",data:data}
// also create action creators function, so we don't have to do same work again and again( {type:"dk",data:data}, {type:"dk",data1:data1}...)// action creator !== action, are only function that help use in creating action obj

import { 
  // post,
   remove, get, update } from "../../api";

//action type
export const ADD_PRODUCTS_TO_STORE = "ADD_PRODUCTS_TO_STORE";
export const SORT_PRODUCTS_BY_PRICE = "SORT_PRODUCTS_BY_PRICE";
export const UN_SORT_PRODUCTS_TO_NORMAL = "UN_SORT_PRODUCTS_TO_NORMAL";
export const DELETE_PRODUCT_FROM_STORE = "DELETE_PRODUCT_FROM_STORE";
export const UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS =
  "UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS";

export const TOGGLE_ADD_TO_CART = "TOGGLE_ADD_TO_CART";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_CART_TO_STORE = "ADD_CART_TO_STORE";
export const SORT_CART_BY_PRICE = "SORT_CART_BY_PRICE";
export const UN_SORT_CART_TO_NORMAL = "UN_SORT_CART_TO_NORMAL";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";


export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export function removeAllFromCart(){
  return {
    type:"REMOVE_ALL_FROM_CART"
  }
}
export const ADD_USER_TO_STORE = "AADD_USER_TO_STORE";
export const SET_TOTAL_CART_PRIZE = "INCREMENT_TOTAL_CART_PRIZE";
// export const DECREMENT_TOTAL_CART_PRIZE = "DECREMENT_TOTAL_CART_PRIZE";
export function setCartsTotalPrize(newTotal){
  return {
    type:SET_TOTAL_CART_PRIZE,
    newTotal
  }
}

//action creators
export function addProductsHandler() {
  return async function (dispatch) {
    // console.log("local storage ",localStorage.getItem("PRODUCTS"));
    // if(localStorage.getItem("PRODUCTS") != null){
    //   dispatch(addProductsToStore(JSON.parse(localStorage.getItem("PRODUCTS")))); 
    //   return;
    // }

    //do fetch products on mounted and use useState to re ender comp with get products
    //by default useEffect is synchronous in nature but api call is synchro so to make useEffect asynchronous we use async await

    const response = await get(); //it get full-filled promise and await return (auto call then()) and return promiseResult

    if (response.success) {//success i pass in response
      dispatch(addProductsToStore(response.products)); //action obj return than dispatch
    }
  };
}

export function addProductsToStore(allProducts) {
  return {
    type: ADD_PRODUCTS_TO_STORE,
    allProducts,
  };
}

// SORT_PRODUCTS_BY_PRICE,
export function sortProductsByPrice() {
  return {
    type: SORT_PRODUCTS_BY_PRICE,
  };
}

// UNSORT_PRODUCTS_BY_PRICE,
export function unSortProducts() {
  return {
    type: UN_SORT_PRODUCTS_TO_NORMAL,
  };
}

// deleteProduct handler
export function deleteProductFromApiAndReduxStore(product) {
  //every product comp have it own product props

  //convert action to asynchronous , call api to delete product in db
  return async function (dispatch) {
    const response = await remove(product.id);
    if (response.success) {
      dispatch(deleteProductFromStore(product));
      return;
    }
  };
}

// deleteProduct
export function deleteProductFromStore(product) {
  return {
    type: DELETE_PRODUCT_FROM_STORE,
    product,
  };
}

// Add product to cart handler, api db+redux store
export function toogleAddToCartHandler(productId) {
  //every product comp have it own product props

  //convert action to asynchronous , call api to delete product in db
  return async function (dispatch) {
    const response = await update(productId,{isProductInCart:true });
    if (response.success) {
      dispatch(toogleAddToCart(response.products));
      return;
    }
  };
}

// deleteProduct
export function toogleAddToCart(product) {
  return {
    type: TOGGLE_ADD_TO_CART,
    product,
  };
}

export function editProduct(inCardAlso, productId, product) {
  return async function (dispatch) {
    const response1 = await update("products", productId, product);
    if (inCardAlso) {
      await update(productId, product); //const response2 =
    }
    if (response1.success) {
      dispatch(editProductInReduxStore(response1.products)); //data same store in redux store in allProducts and cartProducts array
      return;
    }
  };
}

export function editProductInReduxStore(product) {
  return {
    type: UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS,
    product,
  };
}

// // cart .........................
// export function getProduct() {
//   return async function (dispatch) {
//     if(localStorage.getItem(PRODUCTS) != null){
//       dispatch(addProductsToStore(JSON.parse(localStorage.getItem(PRODUCTS)))); 
//       return;
//     }
//     const response = await get();
//     if (response.success ) {
//       dispatch(addProductsToStore(response.products)); //response={success,products:[]},create in api return custom fetch,api res={cart:[]}
//       return;
//     }
//   };
// }

// export function addProductsToStore(allProducts) {
//   return {
//     type: ADD_PRODUCTS_TO_STORE,
//     allProducts,
//   };
// }

// SORT_cart_BY_PRICE,
export function sortCartByPrice() {
  return {
    type: SORT_CART_BY_PRICE,
  };
}

// UNSORT_CART_BY_PRICE,
export function unSortCart() {
  return {
    type: UN_SORT_CART_TO_NORMAL,
  };
}

export function removeProductFromCart(productId) {
  // remove in api + store
  return async function (dispatch) {
    const response = await remove(productId);
    if (response.success) {
      dispatch(removeProductFromCartInStore(productId)); //response={success,products:[]},create in api return custom fetch,api res={cart:[]}
      return;
    }
  };
}

export function removeProductFromCartInStore(productId) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId,
  };
}

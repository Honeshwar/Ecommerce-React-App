// action are plane js object with type field (and data that come from UI  {type:"dk",data:data}) that tell about event type(name)/ action type and data that come from UI  {type:"dk",data:data}
// also create action creators function, so we don't have to do same work again and again( {type:"dk",data:data}, {type:"dk",data1:data1}...)// action creator !== action, are only function that help use in creating action obj

import { post, remove, get, update } from "../../api";

//action type
export const ADD_PRODUCT_TO_STORE = "ADD_PRODUCT_TO_STORE";
export const SORT_PRODUCTS_BY_PRICE = "SORT_PRODUCTS_BY_PRICE";
export const UN_SORT_PRODUCTS_TO_NORMAL = "UN_SORT_PRODUCTS_TO_NORMAL";
export const DELETE_PRODUCT_FROM_STORE = "DELETE_PRODUCT_FROM_STORE";
export const UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS =
  "UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_CART_TO_STORE = "ADD_CART_TO_STORE";
export const SORT_CART_BY_PRICE = "SORT_CART_BY_PRICE";
export const UN_SORT_CART_TO_NORMAL = "UN_SORT_CART_TO_NORMAL";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

//action creators

export function addProductsHandler() {
  return async function (dispatch) {
    //do fetch products on mounted and use useState to re ender comp with get products
    //by default useEffect is synchronous in nature but api call is synchro so to make useEffect asynchronous we use async await

    const response = await get("products"); //it get full-filled promise and await return (auto call then()) and return promiseResult
    console.log("response", response);

    if (response.success) {
      dispatch(addProductsToStore(response.products)); //action obj return than dispatch
    } else {
      console.log("error while api call", response.message);
    }
  };
}

export function addProductsToStore(allProducts) {
  return {
    type: ADD_PRODUCT_TO_STORE,
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
    const response = await remove("products", product.id);
    if (response.success) {
      console.log("delete api", response);
      dispatch(deleteProductFromStore(product));
      return;
    }
    console.log("delete api error", response.message);
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
export function AddProductToCart(product) {
  //every product comp have it own product props

  //convert action to asynchronous , call api to delete product in db
  return async function (dispatch) {
    const response = await post("cart", product);
    if (response.success) {
      console.log("add to cart api", response);
      dispatch(AddProductToCartInReduxStore(product));
      return;
    }
    console.log("add cart api error", response.message);
  };
}

// deleteProduct
export function AddProductToCartInReduxStore(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function editProduct(inCardAlso, productId, product) {
  return async function (dispatch) {
    const response1 = await update("products", productId, product);
    if (inCardAlso) {
      const response2 = await update("cart", productId, product);
      if (response2.success) {
        console.log("API response2 after edit/update", response2);
        // dispatch(editProductInReduxStore(response2.products));
        //res.products because fake api always give result in products array so always response2.products we do
        return;
      }
      console.log("add cart api error", response2.message);
    }
    if (response1.success) {
      console.log("API response1 after edit/update", response1);
      dispatch(editProductInReduxStore(response1.products)); //data same store in redux store in allProducts and cartProducts array
      return;
    }
    console.log("add cart api error", response1.message);
  };
}

export function editProductInReduxStore(product) {
  console.log("edit to redux store");
  return {
    type: UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS,
    product,
  };
}

// cart .........................
export function getProductAndCart() {
  return async function (dispatch) {
    const response1 = await get("products");
    const response2 = await get("cart");
    if (response1.success && response2.success) {
      console.log(
        "get products and cart  from api *********",
        response1,
        response2
      );
      dispatch(
        addProductsAndCartToStore(response1.products, response2.products)
      ); //response={success,products:[]},create in api return custom fetch,api res={cart:[]}
      return;
    }
    console.log(
      "get products and cart api error",
      response1.message,
      response2.message
    );
  };
}

export function addProductsAndCartToStore(allProducts, cartProducts) {
  return {
    type: ADD_CART_TO_STORE,
    allProducts,
    cartProducts,
  };
}

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
    const response = await remove("cart", productId);
    if (response.success) {
      console.log("add to cart api", response);
      dispatch(removeProductFromCartInStore(productId)); //response={success,products:[]},create in api return custom fetch,api res={cart:[]}
      return;
    }
    console.log("add cart api error", response.message);
  };
}

export function removeProductFromCartInStore(productId) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId,
  };
}

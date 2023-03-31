// action are plane js object with type field (and data that come from UI  {type:"dk",data:data}) that tell about event type(name)/ action type and data that come from UI  {type:"dk",data:data}
// also create action creators function, so we don't have to do same work again and again( {type:"dk",data:data}, {type:"dk",data1:data1}...)// action creator !== action, are only function that help use in creating action obj

import { deleteProduct, getAllProducts } from "../../api";

//action type
export const ADD_PRODUCT_TO_STORE = "ADD_PRODUCT_TO_STORE";
export const SORT_PRODUCTS_BY_PRICE = "SORT_PRODUCTS_BY_PRICE";
export const UN_SORT_PRODUCTS_TO_NORMAL = "UN_SORT_PRODUCTS_TO_NORMAL";
export const DELETE_PRODUCT_FROM_STORE = "DELETE_PRODUCT_FROM_STORE";
//action creators

export function addProductsHandler() {
  return async function (dispatch) {
    //do fetch products on mounted and use useState to re ender comp with get products
    //by default useEffect is synchronous in nature but api call is synchro so to make useEffect asynchronous we use async await

    const response = await getAllProducts(); //it get full-filled promise and await return (auto call then()) and return promiseResult
    console.log("response", response);

    if (response.success) {
      dispatch(addProductsToStore(response.products)); //action obj return than dispatch
    } else {
      console.log("error while api call", response.message);
    }
  };
}

export function addProductsToStore(products) {
  return {
    type: ADD_PRODUCT_TO_STORE,
    products,
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
export function deleteProduct(product) {
  //every product comp have it own product props

  //convert action to asynchronous , call api to delete product in db
  return async function (dispatch) {
    const response = await deleteProduct(product.id);
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

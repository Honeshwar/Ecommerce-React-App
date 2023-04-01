//reducer are pure func,
//rules-->1)same input same output all time,
//rules-->2)only parameter of func can use that func,nothing from outside
//rules-->3)no side effect can perform in function because side effect mainly responsible for changing thing outside,outside var use responsible but we know pure function can't use thing from outside and also can't change any outside variable/args, eg api call,dom manipulation etc...
import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_CART_TO_STORE,
  ADD_PRODUCT_TO_STORE,
  ADD_TO_CART,
  DELETE_PRODUCT_FROM_STORE,
  SORT_CART_BY_PRICE,
  SORT_PRODUCTS_BY_PRICE,
  UN_SORT_CART_TO_NORMAL,
  UN_SORT_PRODUCTS_TO_NORMAL,
} from "../action";

//pure function are responsible for only for output based on arguments
const initialProductState = {
  allProducts: [],
  productsSorted: false,
};
//reducer responsible for state change/state return
function products(state = initialProductState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_STORE:
      return {
        ...state,
        allProducts: action.allProducts,
        sorted: false,
      };
    case SORT_PRODUCTS_BY_PRICE:
      const sortedProducts = state.allProducts.sort(function (a, b) {
        return a.price - b.price;
      });
      return {
        ...state,
        allProducts: sortedProducts,
        sorted: true,
      };
    case UN_SORT_PRODUCTS_TO_NORMAL:
      const unSortedProducts = state.allProducts.sort(function (a, b) {
        return a.id - b.id;
      });
      return {
        ...state,
        allProducts: unSortedProducts,
        sorted: false,
      };
    case DELETE_PRODUCT_FROM_STORE:
      // const index = state.allProducts.indexOf(action.product);
      const allProducts = state.allProducts.filter(
        (ele) => ele.id !== action.product.id
      );
      return {
        ...state,
        allProducts,
        sorted: false,
      };

    default:
      return {
        ...state,
      };
  }
}

// reducer for cart
//pure function are responsible for only for output based on arguments
const initialCartState = {
  cartProducts: [],
  cartSorted: false,
};
//reducer responsible for state change/state return
function cart(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: [action.product, ...state.cartProducts],
      };
    case ADD_CART_TO_STORE:
      return {
        ...state,
        cartProducts: [...action.cartProducts],
      };
    case SORT_CART_BY_PRICE:
      const sortedCart = state.cartProducts.sort(function (a, b) {
        return a.price - b.price;
      });
      return {
        ...state,
        cartProducts: sortedCart,
        cartSorted: true,
      };
    case UN_SORT_CART_TO_NORMAL:
      const unSortedCart = state.cartProducts.sort(function (a, b) {
        return a.id - b.id;
      });
      return {
        ...state,
        cartProducts: unSortedCart,
        cartSorted: false,
      };

    default:
      return {
        ...state,
      };
  }
}

export default combineReducers({
  products: products, //it callback it and pass state as state.key(allProduct)//here we set
  cart: cart,
}); //return an reducer func

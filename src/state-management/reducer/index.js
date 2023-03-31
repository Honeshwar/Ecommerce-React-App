//reducer are pure func,
//rules-->1)same input same output all time,
//rules-->2)only parameter of func can use that func,nothing from outside
//rules-->3)no side effect can perform in function because side effect mainly responsible for changing thing outside,outside var use responsible but we know pure function can't use thing from outside and also can't change any outside variable/args, eg api call,dom manipulation etc...

import {
  ADD_PRODUCT_TO_STORE,
  DELETE_PRODUCT_FROM_STORE,
  SORT_PRODUCTS_BY_PRICE,
  UN_SORT_PRODUCTS_TO_NORMAL,
} from "../action";

//pure function are responsible for only for output based on arguments
const InitialState = {
  products: [],
  sorted: false,
};
//reducer responsible for state change/state return
export function products(state = InitialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_STORE:
      return {
        ...state,
        products: action.products,
      };
    case SORT_PRODUCTS_BY_PRICE:
      const sortedProducts = state.products.sort(function (a, b) {
        return a.price - b.price;
      });
      return {
        ...state,
        products: sortedProducts,
        sorted: true,
      };
    case UN_SORT_PRODUCTS_TO_NORMAL:
      const unSortedProducts = state.products.sort(function (a, b) {
        return a.id - b.id;
      });
      return {
        ...state,
        products: unSortedProducts,
        sorted: false,
      };
    case DELETE_PRODUCT_FROM_STORE:
      // const index = state.products.indexOf(action.product);
      const products = state.products.filter(
        (ele) => ele.id !== action.product.id
      );
      return {
        ...state,
        products,
      };
    default:
      break;
  }
}

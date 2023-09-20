//reducer are pure func,
//rules-->1)same input same output all time,
//rules-->2)only parameter of func can use that func,nothing from outside
//rules-->3)no side effect can perform in function because side effect mainly responsible for changing thing outside,outside var use responsible but we know pure function can't use thing from outside and also can't change any outside variable/args, eg api call,dom manipulation etc...
import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_CART_TO_STORE,
  ADD_PRODUCTS_TO_STORE,
  DELETE_PRODUCT_FROM_STORE,
  SORT_PRODUCTS_BY_PRICE,
  UN_SORT_PRODUCTS_TO_NORMAL,
  UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS,
  ADD_USER_TO_STORE,
  TOGGLE_ADD_TO_CART,
  INCREMENT_TOTAL_CART_PRIZE,
  SET_TOTAL_CART_PRIZE,
  REMOVE_ALL_FROM_CART,
  // ADD_TO_CART,
  // REMOVE_PRODUCT_FROM_CART,
  // SORT_CART_BY_PRICE,
  // UN_SORT_CART_TO_NORMAL,
} from "../action";

//pure function are responsible for only for arguments based output
const initialProductState = {
  allProducts: [],
  isProductsSorted: false,
  isCartProductsSorted:false,
  totalPrize:0,
};
//reducer responsible for state change/state return
function products(state = initialProductState, action) {
  switch (action.type) {
    case ADD_PRODUCTS_TO_STORE:
      for (const e of action.allProducts) {
        if(!e.isCartProductsSorted){//undefined
          e.isProductInCart = false;
        }
      }
      return {
        ...state,
        allProducts: action.allProducts,
        isProductsSorted: false,
        isCartProductsSorted:false
      };
    case SORT_PRODUCTS_BY_PRICE:
      const sortedProducts = state.allProducts.sort(function (a, b) {
        return a.price - b.price;
      });
      return {
        ...state,
        allProducts: sortedProducts,
        productsSorted: true,
      };
    case UN_SORT_PRODUCTS_TO_NORMAL:
      const unSortedProducts = state.allProducts.sort(function (a, b) {
        return a.id - b.id;
      });
      return {
        ...state,
        allProducts: unSortedProducts,
        productsSorted: false,
      };
    case DELETE_PRODUCT_FROM_STORE:
      // const index = state.allProducts.indexOf(action.product);
      const allProducts = state.allProducts.filter(
        (ele) => ele.id !== action.product.id
      );
      return {
        ...state,
        allProducts,
        productsSorted: false,
      };
    case ADD_CART_TO_STORE: //cart and products
      return {
        ...state,
        allProducts: [...action.allProducts],
        cartSorted: false,
      };
    case UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS:
      const Products = state.allProducts.map((element) => {
        if (element.id === action.product.id) {
          return action.product;
        }
        return element;
      });

      return {
        ...state,
        allProducts: Products,
      };
    case TOGGLE_ADD_TO_CART:
        const products = state.allProducts.map((e)=>{
            if(action.product.id === e.id){
              e.isProductInCart = ! e.isProductInCart;
            }
            return e;
        })
        return {
          ...state,
         allProducts:products
        };
    case SET_TOTAL_CART_PRIZE:
      return {
        ...state,
          totalPrize:action.newTotal
      };
    case REMOVE_ALL_FROM_CART:
        const p = state.allProducts.map((product)=>{
          product.isProductInCart = false;
          return product;
        })
      return {
        ...state,
         allProducts:p
      };
      
      default:
      return {
        ...state,
      };
  }
}

// reducer for user login
const initialUserState = {
  data:{}
};
//reducer responsible for state change/state return
function user(state = initialUserState, action) {
  switch (action.type) {
    case ADD_USER_TO_STORE:
      return {
       data:{...action.userData}
      };
    //switch case have only one local scope inside switch(){...}
    default:
      return {
        ...state,
      };
  }
}

export default combineReducers({
  products: products, //it callback it and pass state as state.key(allProduct)//here we set
  user: user,

});


//return an reducer func
  // // reducer for cart
  // const initialCartState = {
  //   cartProducts: [],
  //   cartSorted: false,
  // };
  // //reducer responsible for state change/state return
  // function cart(state = initialCartState, action) {
  //   switch (action.type) {
  //     case ADD_CART_TO_STORE:
  //       return {
  //         ...state,
  //         cartProducts: [...action.cartProducts],
  //         cartSorted: false,
  //       };
  //     case SORT_CART_BY_PRICE:
  //       const sortedCart = state.cartProducts.sort(function (a, b) {
  //         return a.price - b.price;
  //       });
  //       return {
  //         ...state,
  //         cartProducts: sortedCart,
  //         cartSorted: true,
  //       };
  //     case UN_SORT_CART_TO_NORMAL:
  //       const unSortedCart = state.cartProducts.sort(function (a, b) {
  //         return a.id - b.id;
  //       });
  //       return {
  //         ...state,
  //         cartProducts: unSortedCart,
  //         cartSorted: false,
  //       };
  //     case ADD_TO_CART:
  //       return {
  //         ...state,
  //         cartProducts: [action.product, ...state.cartProducts],
  //         cartSorted: false,
  //       };
  //     case REMOVE_PRODUCT_FROM_CART:
  //       const cartProducts = state.cartProducts.filter(
  //         (e) => e.id !== action.productId
  //       );
  //       return {
  //         ...state,
  //         cartProducts,
  //         cartSorted: false,
  //       };
  //     case UPDATE_PRODUCT_IN_STORE_IN_ALL_PRODUCTS:
  //       const Products = state.cartProducts.map((element) => {
  //         if (element.id === action.product.id) {
  //           return action.product;
  //         }
  //         return element;
  //       });
  
  //       return {
  //         ...state,
  //         cartProducts: Products,
  //       };
  
  //     //switch case have only one local scope inside switch(){...}
  //     default:
  //       return {
  //         ...state,
  //       };
  //   }
  // }

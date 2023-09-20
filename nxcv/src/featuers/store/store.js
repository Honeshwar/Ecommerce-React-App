import Store , { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../slices/productSlice";

// const store = Store.configureStore
const store = configureStore({
    reducer:{
        products:productsReducer
    },
    devTools:true,
    
});
export default store;
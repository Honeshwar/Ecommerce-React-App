//redux is an js toolkit we use it anywhere like react js,vew js,angular js... ,
//it only need when state become difficult to manage
//redux is an js toolkit that help us/use for state management

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { products } from "../reducer";

//create an store
export const store = configureStore({
  reducer: products,
  middleware: [thunk, logger],
  preloadedState: {
    products: [],
    sorted: false,
  },
  // devTools:true,
  // enhancers:[]
});

import { createSlice } from "@reduxjs/toolkit";

const initialProductState = [];

const ProductSlice = createSlice({
    initialState:initialProductState,
    name:"Products",
    reducers:{
        //action type:reducer func , action creator is automatically created by reduxjs/toolkit
        add:(products,payload)=>{
            products = [...payload,...products];
        }
    }
});

// toolkit create kar k de rahi hai , internally same create as we do in redux do 
//(by ,action-->action creator-->reducer -->store / createStore)
// reduxjs/toolkit internally uses createStore, abh less line of code we have to write
export const productsAction = ProductSlice.actions;
export const productsReducer = ProductSlice.reducer;


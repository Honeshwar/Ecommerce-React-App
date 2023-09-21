import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/index.css";
import { Home, CartPage } from "../pages";
import Details from "../pages/Details";
import { addProductsHandler, addProductsToStore } from "../state-management/action";
import { useEffect } from "react";
import { connect } from "react-redux";
import {Navbar, Error, Profile} from "./index.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { get } from "../api";


function App({dispatch}) {
 //using side effects
 useEffect(() => {

  const fetch =  async ()=>{

     let PRODUCTS = localStorage.getItem("PRODUCTS");
     if(PRODUCTS){
       dispatch(addProductsToStore(JSON.parse(PRODUCTS))); 
       
     }else{
 
       const response = await get(); 
       if (response.success) {
           dispatch(addProductsToStore(response.products)); 
       }
       // await dispatch(addProductsHandler());
       //add products to localstorage
       localStorage.setItem("PRODUCTS",JSON.stringify(response.products));
       //add user to localstorage
       // localStorage.setItem(USER,JSON.stringify(user));
   }
   }
   fetch();
 }, []);

  return (
    <div className="App" >
       <ToastContainer autoClose={3000}/>
      <BrowserRouter>
        <Navbar />
        {/*first reason if use any routing functionality in  navbar so enclosed each comp (that want want to use this functionality)
        inside BrowserRouter(context through provide something that routing need)
        second reason , i not write comp inside routes because we don't need that on each routing navbar comp load again (vdom) */}
        <Routes>
          {/*it help in finding exact path/url by default */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route
            path="/product-details/:productId"
            element={<Details />}
          ></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    products: state?.products,
    user: state?.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const WrapperAppComponent = connect(mapStateToProps, mapDispatchToProps)(App); //return Wrapper around AppComponent
export default WrapperAppComponent;

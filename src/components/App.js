import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import "../styles/index.css";
import { Home, AddToCart } from "../pages";
import Details from "../pages/Details";
import {
  addProductsAndCartToStore,
  getProductAndCart,
} from "../state-management/action";
import { useEffect } from "react";
import { connect } from "react-redux";

function Error() {
  return (
    <h1 style={{ textAlign: "center", color: "whitesmoke" }}>
      Error 404,page not exist
    </h1>
  );
}
function Profile() {
  return <h1 style={{ textAlign: "center", color: "white" }}>Profile page</h1>;
}

function App({ dispatch }) {
  useEffect(() => {
    dispatch(getProductAndCart());
  }, [dispatch]);

  return (
    <div className="App" style={{ backgroundColor: "cadetblue" }}>
      <BrowserRouter>
        <Navbar />
        {/*first reason if use any routing functionality in  navbar so enclosed each comp (that want want to use this functionality)
        inside BrowserRouter(context through provide something that routing need)
        second reason , i not write comp inside routes because we don't need that on each routing navbar comp load again (vdom) */}
        <Routes>
          {/*it help in finding exact path/url by default */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<AddToCart />}></Route>
          <Route
            path="/product-details/:productId"
            element={<Details />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    products: state?.products,
    cart: state?.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const WrapperAppComponent = connect(mapStateToProps, mapDispatchToProps)(App); //return Wrapper around AppComponent
export default WrapperAppComponent;

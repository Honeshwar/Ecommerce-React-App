import React from "react";
import { connect } from "react-redux";

import { SortBy, Product } from "../components";
import styles from "../styles/home.module.css";
import NavigationTopAndBottom from "../components/NavigationTopAndBottom";
import Placeholders from "../components/Placeholders";
import { Link } from "react-router-dom";
// import { addProductsHandler, addProductsToStore } from "../state-management/action";
// import { get } from "../api";


function Home({ products, dispatch }) {
  const { allProducts, productsSorted } = products;
  const dummyProducts = [1,2,3,4,5,6,7,8,9,10];

   

  return (
    <>
    <NavigationTopAndBottom/>
    <div className={styles.products} style={{ backgroundColor: "cadetblue" }}>
      <SortBy productsSorted={productsSorted} dispatch={dispatch} />
      <div className={styles.listOfProducts}>
       {!allProducts && allProducts.length === 0?
        dummyProducts.map((e)=>( <Placeholders key={e}/>))
        :
        allProducts?.map((product, index) => (
          <Product
            key={index}
            product={product}
            dispatch={dispatch}
            totalPrize={products.totalPrize} 
          />
        ))
       }
      </div>
    </div>
    {/* <TotalPrize totalPrize={products.totalPrize} /> */}
    {/* <!-- Footer --> */}
 
    <footer className="text-center text-lg-start text-muted  mt-3" id="footer" style={{backgroundColor:"rgb(0, 71, 73,.4)"}}>
      {/* <!-- Section: Links  --> */} 
      <section className="">
        <div className="container text-center text-md-start pt-4 pb-4">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-12 col-lg-3 col-sm-12 mb-2">
              {/* <!-- Content --> */}
              <Link to={"/"} target="_blank" className="text-white h2">
                eCommerce
              </Link>
              <p className="mt-1 text-white">
                © 2023 Copyright: eCommerce.com
                {/* <br/>ecommerce-react-app-1.netlify.app */}
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-6 col-sm-4 col-lg-2">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase text-white fw-bold mb-2">
                Store
              </h6>
              <ul className="list-unstyled mb-4">
                <li><a className="text-white-50" href="#footer">About us</a></li>
                <li><a className="text-white-50" href="#footer">Find store</a></li>
                <li><a className="text-white-50" href="#footer">Categories</a></li>
                <li><a className="text-white-50" href="#footer">Blogs</a></li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-6 col-sm-4 col-lg-2">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase text-white fw-bold mb-2">
                Information
              </h6>
              <ul className="list-unstyled mb-4">
                <li><a className="text-white-50" href="#footer">Help center</a></li>
                <li><a className="text-white-50" href="#footer">Money refund</a></li>
                <li><a className="text-white-50" href="#footer">Shipping info</a></li>
                <li><a className="text-white-50" href="#footer">Refunds</a></li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-6 col-sm-4 col-lg-2">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase text-white fw-bold mb-2">
                Support
              </h6>
              <ul className="list-unstyled mb-4">
                <li><a className="text-white-50" href="#footer">Help center</a></li>
                <li><a className="text-white-50" href="#footer">Documents</a></li>
                <li><a className="text-white-50" href="#footer">Account restore</a></li>
                <li><a className="text-white-50" href="#footer">My orders</a></li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-12 col-sm-12 col-lg-3">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
              <p className="text-white">Stay in touch with latest updates about our products and offers</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2"/>
                <button className="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  Join
                </button>
              </div>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      <div className="">
        <div className="container">
          <div className="d-flex justify-content-between py-4 border-top">
            {/* <!--- payment ---> */}
            <div>
              <i className="fab fa-lg fa-cc-visa text-white"></i>
              <i className="fab fa-lg fa-cc-amex text-white"></i>
              <i className="fab fa-lg fa-cc-mastercard text-white"></i>
              <i className="fab fa-lg fa-cc-paypal text-white"></i>
            </div>
            {/* <!--- payment ---> */}

            {/* <!--- language selector ---> */}
            <div className="dropdown dropup">
              <a className="dropdown-toggle text-white" href="#footer" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="flag-united-kingdom flag m-0 me-1"></i>English </a>

              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-united-kingdom flag"></i>English <i className="fa fa-check text-success ms-2"></i></a>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-poland flag"></i>Polski</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-china flag"></i>中文</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-japan flag"></i>日本語</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-germany flag"></i>Deutsch</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-france flag"></i>Français</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-spain flag"></i>Español</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-russia flag"></i>Русский</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#footer"><i className="flag-portugal flag"></i>Português</a>
                </li>
              </ul>
            </div>
            {/* <!--- language selector ---> */}
          </div>
        </div>
      </div>
    </footer>
    {/* <!-- Footer --> */}
    </>
  );
}
function mapStateToProps(state) {
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

const WrapperHomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home); //return Wrapper around AppComponent
export default WrapperHomeComponent;

// WrapperAppComponent pass an state,dispatch as props to App component(as children of it)
//connect m automatically pass store,enclose connect inside an provider
//connect func also subscribe to store,state change it re-render/pass again props/do callback again

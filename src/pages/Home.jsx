import React from "react";
import { connect } from "react-redux";

import { SortBy, Product } from "../components";
import styles from "../styles/home.module.css";
import NavigationTopAndBottom from "../components/NavigationTopAndBottom";
import Placeholders from "../components/Placeholders";
import { Link } from "react-router-dom";


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
 
    <footer class="text-center text-lg-start text-muted  mt-3" id="footer" style={{backgroundColor:"rgb(0, 71, 73,.4)"}}>
      {/* <!-- Section: Links  --> */} 
      <section class="">
        <div class="container text-center text-md-start pt-4 pb-4">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-12 col-lg-3 col-sm-12 mb-2">
              {/* <!-- Content --> */}
              <Link to={"/"} target="_blank" class="text-white h2">
                eCommerce
              </Link>
              <p class="mt-1 text-white">
                © 2023 Copyright: eCommerce.com
                {/* <br/>ecommerce-react-app-1.netlify.app */}
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-6 col-sm-4 col-lg-2">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase text-white fw-bold mb-2">
                Store
              </h6>
              <ul class="list-unstyled mb-4">
                <li><a class="text-white-50" href="#footer">About us</a></li>
                <li><a class="text-white-50" href="#footer">Find store</a></li>
                <li><a class="text-white-50" href="#footer">Categories</a></li>
                <li><a class="text-white-50" href="#footer">Blogs</a></li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-6 col-sm-4 col-lg-2">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase text-white fw-bold mb-2">
                Information
              </h6>
              <ul class="list-unstyled mb-4">
                <li><a class="text-white-50" href="#footer">Help center</a></li>
                <li><a class="text-white-50" href="#footer">Money refund</a></li>
                <li><a class="text-white-50" href="#footer">Shipping info</a></li>
                <li><a class="text-white-50" href="#footer">Refunds</a></li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-6 col-sm-4 col-lg-2">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase text-white fw-bold mb-2">
                Support
              </h6>
              <ul class="list-unstyled mb-4">
                <li><a class="text-white-50" href="#footer">Help center</a></li>
                <li><a class="text-white-50" href="#footer">Documents</a></li>
                <li><a class="text-white-50" href="#footer">Account restore</a></li>
                <li><a class="text-white-50" href="#footer">My orders</a></li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-12 col-sm-12 col-lg-3">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
              <p class="text-white">Stay in touch with latest updates about our products and offers</p>
              <div class="input-group mb-3">
                <input type="email" class="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2"/>
                <button class="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
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

      <div class="">
        <div class="container">
          <div class="d-flex justify-content-between py-4 border-top">
            {/* <!--- payment ---> */}
            <div>
              <i class="fab fa-lg fa-cc-visa text-white"></i>
              <i class="fab fa-lg fa-cc-amex text-white"></i>
              <i class="fab fa-lg fa-cc-mastercard text-white"></i>
              <i class="fab fa-lg fa-cc-paypal text-white"></i>
            </div>
            {/* <!--- payment ---> */}

            {/* <!--- language selector ---> */}
            <div class="dropdown dropup">
              <a class="dropdown-toggle text-white" href="#footer" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i class="flag-united-kingdom flag m-0 me-1"></i>English </a>

              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-united-kingdom flag"></i>English <i class="fa fa-check text-success ms-2"></i></a>
                </li>
                <li><hr class="dropdown-divider"/></li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-poland flag"></i>Polski</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-china flag"></i>中文</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-japan flag"></i>日本語</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-germany flag"></i>Deutsch</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-france flag"></i>Français</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-spain flag"></i>Español</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-russia flag"></i>Русский</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#footer"><i class="flag-portugal flag"></i>Português</a>
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

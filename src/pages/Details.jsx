import React, { useState } from "react";
import {  useParams } from "react-router-dom";


import {
  changeProductQuantity,
  // setCartsTotalPrize,
  toggleIsProductInCart,
} from "../state-management/action";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { TotalPrize } from "../components";

function Details({ products, cart, dispatch }) {
  let totalPrize = products.totalPrize;
  let { productId } = useParams();
  productId = parseInt(productId); //because params pass as string


  let { allProducts } = products;
  const findProduct = allProducts?.filter((e) => e.id === productId);
  let product;
  if (findProduct?.length === 1) {
    product = findProduct[0];
  }
  const [price, setPrice] = useState(product.price);
  
  //add to cart
  const addToCartHandler = () => {
    dispatch(toggleIsProductInCart(product)); //Add Product To Cart In Api And Redux Store Handler
    toast.success(" ⛱️Successfully Added Product To Cart 😛");
  };

  //remove to cart
  const removefromCartHandler = () => {
    dispatch(toggleIsProductInCart(product)); //Add Product To Cart In Api And Redux Store Handler
    toast.success("🔻Successfully Remove Product From Redux Cart😫")
  };


  const [quantity, setQuantity] = useState(product.quantity);
  //increment quantity
  const increaseQuantity = ()=>{
    setQuantity(quantity+1);// asynchronou call i don;t know update quantity
    setPrice(product.price * (quantity+1));
    // dispatch(setCartsTotalPrize(totalPrize + product.price));

  }
  //increment quantity
  const decreaseQuantity = ()=>{
    setQuantity(quantity === 0?0:quantity-1);
    if(quantity-1 < 0)return;
    let p = product.price * (quantity-1);
    setPrice(p);
    if(quantity === 0)return;
    // dispatch(setCartsTotalPrize(totalPrize - product.price));
  }

const purchasedDoneHandler = ()=>{
  if(!product.isProductInCart)return;
  // dispatch(setCartsTotalPrize(totalPrize - price));
  dispatch(toggleIsProductInCart(product));
} 

  // add / remove product from cart
  const toggleIsProductInCartHandler = async () => {
    await dispatch(toggleIsProductInCart(product)); //Add Product To Cart In Api And Redux Store Handler
    if(product.isProductInCart)// asyn call state/dispatch call abhi it not happen wait in cb queue
    {
      toast.success("⛱️Successfully Added Product ");
      dispatch(changeProductQuantity(product.id,quantity));
    }
    else{
      toast.success("🔻Successfully Remove Product")
    } 
  };


  return (

<>
{/* // <!-- content --> */}
<section className="py-5 border border-solid" >
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className=" mb-3 d-flex justify-content-center ">
          <a data-fslightbox="mygalley" className="rounded-4" target="_blank" rel="noreferrer" data-type="image" href={product.thumbnail}>
            <img alt={"product thumbnail"} style={{maxWidth:"450px", height: "400px", margin: "auto", filter: "invert(0)",boxShadow:"inset 0 0 5px 4px lightgray"}} className="rounded-4 fit" src={product.thumbnail}/>
          </a>
        </div>
       <div className=" mt-5 mb-5 d-flex justify-content-center ">
        <TotalPrize totalPrize={price}/>
       </div>
      </aside>
      <main className="col-lg-6 ">
        <div className="ps-lg-3">
          <h4 className="title text-dark ">
           {product.title}
           {/* <br/>
            Casual Hoodie */}
          </h4> 
          <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2 ">
              <i className="fa fa-star "></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span className="ms-1">
                4.5
              </span>
            </div>
            <span className="text text-white"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span className="text-success ms-2">In stock</span>
          </div>

          <div className="mb-3">
            <span className="h5 text-white">{"Rs "}{product.price}</span>
          </div>

          <p className="text-white">
            {product.description}
          </p>

        
          <hr/>

          <div className="row mb-4">
            {/* <!-- col.// --> */}
            <div className="col-md-6 col-6 mb-3">
              <label className="mb-2 d-block fs-5 text-dark">Quantity</label>
              <ul className="pagination" style={{paddingTop:"10px"}}>
        <li className="page-item" onClick={decreaseQuantity}>
          <button className="page-link">
          <i className="fas fa-minus" style={{fontSize:"10px"}}></i>
          </button>
        </li>
        <li className="page-item">
          <span className="page-link " >{quantity}</span>
        </li>
        <li className="page-item"  onClick={increaseQuantity}>
          <button className="page-link">
           <i className="fas fa-plus "style={{fontSize:"10px"}}></i>
          </button>
        </li>
      </ul> 
    <div style={{display:"flex"}}>
      <button type="button"data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary"style={{width:"fit-content",height:"fit-content",marginRight:"15px"}} >{"Buy "} 
        <img
          style={{
            width: "30px",
            height: "30px",
            marginLeft: "0px",
          }}
          src="https://cdn-icons-png.flaticon.com/128/3500/3500833.png"
          alt="Remove From Cart"
        />
      </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Purchased</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={purchasedDoneHandler}></button>
              </div>
              <div className="modal-body" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img alt="purchased done" style={{maxWidth:"350px"}} className="w-100 m-auto d-flex" src="https://st2.depositphotos.com/1688079/11277/i/450/depositphotos_112771578-stock-photo-done-validate-icon-soft-green.jpg"/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={purchasedDoneHandler}>Close</button>
              </div>
            </div>
          </div>
        </div>
      {product.isProductInCart?
      <button type="button" className="btn btn-danger" style={{width:"fit-content",height:"fit-content"}} onClick={toggleIsProductInCartHandler}>{"Remove "} 
      <img
        style={{
          width: "30px",
          height: "30px",
          marginLeft: "0px",
        }}
        src="https://cdn-icons-png.flaticon.com/128/5735/5735150.png"
        alt="Remove From Cart"
      />
      </button>
      :
      <button type="button" className="btn btn-warning" style={{width:"fit-content",height:"fit-content"}} onClick={toggleIsProductInCartHandler}>{"Add To Cart "} 
      <img
        style={{
          width: "30px",
          height: "30px",
          marginLeft: "0px",
        }}
        src="https://cdn-icons-png.flaticon.com/128/9486/9486994.png"
        alt="Remove From Cart"
      />
    </button>
      }
   </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  </div>
</section>
{/* <!-- content --> */}

{/* <!-- Footer -->  classNameName = bg-dark*/}
<footer style={{backgroundColor:"rgb(0, 71, 73,.4)"}} className="text-center text-lg-start text-muted  mt-3" id="footer">
  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start pt-4 pb-4">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-12 col-lg-3 col-sm-12 mb-2">
          {/* <!-- Content --> */}
          <a href="https://mdbootstrap.com/" target="_blank" rel="noreferrer" className="text-white h2">
            eCommerce
          </a>
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

const WrapperDetailsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details); //return Wrapper around AppComponent

export default WrapperDetailsComponent;
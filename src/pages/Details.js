import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { success } from "react-toast-notification";

import {
  TOGGLE_ADD_TO_CART,
  setCartsTotalPrize,
  toogleAddToCart,
  toogleAddToCartHandler
} from "../state-management/action";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { TotalPrize } from "../components";

function Details({ products, cart, dispatch }) {
  let totalPrize = products.totalPrize;
  let { productId } = useParams();
  productId = parseInt(productId); //because params pass as string
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("No Title");
  const [description, setDescription] = useState("No Description");
  // const [price, setPrice] = useState("No price");
  // const [rating, setRating] = useState("No Rating");

 

  ////////////
  let { allProducts } = products;
  const findProduct = allProducts?.filter((e) => e.id === productId);
  let product;
  if (findProduct?.length === 1) {
    product = findProduct[0];
  }
  const [price, setPrice] = useState(product.price);
  //cart
  // let ProductPresentInCart = cart.cartProducts?.indexOf(product);

  //set up state value if it is not set up yet
  // if (title === "No Title" && product) {
  //   setTitle(product?.title);
  //   setDescription(product?.description);
  //   setPrice(product?.price);
  //   setRating(product?.rating);
  // }

  //delete
  // const deleteProductHandler = () => {
  //   dispatch(deleteProductFromApiAndReduxStore(product)); //this dispatch not execute MW return in between call se,to make action asynchronous
  //   // success("🔻Successfully Remove Product From Redux Store😫", {
  //   //   title: "Remove Product Redux Store",
  //   //   delay: "7000",
  //   //   autoHide: false,
  //   // });
  //   toast.success("🔻Successfully Remove Product From Redux Store😫");
  // };

  //add to cart
  const addToCartHandler = () => {
    dispatch(toogleAddToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    // success(" ⛱️Successfully Added Product To Cart 😛", {
    //   title: "Add TO Cart",
    //   delay: "7000",
    //   autoHide: false,
    // });
    toast.success(" ⛱️Successfully Added Product To Cart 😛");
  };

  //remove to cart
  const removeProductToCartHandler = () => {
    dispatch(toogleAddToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    // success("🔻Successfully Remove Product From  Cart 😫", {
    //   title: "Remove Product From  Cart",
    //   delay: "7000",
    //   autoHide: false,
    // });
    toast.success("🔻Successfully Remove Product From Redux Cart😫")
  };

  // const saveEditHandler = () => {
  //   //cart also having this product or not
  //   let inCart = false;
  //   const index = cart.cartProducts.indexOf(product);
  //   if (index !== -1) {
  //     inCart = true;
  //   }

  //   //no need to stringify because we done at custom fetch func,(api call)
  //   const UpdatedProduct = {
  //     title,
  //     description,
  //     price,
  //     rating,
  //   };

  //   dispatch(editProduct(inCart, product.id, UpdatedProduct)); //edit Product In Api And Redux Store Handler
  //   // success("😙Successfully update Product 🌝 👇😛  ", {
  //   //   title: "UPDATE",
  //   //   delay: "7000",
  //   //   autoHide: false,
  //   // });
   

  //   setIsEdit(false);
  // };

  const [quantity, setQuantity] = useState(1);
  //increment quantity
  const increaseQuantity = ()=>{
    setQuantity(quantity+1);// asynchronou call i don;t know update quantity
    setPrice(product.price * (quantity+1));
    dispatch(setCartsTotalPrize(totalPrize + product.price));

  }
  //increment quantity
  const decreaseQuantity = ()=>{
    setQuantity(quantity == 0?0:quantity-1);
    if(quantity-1 < 0)return;
    let p = product.price * (quantity-1);
    setPrice(p);
    if(quantity == 0)return;
    dispatch(setCartsTotalPrize(totalPrize - product.price));
  }

const removeProductFromCart = ()=>{
  dispatch(setCartsTotalPrize(totalPrize - price));
  dispatch(toogleAddToCart(product));
}

  return (

<>
{/* // <!-- content --> */}
<section class="py-5 " >
  <div class="container">
    <div class="row gx-5">
      <aside class="col-lg-6">
        <div class=" mb-3 d-flex justify-content-center ">
          <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href={product.thumbnail}>
            <img style={{maxWidth:"450px", height: "400px", margin: "auto", filter: "invert(0)",boxShadow:"inset 0 0 5px 4px lightgray"}} class="rounded-4 fit" src={product.thumbnail}/>
          </a>
        </div>
       <div class=" mt-5 mb-5 d-flex justify-content-center ">
        <TotalPrize totalPrize={price}/>
       </div>
      </aside>
      <main class="col-lg-6 ">
        <div class="ps-lg-3">
          <h4 class="title text-dark ">
           {product.title}
           {/* <br/>
            Casual Hoodie */}
          </h4> 
          <div class="d-flex flex-row my-3">
            <div class="text-warning mb-1 me-2 ">
              <i class="fa fa-star "></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span class="ms-1">
                4.5
              </span>
            </div>
            <span class="text text-white"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span class="text-success ms-2">In stock</span>
          </div>

          <div class="mb-3">
            <span class="h5 text-white">{"Rs "}{product.price}</span>
          </div>

          <p className="text-white">
            {product.description}
          </p>

        
          <hr/>

          <div class="row mb-4">
            {/* <!-- col.// --> */}
            <div class="col-md-6 col-6 mb-3">
              <label class="mb-2 d-block fs-5 text-dark">Quantity</label>
              {/* <div class="input-group mb-3" style={{width: "170px"}}>
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i class="fas fa-minus"></i>
                </button>
                <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
          <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
          <a href="#" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> Save </a> */}
              <ul class="pagination" style={{paddingTop:"10px"}}>
        <li class="page-item" onClick={decreaseQuantity}>
          <button class="page-link">
          <i class="fas fa-minus" style={{fontSize:"10px"}}></i>
          </button>
        </li>
        <li class="page-item">
          <span class="page-link " >{quantity}</span>
        </li>
        <li class="page-item"  onClick={increaseQuantity}>
          <button class="page-link">
           <i class="fas fa-plus "style={{fontSize:"10px"}}></i>
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

      {/* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary p-3 mt-3" onClick={proceedToPay}>
      Proceed To Pay
        </button> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Purchased</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={removeProductFromCart}></button>
              </div>
              <div class="modal-body">
                <img  className=" h-100 m-auto d-flex" src="https://st2.depositphotos.com/1688079/11277/i/450/depositphotos_112771578-stock-photo-done-validate-icon-soft-green.jpg"/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={removeProductFromCart}>Close</button>
              </div>
            </div>
          </div>
        </div>





      {product.isProductInCart?
      <button type="button" class="btn btn-danger" style={{width:"fit-content",height:"fit-content"}} onClick={removeProductToCartHandler}>{"Remove "} 
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
      <button type="button" class="btn btn-warning" style={{width:"fit-content",height:"fit-content"}} onClick={addToCartHandler}>{"Add To Cart "} 
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

{/* <!-- Footer -->  className = bg-dark*/}
<footer style={{backgroundColor:"rgb(0, 71, 73,.4)"}} class="text-center text-lg-start text-muted  mt-3" id="footer">
  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start pt-4 pb-4">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-12 col-lg-3 col-sm-12 mb-2">
          {/* <!-- Content --> */}
          <a href="https://mdbootstrap.com/" target="_blank" class="text-white h2">
            eCommerce
          </a>
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

const WrapperDetailsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details); //return Wrapper around AppComponent

export default WrapperDetailsComponent;

/**
 * 
 * <div
      style={{
        width: "100%",
        height: "86%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        marginTop: "10px",
        // marginBottom: "30px",
        backgroundImage: `${product?.thumbnail}`,
        backgroundColor: "cadetblue",
      }}
    >
      {product ? (
        <div
          className=""
          style={{
            width: "55%",
            height: "100%",
            marginBottom: "10px",
            boxShadow: " 0 0 2px 1px white",
            borderRadius: "20px",
            marginTop: "15px",
            padding: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            backgroundColor: "aliceblue",
          }}
        >
          <Link
            to={`/product-details/${product.id}`}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "gainsboro",
            }}
          >
            <img
              style={{ width: "60%", maxHeight: "250px" }}
              src={product.thumbnail}
              className="card-img-top"
              alt={product.title}
            />
          </Link>
          <div className="" style={{ marginTop: "20px", marginBottom: "10px" }}>
            <h5 className="card-title">
              {!isEdit ? (
                `${product?.title}`
              ) : (
                <>
                  {`Title : `}{" "}
                  <input
                    type="text"
                    style={{ outline: "none" }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </>
              )}
            </h5>
            <p
              className="card-text"
              style={{ color: "gray", marginTop: "10px" }}
            >
              {!isEdit ? (
                `${product?.description}`
              ) : (
                <>
                  <textarea
                    cols="50"
                    rows={3}
                    type="text"
                    style={{ outline: "none" }}
                    // defaultValue={product?.description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <span
                    style={{ color: "black", fontSize: "1.2rem" }}
                  >{`   (description ) `}</span>
                </>
              )}
            </p>
          </div>
          <ul className="list-group ">
            <li className="list-group-item ">
              Price:
              <small style={{ color: "red" }}>
                {" Rs "}{" "}
                {!isEdit ? (
                  `${product?.price}`
                ) : (
                  <input
                    type="number"
                    style={{ outline: "none" }}
                    // defaultValue={product?.price}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                )}
              </small>
            </li>
            <li className="list-group-item ">
              Rating:
              <small className="" style={{ color: "yellowgreen" }}>
                {!isEdit ? (
                  `  ${product?.rating}/5 `
                ) : (
                  <input
                    type="number"
                    style={{ outline: "none" }}
                    // value={`${product?.rating}`}
                    // defaultValue={product?.rating}
                    max={5}
                    min={0}
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                )}
              </small>
            </li>
          </ul>
          <div
            className=""
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {isEdit ? (
              <>
                {" "}
                <button
                  onClick={saveEditHandler}
                  className="card-link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                    marginLeft: "10px",
                    backgroundColor: "aliceblue",
                    border: "none",
                  }}
                >
                  {` Save `}
                  <img
                    style={{ width: "25px", height: "25px", marginLeft: "0px" }}
                    src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
                    alt="edit product details"
                  />
                </button>
                <button
                  onClick={() => setIsEdit(false)}
                  className="card-link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                    marginRight: "10px",
                    backgroundColor: "aliceblue",
                    border: "none",
                  }}
                >
                  Cancel
                  <img
                    style={{ width: "35px", height: "35px", marginLeft: "0px" }}
                    src="https://cdn-icons-png.flaticon.com/128/10174/10174029.png"
                    alt="delete product"
                  />
                </button>
              </>
            ) : (
              <>
                {ProductPresentInCart === -1 ? (
                  <button
                    onClick={AddToCartHandler}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "5px",
                      cursor: "pointer",
                      backgroundColor: "aliceblue",
                      border: "none",
                    }}
                  >
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "0px",
                      }}
                      src="https://cdn-icons-png.flaticon.com/128/891/891407.png"
                      alt="Add To Cart"
                    />
                    {` Add To Cart `}
                  </button>
                ) : (
                  <button
                    onClick={RemoveProductToCartHandler}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "5px",
                      cursor: "pointer",
                      backgroundColor: "aliceblue",
                      border: "none",
                    }}
                  >
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "0px",
                      }}
                      src="https://cdn-icons-png.flaticon.com/128/5952/5952781.png"
                      alt="Add To Cart"
                    />
                    {` Remove From To Cart `}
                  </button>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",

                    width: "25%",
                  }}
                >
                  <button
                    onClick={() => setIsEdit(true)}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                      backgroundColor: "aliceblue",
                      border: "none",
                    }}
                  >
                    {` Edit `}
                    {/**for space 
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "0px",
                      }}
                      src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
                      alt="edit product details"
                    />
                  </button>
                  <button
                    onClick={deleteProductHandler}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                      backgroundColor: "aliceblue",
                      border: "none",
                    }}
                  >
                    Delete
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        marginLeft: "0px",
                      }}
                      src="https://cdn-icons-png.flaticon.com/128/10174/10174029.png"
                      alt="delete product"
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <h3 style={{ color: "white" }}>Product Is Removed...</h3>
          <Link to="/" className="btn btn-primary">
            Go Back To Home
          </Link>
        </>
      )}
    </div>
 
    **/
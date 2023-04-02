import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { success } from "react-toast-notification";

import {
  deleteProductFromApiAndReduxStore,
  AddProductToCart,
  editProduct,
  removeProductFromCart,
} from "../state-management/action";
import { connect } from "react-redux";

function Details({ products, cart, dispatch }) {
  const { productId } = useParams();

  //loosely type language JS var a=1,a="das",a=false,a=33.3,.....,on run time js compiler define type and allocate that type storage to variable
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("No Title");
  const [description, setDescription] = useState("No Description");
  const [price, setPrice] = useState("No price");
  const [rating, setRating] = useState("No Rating");

  ////////////
  console.log("product id", productId);
  let { allProducts } = products;
  console.log(
    "connect give your newly state on each state change",
    products,
    cart
  );

  const findProduct = allProducts?.filter((e) => e.id == productId);
  let product;
  if (findProduct?.length === 1) {
    product = findProduct[0];
  }
  console.log("got product in all product", findProduct);

  //cart
  // let ProductPresentInCart = cart.cartProducts?.filter((product) => product.id == productId);
  let ProductPresentInCart = cart.cartProducts?.indexOf(product);
  console.log(ProductPresentInCart);
  // ProductPresentInCart = ProductPresentInCart.length;

  //set up state value if it is not set up yet
  if (title === "No Title" && product) {
    setTitle(product?.title);
    setDescription(product?.description);
    setPrice(product?.price);
    setRating(product?.rating);
  }

  //delete
  const deleteProductHandler = () => {
    dispatch(deleteProductFromApiAndReduxStore(product)); //this dispatch not execute MW return in between call se,to make action asynchronous
    success("Successfully Remove Product From Redux Store", {
      title: "Remove Product Redux Store",
      delay: "7000",
      autoHide: false,
    });
  };

  //add to cart
  const AddToCartHandler = () => {
    dispatch(AddProductToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    success(" ⛱️Successfully Added Product To Cart", {
      title: "Add TO Cart",
      delay: "7000",
      autoHide: false,
    });
  };

  //remove to cart
  const RemoveProductToCartHandler = () => {
    dispatch(removeProductFromCart(product.id)); //Add Product To Cart In Api And Redux Store Handler
    success("⛱️Successfully Remove Product From  Cart", {
      title: "Remove Product From  Cart",
      delay: "7000",
      autoHide: false,
    });
  };

  const saveEditHandler = () => {
    //cart also having this product or not
    let inCart = false;
    const index = cart.cartProducts.indexOf(product);
    if (index !== -1) {
      inCart = true;
    }
    //no need to stringify because we done at custom fetch func,(api call)
    const UpdatedProduct = {
      //   id: product.id,
      title,
      description,
      price,
      rating,
      //   thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    };
    console.log("edited/updated product ", UpdatedProduct);
    dispatch(editProduct(inCart, product.id, UpdatedProduct)); //edit Product In Api And Redux Store Handler
    success("😙Successfully update Product 🌝 👇  ", {
      title: "UPDATE",
      delay: "7000",
      autoHide: false,
    });

    setIsEdit(false);
  };

  return (
    <div
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
            marginTop: "20px",
            width: "65%",
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
            backgroundColor: "white",
            backgroundColor: "aliceblue",
          }}
        >
          <Link
            to={`/productDetail/${product?.id}`}
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
              alt={`${product.title} Photo`}
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
                <a
                  onClick={saveEditHandler}
                  className="card-link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  {` Save `}
                  <img
                    style={{ width: "25px", height: "25px", marginLeft: "0px" }}
                    src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
                    alt="edit product details"
                  />
                </a>
                <a
                  onClick={() => setIsEdit(false)}
                  className="card-link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Cancel
                  <img
                    style={{ width: "35px", height: "35px", marginLeft: "0px" }}
                    src="https://cdn-icons-png.flaticon.com/128/10174/10174029.png"
                    alt="delete product"
                  />
                </a>
              </>
            ) : (
              <>
                {ProductPresentInCart === -1 ? (
                  <a
                    onClick={AddToCartHandler}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "5px",
                      cursor: "pointer",
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
                  </a>
                ) : (
                  <a
                    onClick={RemoveProductToCartHandler}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "5px",
                      cursor: "pointer",
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
                  </a>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",

                    width: "20%",
                  }}
                >
                  <a
                    onClick={() => setIsEdit(true)}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    {` Edit `}
                    {/**for space */}
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "0px",
                      }}
                      src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
                      alt="edit product details"
                    />
                  </a>
                  <a
                    onClick={deleteProductHandler}
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
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
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <h3>Product Is Removed...</h3>
          <Link to="/" className="btn btn-primary">
            Go Back To Home
          </Link>
        </>
      )}
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
  // console.log("disp", a);

  return {
    dispatch,
  };
}

const WrapperDetailsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details); //return Wrapper around AppComponent

export default WrapperDetailsComponent;

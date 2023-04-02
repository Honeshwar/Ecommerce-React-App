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
  let { productId } = useParams();
  productId = parseInt(productId); //because params pass as string
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("No Title");
  const [description, setDescription] = useState("No Description");
  const [price, setPrice] = useState("No price");
  const [rating, setRating] = useState("No Rating");

  ////////////
  let { allProducts } = products;
  const findProduct = allProducts?.filter((e) => e.id === productId);
  let product;
  if (findProduct?.length === 1) {
    product = findProduct[0];
  }

  //cart
  let ProductPresentInCart = cart.cartProducts?.indexOf(product);

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
    success("🔻Successfully Remove Product From Redux Store😫", {
      title: "Remove Product Redux Store",
      delay: "7000",
      autoHide: false,
    });
  };

  //add to cart
  const AddToCartHandler = () => {
    dispatch(AddProductToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    success(" ⛱️Successfully Added Product To Cart 😛", {
      title: "Add TO Cart",
      delay: "7000",
      autoHide: false,
    });
  };

  //remove to cart
  const RemoveProductToCartHandler = () => {
    dispatch(removeProductFromCart(product.id)); //Add Product To Cart In Api And Redux Store Handler
    success("🔻Successfully Remove Product From  Cart 😫", {
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
      title,
      description,
      price,
      rating,
    };

    dispatch(editProduct(inCart, product.id, UpdatedProduct)); //edit Product In Api And Redux Store Handler
    success("😙Successfully update Product 🌝 👇😛  ", {
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

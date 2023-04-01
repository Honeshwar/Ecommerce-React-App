import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { success, error } from "react-toast-notification";

import {
  deleteProductFromApiAndReduxStore,
  AddProductToCart,
  editProduct,
  removeProductFromCart,
  getProductAndCart,
  addProductsAndCartToStore,
} from "../state-management/action";
import { connect } from "react-redux";

function Details({ products, cart, dispatch }) {
  const [isEdit, setIsEdit] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    if (localStorage.getItem("state")) {
      const state = JSON.parse(localStorage.getItem("state"));
      console.log("local storage", state);
      dispatch(
        addProductsAndCartToStore(
          state.products?.allProducts,
          state.cart?.cartProducts
        )
      );
      return;
    }

    dispatch(getProductAndCart());
  }, []);

  console.log("product id", productId);
  //   console.log("local storage", JSON.parse(localStorage.getItem("state")));

  let { allProducts } = products;
  console.log("connect", products, cart);

  const findProduct = allProducts?.filter((e) => e.id == productId);
  let product;
  if (findProduct?.length === 1) {
    product = findProduct[0];
  }
  console.log("got product in all product", findProduct);

  //cart
  let index = cart.cartProducts?.filter((product) => product.id == productId);
  console.log(index);
  index = index.length;

  //delete
  const deleteProductHandler = () => {
    dispatch(deleteProductFromApiAndReduxStore(product)); //this dispatch not execute MW return in between call se,to make action asynchronous
  };

  //add to cart
  const AddToCartHandler = () => {
    dispatch(AddProductToCart(product)); //Add Product To Cart In Api And Redux Store Handler
    success("Successfully Added Product To Cart", {
      title: "Add TO Cart",
    });
  };

  //remove to cart
  const RemoveProductToCartHandler = () => {
    dispatch(removeProductFromCart(product.id)); //Add Product To Cart In Api And Redux Store Handler
    success("Successfully Remove Product From  Cart", {
      title: "Remove Product From  Cart",
    });
  };

  //edit/update
  const editHandler = () => {
    dispatch(editProduct(product)); //edit Product In Api And Redux Store Handler
  };

  //   const deleteProduct = async () => {
  //     const response = await deleteProduct(product.id); //every product comp have it own product props

  //     const P = product.filter((e) => e.id != product.id);
  //     setDProduct(P);
  //   };
  // };

  return (
    <div
      style={{
        width: "100%",
        height: "86%",
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        alignItems: "center",

        marginBottom: "30px",
        backgroundImage: `${product?.thumbnail}`,
        backgroundColor: "lightgray",
      }}
    >
      {product ? (
        <div
          className=""
          style={{
            marginTop: "20px",
            width: "80%",
            height: "100%",
            marginBottom: "10px",
            boxShadow: " 0 0 2px 1px black",
            borderRadius: "20px",
            marginTop: "15px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            backgroundColor: "white",
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
                <input
                  type="text"
                  style={{ outline: "none" }}
                  value={product?.title}
                />
              )}
            </h5>
            <p
              className="card-text"
              style={{ color: "gray", marginTop: "10px" }}
            >
              {!isEdit ? (
                `${product?.description}`
              ) : (
                <textarea
                  cols="30"
                  rows={5}
                  type="text"
                  style={{ outline: "none" }}
                  value={product?.description}
                />
              )}
            </p>
          </div>
          <ul className="list-group list-group-flush">
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
                    value={product?.price}
                  />
                )}
              </small>
            </li>
            <li className="list-group-item ">
              Rating:
              <small className="" style={{ color: "yellowgreen" }}>
                {!isEdit ? (
                  `${product?.rating}`
                ) : (
                  <input
                    type="number"
                    style={{ outline: "none" }}
                    value={`${product?.rating}/5`}
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
                  href={`/productDetail/edit/${product?.id}`}
                  className="card-link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Save
                  <img
                    style={{ width: "20px", height: "20px", marginLeft: "0px" }}
                    src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
                    alt="edit product details"
                  />
                </a>
                <a
                  href={`/productDetail/delete/${product?.id}`}
                  className="card-link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                  <img
                    style={{ width: "30px", height: "30px", marginLeft: "0px" }}
                    src="https://cdn-icons-png.flaticon.com/128/10174/10174029.png"
                    alt="delete product"
                  />
                </a>
              </>
            ) : (
              <>
                {index === 0 ? (
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
                      src="https://cdn-icons-png.flaticon.com/128/891/891407.png"
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
                    onClick={editHandler}
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
        "product is comming...."
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

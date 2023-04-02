import React from "react";
import { Link } from "react-router-dom";
import {
  AddProductToCart,
  removeProductFromCart,
} from "../state-management/action";
import { success } from "react-toast-notification";

function Product({ product, cart, dispatch }) {
  let ProductPresentInCart = cart.cartProducts?.indexOf(product);

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
    success("🔻Successfully Remove Product From  Cart 😫", {
      title: "Remove Product From  Cart",
      delay: "7000",
      autoHide: false,
    });
  };

  return (
    <div
      className="card"
      style={{
        width: "19rem",
        marginBottom: "10px",
        boxShadow: " 0 0 2px 1px black",
      }}
    >
      <Link to={`/productDetail/${product.id}`}>
        <img
          style={{ maxHeight: "200px" }}
          src={product.thumbnail}
          className="card-img-top"
          alt={`${product.title} Photo`}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text" style={{ color: "gray" }}>
          {product.description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item ">
          Price:
          <small style={{ color: "red" }}>
            {` Rs `}

            {product.price}
          </small>
        </li>
        <li className="list-group-item ">
          {` Rating: `}
          <small className="" style={{ color: "yellowgreen" }}>
            {product.rating}
          </small>
        </li>
      </ul>
      <div
        className="card-body"
        style={{
          maxHeight: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
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
            {` Add  `}
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
            {` Remove `}
          </a>
        )}
        <Link
          to={`/product-details/${product.id}`}
          className="card-link"
          style={{
            textDecoration: "none",
            color: "black",
            cursor: "pointer",
          }}
        >
          Details
          <img
            style={{ width: "30px", height: "30px", marginLeft: "3px" }}
            src="https://cdn-icons-png.flaticon.com/128/6592/6592963.png"
            alt="edit product details"
          />
        </Link>
      </div>
    </div>
  );
}

export default Product;

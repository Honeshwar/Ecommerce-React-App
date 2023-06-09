import React from "react";
import { Link } from "react-router-dom";

import { removeProductFromCart } from "../state-management/action";
import { success } from "react-toast-notification";

function Cart({ product, dispatch }) {
  //remove to cart
  const removeProductFromCartHandler = () => {
    dispatch(removeProductFromCart(product.id)); //Add Product To Cart In Api And Redux Store Handler
    success("🔻 Successfully Remove Product From  Cart 😫", {
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
          alt={product.title}
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
            {" Rs "} {product.price}
          </small>
        </li>
        <li className="list-group-item ">
          {`Rating: `}
          <small className="" style={{ color: "yellowgreen" }}>
            {product.rating}
          </small>
        </li>
      </ul>
      <div className="card-body" style={{ maxHeight: "50px" }}>
        <button
          // href={removeProductFromCartHandler}
          onClick={removeProductFromCartHandler}
          className="card-link"
          style={{
            textDecoration: "none",
            color: "black",
            marginRight: "5px",
            cursor: "pointer",
            backgroundColor: "white",
            border: "none",
          }}
        >
          <img
            style={{
              width: "25px",
              height: "25px",
              marginLeft: "0px",
            }}
            src="https://cdn-icons-png.flaticon.com/128/5952/5952781.png"
            alt="Add To Cart"
          />{" "}
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;

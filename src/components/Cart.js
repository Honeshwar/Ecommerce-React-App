import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AddProductToCart } from "../state-management/action";

function Cart({ product, dispatch }) {
  const [isEdit, setIsEdit] = useState(false);

  //add to cart
  const AddToCartHandler = () => {
    dispatch(AddProductToCart()); //Add Product To Cart In Api And Redux Store Handler
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
        <h5 className="card-title">
          {!isEdit ? (
            `${product.title}`
          ) : (
            <input
              type="text"
              style={{ outline: "none" }}
              value={product.title}
            />
          )}
        </h5>
        <p className="card-text" style={{ color: "gray" }}>
          {!isEdit ? (
            `${product.description}`
          ) : (
            <textarea
              cols="30"
              rows={5}
              type="text"
              style={{ outline: "none" }}
              value={product.description}
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
              `${product.price}`
            ) : (
              <input
                type="number"
                style={{ outline: "none" }}
                value={product.price}
              />
            )}
          </small>
        </li>
        <li className="list-group-item ">
          Rating:
          <small className="" style={{ color: "yellowgreen" }}>
            {!isEdit ? (
              `${product.rating}`
            ) : (
              <input
                type="number"
                style={{ outline: "none" }}
                value={`${product.rating}/5`}
              />
            )}
          </small>
        </li>
      </ul>
      <div className="card-body" style={{ maxHeight: "50px" }}>
        <a
          onClick={AddToCartHandler}
          className="card-link"
          style={{
            textDecoration: "none",
            color: "black",
            marginRight: "5px",
          }}
        >
          <img
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "0px",
            }}
            src="https://cdn-icons-png.flaticon.com/128/891/891407.png"
            alt="Add To Cart"
          />{" "}
          Remove From Cart
        </a>
      </div>
    </div>
  );
}

export default Cart;

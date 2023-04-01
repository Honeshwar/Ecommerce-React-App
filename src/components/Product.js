import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
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
        style={{ maxHeight: "50px", textAlign: "center" }}
      >
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

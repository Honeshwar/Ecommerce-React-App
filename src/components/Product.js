import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteProductFromApiAndReduxStore,
  AddProductToCart,
  editProduct,
} from "../state-management/action";

function Product({ product, dispatch }) {
  const [isEdit, setIsEdit] = useState(false);

  //delete
  const deleteProductHandler = () => {
    dispatch(deleteProductFromApiAndReduxStore(product)); //this dispatch not execute MW return in between call se,to make action asynchronous
  };

  //add to cart
  const AddToCartHandler = () => {
    dispatch(AddProductToCart(product)); //Add Product To Cart In Api And Redux Store Handler
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SortBy from "../components/SortBy";
import styles from "../styles/products.module.css";

function Products({ products }) {
  console.log("props", products);

  const [sortedProducts, setSortedProducts] = useState(products);
  const [sorted, setSorted] = useState(false);

  const PRODUCTS = sorted ? sortedProducts : products;
  //   console.log(PRODUCTS);
  return (
    <div className={styles.products}>
      <SortBy
        products={products}
        setSortedProducts={setSortedProducts}
        setSorted={setSorted}
        sorted={sorted}
      />
      <div className={styles.listOfProducts}>
        {PRODUCTS?.map((product, index) => (
          <div
            className="card"
            style={{
              width: "18rem",
              marginBottom: "10px",
              boxShadow: " 0 0 2px 1px black",
            }}
            key={index}
          >
            <Link to={`/productDetail/${product.id}`}>
              <img
                style={{ maxHeight: "200px" }}
                src={product.thumbnail}
                className="card-img-top"
                alt={`${product.title} Photo`}
              />
            </Link>
            <div className="card-body" style={{ maxHeight: "100px" }}>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text" style={{ color: "gray" }}>
                {product.description}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item ">
                Price:
                <small style={{ color: "red" }}>{` Rs ${product.price}`}</small>
              </li>
              <li className="list-group-item ">
                Rating:
                <small className="" style={{ color: "yellowgreen" }}>
                  {` ${product.rating}`}
                </small>
              </li>
            </ul>
            <div className="card-body" style={{ maxHeight: "50px" }}>
              <a
                href={`/productDetail/edit/${product.id}`}
                className="card-link"
                style={{ textDecoration: "none", color: "black" }}
              >
                Edit{" "}
                <img
                  style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                  src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
                  alt="edit product details"
                />
              </a>
              <a
                href={`/productDetail/delete/${product.id}`}
                className="card-link"
                style={{ textDecoration: "none", color: "black" }}
              >
                Delete{" "}
                <img
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                  src="https://cdn-icons-png.flaticon.com/128/10174/10174029.png"
                  alt="delete product"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
/*
 

             <div
            className="card mb-3"
            style={{ width: "90%", maxHeight: "300px", background: "white" }}
            key={index}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{
                    maxHeight: "300px",
                  }}
                  src={product.thumbnail}
                  className="img-fluid rounded-start"
                  alt={`${product.title} Photo`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ border: "solid" }}>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">{" Price: "}</small>
                    {product.price}
                    <small
                      className="text-body-secondary"
                      style={{ marginLeft: "10px" }}
                    >
                      {"Rating: "}
                    </small>
                    {product.rating}
                  </p>
                  <p className="card-text">
                    <small
                      className="text-body-secondary"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </small>
                    <small className="text-body-tertiary">Delete</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>*/

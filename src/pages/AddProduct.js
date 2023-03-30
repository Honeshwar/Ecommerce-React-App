import React, { useState } from "react";
import styles from "../styles/addAProduct.module.css";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [adding, setAdding] = useState(false);

  const addProductHandler = (e) => {
    e.preventDefault();
    setAdding(true);
    console.log("thumbnail", thumbnail[0]);
    // setAdding(false);
  };
  return (
    <div className={styles.addAProductComponent}>
      <h1 style={{ color: "green", textDecoration: "underline" }}>
        Add a Product
      </h1>
      <form className={styles.addAProductForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="tell something about your project"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.abc}>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              className="form-control"
              type="number"
              id="price"
              placeholder="Product Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3" style={{ marginLeft: "50px" }}>
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <input
              className="form-control"
              style={{ width: "150px" }}
              type="number"
              min="0"
              max="10"
              id="rating"
              placeholder="Product Rating"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="product-image" className="form-label">
            Product Image
          </label>
          <input
            className="form-control "
            id="product-image"
            type="file"
            required
            files={thumbnail}
            onChange={(e) => setThumbnail(e.target.files)}
          />
        </div>

        <div className="mt-4">
          <button
            onClick={addProductHandler}
            className="form-control btn btn-success btn-lg"
            type="submit"
            required
          >
            {adding ? "Adding..." : " Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

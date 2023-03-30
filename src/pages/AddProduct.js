import React, { useState } from "react";
import styles from "../styles/addAProduct.module.css";

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [files, setFiles] = useState("");

  const [adding, setAdding] = useState(false);

  const addProductHandler = (e) => {
    e.preventDefault();
    setAdding(true);
    // console.log("files", files[0]);
    if (rating > 5 || files) {
      console.log("error");
    }
    const product = {
      id: props.products.length,
      title: title ? title : "No Title",
      description: description ? description : "No Description",
      price,
      rating,
      thumbnail: files[0],
    };
    console.log("product", product);
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
              Rate Your Product
            </label>
            <input
              className="form-control"
              style={{ width: "150px" }}
              type="number"
              min="0"
              max="5"
              id="rating"
              placeholder=" out of 5"
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
            files={files}
            onChange={(e) => setFiles(e.target.files)}
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

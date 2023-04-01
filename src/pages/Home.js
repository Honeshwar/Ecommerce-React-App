import React, { useEffect } from "react";
import { connect } from "react-redux";

import { SortBy, Product } from "../components";
import styles from "../styles/home.module.css";
import { addProductsHandler } from "../state-management/action";

function Home({ products, dispatch }) {
  // console.log("props", products);

  // const [sortedProducts, setSortedProducts] = useState(products);
  // const [sorted, setSorted] = useState(false);
  // const [dProduct, setDProduct] = useState(products);

  // const PRODUCTS = sorted ? sortedProducts : products; // dProduct;
  //   console.log(PRODUCTS);

  const { allProducts, productsSorted } = products;
  window.localStorage.setItem("allProducts", JSON.stringify(allProducts));
  useEffect(() => {
    dispatch(addProductsHandler());
    // console.log("add products to stor", products);
  }, []);

  return (
    <div className={styles.products}>
      <SortBy productsSorted={productsSorted} dispatch={dispatch} />
      <div className={styles.listOfProducts}>
        {allProducts?.map((product, index) => (
          <Product key={index} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    // products: state?.products,
    // sorted: state?.sorted,
    products: state?.products,
  };
}
function mapDispatchToProps(dispatch) {
  // console.log("disp", a);
  return {
    dispatch,
  };
}

// WrapperAppComponent pass an state,dispatch as props to App component(as children of it)
const WrapperHomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home); //return Wrapper around AppComponent
//connect m automatically pass store,enclose connect inside an provider
//connect func also subscribe to store,state change it re-render/pass again props/do callback again
export default WrapperHomeComponent;

/*
 <div className="card-body" style={{ maxHeight: "50px" }}>
        
            </div>

            .....

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

import React from "react";
import { Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

function Product({ product }) {

  return (
    <div className="card" style={{width: "18rem", margin:" 20px",boxShadow:"inset 0 -10px 6px 3px lightgray",padding:"4px"}}>
      <Link to={`/product-details/${product.id}`}>
        <img
          style={{ height: "150px" }}
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
       </Link>
       <div className="card-body" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
      <h5 className="card-title">{product.title}</h5>
      <li className="list-group-item " >
        Price:
        <small style={{ color : "red"}}>
          {" Rs "} {product.price}
        </small>
      </li>
      <Link to={`/product-details/${product.id}`} style={{width:"fit-content", marginTop:"20px",marginBottom:"10px",marginInline:"auto",textShadow:"0 0 2px black"}} 
      className="btn btn-info text-light">
        <div >
          {` Details  `}
          <img
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "0px",
            }}
            src="https://cdn-icons-png.flaticon.com/128/943/943579.png"
            alt="details"
          />
        </div>
    </Link>
      </div>
    </div>
   

  );
}

export default Product;
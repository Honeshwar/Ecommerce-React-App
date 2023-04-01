import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.module.css";
function Navbar() {
  return (
    <div className="navbar-component">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            style={{ color: "green", fontSize: "1.5rem" }}
            className="navbar-brand"
            to="/"
          >
            eCommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="https://cdn-icons-png.flaticon.com/128/891/891407.png"
                    alt="add product photo"
                  />{" "}
                </Link>
              </li>
            </ul>
            <Link className="navbar-text nav-link" to="/profile">
              john Deo
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid",
                  borderRadius: "20px",
                  marginLeft: "5px",
                }}
                src="https://cdn-icons-png.flaticon.com/128/9775/9775776.png"
                alt="add product photo"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

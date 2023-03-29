import React from "react";
import "../styles/navbar.module.css";
function Navbar() {
  return (
    <div className="navbar-component">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            eCommerce
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add TO Products{" "}
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="https://cdn-icons-png.flaticon.com/512/8371/8371357.png"
                    alt="add product photo"
                  />{" "}
                </a>
              </li>
            </ul>
            <a className="navbar-text nav-link" href="#">
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
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

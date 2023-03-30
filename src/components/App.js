import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/index.css";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import { getAllProducts } from "../api";

function Error() {
  return <div>Error 404</div>;
}
function Home() {
  return <div>Home </div>;
}
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //do fetch products on mounted and use useState to re ender comp with get products
    //by default useEffect is synchronous in nature but api call is synchro so to make useEffect asynchronous we use async await
    const getProducts = async () => {
      const response = await getAllProducts(); //it wait until promise get full-filled and when it get full-filled than it promise return an object
      console.log("response", response);
      if (response.success) {
        setProducts(response.products);
        return;
      }
      console.log("error while api call", response.message);
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/*first reason if use any routing functionality in  navbar so enclosed each comp (that want want to use this functionality)
        inside BrowserRouter(context through provide something that routing need)
        second reason , i not write comp inside routes because we don't need that on each routing navbar comp load again (vdom) */}
        <Routes>
          {/*it help in finding exact path/url by default */}
          <Route path="/" element={<Products products={products} />}></Route>
          <Route
            path="/add-a-product"
            element={<AddProduct products={products} />}
          ></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

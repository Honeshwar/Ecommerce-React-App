import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/index.css";
import Products from "../pages/Products";
import { useEffect, useState } from "react";

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
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json.products);
      });
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
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

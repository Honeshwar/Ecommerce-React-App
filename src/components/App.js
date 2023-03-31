import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import "../styles/index.css";
import { Home, Cart } from "../pages";

function Error() {
  return <h1>Error 404</h1>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/*first reason if use any routing functionality in  navbar so enclosed each comp (that want want to use this functionality)
        inside BrowserRouter(context through provide something that routing need)
        second reason , i not write comp inside routes because we don't need that on each routing navbar comp load again (vdom) */}
        <Routes>
          {/*it help in finding exact path/url by default */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

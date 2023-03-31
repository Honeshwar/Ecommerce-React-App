import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/index.css";
import App from "./components/App";
import { store } from "./state-management/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    {/*an component that return an context.Provider component(value={props.store}) with children as App component*/}
    <App />
  </Provider>
  // </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Layout from "./components/Layout.jsx";
import { Home } from "./components/index.js";

import {
  MensProducts,
  WomensProducts,
  Electronics,
  Jewelery,
  Signup,
  Login,
  Cart,
} from "./pages/index.js";

import dataLoader from "./api/api.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route
        loader={dataLoader.mProductInfoLoader}
        path="men's section"
        element={<MensProducts />}
      />
      <Route
        loader={dataLoader.wProductInfoLoader}
        path="women's section"
        element={<WomensProducts />}
      />
      <Route
        loader={dataLoader.electronicsInfoLoader}
        path="electronics"
        element={<Electronics />}
      />
      <Route
        loader={dataLoader.jeweleryInfoLoader}
        path="jewelery"
        element={<Jewelery />}
      />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

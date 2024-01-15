import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import {
  Home,
  MSection,
  WSection,
  About,
  Electronics,
  Jewelery,
} from "./components/index.js";

import dataLoader from "./fetchData/fetchData.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route
        loader={dataLoader.mProductInfoLoader}
        path="men's section"
        element={<MSection />}
      />
      <Route
        loader={dataLoader.wProductInfoLoader}
        path="women's section"
        element={<WSection />}
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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

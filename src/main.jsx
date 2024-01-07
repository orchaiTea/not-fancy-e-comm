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
  Collection,
  MSection,
  WSection,
  MSectionInfoLoader,
  WSectionInfoLoader,
} from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Collection />} />
      <Route
        loader={MSectionInfoLoader}
        path="men's section"
        element={<MSection />}
      />
      <Route
        loader={WSectionInfoLoader}
        path="women's section"
        element={<WSection />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

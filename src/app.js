import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "./components/pages/Main";
import {Error} from "./components/Error";
import {About} from "./components/pages/About";
import ReactDOM from "react-dom/client";
import React from "react";
import {Layout} from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <Error />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />
      },
      {
        path: "/contacts",
        element: <About />,
        errorElement: <Error />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

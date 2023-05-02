import React from "react";
import ReactDOM from "react-dom/client";
import { ContatosProvider } from "./context/ContactContext";
import "./index.css";
import "antd/dist/reset.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NewPhone from "./routes/NewPhone";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import RegisterUser from "./routes/RegisterUser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/newphone",
        element: <NewPhone />,
      },
      {
        path: "/register",
        element: <RegisterUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<ContatosProvider>
<React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
</ContatosProvider>
   

);

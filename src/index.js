import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import 'antd/dist/reset.css' ; 
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PhoneBook from "./routes/PhoneBook";
import NewPhone from "./routes/NewPhone";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";

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
        path: "/phonebook",
        element: <PhoneBook />,
      },
      {
        path: "/newphone",
        element: <NewPhone />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={ptBR}>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </ConfigProvider>
);

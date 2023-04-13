import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { createRoot } from "react-dom/client";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import Categorypage from "../views/CategoryPage";
import DetailPage from "../componens/DetailPage";
import Layout from "../componens/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "categories",
        element: <Categorypage />,
      },
      {
        path: "details/:id",
        element: <DetailPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "login",
    element: <LoginPage />,
    loader: () => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          throw redirect("/");
        }
        return null;
      },
  },
]);

export default router;

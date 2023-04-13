import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import NavigationBar from "../components/Navigationbar";
import DetailPage from "../views/DetailPage";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
        <NavigationBar />
        <Outlet/>
    </>,
    children:[
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "details/:id",
          element: <DetailPage />,
        },
    ]
  },
]);

export default router;

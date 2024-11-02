import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Coffees from "../Components/Pages/Coffees";
import Dashboard from "../Components/Pages/Dashboard";
import Classic from "../Components/Pages/Classic";
import Specialty from "../Components/Pages/Specialty";
import ColdCoffee from "../Components/Pages/ColdCoffee";
import HomeCoffee from "../Components/Pages/HomeCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <HomeCoffee></HomeCoffee>,
          },
          {
            path: "/category/Classic",
            element: <Classic />,
            loader: () => fetch("/coffee.json"),
          },
          {
            path: "/category/Specialty",
            element: <Specialty />,
            loader: () => fetch("/coffee.json"),
          },
          {
            path: "/category/Cold Coffee",
            element: <ColdCoffee />,
            loader: () => fetch("/coffee.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("/coffee.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Coffees from "../Components/Pages/Coffees";
import Dashboard from "../Components/Pages/Dashboard";
import Classic from "../Components/Pages/Classic";
import Specialty from "../Components/Pages/Specialty";
import ColdCoffee from "../Components/Pages/ColdCoffee";
import HomeCoffee from "../Components/Pages/HomeCoffee";
import CoffeeDetails from "../Components/Pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <HomeCoffee></HomeCoffee>,
          },
          {
            path: "/category/Brewed Coffee",
            element: <Classic />,
          },
          {
            path: "/category/Iced Coffee",
            element: <Specialty />,
          },
          {
            path: "/category/Dessert Coffee",
            element: <ColdCoffee />,
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/category/:id",
        element: <CoffeeDetails />,
      },
    ],
  },
]);
export default router;

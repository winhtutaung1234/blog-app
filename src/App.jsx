import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
   const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "/login",
            element: <Login />
         },
         {
            path: "/register",
            element: <Register />
         }
        ]
      }
   ]);

   return <RouterProvider router={router} />
}
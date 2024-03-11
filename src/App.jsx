import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddArticle from "./pages/AddArticle";

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
               path: "/register",
               element: <Register />
            },
            {
               path: "/login",
               element: <Login />
            },
            {
               path: "/add-article",
               element: <AddArticle />
            }
         ]
      }
   ]);

   return <RouterProvider router={router} />
}
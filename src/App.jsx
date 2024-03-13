import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddArticle from "./pages/AddArticle";
import { Navigate } from "react-router-dom";
import { useAuthUser } from "./components/AuthUser";
import Profile from "./pages/Profile";

export default function App() {
   const { authUser } = useAuthUser();

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
               element: Object.keys(authUser).length !== 0  ? <AddArticle /> : <Navigate to="/" />
            },
            {
               path: "/profile/:id",
               element: <Profile />
            }
         ]
      }
   ]);

   return <RouterProvider router={router} />
}
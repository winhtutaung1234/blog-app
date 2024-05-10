import Layout from "./Layout";
import AddArticle from "./pages/AddArticle";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-article",
        element: <AddArticle />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

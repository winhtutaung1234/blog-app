import Layout from "./Layout";
import AddArticle from "./pages/AddArticle";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddComment from "./components/AddComment";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowComments from "./components/ShowComments";

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
      {
        path: "/articles/:origin/comments",
        element: <AddComment />,
      },
      {
        path: "/article/:id/comments",
        element: <ShowComments />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import Layout from "./Layout";
import AddArticle from "./pages/AddArticle";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddComment from "./components/AddComment";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowComments from "./components/ShowComments";
import ShowLikes from "./components/ShowLikes";
import { useAuthUser } from "./providers/AuthUserProvider";
import EditArticle from "./pages/EditArticle";

function App() {
  const { authUser } = useAuthUser();

  const checkAuth = (element) => {
    if (authUser) {
      return element;
    } else {
      return <Login />;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: checkAuth(<Home />),
        },
        {
          path: "/add-article",
          element: checkAuth(<AddArticle />),
        },
        {
          path: "/articles/:id",
          element: checkAuth(<Article />),
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
          element: checkAuth(<AddComment />),
        },
        {
          path: "/article/:id/comments",
          element: checkAuth(<ShowComments />),
        },
        {
          path: "/articles/:id/likes",
          element: checkAuth(<ShowLikes />),
        },
        {
          path: "/articles/edit/:id",
          element: <EditArticle />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

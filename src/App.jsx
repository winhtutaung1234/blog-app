import Layout from "./Layout";
import Article from "./pages/Article";
import Home from "./pages/Home";

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
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

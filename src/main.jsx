import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children:[
          {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/attractions",
          element: <attractions />,
        },
        {
          path: "/contact",
          element: <contact />,
        },
        {
          path: "/food",
          element: <food />,
        },
        {
          path: "/contact",
          element: <contact />,
        },
      ],
  },],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
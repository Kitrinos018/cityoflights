import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";

import Attractions from "./components/attractions";
import Contact from "./components/contact";
import Food from "./components/food";
import Home from "./components/home";
import Root from "./components/root";
import Tickets from "./components/tickets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "attractions",
        element: <Attractions />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={ErrorPage}/>
  </React.StrictMode>
);
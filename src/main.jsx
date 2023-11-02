//Imports//
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const router = createBrowserRouter([{
    path: "/",
    element: <Navbar/>,
    //for somereason this breaks the website, im not sure why
    /*
    children: [
      {
        path: "HomePage/:HomePageId",
        element: <HomePage />,
      },
    ],
    */
  },
]);

//dont delete
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

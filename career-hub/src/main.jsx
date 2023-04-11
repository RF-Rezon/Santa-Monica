import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Applied_jobs from "./Appleid Jobs/Appleid_Jobs";
import Blog from "./Blog/Blog";
import Header from "./Header/Header";
import JobDetails from "./JobDetails/JobDetails";
import Main from "./Layout/Main";
import Statistics from "./Statistics/Statistics";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Header />,
        loader: ()=> fetch("/jobCategolyList.json")
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied_jobs",
        element: <Applied_jobs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "details/:id",
        element: <JobDetails/>,
        loader: ()=> fetch("/salary.json")
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

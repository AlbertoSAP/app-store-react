import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./auth/login";
import { Register } from "./auth/Register";
import { HomePage } from "./components/HomePage";
import { Template } from "./Shared/Template";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Login />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/",
  //   element: <HomePage />,
  // }
]);

const addTemplate = ():React.ReactElement =>{

const url = window.location.pathname

if(url.includes('auth')){
return <RouterProvider router={router} />
}
return <Template
child={<RouterProvider router={router} />}
/>
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {addTemplate()}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

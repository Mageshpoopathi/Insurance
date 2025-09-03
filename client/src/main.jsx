import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {router} from './router.js'
import App from "./App.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ClientCreationPage from "./pages/ClientCreationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/clientDashboard",
    element:<DashboardPage/>
  },
  {
    path:"/clientCreation",
    element:<ClientCreationPage/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

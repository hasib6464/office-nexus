import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./Root/Main.jsx";
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Services from "./components/Pages/Services.jsx";
import Locations from "./components/Pages/Locations.jsx";
import Contact from "./components/Pages/Contact.jsx";
import AddServices from "./components/Pages/AddServices.jsx";
import AllLocation from "./components/Pages/AllLocation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Services,
        loader: () => fetch(`http://localhost:3000/services`),
      },
      {
        path: "/locations",
        Component: Locations,
      },
      {
        path: "/Contact",
        Component: Contact,
      },
      {
        path: "/addServices",
        Component: AddServices,
      },
      {
        path: "/allLocation",
        Component: AllLocation,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

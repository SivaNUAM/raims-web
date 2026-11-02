import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Home from "../pages/Home";
import OpportunitiesPage from "../pages/OpportunitiesPage";
import SectorsPage from "../pages/SectorsPage";
import ServicesPage from "../pages/ServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/sectors", element: <SectorsPage /> },
  { path: "/opportunities", element: <OpportunitiesPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

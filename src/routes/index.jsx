import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Home from "../pages/Home";
import OpportunitiesPage from "../pages/OpportunitiesPage";
import OpportunityDetailPage from "../pages/OpportunityDetailPage";
import SectorsPage from "../pages/SectorsPage";
import ServicesPage from "../pages/ServicesPage";
import RouteLoader from "../components/layout/RouteLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLoader />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "sectors", element: <SectorsPage /> },
      { path: "opportunities", element: <OpportunitiesPage /> },
      { path: "opportunities/:countrySlug", element: <OpportunityDetailPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

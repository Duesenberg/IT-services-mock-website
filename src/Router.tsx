import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/components/HomePage/HomePage";
import AboutPage from "./assets/components/AboutPage/AboutPage";
import ServicesPage from "./assets/components/ServicesPage/ServicesPage";

export default function Router () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'about',
      element: <AboutPage />
    },
    {
      path: 'services',
      element: <ServicesPage />
    }
  ])
  
  return <RouterProvider router={router} />
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/components/HomePage/HomePage";
import AboutPage from "./assets/components/AboutPage/AboutPage";
import ServicesPage from "./assets/components/ServicesPage/ServicesPage";
import ReviewsPage from './assets/components/ReviewsPage/ReviewsPage';
import ContactPage from './assets/components/ContactPage/ContactPage';

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
    },
    {
      path: 'reviews',
      element: <ReviewsPage />
    },
    {
      path: 'contact',
      element: <ContactPage />
    }
  ])
  
  return <RouterProvider router={router} />
}

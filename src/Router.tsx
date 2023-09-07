import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/components/HomePage/HomePage";
import AboutPage from "./assets/components/AboutPage/AboutPage";

export default function Router () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'about',
      element: <AboutPage />
    }
  ])
  
  return <RouterProvider router={router} />
}

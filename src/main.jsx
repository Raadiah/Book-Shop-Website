import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage.jsx';
import Books from './components/books/books.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './components/homepage/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>
      },
      {
        path: "booklist",
        element: <Books></Books>
      },
      {
        path: "bookdetails",
        element: <HomePage></HomePage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

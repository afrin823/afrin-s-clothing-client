import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import AddProducts from './pages/AddProducts/AddProducts';
import AllProducts from './pages/AllProducts/AllProducts';
import AllUsers from './pages/AllUsers/AllUsers';
import MainLayout from './layout/MainLayout';
import DetailProduct from './pages/AllProducts/DetailProduct';
import UpdateProducts from './pages/UpdateProducts';


// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/addProducts",
        element: <AddProducts />
      },
      {
        path: "/allProducts",
        loader: () => fetch("http://localhost:5000/products"),
        element: <AllProducts />
      },
      {
        path: "/details/:id",
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
        element: <DetailProduct />
      },
      {
        path: "/update/:id",
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
        element: <UpdateProducts />
      }
      ,
      {
        path: "/allUsers",
        element: <AllUsers />
      }
    ]
  }
]);

// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

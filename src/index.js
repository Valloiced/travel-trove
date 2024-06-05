import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  redirect, 
  RouterProvider 
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import NotFound from "./NotFound";
import Layout from './routes/Layout';

import Home from './routes/home';
import About from './routes/about';
import Booking from './routes/booking';
import Property from './routes/property';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("/home")
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element:  <About />
      },
      {
        path: "/booking",
        element: <Booking />,
        loader: () => redirect("/booking/philippines")
      },
      {
        path: "/booking/:location",
        element: <Booking />
      },
      {
        path: "/property/:id",
        element: <Property />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

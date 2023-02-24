import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/Error';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './index.css';
import Terms from './pages/Terms';
import Policies from './pages/Policies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/terms-and-conditions",
    element: <Terms/>
  },
  {
    path: "/privacy-policy",
    element: <Policies/>
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);

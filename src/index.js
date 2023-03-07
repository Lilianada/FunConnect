import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/Error';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Policies from './pages/Policies';
import Partner from './pages/Partner';
import './index.css';
import Registration from './pages/Registration';

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
    path: "/partner-with-us",
    element: <Partner/>
  },
  {
    path: "/registration",
    element: <Registration/>
  },
  {
    path: "/terms-and-conditions",
    element: <Terms/>
  },
  {
    path: "/privacy-policies",
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import About from './components/About/About.jsx';
import BgoEvents from './components/BgoEvents/BgoEvents.jsx';
import Resources from './components/Resources/Resources.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/bgoevent",
        element: <BgoEvents></BgoEvents>
      },
      {
        path: "/resources",
        element: <Resources></Resources>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

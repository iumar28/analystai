import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import Data from './Data'
import Footer from './Footer'
import Details from './Details'
import Header from './Header';
import Index from './Index'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



const App = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/data",
        element: <Data />
      },
      {
        path: "/data/:id",
        element: <Details />
      },
      {
        path: "/draggable",
        element: <Index />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

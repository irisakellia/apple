import React from 'react';
import { RouterProvider } from 'react-router-dom'; // Only import RouterProvider from react-router-dom
import { createBrowserRouter } from 'react-router-dom'; // Import createBrowserRouter separately

import HomePage from './pages/HomePage.jsx';
import StorePage from './pages/StorePage.jsx';
import MacPage from './pages/MacPage.jsx';
import IPhonePage from './pages/IphonePage.jsx';
import SupportPage from './pages/SupportPage.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/store",
    element: <StorePage />
  },
  {
    path: "/mac",
    element:<MacPage />
  },
  {
    path:"/iphone",
    element:<IPhonePage/>
  },
  {
    path:"/support",
    element:<SupportPage/>
  }
]);

const App = () => {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;

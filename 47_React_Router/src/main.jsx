import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Createpost from './components/Createpost.jsx';

const router = createBrowserRouter(
  [
    { path : "/", element : <App/>},
    { path : "/create-post", element : <Createpost/>},
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

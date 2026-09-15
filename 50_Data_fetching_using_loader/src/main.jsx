import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './routes/App.jsx'
import Createpost from './components/Createpost.jsx';
import Postlist, { postloader } from './components/Postlist.jsx';

const router = createBrowserRouter(
  [
    {path : "/", 
    element : <App/>, 
    children : [
    { path : "/", element : <Postlist/>, loader : postloader},
    { path : "/create-post", element : <Createpost/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

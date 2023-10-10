import React from 'react';
import ReactDOM from 'react-dom/client';
import Page1 from './page/page1'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/page2",
        element: <div>Hello world!</div>,
    },
    {
      path: "/",
    element:<Page1/>  
    }
    
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);




import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './pages/layout.page';
import { Career, Home, Projects } from './pages';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
const router = createBrowserRouter([
  {
    path: '/',
    element:
      <Layout />
    ,
    children: [
      { path: '', element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'career', element: <Career /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </React.StrictMode>
)

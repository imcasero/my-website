import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import { Layout } from './pages/layout.page';
import { Career, Home, Projects } from './pages';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './index.css';
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
    <RouterProvider router={router} />
    <SpeedInsights />
  </React.StrictMode>
)

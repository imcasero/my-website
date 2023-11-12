import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import { HeaderComponent } from './components/header/header.component';
import { Career, Home, Projects } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <HeaderComponent />
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
  </React.StrictMode>
)

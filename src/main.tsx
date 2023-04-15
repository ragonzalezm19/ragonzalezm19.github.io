import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UnderConstructionPage from './pages/UnderConstruction.page';
import './index.css'

const router = createBrowserRouter([
  {
    path: "*",
    element: <UnderConstructionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

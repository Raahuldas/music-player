import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import ColumnLeft from './components/ColumnLeft.jsx'
import ColumnRight from './components/ColumnRight.jsx'
import ColumnCenter from './components/ColumnCenter.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<ColumnLeft/>,
      },
      {
        path:"/library",
        element:<ColumnCenter/>,
      },
      {
        path:"/lyrics",
        element: <ColumnRight/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>    
    </RouterProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Showcase from './routes/Showcase.jsx'
import SingleProduct from './routes/SingleProduct.jsx'
import CartProvider from './context/CartContext.jsx'
import CartPage from './routes/CartPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/showcase", element: <Showcase /> },
      { path: "/showcase/:id", element: <SingleProduct /> },
      { path: "/cartpage", element: <CartPage /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)

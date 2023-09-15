import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/layout/root'
import NotFound from './pages/404'
import theme from './lib/theme'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Home />
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)

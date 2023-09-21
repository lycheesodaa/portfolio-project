import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/layout/root'
import NotFound from './pages/404'
import theme from './lib/theme'
import Projects from './pages/projects'

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
        element: <Projects />
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

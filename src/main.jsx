import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/layout/root'
import NotFound from './pages/404'
import theme from './lib/theme'
import Projects from './pages/projects'
import Hydrohomies from './pages/projects/hydrohomies'
import Ascent from './pages/projects/ascent'
import Joybot from './pages/projects/joybot'
import Bobsmarketplace from './pages/projects/bobsmarketplace'
import DialogueAct from './pages/projects/dialogueact'
import ScreamNWin from './pages/projects/screamnwin'
import EmotionForecasting from './pages/projects/emotionforecasting'
import SelfDisclosure from './pages/projects/selfdisclosure'
import Gallery from './pages/gallery'

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
        path: "/*",
        element: <NotFound />
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },

      // Projects
      {
        path: "/hydrohomies",
        element: <Hydrohomies />
      },
      {
        path: "/ascent",
        element: <Ascent />
      },
      {
        path: "/joybot",
        element: <Joybot />
      },
      {
        path: "/bobsmarketplace",
        element: <Bobsmarketplace />
      },
      {
        path: "/screamnwin",
        element: <ScreamNWin />
      },

      // Research
      {
        path: "/dialogueact",
        element: <DialogueAct />
      },
      {
        path: "/selfdisclosure",
        element: <SelfDisclosure />
      },
      {
        path: "/emotionforecasting",
        element: <EmotionForecasting />
      },
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

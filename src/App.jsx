import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Albums, { loader as albumsLoader } from './routes/Albums.jsx'
import Album, { loader as albumLoader } from './routes/Album.jsx'
import Users, { loader as usersLoader } from './routes/Users.jsx'
import User, { loader as userLoader } from './routes/User.jsx'
import Error from './routes/Error.jsx'
import Layout from './routes/Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/albums',
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: '/albums/:id',
        loader: albumLoader,
        element: <Album />,
      },
      {
        path: '/users',
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: '/users/:id',
        loader: userLoader,
        element: <User />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}

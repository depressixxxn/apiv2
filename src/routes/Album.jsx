import React, { Suspense } from 'react'
import { Link, Await, useLoaderData, redirect } from 'react-router-dom'
import { getAlbum, getPhotos, getUser, getUsers } from '../api.jsx'
import './styles/Album.css'
export const loader = async ({ params: { id } }) => {
  const user = await getUser()
  const album = await getAlbum(id)
  if (!album.id) {
    return redirect(`/*`)
  }
  const photos = await getPhotos(id)
  const users = await getUsers()
  return { album, user, photos, users }
}

export default function Album() {
  const { album, photos, users } = useLoaderData()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={album} errorElement={<div>Page not found</div>}>
        {(album) => {
          return (
            <div className="main">
              <div>
                <div>{album.title}</div>
                <div>
                  Created by:
                  {users.map((user) =>
                    user.id === album.userId ? (
                      <Link
                        key={user.id}
                        to={`/users/${user.id}`}
                        className="userName"
                      >
                        {user.name}
                      </Link>
                    ) : (
                      ''
                    )
                  )}
                </div>
              </div>
              <h1> Photos</h1>
              <div className="photoPart">
                {photos.map((photo) => (
                  <img key={photo.id} src={photo.url} alt="photooooo" />
                ))}
              </div>
            </div>
          )
        }}
      </Await>
    </Suspense>
  )
}

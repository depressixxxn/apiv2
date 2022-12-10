import React from 'react'
import { Link, useLoaderData, redirect } from 'react-router-dom'
import { getUser, getUsersAlbums } from '../api.jsx'
import './styles/User.css'
export const loader = async ({ params: { id } }) => {
  const user = await getUser(id)

  const albums = await getUsersAlbums(id)
  if (!user.id) {
    return redirect(`/*`)
  }
  return { user, albums }
}

export default function User() {
  const { user, albums } = useLoaderData()

  return (
    <div>
      <div className="infoPart">
        <div>
          <h1>Name:{user.name}</h1>
        </div>
        <div>Username:{user.username}</div>
        <div>Email:{user.email}</div>
        <div>Phone:{user.phone}</div>
        <div>Site:{user.website}</div>
      </div>
      <div>
        <h2>Albums</h2>
        <div>
          {albums.map((album) =>
            album.userId === user.id ? (
              <Link
                key={album.id}
                to={`/albums/${album.id}`}
                className="albumsName"
              >
                <div className="albums">
                  <img
                    className="icon"
                    alt="killua killua"
                    src="https://www.meme-arsenal.com/memes/9ebc150bba126396f7c9affef10add97.jpg"
                  />
                  {album.title}
                </div>
              </Link>
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </div>
  )
}

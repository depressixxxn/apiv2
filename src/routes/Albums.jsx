import { Link, useLoaderData } from 'react-router-dom'
import { getAlbums } from '../api.jsx'
import './styles/Albums.css'
export const loader = async () => {
  const albums = await getAlbums()
  return { albums }
}

export default function Albums() {
  const { albums } = useLoaderData()
  return (
    <div>
      {albums.map((album) => (
        <Link key={album.id} to={`/albums/${album.id}`} className="albumsName">
          <div className="albums">
            <img
              className="icon"
              alt="killua killua"
              src="https://www.meme-arsenal.com/memes/9ebc150bba126396f7c9affef10add97.jpg"
            />
            {album.title}
          </div>
        </Link>
      ))}
    </div>
  )
}

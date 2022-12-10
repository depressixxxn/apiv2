import { Link } from 'react-router-dom'
import './styles/Error.css'
export default function Error() {
  return (
    <div>
      <div className="errorPage">
        <div>
          <h1>404</h1>
        </div>
        <div>
          <h2>Page not found</h2>
        </div>
        <div>
          <div className="linkPage">
            Go to page
            <Link to={`/albums`}> Albums</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link, useLoaderData } from 'react-router-dom'
import { getUsers } from '../api.jsx'
import './styles/Users.css'
export const loader = async () => {
  const users = await getUsers()
  return { users }
}

export default function Users() {
  const { users } = useLoaderData()
  return (
    <div className="listUsers">
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`} className="usersName">
          <div className="users">{user.name}</div>
        </Link>
      ))}
    </div>
  )
}

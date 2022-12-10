import { NavLink, Outlet } from 'react-router-dom'
import './styles/Layout.css'
export default function Layout() {
  return (
    <div className="main">
      <header>
        <NavLink
          to="/albums"
          end={true}
          className={({ isActive }) => (isActive ? 'active' : 'unactive')}
        >
          Albums
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? 'active' : 'unactive')}
        >
          Users
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

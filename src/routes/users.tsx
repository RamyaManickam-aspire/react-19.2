import { Link, Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        <li>
          <Link to="/users/10?page=2&sort=asc">User 10</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

import { useParams, useSearchParams, Link, Outlet } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const sort = searchParams.get("sort");

  return (
    <div style={{ paddingLeft: 20 }}>
      <h3>User Detail Page</h3>
      <p>User ID: {id}</p>
      <p>Page: {page}</p>
      <p>Sort: {sort}</p>

      <Link to="posts">View Posts</Link>

      <Outlet />
    </div>
  );
}

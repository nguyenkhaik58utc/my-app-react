import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => (
  <div>
    <header>
      <nav>
        <Link to="/admin">Dashboard</Link> | <Link to="/admin/users">Users</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;

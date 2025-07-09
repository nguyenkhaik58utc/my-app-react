import { Outlet, Link } from 'react-router-dom';

const UserLayout = () => (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/product">Product</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default UserLayout;

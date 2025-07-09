import { Route } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/user/Home';
import Product from '../pages/user/Product';

const UserRoutes = (
  <Route path="/" element={<UserLayout />}>
    <Route index element={<Home />} />
    <Route path="product" element={<Product />} />
  </Route>
);

export default UserRoutes;
import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';

function App() {
  return (
    <Routes>
      {UserRoutes}
      {AdminRoutes}
    </Routes>
  );
}
export default App;

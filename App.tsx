import { Routes, Route, Navigate } from 'react-router-dom';
import LoginRoutes from './routes/LoginRoutes';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<LoginRoutes />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
export default App;

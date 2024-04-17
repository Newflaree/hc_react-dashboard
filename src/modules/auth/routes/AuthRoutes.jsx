// React Router DOM
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Pages
import { AuthLoginPage } from '../pages';


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={ <AuthLoginPage /> } />
      <Route path='/*' element={ <Navigate to='/auth/login' /> } />
    </Routes>
  );
}

// React
import {
  useContext
} from 'react';
// React Router Dom
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Components
import { LoadingPage } from '../modules/dashboard/ui/components';
// Context
import { AuthContext } from '../context';
// Routes
import {
  AuthRoutes,
  DashboardRoutes
} from '../modules';


export const AppRouter = () => {
  const { status } = useContext( AuthContext );

  if ( status === 'checking' ) return <LoadingPage />
   
  return (
    <Routes>
      {
        ( status !== 'authenticated' )
          ? <>
              <Route path='/auth/*' element={ <AuthRoutes /> } />
              <Route path='/*' element={ <Navigate to='/auth/login' /> } />
            </>
          : <>
              <Route path='/*' element={ <DashboardRoutes /> } />
              <Route path='/*' element={ <Navigate to='/' /> } />
            </>
      }

    </Routes>
  );
}

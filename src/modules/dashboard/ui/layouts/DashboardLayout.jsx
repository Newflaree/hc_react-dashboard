// React
import {
  useContext,
  useEffect,
  useState
} from 'react';
// React Router Dom
import { useNavigate } from 'react-router-dom';
// Material UI
import {
  Box,
} from '@mui/material';
// Components
import {
  LoadingPage,
  Navbar,
  SidebarDesktop,
  SidebarMobile,
} from '../components';
// Context
import { AuthContext } from '../../../../context';


const drawerWidth = 270;

export const DashboardLayout = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState( true );
  const navigate = useNavigate();
  const { user } = useContext( AuthContext );

  useEffect( () => {
    loadingControl();
  }, [] );

  const loadingControl = () => {
    setTimeout( () => {
      setIsLoading( false );
    }, 700 );
  }

  const handleNavigate = ( to ) => {
    navigate( to )
  }

  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <Navbar />

      <SidebarDesktop
        user={ user }
        drawerWidth={ drawerWidth } 
        handleNavigate={ handleNavigate }
      />

      <SidebarMobile
        user={ user }
        drawerWidth={ drawerWidth } 
        handleNavigate={ handleNavigate }
      />

      <Box
        component='main'
        bgcolor='#E8E8E8'
        sx={{
          pb: 10,
          height: '100%',
          flexGrow: 1,
        }}
      >
        {
          isLoading
            ? <LoadingPage />
            : <Box className='animate__animated animate__fadeIn'>
                { children }
              </Box>
        }
      </Box>
    </Box>
  );
}

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
      {
        ( user )
          ? <>
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
              position='relative'
              component='main'
              bgcolor='#E8E8E8'
              sx={{
                pb: 10,
                height: '100%',
                flexGrow: 1,
              }}
            >
              <Box
                display={ isLoading ? 'block' : 'none' }
                className='animate__animated animate__fadeOut'
              >
                <Box
                  bgcolor='white'
                  height='100vh'
                  width='100%'
                >
                  <LoadingPage />
                </Box>
              </Box>

              <Box
                display={ isLoading ? 'none' : 'block' }
                className=''
              >
                { children }
              </Box>
            </Box>
          </>
        : <></>
      }
    </Box>
  );
}

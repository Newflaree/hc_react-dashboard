// React
import { useContext } from 'react';
// Material UI
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@mui/material';
// Material Icons
import { Menu } from '@mui/icons-material';
// Context
import { UiContext } from '../../../../context/ui';


export const Navbar = () => {
  const { toggleSideMenu } = useContext( UiContext );

  return (
    <AppBar
      position='fixed'
      sx={{
        zIndex: ( theme ) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          onClick={ toggleSideMenu }
          edge='start'
          sx={{
            mr: 2,
            display: {
              xs: 'flex',
              md: 'none'
            }
          }}
        >
          <Menu />
        </IconButton>
        
        <Typography
          fontSize='30px'
          letterSpacing='2px'
        >
          HC Soluciones
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

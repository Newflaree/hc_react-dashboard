// React
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
// Material UI
import {
  Box,
  ListItem,
  ListItemText
} from '@mui/material';
// Material Icons
import {
  CalendarMonth,
  Home,
  LocalOffer,
  Message,
  Mic,
  Person
} from '@mui/icons-material';


export const SidebarList = ({ handleNavigate }) => {
  const location = useLocation();

  const isActive = ( path ) => {
    console.log();
    return location.pathname === path;
  }

  return (
    <Fragment>
      {/*ListItem*/}
      <ListItem
        button
        onClick={ () => handleNavigate( '/' ) }
        sx={{
          transition: 'all 0.3s ease',
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={ () => isActive('/') ? {
            transition: 'all 0.3s ease',
            color: '#1D3B86',
            ml: 1
          } : {
            transition: 'all 0.3s ease',
            '&:hover': { color: '#1D3B86', ml: 1 }
          }}
        >
          <Home sx={{ mr: 1 }} />
          <ListItemText primary='Inicio' />
        </Box>
      </ListItem>
      {/*ListItem*/}
      {/*ListItem*/}
      <ListItem
        button
        onClick={ () => handleNavigate( '/narrators' ) }
        sx={{
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={ () => isActive('/narrators') ? {
            transition: 'all 0.3s ease',
            color: '#1D3B86',
            ml: 1
          } : {
            transition: 'all 0.3s ease',
            '&:hover': { color: '#1D3B86', ml: 1 }
          }}
        >
          <Mic sx={{ mr: 1 }} />
          <ListItemText primary='Locutores' />
        </Box>
      </ListItem>
      {/*ListItem*/}
      {/*ListItem*/}
      <ListItem
        button
        onClick={ () => handleNavigate( '/users' ) }
        sx={{
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={ () => isActive('/users') ? {
            transition: 'all 0.3s ease',
            color: '#1D3B86',
            ml: 1
          } : {
            transition: 'all 0.3s ease',
            '&:hover': { color: '#1D3B86', ml: 1 }
          }}
        >
          <Person sx={{ mr: 1 }} />
          <ListItemText primary='Usuarios' />
        </Box>
      </ListItem>
      {/*ListItem*/}
      {/*ListItem*/}
      <ListItem
        button
        onClick={ () => handleNavigate( '/tags' ) }
        sx={{
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={ () => isActive('/tags') ? {
            transition: 'all 0.3s ease',
            color: '#1D3B86',
            ml: 1
          } : {
            transition: 'all 0.3s ease',
            '&:hover': { color: '#1D3B86', ml: 1 }
          }}
        >
          <LocalOffer sx={{ mr: 1 }} />
          <ListItemText primary='Tags' />
        </Box>
      </ListItem>
      {/*ListItem*/}
      {/*ListItem*/}
      <ListItem
        button
        onClick={ () => handleNavigate( '/bookings' ) }
        sx={{
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={ () => isActive('/bookings') ? {
            transition: 'all 0.3s ease',
            color: '#1D3B86',
            ml: 1
          } : {
            transition: 'all 0.3s ease',
            '&:hover': { color: '#1D3B86', ml: 1 }
          }}
        >
          <CalendarMonth sx={{ mr: 1 }} />
          <ListItemText primary='Reservas' />
        </Box>
      </ListItem>
      {/*ListItem*/}
      {/*ListItem*/}
      <ListItem
        button
        onClick={ () => handleNavigate( '/messages' ) }
        sx={{
          '&.Mui-selected': { backgroundColor: '#E8E8E8' }
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={ () => isActive('/messages') ? {
            transition: 'all 0.3s ease',
            color: '#1D3B86',
            ml: 1
          } : {
            transition: 'all 0.3s ease',
            '&:hover': { color: '#1D3B86', ml: 1 }
          }}
        >
          <Message sx={{ mr: 1 }} />
          <ListItemText primary='Mensajería' />
        </Box>
      </ListItem>
      {/*ListItem*/}
    </Fragment>
  );
}

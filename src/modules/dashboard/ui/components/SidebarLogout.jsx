// React
import { useContext } from 'react';
// Material UI
import {
  ListItem,
  ListItemText
} from '@mui/material';
// Material Icons
import { Logout } from '@mui/icons-material';
// Context
import { AuthContext } from '../../../../context';


export const SidebarLogout = () => {
  const { authLogOut } = useContext( AuthContext );

  return (
    <ListItem
      onClick={ authLogOut }
      button
      sx={{
        mt: 4,
        '&.Mui-selected': { backgroundColor: '#E8E8E8' }
      }}
    >
      <Logout sx={{ mr: 1, color: '#D32F2F' }} />
      <ListItemText primary='Cerrar Sesión' sx={{ color: '#D32F2F' }} />
    </ListItem>
  );
}

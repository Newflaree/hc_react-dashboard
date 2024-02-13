// React
import { useContext } from 'react';
// Material UI
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
// Material Icons
import {
  Home,
  Mic
} from '@mui/icons-material';
// Context
import { UiContext } from '../../../../context/ui';
// Components
import {
  SidebarAvatar,
  SidebarLogout,
  SidebarList
} from '../components';


export const SidebarMobile = ({
  user,
  drawerWidth,
  handleNavigate
}) => {
  const { toggleSideMenu, isMenuOpen } = useContext( UiContext );

  return (
    <Drawer
      onClose={ toggleSideMenu }
      open={ isMenuOpen }
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >
      <List>
        <SidebarAvatar
          avatar={ user.img }
          name={ user.name }
        />

        <Divider sx={{ m: 2 }}/>

        <SidebarList
          handleNavigate={ handleNavigate }
        />

        <SidebarLogout />
      </List>
    </Drawer>
  );
}

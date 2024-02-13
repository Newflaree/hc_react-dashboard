// Material UI
import {
  Drawer,
  Divider,
  List,
} from '@mui/material';
// Components
import {
  SidebarAvatar,
  SidebarLogout,
  SidebarList
} from '../components';


export const SidebarDesktop = ({
  user,
  drawerWidth,
  handleNavigate
}) => {
  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: drawerWidth,
        display: {
          xs: 'none',
          md: 'flex'
        },
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

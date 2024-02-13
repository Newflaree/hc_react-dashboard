// Material UI
import {
  ListItem,
  ListItemIcon,
  Typography
} from '@mui/material';


export const SidebarAvatar = ({
  avatar = '',
  name = ''
}) => {
  return (
    <ListItem
      sx={{
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <ListItemIcon>
        <img
          src={ avatar }
          alt='avatar'
          style={{
            marginBottom: '20px',
            width: '130px',
            height: '130px',
            borderRadius: '50%'
          }}
        />
      </ListItemIcon>

      <Typography
        textAlign='center'
        fontSize={ 20 }
        fontWeight='bold'
      >
        Buen día,
      </Typography>
      <Typography
        textAlign='center'
        fontSize={ 20 }
        fontWeight='bold'
      >
        { name }
      </Typography>
    </ListItem>
  );
}

// React
import { Fragment } from 'react';
// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Material Icons
import {
  Star,
  StarHalfOutlined,
  StarOutline
} from '@mui/icons-material';


export const NarratorInfo = ({ user }) => {

  return (
    <Fragment>
      <Box
        mt={ 2 }
        sx={{
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
        }}
      >
        <Star sx={{ color: 'gold' }} />
        <Star sx={{ color: 'gold' }} />
        <Star sx={{ color: 'gold' }} />
        <StarHalfOutlined sx={{ color: 'gold' }} />
        <StarOutline sx={{ color: 'gold' }} />

        <Typography
          ml={ 1 }
        >
          { `(${ '20' })` }
        </Typography>
      </Box>

      <Typography mt={ 1 } mb={ 3 }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus elit, ullamcorper eget nisl nec, tempus tempor lorem. Vestibulum euismod orci eu tellus convallis, a eleifend metus posuere. 
      </Typography>
    </Fragment>
  );
}

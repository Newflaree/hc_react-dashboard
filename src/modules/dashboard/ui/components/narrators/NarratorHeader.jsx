// React
import { Fragment } from 'react';
// Material UI
import {
  Box,
  Typography
} from '@mui/material';


export const NarratorHeader = ({ user }) => {
  return (
    <Fragment>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <img
          src={ user.img }
          alt='avatar'
          style={{
            marginBottom: '20px',
            width: '150px',
            height: '150px',
            borderRadius: '50%'
          }}
        />
      </Box>

      <Typography
        variant='h4'
        component='h4'
        textAlign='center'
        color='primary'
      >
        { `${ user.name } ${ user.lastName }` }
      </Typography>

      <Typography
        variant='h5'
        component='h5'
        textAlign='center'
      >
        { user.tags[0] }
      </Typography>

      <Typography
        variant='h5'
        component='h5'
        textAlign='center'
        color='secondary'
      >
        { user.city.name }
      </Typography>
    </Fragment>
  );
}

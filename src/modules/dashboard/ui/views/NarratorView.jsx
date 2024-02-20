// React
import { useEffect } from 'react';
// React Router Dom
import { useParams } from 'react-router-dom';
// Material UI
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import {
  Star,
  StarHalfOutlined,
  StarOutline
} from '@mui/icons-material';
// Components
import { DashboardPaper, LoadingPage } from '../components';
// Hooks
import { useNarrators } from '../../hooks';


export const NarratorView = () => {
  const { id } = useParams();
  const { user, handleGetUserById } = useNarrators();

  useEffect( () => {
    const initUser = async () => {
      await handleGetUserById( id );
    }

    initUser();
  }, [ id ] );

  return (
    <DashboardPaper pageTitle='Detalle del Locutor'>
      {
        user 
          ? (
            <Grid container>
              <Grid
                item
                xs={ 12 }
              >
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
                  { user.city }
                </Typography>

                <Grid
                  item
                  xs={ 12 }
                  px={ 10 }
                  pt={ 2 }
                  pb={ 4 }
                >
                  <Box
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
                </Grid>
              </Grid>

              <Grid
                item
                xs={ 12 }
              >
                <Typography
                  sx={{
                    px: {
                      xs: 4,
                      md: 10
                    }
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus elit, ullamcorper eget nisl nec, tempus tempor lorem. Vestibulum euismod orci eu tellus convallis, a eleifend metus posuere. 
                </Typography>
              </Grid>

              <Grid
                item
                xs={ 12 }
              >
              </Grid>
            </Grid>
          )
          : <></>
      }
    </DashboardPaper>
  );
}

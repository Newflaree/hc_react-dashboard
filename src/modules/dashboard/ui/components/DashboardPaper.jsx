import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

export const DashboardPaper = ({ children, pageTitle = '' }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Paper
        elevation={ 8 }
        sx={{ 
          mt: 10,
          p: {
            xs: 4,
            md: 6
          },
          width: {
            xs: 'calc( 100vw - 40px )',
            md: 'calc( 1000px - 70px )'
          },
          borderRadius: 4
        }}
      >
        <Grid
          container
          spacing={ 3 }
        >
          {/*Title*/}
          <Grid
            item
            mb={ 8 }
            xs={ 12 }
          >
            <Typography
              mt={ 2 }
              color='primary'
              variant='h2'
              component='h2'
            >
              { pageTitle }
            </Typography>
          </Grid>
          {/*Title*/}

          { children }
        </Grid>
      </Paper>
    </Box>
  );
}

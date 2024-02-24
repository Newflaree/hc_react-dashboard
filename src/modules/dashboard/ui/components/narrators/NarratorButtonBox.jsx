// React Router Dom
import { useNavigate } from 'react-router-dom';
// Material UI
import {
  Button,
  Grid
} from '@mui/material';


export const NarratorButtonBox = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate( -1 );
  }

  return (
    <Grid container>
      <Grid
        item
        xs={ 12 }
        md={ 6 }
        mb={ 2 }
        sx={{
          pr: {
            xs: 0,
            md: 2
          }
        }}
      >
        <Button
          variant='outlined'
          color='error'
          fullWidth
          sx={{ borderRadius: 4 }}
        >
          Eliminar
        </Button>
      </Grid>

      <Grid
        item
        xs={ 12 }
        md={ 6 }
        mb={ 2 }
        sx={{
          pl: {
            xs: 0,
            md: 2
          }
        }}
      >
        <Button
          variant='outlined'
          color='primary'
          fullWidth
          sx={{
            borderRadius: 4
          }}
          onClick={ navigateBack }
        >
          Volver
        </Button>
      </Grid>
    </Grid>
  );
}

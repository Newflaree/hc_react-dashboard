// React
import { useState } from 'react';
// Material UI
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextareaAutosize,
  Typography
} from '@mui/material';


export const MessagesView = ({ swals = [] }) => {
  const [ userType, setUserType ] = useState( '' );
  const [ message, setMessage ] = useState( '' );
  const [ sendEmailSwal ] = swals;

  const handleUserTypeChange = ( event ) => {
    setUserType( event.target.value );
  }

  const handleMessageChange = ( event ) => {
    setMessage( event.target.value );
  }

  const handleSendMessage = () => {
    let newMessage = '';

    if ( userType === 'locutor' ) newMessage = 'los locutores';
    if ( userType === 'usuario' ) newMessage = 'los usuarios';
    
    sendEmailSwal( newMessage );
  }

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
              Redactar Mensaje
            </Typography>
          </Grid>
          {/*Title*/}

          {/*FormControl*/}
          <Grid
            item
            xs={ 12 }
          >
            <FormControl fullWidth>
              <InputLabel>Tipo de Usuario</InputLabel>
              <Select
                labelId='user-type-label'
                id='user-type'
                value={ userType }
                label='Topo de Usuario'
                onChange={ handleUserTypeChange }
              >
                <MenuItem value='locutor'>Locutor</MenuItem>
                <MenuItem value='usuario'>Usuario</MenuItem>
                <MenuItem value='todos'>Todos</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/*FormControl*/}

          {/*TextArea*/}
          <Grid
            item
            xs={ 12 }
          >
            <TextareaAutosize
              minRows={ 10 }
              placeholder='Escribe tu mensaje aquí...'
              value={ message }
              onChange={ handleMessageChange }
              style={{
                padding: '20px',
                width: '100%',
                borderRadius: 4,
                resize: 'none'
              }}
            />
          </Grid>
          {/*TextArea*/}

          <Grid
            item
            mt={ 3 }
            xs={ 12 }
          >
            <Button
              variant='contained'
              color='primary'
              onClick={ handleSendMessage }
              sx={{
                borderRadius: 4,
                p: 1,
                width: {
                  xs: '100%',
                  md: '200px'
                }
              }}
            >
              Enviar Mensaje
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

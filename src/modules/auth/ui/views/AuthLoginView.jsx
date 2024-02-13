// React
import {
  useContext,
  useState,
} from 'react';
// Material UI
import {
  Button,
  CircularProgress,
  FormControlLabel,
  Grid,
  Link,
  TextField
} from '@mui/material';
// Context
import { AuthContext } from '../../../../context';


export const AuthLoginView = ({
  onSubmitForm,
  register,
  handleSubmit,
  errors,
  reset,
}) => {
  const [ isRemember, setIsRemember ] = useState( false );
  const { status } = useContext( AuthContext );

  const handleRememberChange = () => {
    setIsRemember( !isRemember );
  }

  return (
    <form
      onSubmit={ handleSubmit( onSubmitForm ) }
    >
      <TextField
        margin='normal'
        fullWidth
        label='Correo Electrónico'
        type='email'
        autoFocus
        { ...register( 'email', {
          required: 'Este campo es obligatorio'
        })}
        error={ !!errors.email }
        helperText={ errors.email?.message }
      />

      <TextField
        margin='normal'
        fullWidth
        label='Contraseña'
        type='password'
        autoFocus
        { ...register( 'password', {
          required: 'Este campo es obligatorio'
        })}
        error={ !!errors.password }
        helperText={ errors.password?.message }
      />

      <FormControlLabel
        sx={{
          py: 2,
          ml: '1px'
        }}
        control={
          <input
            type='checkbox'
            name='remenber'
            checked={ isRemember }
            onChange={ handleRememberChange }
          />
        }
        label='Recordarme'
      />

      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{
          borderRadius: 4,
          p: 1,
          bgcolor: 'primary',
          mt: 3,
          mb: 2
        }}
      >
        {
          (status !== 'authenticated')
            ? 'Iniciar Sesión'
            : <CircularProgress size={ 24 } />
        }
        
      </Button>

      <Grid
        container
        mt={ 2 }
      >
        <Grid
          item
          xs
        >
          <Link
            href='/'
            variant='body1'
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

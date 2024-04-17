// React
import {
  useContext,
  useEffect
} from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Context
import { AuthContext } from '../../../context';
// Hooks
import { useSwal } from '../../dashboard/hooks';


const resetForm = () => {
  return {
    email: '',
    password: ''
  }
}

export const useAuth = () => {
  const {
    authSignIn,
    errorMessage,
  } = useContext( AuthContext );

  const { simpleSwal } = useSwal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: 'test0@email.com',
      password: '123456'
    }
  });

  useEffect( () => {
    if ( errorMessage.length === 0 ) return;

    simpleSwal( errorMessage, 'error' );

  }, [ errorMessage ] );

  const onSubmitForm = ( formData ) => {
    authSignIn({
      email: formData.email,
      password: formData.password
    });
  }

  return {
    // Method
    onSubmitForm,
    
    register,
    handleSubmit,
    errors,
    reset
  }
}

// React
import { useState, useEffect, useContext } from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Hooks
import { useSwal } from '../../dashboard/hooks';
// Layouts
import { AuthLayout } from '../ui/layouts';
// Views
import { AuthLoginView } from '../ui/views';
// Context
import { AuthContext } from '../../../context';


const resetForm = () => {
  return {
    email: '',
    password: ''
  }
}

export const AuthLoginPage = () => {
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
      email: 'test1@email.com',
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

  return (
    <AuthLayout>
      <AuthLoginView
        onSubmitForm={ onSubmitForm }
        register={ register }
        handleSubmit={ handleSubmit }
        errors={ errors }
        reset={ reset }
      />
    </AuthLayout>
  );
}

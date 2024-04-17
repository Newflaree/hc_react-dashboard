// Hooks
import { useAuth } from '../hooks';
// Views
import { AuthLoginView } from '../ui/views';


export const AuthLoginPage = () => {
  const {
    onSubmitForm,
    register,
    handleSubmit,
    errors,
    reset
  } = useAuth();

  return <AuthLoginView
      onSubmitForm={ onSubmitForm }
      register={ register }
      handleSubmit={ handleSubmit }
      errors={ errors }
      reset={ reset }
    />
}

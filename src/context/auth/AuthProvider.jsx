// React
import {
  useEffect,
  useReducer
} from 'react';
// Api
import { appApi } from '../../api';
// Context
import {
  AuthContext,
  authReducer
} from './';


const AUTH_INITIAL_STATE =	{
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );

  useEffect( () => {
    const initState = async () => {
      await checkToken();
    }

    initState();
  }, [] );

  const checkToken = async () => {
    try {
      const token = localStorage.getItem( 'token' );

      if ( !token ) return dispatch({
        type: '[AUTH] - NotAuthenticated'
      });


      const { status, data } = await appApi.get( '/auth/' );

      if ( status !== 200 ) {
        return dispatch({
          type: '[AUTH] - NotAuthenticated'
        });
      }

      localStorage.setItem( 'token', data.token );

      dispatch({
        type: '[AUTH] - SignUp',
        payload: {
          token: data.token,
          user: data.loggedUser
        }
      });

    } catch ( error ) {
      console.log( error );
    }
  }

  const authSignIn = async ({ email, password }) => {
    try {
      dispatch({
        type: '[AUTH] - RemoveError'
      });

      const { data } = await appApi.post( '/admin/login', { email, password } );

      dispatch({
        type: '[AUTH] - SignUp',
        payload: {
          token: data.token,
          user: data.user
        }
      });

      localStorage.setItem( 'token', data.token );

    } catch ( error ) {
      const message =
        error.response.data.message ||
        error.message ||
        error.response.data.errors[0].msg

      dispatch({
        type: '[AUTH] - AddError',
        payload: message
      });
    }
  }

  const authLogOut = () => {
    localStorage.removeItem( 'token' );

    dispatch({
      type: '[AUTH] - LogOut'
    });
  }

  const authRemoveError = () => {
    dispatch({
      type: '[AUTH] - RemoveError',
    });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        authSignIn,
        authLogOut,
        authRemoveError,
        checkToken
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};

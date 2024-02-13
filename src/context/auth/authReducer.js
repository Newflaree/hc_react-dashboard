export const authReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[AUTH] - AddError':
      return {
        ...state,
        user: null,
        token: null,
        status: 'not-authenticated',
        errorMessage: action.payload
      }

    case '[AUTH] - RemoveError':
      return {
        ...state,
        errorMessage: ''
      }

    case '[AUTH] - SignUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      }

    case '[AUTH] - LogOut':
    case '[AUTH] - NotAuthenticated':
      return {
        ...state,
        errorMessage: '',
        status: 'not-authenticated',
        token: null,
        user: null,
      }

    default: 
      return state;
  }
};

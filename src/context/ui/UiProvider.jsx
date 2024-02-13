// React
import { useReducer } from 'react';
// Context
import { UiContext, uiReducer } from './';


const UI_INITIAL_STATE =	{
  isMenuOpen: false,
  isSubmitting: false
}

export const UiProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

  const toggleSideMenu = () => {
    dispatch({
      type: '[UI] - Toggle Menu'
    });
  }

  const toggleSubmted = () => {

  }

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideMenu
      }}
    >
      { children }
    </UiContext.Provider>
  );
};

// React
import { useReducer } from 'react';
// Context
import { UiContext, uiReducer } from './';


const UI_INITIAL_STATE =	{
  isMenuOpen: false,
  isSubmitting: false,
  rememberedName: undefined
}

export const UiProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

  const handleRemoveRememberName = () => {
    dispatch({
      type: '[UI] - RemoveSelectedName'
    });
  }

  const handleSetRememberName = ( rememberedName = '' ) => {
    dispatch({
      type: '[UI] - SetSelectedName',
      rememberedName
    });
  }

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
        handleRemoveRememberName,
        handleSetRememberName,
        toggleSideMenu
      }}
    >
      { children }
    </UiContext.Provider>
  );
};

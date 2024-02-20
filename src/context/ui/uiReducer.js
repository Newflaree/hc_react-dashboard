
export const uiReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[UI] - Toggle Menu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }

    case '[UI] - GetSelectedName':
      return {
        ...state,
        rememberedName: action.payload
      }

    case '[UI] - SetSelectedName':
      return {
        ...state,
        rememberedName: action.payload
      }

    case '[UI] - RemoveSelectedName':
      return {
        ...state,
        rememberedName: undefined 
      }

    default: 
      return state;
  }
};

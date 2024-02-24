// React
import { useEffect } from 'react';
// React Router DOM
import { useParams } from 'react-router-dom';
// Hooks
import { useNarrators } from '../hooks';
// Views
import { NarratorView } from '../ui/views';


export const NarratorPage = () => {
  const { id } = useParams();
  const {
    user,
    handleGetUserById
  } = useNarrators();

  useEffect( () => {
    const initState = async () => {
      await handleGetUserById( id );
    }

    initState();
  }, [ id ] );

  return <NarratorView
    user={ user }
  />
}

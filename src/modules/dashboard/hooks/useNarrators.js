// React
import {
  useEffect,
  useState
} from 'react';
// Api
import { appApi } from '../../../api';

export const useNarrators = () => {
  const [ narrators, setNarrators ] = useState([]);
  const [ totalNarrators, setTotalNarrators ] = useState( 0 );
  const [ user, setUser ] = useState( null );

  useEffect( () => {
    const initFetch = async () => {
      await handleGetNarrators();
    }

    initFetch();
  }, [] );

  const handleGetUserById = async ( uid ) => {
    const { data } = await appApi.get( `/users/${ uid }` );

    setUser( data.currentUser )
  }

  const handleGetNarrators = async () => {
    const { data } = await appApi.get( '/users/narrators' );

    setNarrators( data.allNarrators )
    setTotalNarrators( data.totalCountNarrators )
  }

  return {
    narrators,
    totalNarrators,
    user,

    handleGetNarrators,
    handleGetUserById
  }
}

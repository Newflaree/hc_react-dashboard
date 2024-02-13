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

  useEffect( () => {
    const initFetch = async () => {
      await handleGetNarrators();
    }

    initFetch();

    console.log( 'TOCK' );
    console.log({ totalNarrators, narrators });
  }, [] );



  const handleGetNarrators = async () => {
    const { data } = await appApi.get( '/users/narrators' );

    setNarrators( data.allNarrators )
    setTotalNarrators( data.totalCountNarrators )
  }

  return {
    narrators,
    totalNarrators,

    handleGetNarrators
  }
}

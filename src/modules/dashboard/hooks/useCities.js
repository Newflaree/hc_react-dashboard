// React
import {
  useEffect,
  useState
} from 'react';
// Api
import { appApi } from '../../../api';


export const useCities = () => {
  const [ cities, setCities ] = useState([]);
  const [ totalCities, setTotalCities ] = useState( 0 );

  useEffect( () => {
    const initFetch = async () => {
      await handleGetCities();
    }

    initFetch();
  }, [] );

  const handleGetCities = async () => {
    const { data } = await appApi.get( '/cities/' );
    setCities( data.allCities );
    setTotalCities( data.totalCities );
  }

  return {
    cities,
    totalCities
  }
}

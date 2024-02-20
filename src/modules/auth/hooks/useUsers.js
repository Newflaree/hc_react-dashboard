import { appApi } from '../../../api';


export const useUsers = () => {

  const handleDeleteUser = async ( id = '' ) => {
    const result = await appApi.delete( `/users/${ id }` );

    console.log( result );
  }

  return {
    handleDeleteUser
  }
}

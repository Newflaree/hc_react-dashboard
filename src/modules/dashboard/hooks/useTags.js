// React 
import {
  useContext,
  useEffect,
  useState,
} from 'react';
import Swal from 'sweetalert2';
import { appApi } from '../../../api';
import { useSwal } from './';
import { AuthContext } from '../../../context';

export const useTags = () => {
  const [ tags, setTags ] = useState([]);
  const [ countTags, setCountTags ] = useState( 0 );
  const { authRemoveError, errorMessage } = useContext( AuthContext )

  useEffect( () => {
    const initFetch = async () => {
      const { allTags, totalTags } = await handleGetTags();
      setTags( allTags );
      setCountTags( totalTags );
    }

    initFetch();
  }, [] );

  const { simpleSwal } = useSwal();

  const handleGetTags = async () => {
    const { data } = await appApi.get( '/tags' );
    const { allTags, totalTags } = data;

    return {
      allTags,
      totalTags
    }
  }

  const handleAddTag = async ( name ) => {
    try {
      const { data } = await appApi.post( '/tags', { name } )

      const { allTags, totalTags } = await handleGetTags();
      setTags( allTags );
      setCountTags( totalTags );

      if ( data.ok ) return simpleSwal('Tag Creado con éxito', 'success' )


    } catch ( error ) {
      const message = 
        error.response.data.message ||
        error.response.data.errors[0].msg
    
      simpleSwal( message, 'error' );
    }
  }

  const handleDeleteTag = async ( tagToDelete ) => {
    try {
      const { data } = await appApi.get( `/tags/${ tagToDelete }` );

      return Swal.fire({
        title: "Gestión de tags",
        text: `Estás a punto de eliminar el tag "${ data.currentTag.name }"`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1D3B86",
        cancelButtonColor: "#D32F2F",
        confirmButtonText: "Si, deseo Eliminarlo",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
      }).then( async(result) => {
        if (result.isConfirmed) {
          try {
            await appApi.delete( `/tags/${ tagToDelete }` );

            const { allTags, totalTags } = await handleGetTags();
            setTags( allTags );
            setCountTags( totalTags );

            } catch ( error ) {
            console.log( 'aljflsjflsajflaskdjf' );
            console.log( error.response.data.message );
          }
          
          Swal.fire({
            title: "Tag Eliminado",
            text: `El tag "${ data.currentTag.name }" fue eliminado con éxito`,
            icon: "success",
            confirmButtonColor: "#1D3B86",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
          });
        }
      });
    } catch ( error ) {
      const message = error.response.data.message;
      console.log( message );
      Swal.fire({ title: message, icon: 'error' })
    }
  }


  const handleFilteredTags = ( searchTerm = '' ) => {
    return tags.filter( ({ name }) =>
      name.toLowerCase().includes( searchTerm.toLowerCase() )
    );
  }


  return {
    countTags,
    handleAddTag,
    handleDeleteTag,
    handleGetTags,
    handleFilteredTags
  }
}

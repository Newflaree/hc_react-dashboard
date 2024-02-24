// React
import {
  useEffect,
  useState
} from 'react';
// Material UI
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
// Components
import {
  DashboardPaper,
  EmptyTable
} from '../components';
// Hooks
import {
  useTags
} from '../../hooks';

// TODO: Fix background bottom size

export const TagsView = () => {
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ newTag, setNewTag ] = useState( '' );
  const {
    countTags,
    handleAddTag,
    handleDeleteTag,
    handleFilteredTags,
  } = useTags();

  const filteredTags = handleFilteredTags( searchTerm );

  return (
    <DashboardPaper pageTitle='Gestión de Tags'>
      <Grid
        item
        xs={ 12 }
      >
        <TextField
          label='Buscar Tag'
          variant='outlined'
          fullWidth
          margin='normal'
          value={ searchTerm }
          onChange={ ( e ) => setSearchTerm( e.target.value ) }
        />
      </Grid>

      <Grid
        item
        xs={ 12 }
      >
        <Grid
          container
          spacing={ 2 }
        >
          <Grid
            item
            xs={ 8 }
          >
            <TextField
              label='Agregar nuevo tag'
              variant='outlined'
              fullWidth
              margin='normal'
              value={ newTag }
              onChange={ ( e ) => setNewTag( e.target.value ) }
            />
          </Grid>
          <Grid
            item
            xs={ 4 }
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button
              size='large'
              variant='outlined'
              color='primary'
              sx={{ borderRadius: 8 }}
              onClick={ () => handleAddTag( newTag ) }
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={ 12 } display='flex' flexDirection='row'>
        <Typography
          variant='h5'
          component='h5'
          mb={ 4 }
        >
          Tags Totales:
        </Typography>
        <Typography
          variant='h5'
          component='h5'
          mb={ 4 }
          ml={ 2 }
          color='primary'
        >
          { countTags }
        </Typography>
      </Grid>

      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Tag</TableCell>
              <TableCell>Número de Locutores</TableCell>
              <TableCell>Número de Usuarios</TableCell>
              <TableCell>Eliminar Tag</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              filteredTags.length < 1
                ? <EmptyTable colSpan={ 3 } />
                : filteredTags.map( ( tag ) => (
                <TableRow key={ tag._id }>
                  <TableCell>{ tag.name }</TableCell>
                  <TableCell>{ tag.selectedMount }</TableCell>
                  <TableCell>{ tag.selectedMount }</TableCell>
                  <TableCell>
                    <Button
                      variant='outlined'
                      color='error'
                      sx={{ borderRadius: 8 }}
                      onClick={ () => handleDeleteTag( tag._id ) }
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardPaper>
  );
}

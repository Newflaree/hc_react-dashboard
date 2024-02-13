// React
import { useState } from 'react';
// Material UI
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TextField,
  Typography
} from '@mui/material';
// Components
import { DashboardPaper, EmptyTable } from '../components';
// Data
import {
  citiesData,
  rolesData,
  testUsersData
} from '../../../../database';


export const UsersView = () => {
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ filteredUsers, setFilteredUsers ] = useState( [] );
  const [ selectedCity, setSelectedCity ] = useState( '' );
  const [ selectedRole, setSelectedRole ] = useState( '' );

  const handleViewProfile = ( userId ) => {
    console.log( `Ver perfil del usuario con ID: ${ userId }` );
  }

  const handleDeleteUser = ( userId ) => {
    console.log( `Eliminar perfil del usuario con ID: ${ userId }` );
  }

  const handleSearch = ( event ) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm( searchTerm );

    const filteredUsers = testUsersData.filter(
      ( user ) => 
        user.userName.toLowerCase().includes( searchTerm ) ||
        user.city.toLowerCase().includes( searchTerm ) ||
        user.role.toLowerCase().includes( searchTerm )
    );

    setFilteredUsers( filteredUsers );
  }

  const handleCityChange = ( event ) => {
    setSelectedCity( event.target.value );
  }

  const handleRoleChange = ( event ) => {
    setSelectedRole( event.target.value );
  }

  const displayUsers = searchTerm
    ? filteredUsers
    : testUsersData;

  const filteredByCityAndRole = displayUsers.filter(
    ( user ) =>
      ( !selectedCity || user.city === selectedCity ) &&
      ( !selectedRole || user.role === selectedRole ) 
  );

  return (
    <DashboardPaper pageTitle='Gestión de Usuarios'>
      <Grid
        item
        xs={ 12 }
      >
        <TextField
          label='Buscar por Nombre, Ciudad o Rol del Usuario'
          variant='outlined'
          fullWidth
          margin='normal'
          value={ searchTerm }
          onChange={ handleSearch }
        />
      </Grid>

      <Grid
        item
        xs={ 12 }
        md={ 6 }
      >
        <FormControl fullWidth>
          <InputLabel>Ciudad</InputLabel>
          <Select
            label='Ciudad'
            value={ selectedCity }
            onChange={ handleCityChange }
          >
            <MenuItem value=''>
              <em>Seleccione</em>
            </MenuItem>

            {
              citiesData.map( ( city ) => (
                <MenuItem key={ city } value={ city }>
                  { city }
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={ 12 }
        md={ 6 }
        mb={ 4 }
      >
        <FormControl fullWidth>
          <InputLabel>Rol</InputLabel>
          <Select
            label='Ciudad'
            value={ selectedRole }
            onChange={ handleRoleChange }
          >
            <MenuItem value=''>
              <em>Seleccione</em>
            </MenuItem>

            {
              rolesData.map( ( role ) => (
                <MenuItem key={ role } value={ role }>
                  { role }
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Grid>

      <TableContainer
        sx={{
          maxHeight: 300
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Nombre de Usuario</TableCell>
              <TableCell>Ciudad</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Ver Perfil</TableCell>
              <TableCell>Eliminar Usuario</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              filteredByCityAndRole.length < 1
                ? <EmptyTable colSpan={ 5 } />
                : filteredByCityAndRole.map( ({ id, userName, city, role }) => (
                 
                <TableRow key={ id }>
                  <TableCell>
                    <Typography
                      sx={{
                        color: '#1D3B86',
                        borderBottom: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      { userName }
                    </Typography>
                  </TableCell>
                  <TableCell>{ city }</TableCell>
                  <TableCell>{ role }</TableCell>
                  <TableCell>
                    <Button
                      variant='outlined'
                      color='primary'
                      sx={{ borderRadius: 8 }}
                      onClick={ () => handleViewProfile( id ) }
                    >
                      Ver Perfil
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='outlined'
                      color='error'
                      sx={{ borderRadius: 8 }}
                      onClick={ () => handleDeleteUser( id ) }
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

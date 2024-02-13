// React
import { useState } from 'react';
// Material UI
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Typography
} from '@mui/material';
// Components
import { EmptyTable } from '../components';
// Database
import {
  citiesData,
  specialtiesData
} from '../../../../database';
// Hooks
import { useNarrators } from '../../hooks';


export const NarratorsView = () => {
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ filteredNarrators, setFilteredNarrators ] = useState( [] );
  const [ selectedCity, setSelectedCity ] = useState( '' );
  const [ selectedSpecialty, setSelectedSpecialty ] = useState( '' );
  const { narrators } = useNarrators();

  const handleViewProfile = ( narratorId ) => {
    console.log( `Ver perfil del locutor con ID: ${ narratorId }` );
  }

  const handleDeleteNarrator = ( narratorId ) => {
    console.log( `Eliminar locutor con ID: ${ narratorId }` );
  }

  const handleSearch = ( event ) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm( searchTerm ); 

    const filteredNarrators = narrators.filter(
      ( narrator ) =>
        narrator.name.toLowerCase().includes( searchTerm ) ||
        narrator.lastName.toLowerCase().includes( searchTerm ) ||
        narrator.city.toLowerCase().includes( searchTerm ) ||
        narrator.tags[0].toLowerCase().includes( searchTerm )
    )

    setFilteredNarrators( filteredNarrators )
  }

  const handleCityChange = ( event ) => {
    setSelectedCity( event.target.value );
  }

  const handleSpecialtyChange = ( event ) => {
    setSelectedSpecialty( event.target.value );
  }

  const displayNarrators = searchTerm 
    ? filteredNarrators
    : narrators;

  const filteredByCityAndSpecialty = displayNarrators.filter(
    ( narrator ) =>
      ( !selectedCity || narrator.city === selectedCity ) &&
      ( !selectedSpecialty || narrator.tags[0] === selectedSpecialty ) 
  );

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Paper
        elevation={ 8 }
        sx={{ 
          mt: 10,
          p: {
            xs: 4,
            md: 6
          },
          width: {
            xs: 'calc( 100vw - 40px )',
            md: 'calc( 1000px - 70px )'
          },
          borderRadius: 4
        }}
      >
        <Grid
          container
          spacing={ 3 }
        >
          {/*Title*/}
          <Grid
            item
            mb={ 8 }
            xs={ 12 }
          >
            <Typography
              mt={ 2 }
              color='primary'
              variant='h2'
              component='h2'
            >
              Locutores
            </Typography>
          </Grid>
          {/*Title*/}

          <Grid
            item
            xs={ 12 }
          >
            <TextField
              label='Buscar por Nombre, Ciudad o Especialidad del Locutor'
              variant='outlined'
              fullWidth
              margin='normal'
              value={ searchTerm }
              onChange={ handleSearch }
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >
            <FormControl fullWidth>
              <InputLabel>Ciudad</InputLabel>
              <Select
                value={selectedCity}
                label='Ciudad'
                onChange={handleCityChange}
              >
                <MenuItem value=''>
                  <em>Seleccione</em>
                </MenuItem>
                {citiesData.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >
            <FormControl fullWidth>
              <InputLabel>Especialidad</InputLabel>
              <Select
                value={selectedSpecialty}
                label='Especialidad'
                onChange={handleSpecialtyChange}
              >
                <MenuItem value=''>
                  <em>Seleccione</em>
                </MenuItem>
                {specialtiesData.map((specialty) => (
                  <MenuItem key={specialty} value={specialty}>
                    {specialty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>



          <TableContainer style={{ maxHeight: 300, minHeight: 300 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow >
                  <TableCell>Nombre</TableCell>
                  <TableCell>Ciudad</TableCell>
                  <TableCell>Especialidad</TableCell>
                  <TableCell>Ver Perfil</TableCell>
                  <TableCell>Eliminar Locutor</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {
                  filteredByCityAndSpecialty.length < 1 
                    ? <EmptyTable colSpan={ 5 } />
                    : filteredByCityAndSpecialty.map( ({
                      uid,
                      name,
                      lastName,
                      city,
                      tags
                    }) => (
                    <TableRow key={ uid }>
                      <TableCell>{ `${ name } ${ lastName }` }</TableCell>
                      <TableCell>{ 'Santiago' }</TableCell>
                      <TableCell>{ tags }</TableCell>
                      <TableCell>
                        <Button
                          variant='outlined'
                          color='primary'
                          sx={{ borderRadius: 8 }}
                          onClick={ () => handleViewProfile( uid ) }
                        >
                          Ver Perfil
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant='outlined'
                          color='error'
                          sx={{ borderRadius: 8 }}
                          onClick={ () => handleDeleteNarrator( uid ) }
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
        </Grid>
      </Paper>
    </Box>
  );
}

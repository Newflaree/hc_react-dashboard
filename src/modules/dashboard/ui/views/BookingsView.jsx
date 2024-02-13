// React
import { useState } from 'react';
// Material UI
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TextField,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
// Components
import { DashboardPaper, EmptyTable } from '../components';
// Database
import { testBookingData } from '../../../../database';


export const BookingsView = () => {
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ filteredReservations, setFilteredReservations ] = useState( [] );
  const [ sortOrder, setSortOrder ] = useState( 'asc' );
  const [ sortBy, setSortBy ] = useState( 'date' );

  const handleDeleteReservation = (reservationId) => {
    console.log(`Eliminar reserva con ID: ${reservationId}`);
  };

  const handleSearch = ( event ) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm( searchTerm );

    const filteredReservations = testBookingData.filter(
      ( reservation ) => reservation.userName.toLowerCase().includes( searchTerm )
    );

    setFilteredReservations( filteredReservations );
  };

  const handleSortOrderChange = ( event ) => {
    setSortOrder( event.target.value );
  };

  const handleSortByChange = ( event ) => {
    setSortBy( event.target.value );
  };

  const displayReservations = searchTerm ? filteredReservations : testBookingData;

  const sortedReservations = displayReservations.sort( ( a, b ) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    switch ( sortBy ) {
      case 'date':
        return order * new Date( a.date ) - order * new Date( b.date );

      case 'locutor':
        return order * a.locutorName.localeCompare( b.locutorName );

      case 'user':
        return order * a.userName.localeCompare( b.userName );

      case 'city':
        return order * a.city.localeCompare( b.city );

      default:
        return 0;
    }
  });

  return (
    <DashboardPaper pageTitle='Gestión de Reservas'>
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={ 12 }
        >
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            label="Buscar por Nombre del Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Ordenar por</InputLabel>
            <Select
              value={sortBy}
              label='Ordenar por'
              onChange={handleSortByChange}
            >
              <MenuItem value="date">Fecha</MenuItem>
              <MenuItem value="locutor">Locutor</MenuItem>
              <MenuItem value="user">Usuario</MenuItem>
              <MenuItem value="city">Ciudad</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Orden</InputLabel>
            <Select
              value={sortOrder}
              label='Orden'
              onChange={handleSortOrderChange}
            >
              <MenuItem value="asc">Ascendente</MenuItem>
              <MenuItem value="desc">Descendente</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer
        sx={{
          mt: 4,
          maxHeight: 300
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 16 }}>Nombre del Usuario</TableCell>
              <TableCell sx={{ fontSize: 16 }}>Nombre del Locutor</TableCell>
              <TableCell sx={{ fontSize: 16 }}>Especialidad del Narrador</TableCell>
              <TableCell sx={{ fontSize: 16 }}>Ciudad</TableCell>
              <TableCell sx={{ fontSize: 16 }}>Fecha</TableCell>
              <TableCell sx={{ fontSize: 16 }}>Eliminar Reserva</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              sortedReservations.length < 1 
                ? <EmptyTable colSpan={ 6 } />
                : sortedReservations.map( ({ 
                id,
                userName,
                locutorName,
                specialty,
                city,
                date
              }) => (
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
                  <TableCell>
                    <Typography
                      sx={{
                        color: '#1D3B86',
                        borderBottom: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      { locutorName }
                    </Typography>
                  </TableCell>
                  <TableCell>{ specialty }</TableCell>
                  <TableCell>{ city }</TableCell>
                  <TableCell>{ date }</TableCell>
                  <TableCell>
                    <Button
                      variant='outlined'
                      color='error'
                      sx={{ borderRadius: 8 }}
                      onClick={ () => console.log( 'Eliminado' ) }
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

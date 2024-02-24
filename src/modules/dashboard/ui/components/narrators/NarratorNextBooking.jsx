// React
import { Fragment } from 'react';
// Material React
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
// Material Icons
import { CreditScoreOutlined } from '@mui/icons-material';


export const NarratorNextBooking = ({ user }) => {
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]

  return (
    <Fragment>
      <Typography
        variant='h4'
        component='h4'
        color='primary'
      >
        Siguientes Cursos
      </Typography>


      <TableContainer
        sx={{
          mt: 4,
          widht: '100%',
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
              items.length < 1 
                ? <EmptyTable colSpan={ 6 } />
                : items.map( ({ 
                id,
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
                      Test Name
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
                      Test Name
                    </Typography>
                  </TableCell>
                  <TableCell>Test Specialty</TableCell>
                  <TableCell>Test City</TableCell>
                  <TableCell>Test Date</TableCell>
                  <TableCell>
                    <Chip
                      label='Pagada con éxito'
                      variant='outlined'
                      color='success'
                      icon={ <CreditScoreOutlined /> }
                      sx={{
                        my: 2
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

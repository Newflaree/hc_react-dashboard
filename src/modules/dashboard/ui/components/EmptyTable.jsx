// Material UI
import {
  TableCell,
  TableRow,
  Typography
} from '@mui/material';


export const EmptyTable = ({ colSpan }) => {
  return (
    <TableRow>
      <TableCell
        colSpan={ colSpan }
        align='center'
      >
        <Typography variant='subtitle2' py={ 10 }>
          No hay Resultados
        </Typography>
      </TableCell>
    </TableRow>
  );
}

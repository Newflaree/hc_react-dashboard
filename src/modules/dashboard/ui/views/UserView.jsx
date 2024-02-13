// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Components
import { DashboardPaper } from '../components';


export const UserView = () => {
  return (
    <DashboardPaper pageTitle='Detalle del Usuario'>
      <Typography variant='h1'>
        UserView
      </Typography>
    </DashboardPaper>
  );
}

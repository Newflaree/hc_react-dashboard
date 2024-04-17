// Material UI
import {
  Grid,
} from '@mui/material';
// Components
import {
  DashboardPaper,
  HomeMap
} from '../components';
// Layouts
import { DashboardLayout } from '../layouts';


export const DashboardView = () => {
  return (
    <DashboardLayout>
      <DashboardPaper pageTitle='Estadísticas Generales'>
        <Grid item xs={ 12 } md={ 12 }>
          <HomeMap />
        </Grid>
      </DashboardPaper>
    </DashboardLayout>
  );
};

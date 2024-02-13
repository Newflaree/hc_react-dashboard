// Material UI
import {
  Grid,
  Typography,
} from '@mui/material';
// Recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
// Components
import {
  DashboardPaper,
  DashboardRegionGraph,
  DashboardTagsPieGraph
} from '../components';
// Database
import {
  testUsersData,
  testNarratorsData,
  testBookingData,
  citiesData,
  specialtiesData
} from '../../../../database';


const regionData = [
  { name: 'Norte', narrators: 15, users: 30 },
  { name: 'Centro', narrators: 25, users: 40 },
  { name: 'Sur', narrators: 20, users: 35 }
];

const tagData = [
  { name: 'Tag1', narrators: 10 },
  { name: 'Tag2', narrators: 15 },
  { name: 'Tag3', narrators: 20 }
];

const regionTagData = [
  { region: 'Norte', tags: 5 },
  { region: 'Centro', tags: 8 },
  { region: 'Sur', tags: 6 },
];

const reservationData = [
  { status: 'Pendiente', count: 15 },
  { status: 'Pagada', count: 25 }
];

export const DashboardView = () => {
  return (
    <DashboardPaper pageTitle='Estadísticas Generales'>
      { /* Ragion Graph */ }
      <DashboardRegionGraph />

      <Grid
        item
        xs={ 12 }
        md={ 6 }
      >
        <Typography
          variant='h4'
          textAlign='center'
          mb={ 2 }
        >
          Locutores por Tag
        </Typography>

        <DashboardTagsPieGraph />
      </Grid>
    </DashboardPaper>
  );
};

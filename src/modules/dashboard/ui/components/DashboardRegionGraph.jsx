// Material UI
import {
  Grid,
  Typography
} from '@mui/material';
// Recharts
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';
// Database
import {
  testNarratorsData,
  testUsersData,
  citiesData
} from '../../../../database';

export const DashboardRegionGraph = () => {
  const regionData = citiesData.map( city => ({
    name: city,
    narrators: 0,
    users: 0
  }));

  testNarratorsData.forEach( narrator => {
    const cityIndex = citiesData.indexOf( narrator.city );
    if ( cityIndex !== -1 ) {
      regionData[ cityIndex ].narrators += 1;
    }
  });

  testUsersData.forEach( user => {
    const cityIndex = citiesData.indexOf( user.city );
    if ( cityIndex !== -1 ) {
      regionData[cityIndex].users += 1;
    }
  });

  return (
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
        Locutores y Usuarios por Región
      </Typography>

      <BarChart
        width={ 400 }
        height={ 300 }
        data={ regionData }
      >
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey='narrators'
          fill='#8887D8'
        />
        <Bar
          dataKey='users'
          fill='#82CA9D'
        />
      </BarChart>
    </Grid>
  );
}

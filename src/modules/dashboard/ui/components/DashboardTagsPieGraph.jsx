import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';
import {
  testNarratorsData,
  specialtiesData
} from '../../../../database';

export const DashboardTagsPieGraph = () => {
  const narratorsBySpecialty = {};

  specialtiesData.forEach( ( specialty ) => {
    narratorsBySpecialty[specialty] = 0;
  });

  testNarratorsData.forEach( ( narrator ) => {
    narratorsBySpecialty[narrator.speciality]++;
  });

  const tagData = specialtiesData.map( (specialty) => ({
    name: specialty,
    narrators: narratorsBySpecialty[specialty]
  }));

  return (
    <PieChart
      width={ 400 }
      height={ 300 }
    >
      <Pie
        data={ tagData }
        dataKey='narrators'
        nameKey='name'
        cx='50%'
        cy='50%'
        outerRadius={ 80 }
      >
        {
          tagData.map( ( entry, index ) => (
            <Cell
              key={ `cell-${index}` }
              fill={ `#${ Math.floor( Math.random() * 16777215 ).toString( 16 ) }` }
            />
          ))
        }
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

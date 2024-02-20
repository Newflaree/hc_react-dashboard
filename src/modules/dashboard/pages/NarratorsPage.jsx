// React Router Dom
import { useNavigate } from 'react-router-dom';
// Layouts
import { DashboardLayout } from '../ui/layouts';
// Views
import { NarratorsView } from '../ui/views';


export const NarratorsPage = () => {
  const navigate = useNavigate();

  const handleNavigate = ( to ) => {
    navigate( to );
  }

  return (
    <DashboardLayout>
      <NarratorsView
        navigation={ handleNavigate }
      />
    </DashboardLayout>
  );
}

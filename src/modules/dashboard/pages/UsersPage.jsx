// Layouts
import { DashboardLayout } from '../ui/layouts';
// Views
import { UsersView } from '../ui/views';


export const UsersPage = () => {
  return (
    <DashboardLayout>
      <UsersView />
    </DashboardLayout>
  );
}

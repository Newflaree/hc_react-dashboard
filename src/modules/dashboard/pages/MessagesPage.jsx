//
import { useSwal } from '../hooks';
// Layouts
import { DashboardLayout } from '../ui/layouts';
// Views
import { MessagesView } from '../ui/views';


export const MessagesPage = () => {
  const { sendEmailSwal } = useSwal();

  return (
    <DashboardLayout>
      <MessagesView swals={[ sendEmailSwal ]}/>
    </DashboardLayout>
  );
}

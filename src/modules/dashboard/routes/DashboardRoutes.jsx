// React Router DOM
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Pages
import {
  BookingsPage,
  DashboardPage,
  MessagesPage,
  NarratorsPage,
  NarratorPage,
  TagsPage,
  UserPage,
  UsersPage
} from '../pages';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/'              element={ <DashboardPage /> } />
      <Route path='/bookings'      element={ <BookingsPage /> } />
      <Route path='/messages'      element={ <MessagesPage /> } />
      <Route path='/narrators'     element={ <NarratorsPage /> } />
      <Route path='/narrators/:id' element={ <NarratorPage /> } />
      <Route path='/tags'          element={ <TagsPage /> } />
      <Route path='/users'         element={ <UsersPage /> } />
      <Route path='/users/:id'     element={ <UserPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
}

// Material UI
import { Box } from '@mui/material';
// Components
import {
  LayoutBackground,
  LayoutSidebar
} from '../components';


export const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <LayoutBackground>
        <LayoutSidebar children={ children } />
      </LayoutBackground>
    </Box>
  );
}

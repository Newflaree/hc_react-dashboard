// Material UI
import {
  Box,
  CircularProgress
} from '@mui/material';

export const LoadingPage = () => {
  return (
    <Box
      height='100vh'
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      position='absolute'
    >
      <CircularProgress />
    </Box>
  );
}

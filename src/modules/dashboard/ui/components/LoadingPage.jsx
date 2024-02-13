import { Box, CircularProgress } from '@mui/material';

export const LoadingPage = () => {
  return (
    <Box
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <CircularProgress />
    </Box>
  );
}

/* eslint-disable no-unused-vars */
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Progress() {
  return (
    <Box sx={{ display: 'flex', width: 650,
    height: 300, }}>
      <CircularProgress />
    </Box>
  );
}

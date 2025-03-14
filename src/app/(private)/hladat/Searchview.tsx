// src/views/private/SearchView.jsx

import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

// SearchView Component
const SearchView = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Search Page
      </Typography>
      <TextField label="Search" fullWidth variant="outlined" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Search
      </Button>
    </div>
  );
};

export default SearchView;

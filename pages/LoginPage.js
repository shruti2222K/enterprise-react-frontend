import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function LoginPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login Page</Typography>
      <Typography variant="body1" gutterBottom>
        Please log in to access the expense management system.
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary">Login</Button>
    </Container>
  );
}

export default LoginPage;
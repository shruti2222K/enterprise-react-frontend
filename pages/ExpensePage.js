import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function ExpensePage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Expense Page</Typography>
      <Typography variant="body1" gutterBottom>
        This page allows users to add and manage their expenses.
      </Typography>
      <TextField
        label="Expense Name"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Amount"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary">Add Expense</Button>
    </Container>
  );
}

export default ExpensePage;
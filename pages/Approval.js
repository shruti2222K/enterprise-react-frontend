import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Approval() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Approval Page</Typography>
      <Typography variant="body1" gutterBottom>
        This page is used to manage approvals for expense requests.
      </Typography>
      <Button variant="contained" color="primary">Approve</Button>
      <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>Reject</Button>
    </Container>
  );
}

export default Approval;
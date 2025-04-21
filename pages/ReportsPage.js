import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function ReportsPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Reports Page</Typography>
      <Typography variant="body1" gutterBottom>
        View detailed reports of expenses and approvals.
      </Typography>
      <Button variant="contained" color="primary">Download Report</Button>
    </Container>
  );
}

export default ReportsPage;
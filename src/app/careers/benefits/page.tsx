

import { Box, Typography, Container } from "@mui/material";

export default function BenefitsPage() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Employee Benefits
      </Typography>

      <Typography variant="h6">
        Learn about our compensation, health plans, and employee perks.
      </Typography>
    </Container>
  );
}

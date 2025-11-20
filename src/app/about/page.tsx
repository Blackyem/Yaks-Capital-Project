

import { Box, Typography, Container } from "@mui/material";


export default function AboutPage() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        About
      </Typography>

      <Typography variant="h6">
        We provide comprehensive financial statement services to help businesses
      </Typography>
    </Container>

  );
}
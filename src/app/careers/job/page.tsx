



import { Box, Typography, Container } from "@mui/material";

export default function JobsPage() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Job Openings
      </Typography>

      <Typography variant="h6">
        Explore current opportunities and join our growing team.
      </Typography>
    </Container>
  );
}

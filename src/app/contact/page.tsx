



import { Box, Typography, Container } from "@mui/material";


export default function AboutPage() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Contact
      </Typography>

      <Typography variant="h6">
        Email: you@domain.com
              <p>Phone: +1 (555) 123-4567</p>

      </Typography>
    </Container>

  );
}



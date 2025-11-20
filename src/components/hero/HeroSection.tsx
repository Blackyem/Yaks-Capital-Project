import { Box, Container, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "45vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7f0000",
        color: "white",
        textAlign: "center",

        overflowX: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{ px: 0 }}>
        <Typography variant="h2" mb={2}>
          Financial Statements
        </Typography>

        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          "Welcome to Renaissance — your trusted partner in financial clarity
          and professional reporting. We are committed to transforming complex
          data into meaningful insights that empower your decisions, strengthen
          your strategy, and elevate the way you understand your business."
        </Typography>
      </Container>
    </Box>
  );
}

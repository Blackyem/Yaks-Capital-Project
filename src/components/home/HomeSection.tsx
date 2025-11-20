"use client";

import { Box, Container, Typography, Stack } from "@mui/material";

export default function HomeSection() {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 4,
        pb: 6,

        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
          alignItems="flex-center"
          sx={{
            maxWidth: "900px",
            mx: "auto",
            pt: 4,
          }}
        >
          {/* LEFT COLUMN */}
          <Box sx={{ width: "300px" }}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ mb: 1 }}
            >
              Long Island
            </Typography>

            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1.2 }}>
              Renaissance Technologies LLC
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1.2 }}>
              600 Route 25A
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1.2 }}>
              East Setauket, New York 11733
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1.2 }}>
              631 444 7000
            </Typography>
          </Box>

          {/* RIGHT COLUMN */}
          <Box sx={{ width: "300px" }}>
            <Typography
              variant="h5"
              color="primary"
              sx={{  mb: 1 }}
            >
              New York
            </Typography>

            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1 }}>
              Renaissance Technologies LLC
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1 }}>
              Renaissance Institutional Management LLC
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1 }}>
              800 Third Avenue
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1 }}>
              New York, New York 10022
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "17px", mt: 1 }}>
              212 829 4460
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

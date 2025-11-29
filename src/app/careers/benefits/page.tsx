"use client";

import { Box, Typography, Button } from "@mui/material";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "70px",
          fontWeight: 700,
          color: "#8B1E1E",
          mb: 2,
        }}
      >
        404
      </Typography>

      <Typography sx={{ fontSize: "25px", mb: 2 }}>
        This page is not available
      </Typography>

      <Typography sx={{ fontSize: "18px", maxWidth: "600px", mb: 4 }}>
        The page you're trying to access doesn’t exist or may have been moved.
        Please use the links below to continue browsing the site.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          component={NextLink}
          href="/"
          variant="contained"
          sx={{ bgcolor: "#8B1E1E", ":hover": { bgcolor: "#6f1818" } }}
        >
          Go to Home
        </Button>

        <Button
          component={NextLink}
          href="/careers/job"
          variant="outlined"
          sx={{
            borderColor: "#8B1E1E",
            color: "#8B1E1E",
            ":hover": { borderColor: "#973232ff", color: "#fff", backgroundColor: "#8B1E1E", },
          }}
        >
          View Jobs
        </Button>
      </Box>
    </Box>
  );
}



  
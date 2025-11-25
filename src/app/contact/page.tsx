"use client";

import { Box, Typography, Container, TextField, MenuItem, Button } from "@mui/material";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Container sx={{ py: 10, maxWidth: "900px" }}>
      {/* Page Title */}
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Contact
      </Typography>

      {/* Top Notices */}
      <Typography sx={{ fontSize: "17px", mb: 2 }}>
        For career-related inquiries, please visit our{" "}
        <Link href="/jobs" style={{ color: "#8B1E1E", fontWeight: 600 }}>
          Jobs
        </Link>{" "}
        page.A
      </Typography>

      <Typography sx={{ fontSize: "17px", mb: 3 }}>
        For all other inquiries, please submit the form below.
      </Typography>

      <Typography sx={{ fontSize: "15.5px", mb: 5, lineHeight: 1.6 }}>
        <strong>www.rentec.com</strong> and <strong>www.renfund.com</strong> are the only official Renaissance
        Technologies LLC websites. Neither Renaissance Technologies nor any of its affiliates operates any
        other publicly available website. Other websites purporting to be associated with our firm or our
        funds are not legitimate.
      </Typography>

      {/* Contact Form */}
      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

        {/* Name */}
        <TextField
          label="Name *"
          required
          fullWidth
          sx={{ bgcolor: "#fff" }}
        />

        {/* Company */}
        <TextField
          label="Company"
          fullWidth
          sx={{ bgcolor: "#fff" }}
        />

        {/* Email */}
        <TextField
          label="Email *"
          required
          type="email"
          fullWidth
          sx={{ bgcolor: "#fff" }}
        />

        {/* Phone */}
        <TextField
          label="Phone"
          fullWidth
          sx={{ bgcolor: "#fff" }}
        />

        {/* Reason for Contact */}
        <TextField
          label="Reason for Contact *"
          select
          fullWidth
          required
          sx={{ bgcolor: "#fff" }}
        >
          <MenuItem value="general">General Inquiry</MenuItem>
          <MenuItem value="business">Business Inquiry</MenuItem>
          <MenuItem value="media">Media Request</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>

        {/* Message */}
        <TextField
          label="Message *"
          multiline
          minRows={6}
          required
          fullWidth
          sx={{ bgcolor: "#fff" }}
        />

        {/* Captcha */}
        <TextField
          label="What is the sum of 2 and 4? *"
          required
          fullWidth
          sx={{ bgcolor: "#fff" }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          sx={{
            width: "140px",
            mt: 2,
            bgcolor: "#8B1E1E",
            fontSize: "16px",
            textTransform: "none",
            py: 1,
            ":hover": { bgcolor: "#6f1919" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

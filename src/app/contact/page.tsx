"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";

import { useState, useEffect } from "react";

export default function ContactPage() {
  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    reason: "",
    answer: "",
  });

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setNum1(a);
    setNum2(b);
    setCorrectAnswer(a + b);
  }, []);

  // Only digits for phone
  const handlePhoneChange = (e: any) => {
    const numeric = e.target.value.replace(/\D/g, "");
    setPhone(numeric);
  };

  // Submit handler with inline validation
  const handleSubmit = () => {
    const newErrors = {
      fullName: "",
      email: "",
      reason: "",
      answer: "",
    };

    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";
    if (!reason) newErrors.reason = "Select a reason.";
    if (parseInt(answer, 10) !== correctAnswer)
      newErrors.answer = "Incorrect answer.";

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => msg !== "");
    if (hasError) return;

    alert("Message submitted successfully!");

    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setReason("");
    setAnswer("");

    // Regenerate math challenge
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setNum1(a);
    setNum2(b);
    setCorrectAnswer(a + b);
  };

  // Cancel button resets form
  const handleCancel = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setReason("");
    setAnswer("");
    setErrors({
      fullName: "",
      email: "",
      reason: "",
      answer: "",
    });
  };

  // Common small label style
  const smallLabel = {
    "& .MuiInputBase-root": { height: 40 },
    "& .MuiInputLabel-root": { fontSize: "13px" },
  };

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={6}>
          {/* LEFT — FORM */}
          <Grid size={{ sm: 7 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Send a Message
              </Typography>

              <Grid container spacing={3}>
                {/* Full Name */}
                <Grid size={{ sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    size="small"
                    value={fullName}
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                    sx={smallLabel}
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    size="small"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={smallLabel}
                  />
                </Grid>

                {/* Phone */}
                <Grid size={{ sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    size="small"
                    value={phone}
                    onChange={handlePhoneChange}
                    inputProps={{ inputMode: "numeric" }}
                    sx={smallLabel}
                  />
                </Grid>

                {/* Company */}
                <Grid size={{ sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Company"
                    size="small"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    sx={smallLabel}
                  />
                </Grid>

                {/* Math Challenge */}
                <Grid size={{ sm: 6 }}>
                  <TextField
                    fullWidth
                    size="small"
                    label={`What is ${num1} + ${num2}?`}
                    value={answer}
                    required
                    onChange={(e) =>
                      setAnswer(e.target.value.replace(/\D/g, ""))
                    }
                    error={!!errors.answer}
                    helperText={errors.answer}
                    sx={smallLabel}
                  />
                </Grid>

                {/* Reason */}
                <Grid size={{ sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    select
                    label="Reason for Contact"
                    variant="outlined"
                    size="small"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    error={!!errors.reason}
                    helperText={errors.reason}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: 40,
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "13px",
                      },
                    }}
                  >
                    <MenuItem value="">Select-:</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Investment">Investment</MenuItem>
                    <MenuItem value="Partnership">Partnership</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>

                {/* Message */}
                <Grid size={{ sm: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    InputLabelProps={{ sx: { fontSize: "13px" } }}
                  />
                </Grid>

                {/* CENTERED BUTTONS */}
                <Grid
                  size={{ sm: 12 }}
                  sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                >
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Button
                      size="small"
                      sx={{
                        backgroundColor: "#c62828",
                        "&:hover": {
                          backgroundColor: "#fff",
                          border: "1px solid #c62828",
                          color: "#c62828",
                        },
                        color: "white",
                        px: 3,
                        borderRadius: "10px",
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>

                    <Button
                      size="small"
                      sx={{
                        backgroundColor: "#c62828",
                        "&:hover": {
                          backgroundColor: "#fff",
                          border: "1px solid #c62828",
                          color: "#c62828",
                        },
                        color: "white",
                        px: 3,
                        borderRadius: "10px",
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* RIGHT — CONTACT INFO */}
          <Grid size={{ sm: 5 }}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Our Office
              </Typography>

              <Typography sx={{ mb: 3, fontSize: "1.05rem" }}>
                Evest Professional Services 4th Floor, Kings Court 3 Keystone
                Bank Crescent Off Adeyemo Alakija Street Victoria Island, Lagos
              </Typography>

              <Typography sx={{ fontWeight: 600 }}>Phone:</Typography>
              <Typography sx={{ mb: 3 }}>+234 806 123 4567</Typography>

              <Typography sx={{ fontWeight: 600 }}>Email:</Typography>
              <Typography sx={{ mb: 3 }}>support@renaissance.com</Typography>

              <Typography sx={{ fontWeight: 600 }}>Opening Hours</Typography>
              <Typography>Mon – Fri: 8:00am – 6:00pm</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

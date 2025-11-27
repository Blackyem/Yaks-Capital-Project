"use client";

import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        pt: 8,
        backgroundColor: "#c1121f",
        animation: "fadeBg 2.5s forwards",
        "@keyframes fadeBg": {
          "0%": {
            backgroundColor: "#c1121f",
            backgroundImage: "none",
          },
          "100%": {
            backgroundColor: "#c1121f",
            backgroundImage: "url('/login-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
        },
      }}
    >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              backgroundColor: "rgba(255,255,255,0.98)",
              borderRadius: 0,
            }}
          >
            {/* Login Form Section */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mb: 5, pb: 3 }}
            >
              {/* Email Field */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 1,
                    fontWeight: 500,
                    color: "#000",
                  }}
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#c1121f",
                        borderWidth: 2,
                      },
                      "&:hover fieldset": {
                        borderColor: "#c1121f",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#c1121f",
                      },
                    },
                  }}
                />
              </Box>

              {/* Password Field */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 1,
                    fontWeight: 500,
                    color: "#000",
                  }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  required
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword}
                          edge="end"
                          sx={{ color: "#000" }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#999",
                        borderWidth: 1,
                      },
                      "&:hover fieldset": {
                        borderColor: "#666",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#c1121f",
                      },
                    },
                  }}
                />
              </Box>

              {/* Login Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  bgcolor: "#c1121f",
                  "&:hover": { bgcolor: "#9b0e19" },
                  borderRadius: 1,
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Log In
              </Button>

              {/* Forgot Password Link */}
              <Link
                href="#"
                underline="always"
                sx={{
                  color: "#999",
                  fontSize: "14px",
                  "&:hover": {
                    color: "#666",
                  },
                }}
              >
                Forgot password
              </Link>
            </Box>

            {/* Information Section */}
            <Box sx={{ pt: 3, borderTop: "1px solid #e0e0e0" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#000",
                }}
              >
                This Renaissance Technologies website (www.renfund.com) is by
                invitation only.
              </Typography>

              <Box
                component="ul"
                sx={{ pl: 2.5, m: 0, mb: 2, listStyleType: "disc" }}
              >
                <Typography
                  component="li"
                  variant="body2"
                  sx={{ mb: 1.5, color: "#333" }}
                >
                  If you have received an invitation, you must first create a
                  login by following the link provided in the email sent to you.
                </Typography>
                <Typography
                  component="li"
                  variant="body2"
                  sx={{ mb: 2, color: "#333" }}
                >
                  If you have not received an invitation, and think you should
                  have, please contact your Renaissance representative.
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: "#333", lineHeight: 1.6 }}>
                <Link
                  href="https://www.rentec.com"
                  target="_blank"
                  underline="always"
                  sx={{ color: "#000", fontWeight: 500 }}
                >
                  www.rentec.com
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.renfund.com"
                  target="_blank"
                  underline="always"
                  sx={{ color: "#000", fontWeight: 500 }}
                >
                  www.renfund.com
                </Link>{" "}
                are the only official Renaissance Technologies LLC websites.
                Neither Renaissance Technologies nor any of its affiliates
                operates any other publicly available website. Other websites
                purporting to be associated with our firm or our funds are not
                legitimate.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
  );
}
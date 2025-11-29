"use client";

import { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "/Background1.webp",
    "/Background2.webp",
    "/Background3.webp",
    "/Background4.webp",
    "/Background5.webp",
    "/Background6.webp",
    "/Background7.webp",
    "/Background8.webp",
    "/Background9.webp",
  ];

  const INTERVAL = 12000; // 12s per image
  const FADE_DURATION = 2000; // 2s fade (smoother)

  // Preload all images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Optimized slideshow logic
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, FADE_DURATION);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bgcolor: "#c1121f",
        overflow: "hidden",
        pt: 15,
        pb: 10,
      }}
    >
      {/* --- OPTIMIZED BACKGROUND CROSSFADE WITH KEN BURNS EFFECT --- */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {/* Current Image */}
        <Box
          component="img"
          src={images[currentIndex]}
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isTransitioning ? 0 : 1,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            animation: `kenburns ${INTERVAL}ms ease-in-out infinite`,
          }}
        />
        
        {/* Next Image (preloaded for smooth transition) */}
        <Box
          component="img"
          src={images[nextIndex]}
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isTransitioning ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            animation: `kenburns ${INTERVAL}ms ease-in-out infinite`,
          }}
        />
      </Box>

      {/* MAIN LOGIN UI */}
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={24}
          sx={{
            p: { xs: 3, sm: 5 },
            backgroundColor: "rgba(255,255,255,0.98)",
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 0 1px rgba(0,0,0,0.1)",
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 5, pb: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{ mb: 1, fontWeight: 500, color: "#000" }}
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
                    borderRadius: 2,
                    backgroundColor: "#fafafa",
                    transition: "all 0.3s ease",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                      borderWidth: 2,
                    },
                    "&:hover": {
                      backgroundColor: "#fff",
                      "& fieldset": {
                        borderColor: "#c1121f",
                      },
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#fff",
                      boxShadow: "0 0 0 3px rgba(193,18,31,0.1)",
                      "& fieldset": {
                        borderColor: "#c1121f",
                      },
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    py: 1.75,
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{ mb: 1, fontWeight: 500, color: "#000" }}
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
                        sx={{ 
                          color: "#666",
                          "&:hover": {
                            color: "#000",
                            backgroundColor: "rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#fafafa",
                    transition: "all 0.3s ease",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                      borderWidth: 2,
                    },
                    "&:hover": {
                      backgroundColor: "#fff",
                      "& fieldset": {
                        borderColor: "#c1121f",
                      },
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#fff",
                      boxShadow: "0 0 0 3px rgba(193,18,31,0.1)",
                      "& fieldset": {
                        borderColor: "#c1121f",
                      },
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    py: 1.75,
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                bgcolor: "#c1121f",
                "&:hover": { 
                  bgcolor: "#9b0e19",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(193,18,31,0.3)",
                },
                borderRadius: 2,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 600,
                mb: 2,
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(193,18,31,0.2)",
              }}
            >
              Log In
            </Button>

            <Link
              href="#"
              underline="always"
              sx={{
                color: "#999",
                fontSize: "14px",
                "&:hover": { color: "#666" },
              }}
            >
              Forgot password
            </Link>
          </Box>

          {/* Extra Info Section */}
          <Box sx={{ pt: 3, borderTop: "1px solid #e0e0e0" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, mb: 2, color: "#000" }}
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
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* --- KEN BURNS KEYFRAMES --- */}
      <style>
        {`
          @keyframes kenburns {
            0% {
              transform: scale(1) translate(0, 0);
            }
            50% {
              transform: scale(1.05) translate(0.5%, 0.5%);
            }
            100% {
              transform: scale(1) translate(0, 0);
            }
          }
        `}
      </style>
    </Box>
  );
}
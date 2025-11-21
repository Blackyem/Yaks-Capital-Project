"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Link as MUILink,
} from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";
import Image from "next/image";     

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
        height: "100px",
        justifyContent: "center",
        py: 0,
        boxShadow: "0 1px 3.5px rgba(0, 0, 0, 0.33)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT: Logo */}
        <MUILink
          component={NextLink}
          href="/"
          underline="none"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", pl: 2 }}
        >
          <Image
            src="/EVEST1.png"
            alt="Evest Logo"
            width={150}
            height={150}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              fontSize: "32px",
              letterSpacing: "0.5px",
            }}
          >
                    </Typography>
        </MUILink>

        {/* RIGHT SIDE LINKS */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", pr: 3 }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MUILink
              component={NextLink}
              href="/about"
              underline="none"
              color="inherit"
              sx={{ cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 400,
                  "&:hover": { color: "#7f0000" },
                }}
              >
                About
              </Typography>
            </MUILink>

            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: 400,
                "&:hover": { color: "#7f0000" },
              }}
              onClick={handleOpen}
            >
              Careers
            </Typography>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <MenuItem
                onClick={handleClose}
                component={NextLink}
                href="/careers/job"
              >
                Jobs
              </MenuItem>

              <MenuItem
                onClick={handleClose}
                component={NextLink}
                href="/careers/benefits"
              >
                Benefits
              </MenuItem>
            </Menu>

            {/* CONTACT */}
            <MUILink
              component={NextLink}
              href="/contact"
              underline="none"
              color="inherit"
              sx={{ cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 400,
                  "&:hover": { color: "#7f0000" },
                }}
              >
                Contact
              </Typography>
            </MUILink>
          </Box>

          {/* LOGIN BUTTON */}
          <MUILink
            component={NextLink}
            href="/login"
            underline="none"
            color="inherit"
          >
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#c62828",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #c62828",
                  color: "#c62828",
                },
                color: "white",
                borderRadius: "25px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 600,
                px: 3,
              }}
            >
              Log In
            </Button>
          </MUILink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

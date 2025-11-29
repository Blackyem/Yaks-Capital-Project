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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NextLink from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [careersMobileOpen, setCareersMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCareersMobileToggle = () => {
    setCareersMobileOpen(!careersMobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setCareersMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "black",
          height: { xs: "80px", md: "100px" },
          justifyContent: "center",
          py: 0,
          boxShadow: "0 1px 3.5px rgba(0, 0, 0, 0.33)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center", // center logo on mobile
              md: "space-between", // desktop unchanged
            },
            alignItems: "center",
            px: { xs: 2, sm: 3 },
            position: "relative", // needed to keep menu button in corner
          }}
        >
          {/* LOGO */}
          <MUILink
            component={NextLink}
            href="/"
            underline="none"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* DESKTOP LOGO - Bigger (150x150) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Image
                src="/EVEST1.png"
                alt="Evest Logo"
                width={100}
                height={100}
                priority
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </Box>
            {/* MOBILE LOGO - Smaller (90x90) */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Image
                src="/EVEST1.png"
                alt="Evest Logo"
                width={90}
                height={90}
                priority
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </Box>
          </MUILink>

          {/* DESKTOP NAV LINKS - Hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              {/* ABOUT */}
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

              {/* CAREERS */}
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "17px",
                  fontWeight: 400,
                  color: open ? "#7f0000" : "inherit",
                  borderBottom: open ? "2px solid #7f0000" : "none",
                  pb: open ? "2px" : 0,
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
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: "#c62828",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #c62828",
                    color: "#c62828",
                  },
                  color: "white",
                  borderRadius: "10px",
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

          {/* MOBILE HAMBURGER MENU - Visible on mobile only */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              position: "absolute",
              right: 10,
            }}
          >
            <MenuIcon sx={{ fontSize: 25 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        <Box sx={{ width: 280, pt: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              pb: 2,
            }}
          >
            {/* DRAWER LOGO - Medium size (110x110) */}
            <Image
              src="/EVEST1.png"
              alt="Evest Logo"
              width={90}
              height={90}
              // style={{
              //   width: "auto",
              //   height: "auto",
              // }}
            />
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {/* About */}
            <ListItem disablePadding>
              <ListItemButton
                component={NextLink}
                href="/about"
                onClick={closeMobileMenu}
                sx={{
                  "&:hover": { backgroundColor: "rgba(127, 0, 0, 0.08)" },
                }}
              >
                <ListItemText
                  primary="About"
                  primaryTypographyProps={{
                    fontSize: "17px",
                    fontWeight: 400,
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Careers with Submenu */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleCareersMobileToggle}
                sx={{
                  "&:hover": { backgroundColor: "rgba(127, 0, 0, 0.08)" },
                }}
              >
                <ListItemText
                  primary="Careers"
                  primaryTypographyProps={{
                    fontSize: "17px",
                    fontWeight: 400,
                  }}
                />
                {careersMobileOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={careersMobileOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={NextLink}
                  href="/careers/job"
                  onClick={closeMobileMenu}
                >
                  <ListItemText primary="Jobs" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={NextLink}
                  href="/careers/benefits"
                  onClick={closeMobileMenu}
                >
                  <ListItemText primary="Benefits" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Contact */}
            <ListItem disablePadding>
              <ListItemButton
                component={NextLink}
                href="/contact"
                onClick={closeMobileMenu}
                sx={{
                  "&:hover": { backgroundColor: "rgba(127, 0, 0, 0.08)" },
                }}
              >
                <ListItemText
                  primary="Contact"
                  primaryTypographyProps={{
                    fontSize: "17px",
                    fontWeight: 400,
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Login Button */}
            <ListItem sx={{ px: 2, pt: 2 }}>
              <Button
                component={NextLink}
                href="/login"
                fullWidth
                variant="outlined"
                onClick={closeMobileMenu}
                sx={{
                  backgroundColor: "#c62828",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #c62828",
                    color: "#c62828",
                  },
                  color: "white",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  py: 1.5,
                }}
              >
                Log In
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

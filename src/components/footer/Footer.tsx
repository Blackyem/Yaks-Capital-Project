"use client";

import {
  Box,
  Container,
  Divider,
  Typography,
  Link as MUILink,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#000", color: "white", mt: 15, pb: 1 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            pb: 0,
          }}
        >
          <MUILink
            component={NextLink}
            href="/"
            underline="none"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src="/EVEST4.png"
              alt="Company Logo"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </MUILink>
        </Box>
        <Divider
          sx={{ bgcolor: "rgba(255,255,255,0.2)", height: "1px", mt: 0 }}
        />


        {/* Links and copyright section - improved layout balance */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            mt: 5,
          }}
        >
          {/* Left section: Links with pipe separators */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <MUILink
              href="#"
              underline="hover"
              sx={{ color: "white", fontSize: "0.95rem", opacity: 0.9 }}
            >
              Privacy Policies
            </MUILink>
            <Typography sx={{ color: "white", opacity: 0.6 }}>|</Typography>

            <MUILink
              href="#"
              underline="hover"
              sx={{ color: "white", fontSize: "0.95rem", opacity: 0.9 }}
            >
              FINRA BrokerCheck
            </MUILink>
            <Typography sx={{ color: "white", opacity: 0.6 }}>|</Typography>

            <MUILink
              href="#"
              underline="hover"
              sx={{ color: "white", fontSize: "0.95rem", opacity: 0.9 }}
            >
              Support
            </MUILink>
          </Box>

          {/* Right section: Copyright */}
          <Typography
            variant="body2"
            sx={{ fontSize: "0.95rem", opacity: 0.9, textAlign: "right" }}
          >
            © 2025 Yaks Capital. All Rights Reserved.
          </Typography>
        </Box>

        {/* Main disclaimer paragraph */}
        <Typography
          variant="body2"
          sx={{
            mb: 4,
            lineHeight: 1.8,
            maxWidth: "90%",
            mx: "auto",
            opacity: 0.85,
            fontSize: "0.95rem",
            textAlign: "center",
          }}
        >
          The materials on this website are for illustration and discussion
          purposes only and do not constitute an offering. An offering may be
          made only by delivery of a confidential offering memorandum to
          appropriate investors. PAST PERFORMANCE IS NO GUARANTEE OF FUTURE
          RESULTS.
        </Typography>

        {/* Additional legal paragraph with links */}
        <Typography
          variant="body2"
          sx={{
            mb: 4,
            lineHeight: 1.8,
            maxWidth: "90%",
            mx: "auto",
            opacity: 0.85,
            fontSize: "0.95rem",
            textAlign: "center",
          }}
        >
          <MUILink
            href="#"
            underline="always"
            sx={{
              color: "white",
              textDecorationColor: "white",
              opacity: 0.85,
              "&:hover": { opacity: 0.7 },
            }}
          >
            www.rentec.com
          </MUILink>
          {" and "}
          <MUILink
            href="#"
            underline="always"
            sx={{
              color: "white",
              textDecorationColor: "white",
              opacity: 0.85,
              "&:hover": { opacity: 0.7 },
            }}
          >
            www.renfund.com
          </MUILink>
          are the only official Renaissance Technologies LLC websites. Neither
          Renaissance Technologies nor any of its affiliates operates any other
          publicly available website. Other websites purporting to be associated
          with our firm or our funds are not legitimate.
        </Typography>

        {/* Badge at bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
            mb: 2,
            opacity: 0.9,
          }}
        >
          <Image src="/Corporate.jpg" width={65} height={40} alt="SBAI" />
        </Box>
      </Container>
    </Box>
  );
}

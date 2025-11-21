import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ width: "100%", pl: 6, pr: 0, py: 7 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "950px",
        }}
      >
        <Typography sx={{ fontSize: "18px", lineHeight: 1.2 }}>
          Founded in 1982
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Registered with the SEC, NFA, and CFTC
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Significant employee investment in the funds we manage
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Average tenure of more than 14 years across our approximately 300
          employees
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Intellectually vibrant culture of collaboration, discipline, critical
          analysis, and intense research
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          90 PhDs in mathematics, physics, computer science, and related fields
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          A MacArthur Fellow, National Academy of Sciences members, and many
          authors of widely cited scientific papers
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          On-the-job training in quantitative portfolio management
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Decades of experience in developing and managing proprietary
          quantitative trading strategies
        </Typography>

        <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Uniform data-driven approach applied across all funds
        </Typography>
      </Box>
    </Box>
  );
}

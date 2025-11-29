import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        width: "100%",
        pl: { xs: 2, sm: 3, md: 6 },   // only mobile changed
        pr: { xs: 2, sm: 3, md: 0 },   // only mobile changed
        py: { xs: 4, sm: 5, md: 7 },   // desktop unchanged
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "950px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.35, sm: 1.45, md: 1.2 }, // desktop unchanged
          }}
        >
          Founded in 1982
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          Registered with the SEC, NFA, and CFTC
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          Significant employee investment in the funds we manage
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          Average tenure of more than 14 years across our approximately 300 employees
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          Intellectually vibrant culture of collaboration, discipline, critical analysis, and intense research
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          90 PhDs in mathematics, physics, computer science, and related fields
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          A MacArthur Fellow, National Academy of Sciences members, and many authors of widely cited scientific papers
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          On-the-job training in quantitative portfolio management
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          Decades of experience in developing and managing proprietary quantitative trading strategies
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "17px", md: "18px" },
            lineHeight: { xs: 1.45, sm: 1.5, md: 1.6 },
          }}
        >
          Uniform data-driven approach applied across all funds
        </Typography>
      </Box>
    </Box>
  );
}

import { Box, Typography, Divider } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function JobsPage() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",
        px: { xs: 2, sm: 4, md: 10, lg: 20 }, // responsive padding
        pt: 5,
        pb: 10,
      }}
    >
      {/* Category: Facilities */}
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          mt: 4,
          ml: { xs: 0, md: 3 },
        }}
      >
        Facilities
      </Typography>

      <Divider sx={{ mb: 2, borderColor: "#000" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 1, sm: 0 },
          mb: 8,
          ml: { xs: 0, md: 3 },
          fontSize: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontSize: { xs: "16px", sm: "18px" } }}>
            Data Center HVAC/Cooling Specialist
          </Typography>
          <ArrowForward sx={{ fontSize: { xs: "12px", md: "14px" } }} />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "17px" },
            whiteSpace: { xs: "normal", sm: "nowrap" },
            mr: { xs: 0, sm: 4 },
          }}
        >
          East Setauket, NY
        </Typography>
      </Box>

      {/* Category: Programming */}
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          ml: { xs: 0, md: 3 },
        }}
      >
        Programming
      </Typography>

      <Divider sx={{ mb: 2, borderColor: "#000" }} />

      {[
        { title: "Data Programmer", location: "East Setauket, NY" },
        {
          title: "Financial Infrastructure Programmer",
          location: "New York, NY / East Setauket, NY",
        },
        { title: "Real-Time Trading Programmer", location: "East Setauket, NY" },
        {
          title: "Research Infrastructure Programmer",
          location: "East Setauket, NY",
        },
      ].map((job, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 0 },
            mb: 3,
            ml: { xs: 0, md: 3 },
            mr: { xs: 0, md: 4 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: { xs: "16px", sm: "18px" } }}>
              {job.title}
            </Typography>
            <ArrowForward sx={{ fontSize: { xs: "12px", md: "14px" } }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px" },
              whiteSpace: { xs: "normal", sm: "nowrap" },
              ml: { xs: 0, sm: 4 },
            }}
          >
            {job.location}
          </Typography>
        </Box>
      ))}

      {/* Category: Research */}
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          mt: 6,
          ml: { xs: 0, md: 3 },
        }}
      >
        Research
      </Typography>

      <Divider sx={{ mb: 2, borderColor: "#000" }} />

      {[
        { title: "Research Engineer ", location: "East Setauket, NY" },
        {
          title: "Research Scientist ",
          location: "New York, NY / East Setauket, NY",
        },
      ].map((job, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 0 },
            mb: 3,
            ml: { xs: 0, md: 3 },
            mr: { xs: 0, md: 4 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: { xs: "16px", sm: "18px" } }}>
              {job.title}
            </Typography>
            <ArrowForward sx={{ fontSize: { xs: "12px", md: "15px" } }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "18px" },
              whiteSpace: { xs: "normal", sm: "nowrap" },
              ml: { xs: 0, sm: 4 },
            }}
          >
            {job.location}
          </Typography>
        </Box>
      ))}

      {/* Category: Systems */}
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          mt: 6,
          ml: { xs: 0, md: 3 },
        }}
      >
        Systems
      </Typography>

      <Divider sx={{ mb: 2, borderColor: "#000" }} />

      {[
        { title: "Network Engineer", location: "East Setauket, NY" },
        {
          title: "Systems Administrator ",
          location: "East Setauket, NY",
        },
        {
          title: "Systems Administrator ",
          location: "New York, NY",
        },
      ].map((job, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 0 },
            mb: 3,
            ml: { xs: 0, md: 3 },
            mr: { xs: 0, md: 4 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: { xs: "16px", sm: "18px" } }}>
              {job.title}
            </Typography>
            <ArrowForward sx={{ fontSize: { xs: "12px", md: "15px" } }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "18px" },
              whiteSpace: { xs: "normal", sm: "nowrap" },
              ml: { xs: 0, sm: 4 },
            }}
          >
            {job.location}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

import { Box, Typography, Divider } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function JobsPage() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", pl: 20, pr: 20, pt: 5, pb: 10 }}>
      {/* Category: Facilities */}
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          mt: 4,
          ml: 3,
        }}
      >
        Facilities
      </Typography>

      <Divider sx={{ mb: 2, borderColor: "#000" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 8,
          ml: 3,
          fontSize: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontSize: "18px" }}>Data Center HVAC/Cooling Specialist</Typography>
          <ArrowForward sx={{ fontSize: "14px" }} />
        </Box>

        <Typography sx={{ fontSize: "17px", whiteSpace: "nowrap", mr: 4 }}>East Setauket, NY</Typography>
      </Box>

      {/* Category: Programming */}
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          ml: 3,
          
        }}
      >
        Programming
      </Typography>

      <Divider sx={{ mb: 2, borderColor: "#000" }} />

      {/* Jobs under Programming */}
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
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            ml: 3,
            mr: 4,
            fontSize: "18px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: "18px" }}>{job.title}</Typography>
            <ArrowForward sx={{ fontSize: "1px" }} />
          </Box>

          <Typography sx={{ fontSize: "17px", whiteSpace: "nowrap", ml: 4 }}>{job.location}</Typography>
        </Box>
      ))}

      {/* Category: Research */}
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          mt: 6,
          ml: 3,
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
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            ml: 3,
            mr: 4,
            fontSize: "18px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: "18px" }}>{job.title}</Typography>
            <ArrowForward sx={{ fontSize: "15px" }} />
          </Box>

          <Typography sx={{ fontSize: "18px", whiteSpace: "nowrap", ml: 4 }}>{job.location}</Typography>
        </Box>
      ))}
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 600,
          color: "#8B1E1E",
          mb: 2,
          mt: 6,
          ml: 3,
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
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            ml: 3,
            mr: 4,
            fontSize: "18px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: "18px" }}>{job.title}</Typography>
            <ArrowForward sx={{ fontSize: "15px" }} />
          </Box>

          <Typography sx={{ fontSize: "18px", whiteSpace: "nowrap", ml: 4 }}>{job.location}</Typography>
        </Box>
      ))}
    </Box>
  );
}
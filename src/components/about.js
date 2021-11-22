import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        pt: 2,
      }}
    >
      <Typography variant="h2">This is the About Page</Typography>
    </Box>
  );
};

export default About;

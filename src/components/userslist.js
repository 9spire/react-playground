import React from "react";
import User from "./users";
import { Box, Typography } from "@mui/material";

let number = Math.floor(Math.random() * 4) + 1;

const UsersList = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          border: "1px solid #ccc",
          borderRadius: "5px",
          m: 1,
          p: 1,
          width: "100%",
        }}
      >
        <Typography variant="h2" sx={{ pb: 1 }}>
          Our Team
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            width: "100%",
            justifyContent: "center",
          }}
        >
          {[...Array(number)].map(() => (
            <User key={Math.random()} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UsersList;

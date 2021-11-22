import React from "react";
import List from "./list";
import { Box, Typography } from "@mui/material";

let number = 5;

const Activities = () => {
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
        <Typography variant="h2">Don't be Bored...</Typography>
        <ul>
          {[...Array(number)].map(() => (
            <List key={Math.random()} />
          ))}
        </ul>
      </Box>
    </>
  );
};

export default Activities;

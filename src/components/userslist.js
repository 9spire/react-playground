import React from "react";
import User from "./users";
import { Box } from "@mui/material";

let number = Math.floor(Math.random() * 4) + 1;

const UsersList = () => {
  return (
    <>
      <h3>Our Team</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          width: "95vw",
          maxWidth: "95vw",
        }}
      >
        {[...Array(number)].map(() => (
          <User key={Math.random()} />
        ))}
      </Box>
    </>
  );
};

export default UsersList;

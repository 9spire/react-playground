import React from "react";
import Box from "@mui/material/Box";

import Greeting from "./greeting";
import UsersList from "./userslist";
import Activities from "./activities";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pt: 2,
        }}
      >
        <>
          <Greeting />
          <Activities />
        </>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <UsersList />
      </Box>
    </>
  );
};

export default Home;

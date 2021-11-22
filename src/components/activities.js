import React, { useState, useCallback } from "react";
import ActivitiesList from "./activitiesList";
import { Box, Typography, Button } from "@mui/material";

let number = 5;

const Activities = () => {
  const [, setNewList] = useState();

  const handleButtonClick = useCallback(() => setNewList({}), []);

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
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h2">Don't be Bored...</Typography>
        <ul>
          {[...Array(number)].map(() => (
            <ActivitiesList key={Math.random()} />
          ))}
        </ul>
        <Button variant="contained" onClick={handleButtonClick}>
          Load More Activites
        </Button>
      </Box>
    </>
  );
};

export default Activities;

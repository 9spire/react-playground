import React, { useState } from "react";
import { Button, Input, Box, Typography } from "@mui/material";

const Greeting = () => {
  const [greeting, setGreeting] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState("___");

  const updateText = (event) => {
    setGreeting(event.target.value);
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    const url = "https://api.agify.io?name=" + name;

    const fetchAge = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAge(json.age);
      } catch (error) {
        console.log("error! " + error);
      }
    };
    fetchAge();
  };

  return (
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
      <Typography variant="h1">Hello {greeting}</Typography>
      <Typography variant="h3">You may have {age} years</Typography>
      <Input
        value={greeting}
        placeholder={"Enter your name"}
        type="text"
        onChange={updateText}
        sx={{ my: "2rem" }}
        fullWidth={true}
        variant="outlined"
      />
      <Button variant="outlined" onClick={handleButtonClick}>
        Guess Your Age
      </Button>
    </Box>
  );
};

export default Greeting;

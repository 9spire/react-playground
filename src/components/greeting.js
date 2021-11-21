import React, { useState } from "react";
import Activities from "./activities";
import { Button, Input, Box } from "@mui/material";

const Greeting = () => {
  return <Headline />;
};

const Headline = () => {
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", width: "100%" },
        }}
      >
        <h1>Hello {greeting} </h1>
        <p>Your age is {age}</p>
        <Input
          value={greeting}
          placeholder={"Enter your name"}
          type="text"
          onChange={updateText}
          sx={{ mb: "2rem" }}
          fullWidth={true}
          variant="outlined"
        />
        <Button variant="outlined" onClick={handleButtonClick}>
          Get information
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", width: "100%" },
        }}
      >
        <Activities />
      </Box>
    </>
  );
};

export default Greeting;

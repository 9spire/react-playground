import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Joke = () => {
  const [joke, setJoke] = useState();

  const url =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

  useEffect(() => {
    const getAJoke = async () => {
      const response = await fetch(url);
      const toJson = await response.json();
      setJoke(toJson.joke);
    };
    getAJoke();
  }, []);
  return (
    <>
      <Box
        component="blockquote"
        fontSize="1.25rem"
        marginBottom="1rem"
        border="1px solid #eee"
        borderRadius="5px"
        padding="20px"
        alignContent="center"
      >
        <Box
          component="span"
          marginBottom="0"
          fontWeight="300"
          lineHeight="1.7"
          fontSize="1.25rem"
          fontStyle="italic"
          color="#777777"
        >
          {joke}
        </Box>
      </Box>
    </>
  );
};

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        pt: 2,
      }}
    >
      <>
        <Typography variant="h2">What is this all about?</Typography>
        <Joke />

        <Box component="p" marginBottom="0" lineHeight="1.5" fontSize="1rem">
          In order to be a better developer, it's practice that makes perfect.
          By creating this small, simple site without a tutorial, armed with
          search engines and a day-to-day experience, I seek to be better at my
          job, and have a richer understanding.
        </Box>
        <Box component="p" marginBottom="0" lineHeight="1.5" fontSize="1rem">
          Using Create React App, a router, fetching from free APIs, and heavily
          borrowing from the default Material UI, I am learning to build from
          the blank .js page.
        </Box>
      </>
    </Box>
  );
};

export default About;

import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import List from './list';


const Greeting = () => {
    return <Headline />;
  };
  
const Headline = () => {
    const [greeting, setGreeting] = useState('Type in the Box to Change');

    const updateText = event => {setGreeting(event.target.value)};

    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column' },
          }}
        >
            <h1>{greeting}</h1>
            <Input value={greeting} type="text" onChange={updateText} />
            <List />
        </Box>
    );
  };
  
  export default Greeting;

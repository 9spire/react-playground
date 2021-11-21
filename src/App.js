import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Greeting from './components/greeting';

function App() {
  return (
    <Container>
      <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}>
        <Greeting />
      </Box>
    </Container>
  );
}

export default App;

import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Greeting from "./components/greeting";
import UsersList from "./components/userslist";
import Activities from "./components/activities";

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
    </Container>
  );
}

export default App;

import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Greeting from "./components/greeting";
import UsersList from "./components/userslist";

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Greeting />
      </Box>
      <UsersList />
    </Container>
  );
}

export default App;

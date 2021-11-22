import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "@mui/material/Container";

import Menu from "./components/menu";
import Home from "./components/home";
import About from "./components/about";

const App = () => {
  return (
    <>
      <Menu />
      <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default App;

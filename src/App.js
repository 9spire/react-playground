import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "@mui/material/Container";

import Menu from "./components/menu";
import Home from "./components/home";
import About from "./components/about";

const App = () => {
  return (
    <Router basename="/">
      <>
        <Menu />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </>
    </Router>
  );
};

export default App;

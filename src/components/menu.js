import React from "react";
import { AppBar, Box, Toolbar, Typography, Link as Goto } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Menu() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <Goto underline="hover" color="white">
                  React Playground
                </Goto>
              </Link>
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ display: { xs: "block" }, px: 2 }}
            >
              <Link to="/about">
                <Goto underline="hover" color="white">
                  About
                </Goto>
              </Link>
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ display: { xs: "block" }, px: 2 }}
            >
              <Link to="/game">
                <Goto underline="hover" color="white">
                  Game
                </Goto>
              </Link>
            </Typography>
            <Goto
              href="https://github.com/9spire/react-playground"
              target="_blank"
            >
              <GitHubIcon sx={{ fontSize: 20, color: "white", px: 2 }} />
            </Goto>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

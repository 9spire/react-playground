import React from "react";
import { AppBar, Box, Toolbar, Typography, Link as Goto } from "@mui/material";

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
              <Goto href="/" underline="hover" color="white">
                React Playground
              </Goto>
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ display: { xs: "block" } }}
            >
              <Goto href="about" underline="hover" color="white">
                About
              </Goto>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

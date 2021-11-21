import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";

const User = () => {
  const [users, setUsers] = useState();

  const url = "https://randomuser.me/api/";

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const toJson = await response.json();
      setUsers(toJson.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (users) {
    return (
      <Card sx={{ maxWidth: 345, m: 1 }}>
        <CardMedia
          component="img"
          height="140"
          image={users.picture.large}
          alt={users.name.first}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {users.name.first} {users.name.last}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link underline="hover" href={`mailto:${users.email}`}>
              {users.email}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return "No users found";
  }
};

export default User;

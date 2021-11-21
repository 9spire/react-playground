import React, { useEffect, useState } from "react";

const List = () => {
  const [activity, setActivity] = useState();

  const fetchActivities = async () => {
    try {
      const url = "https://www.boredapi.com/api/activity";
      const response = await fetch(url);
      const toJson = await response.json();
      setActivity(toJson.activity);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return <li key={Math.random()}>{activity}</li>;
};

export default List;

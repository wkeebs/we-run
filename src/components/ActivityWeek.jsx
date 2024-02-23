import React from "react";
import ActivityCard from "./ActivityCard";
import { Stack } from "@mui/material";
import { useState } from "react";

const ActivityWeek = ({ data, startDate }) => {
  const [activities, setActivities] = useState(data.slice(0, 7));

  return (
    <Stack direction="row">
      {activities.map((entry, idx) => {
        return <ActivityCard key={idx} details={entry.details}></ActivityCard>;
      })}
    </Stack>
  );
};

export default ActivityWeek;

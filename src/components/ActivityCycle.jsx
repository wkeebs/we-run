import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import ActivityCard from "./cards/ActivityCard";
import { Box } from "@mui/material";

const ActivityCycle = ({ activities, length }) => {
  const elements = activities.map((activity, idx) => (
    <Grid xs={2}>
      <ActivityCard key={idx} details={activity.details} num={idx + 1} />
    </Grid>
  ));

  return (
    <Grid
      sx={{ width: "100%" }}
      container
      columns={{ xs: length, md: 2 * length }}
    >
      {...elements}
    </Grid>
  );
};

export default ActivityCycle;

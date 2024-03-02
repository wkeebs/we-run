import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import ActivityCard from "./cards/ActivityCard";
import { Activity } from "../App";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export type ActivityCycleProps = {
  activities: Activity[],
  length: number
}

const ActivityCycle: React.FC<ActivityCycleProps> = ({ activities, length }) => {
  const elements = activities.map((activity, idx) => (
    <Grid key={idx} xs={2}>
      <ActivityCard details={activity.details} num={idx + 1} />
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

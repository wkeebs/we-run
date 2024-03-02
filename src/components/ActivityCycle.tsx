import Grid from "@mui/material/Unstable_Grid2";
import React, { ReactElement } from "react";
import ActivityCard from "./cards/ActivityCard";
import { Activity } from "../App";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export type ActivityCycleProps = {
  activities: Activity[],
  length: number,
  swapInArr: (activityOneId: number) => (activityTwoId: number) => void
}

const ActivityCycle: React.FC<ActivityCycleProps> = ({ activities, length, swapInArr }) => {
  const elements = activities.map((activity, idx) => (
    <Grid key={idx} xs={2}>
      <ActivityCard swapWith={() => swapInArr(activity.id)} distance={activity.details.distance} type={activity.details.type} num={idx + 1} />
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

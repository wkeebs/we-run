import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import ActivityCard from "./cards/ActivityCard";
import { Activity } from "../App";

export type ActivityCycleProps = {
  activities: Activity[];
  length: number;
};

const ActivityCycle: React.FC<ActivityCycleProps> = ({
  activities,
  length,
}) => {
  return (
    <Grid
      sx={{ width: "100%" }}
      container
      columns={{ xs: length, md: 2 * length }}
    >
      {...activities.map((activity, idx) => (
        <Grid key={idx} xs={2}>
          <ActivityCard
            distance={activity.details.distance}
            type={activity.details.type}
            num={idx + 1}
            id={activity.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActivityCycle;

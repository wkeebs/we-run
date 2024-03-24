import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import ActivityCard from "./cards/ActivityCard";
import { Activity } from "../App";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';


export type ActivityCycleProps = {
  id: number;
  activities: Activity[];
  length: number;
};

const ActivityCycle: React.FC<ActivityCycleProps> = ({
  id,
  activities,
  length,
}) => {
  // sortable
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
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
    </div>
  );
};

export default ActivityCycle;

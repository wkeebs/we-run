import { CYCLE_LENGTH } from "../data";
import { chunk } from "../utils/arrayOperations";
import { Grid, Stack } from "@mui/material";
import { Activity } from "../App";
import React, { useState } from "react";
import ActivityCard from "./cards/ActivityCard";
import HeaderCard from "./cards/HeaderCard";
import ActivityCycle from "./ActivityCycle";
import { DndContext, closestCorners } from "@dnd-kit/core";

export type ActivityCalendarProps = {
  data: Activity[];
};

const chunkData = (newData: Activity[]) => chunk(newData, CYCLE_LENGTH);

const swapActivities =
  (arr: Activity[][]) => (activityOneId: number) => (activityTwoId: number) => {
    // flatten array
    const flatArr = arr.flat();

    // swap elements
    const activityOneIndex = flatArr.findIndex(
      (elem) => elem.id === activityOneId
    );
    const activityTwoIndex = flatArr.findIndex(
      (elem) => elem.id === activityTwoId
    );

    const newActivities = flatArr.map((current, idx) => {
      if (idx === activityOneIndex) {
        return flatArr[activityTwoIndex];
      }
      if (idx === activityTwoIndex) {
        return flatArr[activityOneIndex];
      }
      return current;
    });

    // re-chunk and set state to new array
    const newState = chunkData(newActivities);
    return [...newState];
  };

const ActivityCalendar: React.FC<ActivityCalendarProps> = ({ data }) => {
  const [activities, setActivities] = useState(data);
  const [chunkedActivities, setChunkedActivities] = useState(
    chunkData(activities)
  );

  return (
    <>
      <DndContext collisionDetection={closestCorners}>
        <Grid container columns={{ xs: 1, sm: CYCLE_LENGTH }}>

            {...activities.map((activity, idx) => (
              <Grid item key={idx} xs={1}>
                <ActivityCard
                  distance={activity.details.distance}
                  type={activity.details.type}
                  num={idx + 1}
                  id={activity.id}
                />
              </Grid>
            ))}
        </Grid>
      </DndContext>

      {/* {chunkedActivities.map((cycle: Activity[], idx: number) => {
        return (
          <Stack
            key={idx}
            direction="row"
            spacing={1}
            sx={{ marginY: "0.25rem", border: "1px solid gray" }}
          >
            <HeaderCard rowNum={idx + 1} />
            <ActivityCycle activities={cycle} length={CYCLE_LENGTH} />
          </Stack>
        );
      })} */}
    </>
  );
};

export default ActivityCalendar;

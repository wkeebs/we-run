import { CYCLE_LENGTH } from "../data";
import { chunk } from "../utils/arrayOperations";
import { Box, Grid, Stack } from "@mui/material";
import { Activity } from "../App";
import React, { useState } from "react";
import ActivityCard from "./cards/ActivityCard";
import HeaderCard from "./cards/HeaderCard";
import ActivityCycle from "./ActivityCycle";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export type ActivityCalendarProps = {
  data: Activity[];
};

const chunkData = (newData: Activity[]) => {
  const chunked = chunk(newData, CYCLE_LENGTH);
  return chunked.map((elem, i) => ({ id: i, data: elem }));
};

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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // const cardGrid = (
  //   <Grid container columns={{ xs: 1, sm: CYCLE_LENGTH }}>
  //     {...activities.map((activity, idx) => (
  //       <Grid item key={idx} xs={1}>
  //         <ActivityCard
  //           distance={activity.details.distance}
  //           type={activity.details.type}
  //           num={idx + 1}
  //           id={activity.id}
  //         />
  //       </Grid>
  //     ))}
  //   </Grid>
  // );

  const cycleStack = chunkedActivities.map(
    (cycle: { id: number; data: Activity[] }, idx: number) => {
      return (
        <div key={cycle.id} id={cycle.id.toLocaleString()}>
          <Stack
            direction="row"
            spacing={1}
            sx={{ marginY: "0.25rem", border: "1px solid gray" }}
          >
            <HeaderCard rowNum={idx + 1} />
            <ActivityCycle
              id={cycle.id}
              activities={cycle.data}
              length={CYCLE_LENGTH}
            />
          </Stack>
        </div>
      );
    }
  );

  return (
    <Box sx={{ margin: 3 }}>
      {/* <DndContext collisionDetection={closestCorners} sensors={sensors}>
        {rearranging ? <SortableContext
          items={activities}
          strategy={horizontalListSortingStrategy}
        >
          {cardGrid}
        </SortableContext> : cardGrid}
      </DndContext> */}
      <DndContext collisionDetection={closestCorners} sensors={sensors}>
        <SortableContext
          items={chunkedActivities}
          strategy={verticalListSortingStrategy}
        >
          {cycleStack}
        </SortableContext>
      </DndContext>
    </Box>
  );

};

export default ActivityCalendar;

import { CYCLE_LENGTH } from "../data";
import { chunk } from "../utils/arrayOperations";
import { Grid, Stack } from "@mui/material";
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

  // drag and drop
  const [activeId, setActiveId] = useState<Activity | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <DndContext collisionDetection={closestCorners} sensors={sensors}>
        <SortableContext
          items={activities}
          strategy={horizontalListSortingStrategy}
        >
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
        </SortableContext>
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

  setActiveId(null);
};

export default ActivityCalendar;

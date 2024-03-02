import { CYCLE_LENGTH } from "../data";
import HeaderCard from "./cards/HeaderCard";
import { chunk } from "../utils/arrayOperations";
import ActivityCycle from "./ActivityCycle";
import { Stack } from "@mui/material";
import { Activity } from "../App";
import React, { useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export type ActivityCalendarProps = {
  data: Activity[];
};

const chunkData = (newData: Activity[]) => chunk(newData, CYCLE_LENGTH);

const ActivityCalendar: React.FC<ActivityCalendarProps> = ({ data }) => {
  const [activities, setActivities] = useState(chunkData(data));

  const swapActivities =
    (arr: Activity[][]) =>
    (activityOneId: number) =>
    (activityTwoId: number) => {
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
      const newState = chunkData(newActivities)
      setActivities([...newState]);
    };

  return (
    <DndProvider backend={HTML5Backend}>
      {activities.map((cycle: Activity[], idx: number) => {
        return (
          <Stack
            key={idx}
            direction="row"
            spacing={1}
            sx={{ marginY: "0.25rem", border: "1px solid gray" }}
          >
            <HeaderCard rowNum={idx + 1} />
            <ActivityCycle
              swapInArr={swapActivities(activities)}
              activities={cycle}
              length={CYCLE_LENGTH}
            />
          </Stack>
        );
      })}
      <button onClick={() => swapActivities(activities)(1)(8)}>Swap</button>
    </DndProvider>
  );
};

export default ActivityCalendar;

import { CYCLE_LENGTH } from "../data";
import HeaderCard from "./cards/HeaderCard";
import { chunk } from "../utils/arrayOperations";
import ActivityCycle from "./ActivityCycle";
import { Stack } from "@mui/material";
import { Activity } from "../App";
import React from "react";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export type ActivityCalendarProps = {
  data: Activity[]
}

const ActivityCalendar: React.FC<ActivityCalendarProps> = ({ data }) => {
  const chunkedArr = chunk(data, CYCLE_LENGTH);

  return (
    <DndProvider backend={HTML5Backend}>
      {chunkedArr.map((elem, idx) => {
        return (
          <Stack
            key={idx}
            direction="row"
            spacing={1}
            sx={{ marginY: "0.25rem", border: "1px solid gray" }}
          >
            <HeaderCard rowNum={idx + 1} />
            <ActivityCycle activities={elem} length={CYCLE_LENGTH} />
          </Stack>
        );
      })}
    </DndProvider>
  );
};

export default ActivityCalendar;

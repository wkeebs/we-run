import React from "react";
import { CYCLE_LENGTH } from "../data";
import Grid from "@mui/material/Unstable_Grid2";
import ActivityCard from "./cards/ActivityCard";
import HeaderCard from "./cards/HeaderCard";
import { chunk } from "../utils/arrayOperations";
import ActivityCycle from "./ActivityCycle";
import { Stack } from "@mui/material";

const ActivityCalendar = ({ data }) => {
  const chunkedArr = chunk(data, CYCLE_LENGTH);

  return (
    <>
      {chunkedArr.map((elem, idx) => {
        return (
          <Stack direction="row" spacing={1}>
            <HeaderCard rowNum={idx + 1} />
            <ActivityCycle activities={elem} length={CYCLE_LENGTH} />
          </Stack>
        );
      })}
    </>
  );
};

export default ActivityCalendar;

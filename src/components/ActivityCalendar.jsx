import React from "react";
import { CYCLE_LENGTH } from "../data";
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
    </>
  );
};

export default ActivityCalendar;

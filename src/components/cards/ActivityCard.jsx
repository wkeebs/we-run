import { Box, createTheme } from "@mui/material";
import BaseCard from "./BaseCard";
import { TYPE_EASY, TYPE_INTERVALS, TYPE_LONG } from "../../data";

const green = "#a5d6a7";
const red = "#ef5350";
const blue = "#64b5f6";

const ActivityCard = ({ details: { distance, type }, num }) => {
  const createTypeElement = () => {
    let colour;
    switch (type) {
      case TYPE_EASY:
        colour = green;
        break;
      case TYPE_INTERVALS:
        colour = red;
        break;
      case TYPE_LONG:
        colour = blue;
        break;

      default:
        colour = "white";
        break;
    }
    return (
      <Box
        sx={{
          background: colour,
          color: "#fff",
          borderRadius: "5px",
          paddingX: "5px",
          width: "max-content",
        }}
      >
        {type}
      </Box>
    );
  };

  return (
    <BaseCard
      title={distance + " km"}
      content={createTypeElement(type)}
      info={num}
    ></BaseCard>
  );
};

export default ActivityCard;

import BaseCard from "./BaseCard";
import { TYPE_EASY, TYPE_INTERVALS, TYPE_LONG } from "../../data";
import { useState } from "react";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import EditActivity from "../EditActivity";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid lightGray",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const green = "#a5d6a7";
const red = "#ef5350";
const blue = "#64b5f6";

const ActivityCard = ({ details: { distance, type }, num }) => {
  const [currentType, setCurrentType] = useState(type);
  const [currentDistance, setCurrentDistance] = useState(distance);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateCard = ({ newDistance, newType }) => {
    setCurrentType(newType);
    setCurrentDistance(newDistance);
    handleClose();
  };

  const createTypeElement = () => {
    let colour;
    switch (currentType) {
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
        {currentType}
      </Box>
    );
  };

  return (
    <>
      <BaseCard
        title={currentDistance + " km"}
        content={createTypeElement(currentType)}
        info={num}
        onClick={handleOpen}
      ></BaseCard>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: Backdrop }}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <EditActivity
              details={{ distance: currentDistance, type: currentType }}
              onSubmit={updateCard}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ActivityCard;

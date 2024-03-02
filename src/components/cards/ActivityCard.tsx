import BaseCard from "./BaseCard";
import React, { useState } from "react";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import EditActivity from "../EditActivity";
import { RUN_TYPE } from "../../data";
import { useDrag } from "react-dnd";

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

export enum COLOUR {
  GREEN = "#a5d6a7",
  RED = "#ef5350",
  BLUE = "#64b5f6",
}

export type ActivityCardProps = {
  details: {
    distance: number;
    type: RUN_TYPE;
  };
  num: number;
};

export type CardUpdateType = {
  newDistance: number;
  newType: RUN_TYPE;
};

export const DragItemTypes = {
  ACTIVITY: "Activity",
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  details: { distance, type },
  num,
}) => {
  const [currentType, setCurrentType] = useState(type);
  const [currentDistance, setCurrentDistance] = useState(distance);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateCard = ({ newDistance, newType }: CardUpdateType) => {
    setCurrentType(newType);
    setCurrentDistance(newDistance);
    handleClose();
  };

  const createTypeElement = (currentType: RUN_TYPE) => {
    let colour;
    switch (currentType) {
      case RUN_TYPE.EASY:
        colour = COLOUR.GREEN;
        break;
      case RUN_TYPE.INTERVAL:
        colour = COLOUR.RED;
        break;
      case RUN_TYPE.LONG:
        colour = COLOUR.BLUE;
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

  // Drag and Drop Handling
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragItemTypes.ACTIVITY,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}>
      <BaseCard
        title={currentDistance + " km"}
        content={createTypeElement(currentType)}
        info={num.toLocaleString()}
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
    </div>
  );
};

export default ActivityCard;

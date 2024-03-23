import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import { RUN_TYPE } from "../data";
import { CardUpdateType } from "./cards/ActivityCard";
import DistanceInput from "./DistanceInput";

export type EditActivityProps = {
  details: {
    distance: number;
    type: RUN_TYPE;
  };
  onSubmit: (update: CardUpdateType) => void;
};

const EditActivity: React.FC<EditActivityProps> = ({
  details: { distance, type },
  onSubmit,
}) => {
  const [newType, setNewType] = useState(type);
  const [newDistance, setNewDistance] = useState(distance);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <FormControl>
        <InputLabel id="type-select-label">Run Type</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          value={newType}
          label="Run Type"
          onChange={(e) => {
            switch (e.target.value) {
              case RUN_TYPE.EASY:
                setNewType(RUN_TYPE.EASY);
                break;
              case RUN_TYPE.INTERVAL:
                setNewType(RUN_TYPE.INTERVAL);
                break;
              case RUN_TYPE.LONG:
                setNewType(RUN_TYPE.LONG);
                break;
              case RUN_TYPE.REST:
                setNewType(RUN_TYPE.REST);
                break;

              default:
                break;
            }
          }}
        >
          <MenuItem value={RUN_TYPE.EASY}>{RUN_TYPE.EASY}</MenuItem>
          <MenuItem value={RUN_TYPE.INTERVAL}>{RUN_TYPE.INTERVAL}</MenuItem>
          <MenuItem value={RUN_TYPE.LONG}>{RUN_TYPE.LONG}</MenuItem>
          <MenuItem value={RUN_TYPE.REST}>{RUN_TYPE.REST}</MenuItem>
        </Select>
        <DistanceInput onChange={(e) => setNewDistance(Number.parseFloat(e.target.value))} value={newDistance}/>
        {/* <FormControl sx={{ mt: 2 }}>
          <TextField
            type="number"
            label="Distance"
            id="distance-input"
            value={newDistance}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
            onChange={(e) => setNewDistance(Number.parseFloat(e.target.value))}
          />
        </FormControl> */}
      </FormControl>
      <Button
        variant="contained"
        onClick={() => onSubmit({ newDistance: newDistance, newType: newType })}
      >
        Update
      </Button>
    </Box>
  );
};

export default EditActivity;

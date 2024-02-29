import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React, { useState } from "react";

import { TYPE_EASY, TYPE_INTERVALS, TYPE_LONG } from "../data";

const EditActivity = ({ details: { distance, type } }) => {
  const [newType, setNewType] = useState(type);
  const [newDistance, setNewDistance] = useState(distance);

  return (
    <Box>
      <FormControl>
        <InputLabel id="type-select-label">Run Type</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          value={type}
          label="Run Type"
          onChange={(val) => setNewType(val)}
        >
          <MenuItem value={TYPE_EASY}>Easy</MenuItem>
          <MenuItem value={TYPE_INTERVALS}>Intervals</MenuItem>
          <MenuItem value={TYPE_LONG}>Long</MenuItem>
        </Select>

        <FormControl sx={{ mt: 2 }}>
          <TextField
            type="number"
            label="Distance"
            id="distance-input"
            defaultValue={distance}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
            onChange={(val) => setNewDistance(val)}
          />
        </FormControl>
      </FormControl>
    </Box>
  );
};

export default EditActivity;

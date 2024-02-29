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

import { TYPE_EASY, TYPE_INTERVALS, TYPE_LONG } from "../data";

const EditActivity = ({ details: { distance, type }, onSubmit }) => {
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
          onChange={(e) => setNewType(e.target.value)}
        >
          <MenuItem value={TYPE_EASY}>Easy</MenuItem>
          <MenuItem value={TYPE_INTERVALS}>Interval</MenuItem>
          <MenuItem value={TYPE_LONG}>Long</MenuItem>
        </Select>

        <FormControl sx={{ mt: 2 }}>
          <TextField
            type="number"
            label="Distance"
            id="distance-input"
            value={newDistance}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
            onChange={(e) => setNewDistance(e.target.value)}
          />
        </FormControl>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => onSubmit({ newDistance: newDistance, newType: newType })}
      >
        Submit
      </Button>
    </Box>
  );
};

export default EditActivity;

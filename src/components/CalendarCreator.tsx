import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  Paper,
  Slider,
  TextField,
  Typography,
  Button,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import DistanceInput from "./DistanceInput";
import { Label } from "@mui/icons-material";
import InputSlider from "./InputSlider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";

const CalendarCreator = () => {
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>();
  const [alignWithEnd, setAlignWithEnd] = useState<boolean>(true);

  return (
    <>
      <Paper elevation={1} sx={{ paddingY: 3, margin: 3, textAlign: "start" }}>
        <Box sx={{ marginX: 5 }}>
          <FormControl sx={{ width: "100%"}}>
            <FormControl>
              <TextField
                sx={{
                  "& fieldset": { border: "none" },
                  width: "100%",
                }}
                placeholder="My training plan"
                inputProps={{ style: { fontSize: 40 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 40 } }} // font size of input label
              ></TextField>
            </FormControl>
            <FormControl sx={{ margin: 2 }}>
              <Typography variant="subtitle1">Training plan length</Typography>
              <Grid container spacing={1} alignItems={"center"}>
                <Grid item>
                  <InputSlider max={36} />
                </Grid>
                <Grid item>
                  <Typography variant="body2">weeks</Typography>
                </Grid>
              </Grid>
            </FormControl>
            <FormControl sx={{ margin: 2 }}>
              <Grid item>
                <Typography variant="subtitle1">Align plan with a:</Typography>
              </Grid>
              <Grid container spacing={1} alignItems={"center"} marginBottom={1}>
                <Grid item>
                  <Typography variant="caption">Start Date</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    defaultChecked
                    onChange={(e) => setAlignWithEnd(e.target.checked)}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">End Date</Typography>
                </Grid>
              </Grid>

              <Typography variant="subtitle1"></Typography>
              <DatePicker
                sx={{width: "50%"}}
                format="DD/MM/YYYY"
                formatDensity="spacious"
                label={
                  alignWithEnd ? "Finish Date (e.g., race day)" : "Start Date "
                }
              />
            </FormControl>
          </FormControl>
        </Box>
      </Paper>
    </>
  );
};

export default CalendarCreator;

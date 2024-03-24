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
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import DistanceInput from "./DistanceInput";
import { Label } from "@mui/icons-material";
import InputSlider from "./InputSlider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { Activity } from "../App";
import { CYCLE_LENGTH, RUN_TYPE } from "../data";
import ActivityCalendar from "./ActivityCalendar";

const generatePlan = (length: number | undefined): Activity[] => {
  if (length) {
    const output = [...Array(length * CYCLE_LENGTH)].map((u, i) => {
      return {
        id: i,
        details: { distance: 0, type: RUN_TYPE.REST },
      };
    });
    return output;
  }
  return [];
};

const CalendarCreator = () => {
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(12);
  const [alignWithEnd, setAlignWithEnd] = useState<boolean>(true);
  const [date, setDate] = useState<any>();

  const [planCreated, setPlanCreated] = useState<boolean>(false);
  const [trainingPlan, setTrainingPlan] = useState<Activity[]>([]);

  return (
    <>
      <Paper elevation={1} sx={{ paddingY: 3, margin: 3, textAlign: "start" }}>
        <Box sx={{ marginX: 5 }}>
          <FormControl sx={{ width: "100%" }}>
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
              <Typography variant="subtitle1">Length</Typography>
              <Grid container spacing={1} alignItems={"center"}>
                <Grid item>
                  <InputSlider
                    max={36}
                    onChange={(val: number) => {
                      setNumberOfWeeks(val);
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body2">weeks</Typography>
                </Grid>
              </Grid>
            </FormControl>
            <FormControl sx={{ margin: 2 }}>
              <Grid item>
                <Typography variant="subtitle1">Align with</Typography>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems={"center"}
                marginBottom={1}
              >
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
                sx={{ width: "50%", marginTop: 1 }}
                format="DD/MM/YYYY"
                formatDensity="spacious"
                label={
                  alignWithEnd ? "Finish Date (e.g., race day)" : "Start Date "
                }
                onChange={(e) => setDate(e)}
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{ margin: 2 }}
              onClick={() => {
                setPlanCreated(true);
                setTrainingPlan(generatePlan(numberOfWeeks));
              }}
            >
              Create
            </Button>
          </FormControl>
        </Box>
      </Paper>
      {planCreated ? <ActivityCalendar data={trainingPlan} /> : ""}
    </>
  );
};

export default CalendarCreator;

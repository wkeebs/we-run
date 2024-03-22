import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import ActivityCalendar from "./components/ActivityCalendar";
import CalendarCreator from "./components/CalendarCreator";
import { RUN_TYPE } from "./data";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Box,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Fira Sans", "Poppins"].join(","),
  },
});

export type Activity = {
  id: number;
  details: {
    distance: number;
    type: RUN_TYPE;
  };
};

const testData: Activity[] = [
  { id: 1, details: { distance: 5, type: RUN_TYPE.EASY } },
  { id: 2, details: { distance: 10, type: RUN_TYPE.EASY } },
  { id: 3, details: { distance: 7, type: RUN_TYPE.EASY } },
  { id: 4, details: { distance: 20, type: RUN_TYPE.LONG } },
  { id: 5, details: { distance: 21, type: RUN_TYPE.LONG } },
  { id: 6, details: { distance: 22, type: RUN_TYPE.INTERVAL } },
  { id: 7, details: { distance: 23, type: RUN_TYPE.EASY } },
  { id: 8, details: { distance: 24, type: RUN_TYPE.INTERVAL } },
  { id: 9, details: { distance: 7, type: RUN_TYPE.EASY } },
  { id: 10, details: { distance: 20, type: RUN_TYPE.EASY } },
  { id: 11, details: { distance: 21, type: RUN_TYPE.INTERVAL } },
  { id: 12, details: { distance: 22, type: RUN_TYPE.LONG } },
  { id: 13, details: { distance: 23, type: RUN_TYPE.EASY } },
  { id: 14, details: { distance: 24, type: RUN_TYPE.EASY } },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Typography variant="body2" color="text.secondary">
          {"Built by "}
          <GitHubIcon
            sx={{ fontSize: "15px", transform: "translate(0, 3px)" }}
          />{" "}
          <Link color="inherit" href="https://github.com/wkeebs">
            wkeebs
          </Link>{" "}
          {/* {new Date().getFullYear()} */}
        </Typography>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Box padding={2}>
          <CalendarCreator />
          {/* <ActivityCalendar data={testData}></ActivityCalendar> */}
        </Box>
        <Footer />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;

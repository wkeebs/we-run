import "./App.css";
import ActivityCalendar from "./components/ActivityCalendar";
import { RUN_TYPE } from "./data";

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

function App() {
  return (
    <>
      <ActivityCalendar data={testData}></ActivityCalendar>
    </>
  );
}

export default App;
